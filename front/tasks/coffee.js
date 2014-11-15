'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    coffee = require('gulp-coffee'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

/**
 * COFFEESCRIPT
 */

// Transpile to ES5
gulp.task('coffee', function() {
  return gulp.src(config.paths.scripts.coffee.in)
    .pipe(plumber())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(config.paths.scripts.coffee.out))
    .pipe(connect.reload());
});
