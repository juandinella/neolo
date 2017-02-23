//Config Paths

module.exports = {
  // Here you add the paths to the scss files you get with Bower to import and work with.
  sassIncludes: [
  './src/bower/penny-mixins/src',
  './src/bower/slick-carousel/slick'
  ],

  // Here you add the paths to the full-length js files from your Bower imports
  scriptFiles: [
    './src/bower/jquery/dist/jquery.js',
    './src/bower/slick-carousel/slick/slick.min.js'
    ],

  //Asset File Paths
  assets: [
    './src/assets/**/*',
    './src/bower/slick-carousel/slick/ajax-loader.gif'
  ],

  fonts: [
    './src/fonts/**/*'
  ],


  //Export path
  exportPath: ['./dist']
};
