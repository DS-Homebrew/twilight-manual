# twilight-manual
The manual for [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu)


## Translating
If you'd like to help translate this (and the rest of TWiLight Menu++) you can do so on its [Crowdin project](https://crowdin.com/project/TwilightMenu). Please don't PR directly to this repo since that won't work with Crowdin.

## Generating images for TWiLight Menu++
The HTML files in this repo need to be converted into images for TWiLight Menu++ to use them, the latest commit here is always in [the release](https://github.com/DS-Homebrew/twilight-manual/releases/tag/pages), but if you want to generate the images yourself you can do so with the following steps:
1. Install [`ffmpeg`](https://ffmpeg.org), [`jekyll`](https://jekyllrb.com), and [`deno`](https://deno.land/)
1. Run the two commands found in the [GitHub Actions Script](https://github.com/DS-Homebrew/twilight-manual/blob/deno/.github/workflows/pages.yml#L30-L31) Line 30+31
   - If you pass `web` as an argument for the second command, it'll generate from https://manual.ds-homebrew.com instead of the local files. jekyll is not required in this context
1. Merge the `nitrofiles` folder with the `manual/nitrofiles` folder in the [TWiLightMenu](https://github.com/DS-Homebrew/TWiLightMenu) repo
