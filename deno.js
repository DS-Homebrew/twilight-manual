import puppeteer from "https://deno.land/x/puppeteer@5.5.1/mod.ts";

const web = Deno.args.includes("web");
let jekyll = null;
if(web) {
	console.log("Generating images from https://manual.ds-homebrew.com...");
} else {
	console.log("Generating images from local files...");
  jekyll = Deno.run({ cmd: ["bundle", "exec", "jekyll", "serve"] });

	// Wait 5s for jekyll to be ready
	await new Promise(resolve => setTimeout(resolve, 5000));
}

const browser = await puppeteer.launch();
const tab = await browser.newPage();
await tab.setViewport({width: 256, height: 3000});

const pagesFolder = Deno.readdirSync("pages")
  .filter(entry => entry.isDirectory)
  .map(entry => entry.name)

for (const dir of pagesFolder) {
	if(dir == "_ic")
		continue;

	Deno.mkdirSync(`nitrofiles/pages/${dir.substr(1)}`, {recursive: true});

	for (const page of Deno.readdirSync(`pages/${dir}`)) {
    console.log(dir, page);

    let rootPath = `${dir.substr(1)}/${page.substr(0, page.indexOf("."))}`;
    await tab.goto((web ? "https://manual.ds-homebrew.com/" : "http://127.0.0.1:4000/") + rootPath, {waitUntil: "networkidle0"});

		if (!Deno.existsSync(`nitrofiles/pages/${rootPath}.gif`) || Deno.statSync(`nitrofiles/pages/${rootPath}.gif`).mtime < Deno.statSync(`pages/${dir}/${page}`).mtime) {
			await tab.screenshot({path: "screenshot.png"});
			Deno.run({ cmd: ["ffmpeg", "-i", "screenshot.png", "-vf", "palettegen=max_colors=246", "palette.png", "-y"]});
			const crop = Deno.run({ cmd: ["ffmpeg", "-loop", "1", "-i", "screenshot.png", "-frames:v", "3", "-vf", "negate,cropdetect=0:2:0", "-f", "null", "-"]}).stderr.toString().match(/crop=.*:.*:.*:.*/)[0];
			Deno.run({ cmd: ["ffmpeg", "-i", "screenshot.png", "-i", "palette.png", "-filter_complex", `${crop},paletteuse`, `nitrofiles/pages/${rootPath}.gif`, "-y"]}).stderr.toString();
		}

		if (!fs.existsSync(`nitrofiles/pages/${rootPath}.ini`) || fs.statSync(`nitrofiles/pages/${rootPath}.ini`).mtime < fs.statSync(`pages/${dir}/${page}`).mtime) {
			let links = await tab.evaluate(() => {
				let out = `
[INFO]
TITLE = ${document.title}
BG_COLOR_1 = 0x9CE7
BG_COLOR_2 = 0xA108
`;
				const links = document.querySelectorAll("a");
				for (const i in Array.from(links)) {
					if (links[i].href.startsWith("https://manual.ds-homebrew.com/") || links[i].href.startsWith("http://127.0.0.1:4000/")) {
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
			
			fs.writeFileSync(`nitrofiles/pages/${rootPath}.ini`, links);
		}
	}
}

await browser.close();

if (jekyll)
	jekyll.close();

if (Deno.existsSync("screenshot.png"))
	Deno.rmSync("screenshot.png");
if (Deno.existsSync("palette.png"))
	Deno.rmSync("palette.png");
