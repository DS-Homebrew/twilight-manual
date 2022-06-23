import puppeteer from "https://deno.land/x/puppeteer@14.1.1/mod.ts";
import { existsSync } from "https://deno.land/std/fs/mod.ts";

const web = Deno.args.includes("web");
let jekyll = null;
if (web) {
	console.log("Generating images from https://manual.ds-homebrew.com...");
} else {
	console.log("Generating images from local files...");
	jekyll = Deno.run({ cmd: ["bundle", "exec", "jekyll", "serve"] });

	// Wait 5s for jekyll to be ready
	await new Promise(resolve => setTimeout(resolve, 5000));
}

const browser = await puppeteer.launch({product: 'chrome'});
const tab = await browser.newPage();
await tab.setViewport({width: 256, height: 3000});

const rootPagesFolder = Array.from(Deno.readDirSync("pages"))
	.filter(entry => entry.isDirectory)
	.map(entry => entry.name)

for (const dir of rootPagesFolder) {
	if(dir == "_ic")
		continue;

	Deno.mkdirSync(`nitrofiles/pages/${dir.substr(1)}`, {recursive: true});

	let subPageFolder = Array.from(Deno.readDirSync(`pages/${dir}`))
		.filter(entry => !entry.isDirectory)
		.map(entry => entry.name)

	for (const page of subPageFolder) {
		console.log(dir, page);

		let rootPath = `${dir.substr(1)}/${page.substr(0, page.indexOf("."))}`;
		await tab.goto((web ? "https://manual.ds-homebrew.com/" : "http://127.0.0.1:4000/") + rootPath, {waitUntil: "networkidle0"});

		if (!existsSync(`nitrofiles/pages/${rootPath}.gif`) || Deno.statSync(`nitrofiles/pages/${rootPath}.gif`).mtime < Deno.statSync(`pages/${dir}/${page}`).mtime) {
			const dimensions = await tab.evaluate(() => {
				return {
					width: document.body.clientWidth,
					height: document.body.clientHeight,
					deviceScaleFactor: window.devicePixelRatio,
				};
			});
			await tab.screenshot({
				path: "screenshot.png",
				clip: {x: 0, y:0, width:256, height: dimensions.height}
			});

			const paletteProcess = Deno.run({ cmd: ["ffmpeg", "-i", "screenshot.png", "-vf", "palettegen=max_colors=246", "palette.png", "-y", "-loglevel", "error"]});
			await paletteProcess.status();

			const conversionProcess = Deno.run({
				cmd: ["ffmpeg", "-i", "screenshot.png", "-i", "palette.png", "-filter_complex", "paletteuse", `nitrofiles/pages/${rootPath}.gif`, "-y", "-loglevel", "error"]
			})
			await conversionProcess.status();
		}

		if (!existsSync(`nitrofiles/pages/${rootPath}.ini`) || Deno.statSync(`nitrofiles/pages/${rootPath}.ini`).mtime < Deno.statSync(`pages/${dir}/${page}`).mtime) {
			let links = await tab.evaluate(() => {
				function dedent (templateStrings, ...values) {
					let matches = [];
					let strings = typeof templateStrings === 'string' ? [ templateStrings ] : templateStrings.slice();

					// 1. Remove trailing whitespace.
					strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');

					// 2. Find all line breaks to determine the highest common indentation level.
					for (let i = 0; i < strings.length; i++) {
						let match;

						if (match = strings[i].match(/\n[\t ]+/g)) {
							matches.push(...match);
						}
					}

					// 3. Remove the common indentation from all strings.
					if (matches.length) {
						let size = Math.min(...matches.map(value => value.length - 1));
						let pattern = new RegExp(`\n[\t ]{${size}}`, 'g');

						for (let i = 0; i < strings.length; i++) {
							strings[i] = strings[i].replace(pattern, '\n');
						}
					}

					// 4. Remove leading whitespace.
					strings[0] = strings[0].replace(/^\r?\n/, '');

					// 5. Perform interpolation.
					let string = strings[0];

					for (let i = 0; i < values.length; i++) {
						string += values[i] + strings[i + 1];
					}

					return string;
				}

				let out = dedent`
					[INFO]
					TITLE = ${document.title}
					BG_COLOR_1 = 0x9CE7
					BG_COLOR_2 = 0xA108
				`;

				const links = document.querySelectorAll("a");
				const arrayLinks = Array.from(links)
					.filter(link => link.href.startsWith("https://manual.ds-homebrew.com/") || link.href.startsWith("http://127.0.0.1:4000/"))

				for (const i in arrayLinks)
					out += dedent`
						\n\n[LINK${parseInt(i) + 1}]
						X = ${Math.round(links[i].getBoundingClientRect().x)}
						Y = ${Math.round(links[i].getBoundingClientRect().y)}
						W = ${Math.round(links[i].getBoundingClientRect().width)}
						H = ${Math.round(links[i].getBoundingClientRect().height)}
						DEST = ${links[i].href.substr(links[i].href.lastIndexOf("/") + 1)}
						`;

				return out;
			});

			Deno.writeTextFileSync(`nitrofiles/pages/${rootPath}.ini`, links);
		}
	}
}

await browser.close();

if (jekyll)
	jekyll.close();

if (existsSync("screenshot.png"))
	Deno.removeSync("screenshot.png");
if (existsSync("palette.png"))
	Deno.removeSync("palette.png");
