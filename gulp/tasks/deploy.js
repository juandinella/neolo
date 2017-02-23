'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('./config');

// This task only works on a branch name origin with master

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
});
