import { launch } from "jsr:@astral/astral";
import exists from "./exists.ts";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PAGES_SOURCE = "pages";
const OUTPUT_ROOT = "nitrofiles/pages";
const MANIFEST_DIR = ".cache";
const MANIFEST_PATH = `${MANIFEST_DIR}/pages-manifest.json`;

const VIEWPORT_WIDTH = 256;
const VIEWPORT_HEIGHT = 3000;

/**
 * Files and directories whose contents affect the rendering of EVERY page.
 * A change to any of them invalidates all cached output. Entries that don't
 * exist are ignored. Adjust this list to match the Jekyll site's structure:
 * if something outside it can change how pages look, add it here, otherwise
 * stale images can be reused.
 */
const SHARED_INPUTS = [
  "_layouts",
  "_includes",
  "_sass",
  "_data",
  "assets",
  "pages/_ic",
  "_config.yml",
  "Gemfile.lock",
  "deno.ts",
];

const WAIT_UNTIL_VALUES = ["load", "networkidle0", "networkidle2", "none"] as const;
type WaitUntil = (typeof WAIT_UNTIL_VALUES)[number];

// Environment overrides (all optional):
//   CONCURRENCY   number of parallel tabs (default: CPU count, memory-capped)
//   WAIT_UNTIL    load | networkidle0 | networkidle2 | none (default: load)
//   FORCE_REBUILD 1 to ignore the cache and regenerate every page
//   CHROME_PATH   use an already-installed Chrome instead of downloading one
const WAIT_UNTIL = parseWaitUntil(Deno.env.get("WAIT_UNTIL"));
const FORCE_REBUILD = Deno.env.get("FORCE_REBUILD") === "1";
const CHROME_PATH = Deno.env.get("CHROME_PATH");

// ---------------------------------------------------------------------------
// Types & small helpers
// ---------------------------------------------------------------------------

interface Job {
  dir: string;
  page: string;
  /** e.g. "en/index": used for URLs, output paths and as the manifest key */
  key: string;
  sourcePath: string;
  hash: string;
}

type Manifest = Record<string, string>;
type Browser = Awaited<ReturnType<typeof launch>>;
type Tab = Awaited<ReturnType<Browser["newPage"]>>;

const dedent = (string: string) =>
  string.split("\n").map((line) => line.trim()).join("\n");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function parseWaitUntil(value: string | undefined): WaitUntil {
  if (!value) return "load";
  if ((WAIT_UNTIL_VALUES as readonly string[]).includes(value)) {
    return value as WaitUntil;
  }
  throw new Error(
    `Invalid WAIT_UNTIL "${value}". Expected one of: ${WAIT_UNTIL_VALUES.join(", ")}`,
  );
}

const errorMessage = (e: unknown) => e instanceof Error ? e.message : String(e);

// Hashing & manifest (decides which pages actually need regenerating)
const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, "0")).join("");

async function hashBytes(bytes: Uint8Array | string): Promise<string> {
  const data = typeof bytes === "string" ? new TextEncoder().encode(bytes) : bytes;
  return toHex(await crypto.subtle.digest("SHA-256", data));
}

// Recursively lists files under `path` in a stable order. Missing paths yield [].
async function listFiles(path: string): Promise<string[]> {
  let info: Deno.FileInfo;
  try {
    info = await Deno.stat(path);
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return [];
    throw e;
  }
  if (info.isFile) return [path];

  const names: string[] = [];
  for await (const entry of Deno.readDir(path)) names.push(entry.name);
  names.sort();

  const files: string[] = [];
  for (const name of names) files.push(...await listFiles(`${path}/${name}`));
  return files;
}

async function hashSharedInputs(): Promise<string> {
  const files: string[] = [];
  for (const input of SHARED_INPUTS) files.push(...await listFiles(input));
  files.sort();

  // Sequential on purpose: avoids opening thousands of files at once.
  const lines: string[] = [];
  for (const file of files) {
    lines.push(`${file}:${await hashBytes(await Deno.readFile(file))}`);
  }
  return hashBytes(lines.join("\n"));
}

async function loadManifest(): Promise<Manifest> {
  try {
    return JSON.parse(await Deno.readTextFile(MANIFEST_PATH));
  } catch {
    return {};
  }
}

async function saveManifest(manifest: Manifest) {
  await Deno.mkdir(MANIFEST_DIR, { recursive: true });
  await Deno.writeTextFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
}

// Job discovery
async function collectJobs(sharedHash: string): Promise<Job[]> {
  const jobs: Job[] = [];
  const renderSettings = `${WAIT_UNTIL}|${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}`;

  for await (const folder of Deno.readDir(PAGES_SOURCE)) {
    if (!folder.isDirectory) continue;
    const dir = folder.name;
    if (dir == "_ic") continue;

    await Deno.mkdir(`${OUTPUT_ROOT}/${dir.substring(1)}`, { recursive: true });

    for await (const entry of Deno.readDir(`${PAGES_SOURCE}/${dir}`)) {
      if (entry.isDirectory) continue;
      const page = entry.name;
      const dot = page.indexOf(".");
      const key = `${dir.substring(1)}/${dot === -1 ? page : page.substring(0, dot)}`;
      const sourcePath = `${PAGES_SOURCE}/${dir}/${page}`;
      const sourceHash = await hashBytes(await Deno.readFile(sourcePath));

      jobs.push({
        dir,
        page,
        key,
        sourcePath,
        hash: await hashBytes([sharedHash, key, sourceHash, renderSettings].join("\0")),
      });
    }
  }

  return jobs.sort((a, b) => a.key.localeCompare(b.key));
}

// Deletes generated files for pages that no longer exist in the source.
async function pruneRemoved(previous: Manifest, jobs: Job[]) {
  const current = new Set(jobs.map((job) => job.key));
  for (const key of Object.keys(previous)) {
    if (current.has(key)) continue;
    for (const ext of ["gif", "ini"]) {
      await Deno.remove(`${OUTPUT_ROOT}/${key}.${ext}`).catch(() => {});
    }
    // Only succeeds if the language folder is now empty.
    await Deno.remove(`${OUTPUT_ROOT}/${key.substring(0, key.lastIndexOf("/"))}`).catch(() => {});
    console.log(`Removed stale output for ${key}`);
  }
}

// Mem-footprint of one Chrome tab + ffmpeg, used to cap workers [ROUGH]
const WORKER_MEMORY_BYTES = 400 * 1024 * 1024;

// Workers allowed by free memory, or undefined if it can't be determined.
function memoryCap(): number | undefined {
  try {
    // Querying first avoids an interactive permission prompt when run locally.
    const permission = Deno.permissions.querySync({ name: "sys", kind: "systemMemoryInfo" });
    if (permission.state !== "granted") return undefined;
    return Math.max(1, Math.floor(Deno.systemMemoryInfo().available / WORKER_MEMORY_BYTES));
  } catch {
    return undefined;
  }
}

function pickConcurrency(jobCount: number): number {
  const override = Number(Deno.env.get("CONCURRENCY"));
  let workers: number;
  if (Number.isInteger(override) && override > 0) {
    workers = override;
  } else {
    workers = navigator.hardwareConcurrency || 2;
    const cap = memoryCap();
    if (cap !== undefined) workers = Math.min(workers, cap);
  }
  return Math.max(1, Math.min(workers, jobCount));
}

// Jekyll (local mode only)
async function waitForServer(url: string, hasExited: () => boolean, timeoutMs = 180_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (hasExited()) throw new Error("Jekyll exited before the server became ready");
    try {
      // Any response, even a 404, means the server is up. Jekyll only starts
      // listening once its initial build has finished.
      const response = await fetch(url);
      await response.body?.cancel();
      return;
    } catch {
      await sleep(500);
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
}

// Converting the PNG screenshot to an optimised 256-colour GIF
async function screenshotToGif(png: Uint8Array, gifPath: string) {
  const ffmpeg = new Deno.Command("ffmpeg", {
    args: [
      "-f", "image2pipe",
      "-i", "pipe:0",
      "-filter_complex", "split[a][b];[a]palettegen=max_colors=256[p];[b][p]paletteuse",
      gifPath,
      "-y",
      "-loglevel", "error",
    ],
    stdin: "piped",
    stdout: "null",
    stderr: "piped",
  }).spawn();

  const writer = ffmpeg.stdin.getWriter();
  // If ffmpeg dies early the write fails; the exit status below reports why.
  const written = writer.write(png).then(() => writer.close()).catch(() => {});
  const result = await ffmpeg.output();
  await written;

  if (!result.success) {
    throw new Error(`ffmpeg failed for ${gifPath}: ${new TextDecoder().decode(result.stderr)}`);
  }
}

async function waitForFonts(tab: Tab, timeoutMs = 10_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await tab.evaluate(() => document.fonts.status === "loaded")) return;
    await sleep(50);
  }
}

async function processPage(job: Job, tab: Tab, baseUrl: string) {
  console.log(job.dir, job.page);

  await tab.goto(`${baseUrl}/${job.key}`, { waitUntil: WAIT_UNTIL });
  if (WAIT_UNTIL !== "networkidle0") await waitForFonts(tab);

  const linkPrefix = `${baseUrl}/`;
  const pageEval = await tab.evaluate((prefix) => ({
    title: document.title,
    height: document.body.clientHeight,
    links: Array.from(document.getElementsByTagName("a"))
      .filter((element) => element.href.startsWith(prefix))
      .map((element) => ({
        X: Math.round(element.getBoundingClientRect().x),
        Y: Math.round(element.getBoundingClientRect().y),
        W: Math.round(element.getBoundingClientRect().width),
        H: Math.round(element.getBoundingClientRect().height),
        DEST: element.href.substring(element.href.lastIndexOf("/") + 1),
      })),
  }), { args: [linkPrefix] });

  const screenshot = await tab.screenshot({
    clip: { x: 0, y: 0, width: VIEWPORT_WIDTH, height: pageEval.height, scale: 1 },
  });
  await screenshotToGif(screenshot, `${OUTPUT_ROOT}/${job.key}.gif`);

  let iniContent = dedent(`
    [INFO]
    TITLE = ${pageEval.title}
    BG_COLOR_1 = 0x9CE7
    BG_COLOR_2 = 0xA108
  `);
  const iniLinks = [];
  for (const index in pageEval.links) {
    iniLinks.push(
      `[LINK${index}]\n` +
        Object.entries(pageEval.links[index])
          .map(([key, value]) => `${key} = ${value}`)
          .join("\n"),
    );
  }
  iniContent += iniLinks.join("\n\n");
  await Deno.writeTextFile(`${OUTPUT_ROOT}/${job.key}.ini`, iniContent.trim());
}

/**
 * Renders `todo` with a pool of workers, each owning one tab. Successfully
 * rendered pages are recorded in `manifest`. If any page fails, remaining
 * work is abandoned and an error listing the failures is thrown.
 */
async function renderPages(todo: Job[], baseUrl: string, web: boolean, manifest: Manifest) {
  let jekyll: Deno.ChildProcess | undefined;
  try {
    if (!web) {
      let exited = false;
      jekyll = new Deno.Command("bundle", {
        args: ["exec", "jekyll", "serve", "--no-watch"],
      }).spawn();
      jekyll.status.then(() => exited = true, () => exited = true);
      await waitForServer(baseUrl, () => exited);
    }

    const browser = await launch({
      product: "chrome",
      ...(CHROME_PATH ? { path: CHROME_PATH } : {}),
    });
    try {
      const workers = pickConcurrency(todo.length);
      console.log(
        `Rendering ${todo.length} page(s) with ${workers} worker(s) ` +
          `(${navigator.hardwareConcurrency} CPUs, wait: ${WAIT_UNTIL})`,
      );

      const queue = [...todo];
      const errors: string[] = [];

      const worker = async () => {
        const tab = await browser.newPage();
        try {
          await tab.setViewportSize({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });
          while (errors.length === 0) {
            const job = queue.shift();
            if (!job) break;
            try {
              await processPage(job, tab, baseUrl);
              manifest[job.key] = job.hash;
            } catch (e) {
              errors.push(`${job.key}: ${errorMessage(e)}`);
            }
          }
        } finally {
          await tab.close().catch(() => {});
        }
      };

      const results = await Promise.allSettled(Array.from({ length: workers }, worker));
      for (const result of results) {
        if (result.status === "rejected") errors.push(errorMessage(result.reason));
      }
      if (errors.length > 0) {
        throw new Error(`Failed to render ${errors.length} page(s):\n  ${errors.join("\n  ")}`);
      }
    } finally {
      await browser.close();
    }
  } finally {
    if (jekyll) {
      try {
        jekyll.kill();
      } catch { /* already exited */ }
      await jekyll.status.catch(() => {});
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const web = Deno.args.includes("web");
const baseUrl = web
  ? "https://" + (await Deno.readTextFile("./CNAME")).trim()
  : "http://127.0.0.1:4000";
console.log(`Generating images from ${web ? baseUrl : "local files"}...`);

const previousManifest = await loadManifest();
const jobs = await collectJobs(await hashSharedInputs());
await pruneRemoved(previousManifest, jobs);

// Pages whose inputs are unchanged and whose output still exists are skipped.
const manifest: Manifest = {};
const todo: Job[] = [];
for (const job of jobs) {
  const upToDate = !FORCE_REBUILD &&
    previousManifest[job.key] === job.hash &&
    await exists(`${OUTPUT_ROOT}/${job.key}.gif`) &&
    await exists(`${OUTPUT_ROOT}/${job.key}.ini`);
  if (upToDate) manifest[job.key] = job.hash;
  else todo.push(job);
}
console.log(`${jobs.length - todo.length} of ${jobs.length} page(s) up to date, ${todo.length} to render`);

try {
  // Jekyll and Chrome are only started if there is something to render.
  if (todo.length > 0) await renderPages(todo, baseUrl, web, manifest);
} finally {
  // Saved even on failure so pages that did succeed aren't redone next time.
  await saveManifest(manifest);
}