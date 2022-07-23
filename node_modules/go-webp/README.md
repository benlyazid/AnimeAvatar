<p align="center">
  <img src="https://github.com/kirwa-KO/go-webp/blob/main/go-webp-logo.png" alt="go-webp Logo">
</p>

# go-webp

go-webp is a tool that helps develop convert all images (.png,.jpg and .jpeg) to webp image format by just one simple command line

## why use webp image format
1. provides superior lossless and lossy compression for images on the web.
2. create smaller, richer images that make the web faster
3. WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are [25-34% smaller](https://developers.google.com/speed/webp/docs/webp_study) than comparable JPEG images at equivalent [SSIM](https://en.wikipedia.org/wiki/Structural_similarity) quality index.
4. Lossless WebP supports transparency (also known as alpha channel) at a cost of just [22% additional bytes](https://developers.google.com/speed/webp/docs/webp_lossless_alpha_study#results).

## why use go-webp package

instead of go to online services and upload you images and convert it to webp then change images name in files where use its

go-webp with one simple line in package.json:
1. convert all images (.png, .jpg, .jpeg) to webp format
2. remove old format of images (.png, .jpg, .jpeg)
3. change images names in files where you use its

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):
```bash
npm install -g go-webp # or using yarn: yarn global add go-webp
```

And go-webp will be installed globally to your system path.

You can also install go-webp as a development dependency:

```bash
npm install --save-dev go-webp # or using yarn: yarn add go-webp -D
```

With a local installation, go-webp will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of go-webp can be run by calling it from within an npm script (such as `npm start`) **like the example below** or using `npx go-webp`.

```json
{
	"name": "...",
	"version": "0.1.0",
	"dependencies": {
		"...":"..."
	},
	"scripts": {
		"...": "...",
		"webp": "go-webp remove=true change=true"
	}
}
```

**then you use**

```bash
npm run webp # or using yarn: yarn run webp
```

# Usage

By default go-webp change images names in files where you use its but not remove old images format (.png, .jpg, .jpeg) and

```bash
go-webp
```

For CLI options
1. use the `remove=true` argument to remove old images format (.png, .jpg, .jpeg)
```bash
go-webp remove=true
```

2. use the `change=false` argument to not change images names in files where you use its
```bash
go-webp change=false
```

3. you can also combine them `remove=true change=true` to remove old images format (.png, .jpg, .jpeg) and change images names in files where you use its
```bash
go-webp remove=true change=true
```

#### This package costs me time to make and maintain every time.
[I am very 😀 about every coffee!]

[buy me a coffee ☕](https://www.buymeacoffee.com/imranbaali)

