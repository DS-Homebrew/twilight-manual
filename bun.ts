import { $, Subprocess } from "bun";
import { stat, exists, readdir, unlink } from "node:fs/promises";

import puppeteer, { Browser } from "puppeteer";
import {getAnyEdgeLatest} from "edge-paths"

const dedent = (string:string) => string.split('\n').map(line => line.trim()).join('\n')
const needsUpdate = async (fileName: string, path:string) =>
	!(await exists(fileName)) || ((await stat(fileName)).mtime || 0) < ((await stat(path)).mtime || 0)

const web = Bun.argv.includes("web");
let jekyll: Subprocess;
let accessURL:string;
if (web) {
	accessURL = "https://" + await Bun.file("./CNAME").text();
	console.log(`Generating images from ${accessURL}...`);
} else {
	console.log("Generating images from local files...");
	jekyll = Bun.spawn({ cmd: ["jekyll", "serve"] })

	// Wait 5s for jekyll to be ready
	await new Promise(resolve => setTimeout(resolve, 5000));
	accessURL = "http://127.0.0.1:4000/";
}

let browser: Browser;
try {
	browser = await puppeteer.launch({ product: 'chrome' });
} catch (error) {
	if (!error.message.includes('Could not find browser revision'))
		throw error;

	browser = await puppeteer.launch({ product: 'chrome', executablePath: await getAnyEdgeLatest() })
}

const tab = await browser.newPage();
await tab.setViewport({width: 256, height: 3000});

const tempFileNames = {
	screenshot: "screenshot.png",
	palette: "palette.png"
}

for (const folder of await readdir("pages", { withFileTypes: true })) {
	if (!folder.isDirectory())
		continue;

	const dir = folder.name;
	if (dir == "_ic")
		continue;

	for (const subPageFolder of await readdir(`pages/${dir}`, { withFileTypes: true })) {
		if (subPageFolder.isDirectory())
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

		if (await needsUpdate(`nitrofiles/pages/${rootPath}.ini`, `pages/${dir}/${page}`)) {
			let iniContent = dedent(`
				[INFO]
				TITLE = ${pageEval.title}
				BG_COLOR_1 = 0x9CE7
				BG_COLOR_2 = 0xA108
			`)

			const iniLinks: string[] = [];
			for (const index in pageEval.links) {
				iniLinks.push(`[LINK${index}]\n` + Object.entries(pageEval.links[index])
					.map(([key, value]) => `${key} = ${value}`)
					.join('\n'))
			}

			iniContent += iniLinks.join('\n\n')
			await Bun.write(`nitrofiles/pages/${rootPath}.ini`, iniContent.trim());
		}

		const imagePath = `nitrofiles/pages/${rootPath}.gif`
		if (await needsUpdate(imagePath, `pages/${dir}/${page}`)) {
			await tab.screenshot({ path: tempFileNames.screenshot, clip: { x: 0, y: 0, width: 256, height: pageEval.height } });

			await $`ffmpeg -i ${tempFileNames.screenshot} -vf palettegen=max_colors=246 ${tempFileNames.palette} -y -loglevel error`;
			await $`ffmpeg -i ${tempFileNames.screenshot} -i ${tempFileNames.palette} -filter_complex paletteuse ${imagePath} -y -loglevel error`;
		}
	}
}

await browser.close();

// @ts-ignore
if (jekyll)
	jekyll.kill();

for (const tempFile of Object.values(tempFileNames))
	if (await exists(tempFile))
		await unlink(tempFile)
