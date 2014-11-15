'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src(config.paths.styles.sass.in)
    .pipe(plumber())
    .pipe(sass({compass: true}))
    .pipe(gulp.dest(config.paths.styles.sass.out))
    .pipe(connect.reload());
});