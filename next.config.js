const withOptimizedImages = require('next-optimized-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  de: 'de',
  en: 'en',
};

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
