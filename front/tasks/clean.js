'use strict';

var gulp = require('gulp'),
    del = require('del');

// Kuis output gegenereerd door deze gulpfile
gulp.task('clean', function(cb) {
  return del(['.tmp'], cb);
});