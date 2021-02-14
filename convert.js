#!/usr/bin/env node

const fs = require('fs');
const puppeteer = require('puppeteer');
const { spawnSync, spawn } = require('child_process');

(async () => {
	let web = process.argv.includes("web");
	let jekyll = null;
	if(web) {
		console.log("Generating images from https://manual.ds-homebrew.com...");
	} else {
		console.log("Generating images from local files...");
		jekyll = spawn("bundle", ["exec", "jekyll", "serve"]);
		
		// Wait 5s for jekyll to be ready
		await new Promise(resolve => setTimeout(resolve, 5000));
	}

	const browser = await puppeteer.launch();
	const tab = await browser.newPage();
	await tab.setViewport({width: 256, height: 3000});

	for(const dir of fs.readdirSync("pages")) {
		if(dir == "_In-Context")
			continue;

		fs.mkdirSync(`nitrofiles/pages/${dir.substr(1)}`, {recursive: true});

		for(const page of fs.readdirSync(`pages/${dir}`)) {
			let outPath = `nitrofiles/pages/${dir.substr(1)}/${page.substr(0, page.indexOf("."))}.gif`;
			if(!fs.existsSync(outPath) || fs.statSync(outPath).mtime < fs.statSync(`pages/${dir}/${page}`).mtime) {
				console.log(dir, page);
				await tab.goto(`${web ? "https://manual.ds-homebrew.com/" : "http://127.0.0.1:4000/"}${dir.substr(1)}/${page.substr(0, page.indexOf("."))}`, {waitUntil: "networkidle0"});
				await tab.screenshot({path: "screenshot.png"});
				spawnSync("ffmpeg", ["-i", "screenshot.png", "-vf", "palettegen=max_colors=246", "palette.png", "-y"]);
				const crop = spawnSync("ffmpeg", ["-loop", "1", "-i", "screenshot.png", "-frames:v", "3", "-vf", "negate,cropdetect=0:2:0", "-f", "null", "-"]).stderr.toString().match(/crop=.*:.*:.*:.*/)[0];
				spawnSync("ffmpeg", ["-i", "screenshot.png", "-i", "palette.png", "-filter_complex", `${crop},paletteuse`, outPath, "-y"]).stderr.toString();
			}

			outPath = `nitrofiles/pages/${dir.substr(1)}/${page.substr(0, page.indexOf("."))}.ini`;
			if(!fs.existsSync(outPath) || fs.statSync(outPath).mtime < fs.statSync(`pages/${dir}/${page}`).mtime) {
				await tab.goto(`${web ? "https://manual.ds-homebrew.com/" : "http://127.0.0.1:4000/"}${dir.substr(1)}/${page.substr(0, page.indexOf("."))}`);

				let links = await tab.evaluate(() => {
					let out = `
[INFO]
TITLE = ${document.title}
BG_COLOR_1 = 0x9CE7
BG_COLOR_2 = 0xA108
`;
					const links = document.querySelectorAll("a");
					for(const i in Array.from(links)) {
						if(links[i].href.startsWith("https://manual.ds-homebrew.com/") || links[i].href.startsWith("http://127.0.0.1:4000/")) {
							out += `
[LINK${parseInt(i) + 1}]
X = ${Math.round(links[i].getBoundingClientRect().x)}
Y = ${Math.round(links[i].getBoundingClientRect().y)}
W = ${Math.round(links[i].getBoundingClientRect().width)}
H = ${Math.round(links[i].getBoundingClientRect().height)}
DEST = ${links[i].href.substr(links[i].href.lastIndexOf("/") + 1)}
`
						}
					}
					return out;
				});
			
				fs.writeFileSync(outPath, links);
			}
		}
	}

	await browser.close();

	if(jekyll)
		process.kill(jekyll.pid);

	if(fs.existsSync("screenshot.png"))
		fs.rmSync("screenshot.png");
	if(fs.existsSync("palette.png"))
		fs.rmSync("palette.png");
})();
