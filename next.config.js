const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
});
