# twilight-manual
The manual for TWiLight Menu++


## Translating
If you'd like to help translate this (and the rest of TWiLight Menu++) you can do so on its [Crowdin project](https://crowdin.com/project/TwilightMenu). Please don't PR directly to this repo since that won't work with Crowdin.

## Generating images for TWiLight Menu++
The HTML files in this repo need to be converted into images for TWiLight Menu++ to use them, the latest commit here is always in [the release](https://github.com/DS-Homebrew/twilight-manual/releases/tag/pages), but if you want to generate the images yourself you can do so with the following steps:
1. Install [`ffmpeg`](https://ffmpeg.org), [`jekyll`](https://jekyllrb.com), and [`nodejs`](https://nodejs.org/en/) (and `npm`)
1. Install puppeteer with `npm install`
1. Run `./convert.js` in the root of this repo
   - If you pass `web` as an argument then it'll generate from https://manual.ds-homebrew.com instead of the local files, jekyll is not required this way
1. Merge the `nitrofiles` folder with the `manual/nitrofiles` folder in the [TWiLightMenu](https://github.com/DS-Homebrew/TWiLightMenu) repo
