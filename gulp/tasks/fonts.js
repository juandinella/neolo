'use strict';

var gulp            = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync     = require('browser-sync');
var plugins         = gulpLoadPlugins();
var config          = require('./config');

//Assets that you don't need to process

//Add the path into 'assets: []' in config.js

gulp.task('fonts', function() {
  return gulp.src(config.fonts)
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(gulp.dest(config.exportPath + '/fonts/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
