# twilight-manual
The manual for TWiLight Menu++


## Translating
If you'd like to help translate this (and the rest of TWiLight Menu++) you can do so on its [Crowdin project](https://crowdin.com/project/TwilightMenu). Please don't PR directly to this repo since that won't work with Crowdin.

## Generating images for TWiLight Menu++
The HTML files in this repo need to be converted into images for TWiLight Menu++ to use them, the latest commit here is always in [the release](https://github.com/DS-Homebrew/twilight-manual/releases/tag/pages), but if you want to generate the images yourself you can do so with the following steps:
1. Install `ffmpeg`, [`jekyll`](https://jekyllrb.com), `jq`, `p7zip-full` (specifically `7z`), `python3`, and a Chromium based browser
   - Any Chromium based browser should work, but you may need to edit the `CHROMIUM :=` for your OS at the top of the Makefile
   - On macOS you will also need the brew version of grep
1. Run `make` in the root of this repo
1. Merge the `nitrofiles` folder with the `manual/nitrofiles` folder in the [TWiLightMenu](https://github.com/DS-Homebrew/TWiLightMenu) repo
