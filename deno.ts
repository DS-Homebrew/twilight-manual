import puppeteer from "https://deno.land/x/puppeteer@14.1.1/mod.ts";
import { exists } from "https://deno.land/std@0.119.0/fs/exists.ts";

const dedent = (string:string) => string.split('\n').map(line => line.trim()).join('\n')
const needsUpdate = async (fileName: string, path:string) =>
	!(await exists(fileName)) || ((await Deno.stat(fileName)).mtime || 0) < ((await Deno.stat(path)).mtime || 0)

const web = Deno.args.includes("web");
let jekyll:Deno.Process|undefined = undefined;
let accessURL:string;
if (web) {
	accessURL = "https://" + await Deno.readTextFile("./CNAME");
	console.log("Generating images from https://manual.ds-homebrew.com...");
} else {
	console.log("Generating images from local files...");
	jekyll = Deno.run({ cmd: ["bundle", "exec", "jekyll", "serve"] });

	// Wait 5s for jekyll to be ready
	await new Promise(resolve => setTimeout(resolve, 5000));
	accessURL = "http://127.0.0.1:4000/";
}

let browser;
try {
	browser = await puppeteer.launch({ product: 'chrome' });
} catch (error) {
	if (!error.message.includes('Could not find browser revision'))
		throw error;

	browser = await puppeteer.launch({ product: 'chrome', executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\new_msedge.exe' })
}

const tab = await browser.newPage();
await tab.setViewport({width: 256, height: 3000});

const tempFileNames = {
	screenshot: "screenshot.png",
	palette: "palette.png"
}

for await (const folder of Deno.readDir("pages")) {
	if (!folder.isDirectory)
		continue;

	const dir = folder.name;
	if (dir == "_ic")
		continue;

	await Deno.mkdir(`nitrofiles/pages/${dir.substring(1)}`, {recursive: true});

	for await (const subPageFolder of Deno.readDir(`pages/${dir}`)) {
		if (subPageFolder.isDirectory)
			continue;

		const page = subPageFolder.name;
		console.log(dir, page);

		const rootPath = `${dir.substring(1)}/${page.substring(0, page.indexOf("."))}`;
		await tab.goto([accessURL, rootPath].join('/'), { waitUntil: "networkidle0" });

		const pageEval = await tab.evaluate((accessURL) => ({
			title: document.title,
			height: document.body.clientHeight,
			links: Array.from(document.getElementsByTagName('a'))
				.filter(element => element.href.startsWith(accessURL))
				.map(element => ({
					X: Math.round(element.getBoundingClientRect().x),
					Y: Math.round(element.getBoundingClientRect().y),
					W: Math.round(element.getBoundingClientRect().width),
					H: Math.round(element.getBoundingClientRect().height),
					DEST: element.href.substring(element.href.lastIndexOf("/") + 1)
				}))
		}), accessURL);

		const imagePath = `nitrofiles/pages/${rootPath}.gif`
		if (await needsUpdate(imagePath, `pages/${dir}/${page}`)) {
			await tab.screenshot({ path: tempFileNames.screenshot, clip: { x: 0, y: 0, width: 256, height: pageEval.height } });

			const paletteProcess = Deno.run({
				cmd: ["ffmpeg", "-i", tempFileNames.screenshot, "-vf", "palettegen=max_colors=246", tempFileNames.palette, "-y", "-loglevel", "error"]
			});
			await paletteProcess.status();

			const conversionProcess = Deno.run({
				cmd: ["ffmpeg", "-i", tempFileNames.screenshot, "-i", tempFileNames.palette, "-filter_complex", "paletteuse", imagePath, "-y", "-loglevel", "error"]
			})
			await conversionProcess.status();
		}

		if (await needsUpdate(`nitrofiles/pages/${rootPath}.ini`, `pages/${dir}/${page}`)) {
			let iniContent = dedent(`
				[INFO]
				TITLE = ${pageEval.title}
				BG_COLOR_1 = 0x9CE7
				BG_COLOR_2 = 0xA108
			`)

			const iniLinks = [];
			for (const index in pageEval.links) {
				iniLinks.push(`[LINK${index}]\n` + Array.from(Object.entries(pageEval.links[index])
					.map(([key, value]) => `${key} = ${value}`)
					.join('\n')))
			}

			iniContent += iniLinks.join('\n\n')
			await Deno.writeTextFile(`nitrofiles/pages/${rootPath}.ini`, iniContent.trim());
		}
	}
}

await browser.close();

if (jekyll)
	jekyll.close();

for (const tempFile of Object.values(tempFileNames))
	if (await exists(tempFile))
		await Deno.remove(tempFile)