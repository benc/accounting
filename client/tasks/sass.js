'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect');

var errorHandler = notify.onError(function (error) {
    gutil.log(error.plugin + ' ERROR ' + error);
    return error.plugin + ' ' + error.name;
});

gulp.task('sass', function () {
  var sassOpts = {
    sourceComments: 'normal', // nodig voor sass syntax, zie https://github.com/dlmanning/gulp-sass/issues/55#issuecomment-50882250
    includePaths: [
      './app/styles'
    ]
  };
  return gulp.src(config.paths.styles.sass.in)
    .pipe(sass(sassOpts).on('error', errorHandler))
    .pipe(gulp.dest(config.paths.styles.sass.out))
    .pipe(connect.reload());
});