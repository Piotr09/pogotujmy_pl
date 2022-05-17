const path = require('path')
// const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['gc.pogotujmy.pl'],
    loader: 'imgix',
    path: 'https://gc.pogotujmy.pl',
  },
  trailingSlash: true,
}

module.exports = withOptimizedImages([
  {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  },
])

module.exports = {
  images: {
    domains: ['gc.pogotujmy.pl'],
  },
  trailingSlash: true,
}
