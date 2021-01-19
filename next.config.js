const withOptimizedImages = require('next-optimized-images');
const nextTranslate = require('next-translate');

module.exports = nextTranslate(
  withOptimizedImages({
    optimizeImagesInDev: true,
    responsive: {
      adapter: require('responsive-loader/sharp'),
    },
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en',
    },
  })
);
