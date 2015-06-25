'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var connect = require('gulp-connect');

var errorHandler = notify.onError(function (error) {
    gutil.log(error.plugin + ' ERROR ' + error);
    return error.plugin + ' ' + error.name;
});

gulp.task('sass', function () {
  var sassOpts = {
      errLogToConsole: true,
      includePaths: [
       require('node-bourbon').includePaths
     ]
  };
  return gulp.src(["src/styles/**/*.{scss,sass}", "src/app/**/*.{scss,sass}"])
    .pipe(sass(sassOpts).on('error', errorHandler))
    .pipe(gulp.dest(".tmp/styles"))
    .pipe(connect.reload());
});
