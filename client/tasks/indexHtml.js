'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),  
    rename = require('gulp-rename'),
    preprocess = require('gulp-preprocess'),  
    wiredep = require('wiredep').stream;

gulp.task('indexHtml', function () {
  var wiredepConfig = {
      src: [config.paths.indexHtml.in],
      ignorePath: 'app',
      exclude: [
        'bower_components/traceur/traceur.js',
        'bower_components/es6-module-loader/dist/es6-module-loader-sans-promises.js'
      ]
    };

  return gulp.src(config.paths.indexHtml.in)
    .pipe(plumber())
    .pipe(preprocess({context: { NODE_ENV: 'development' }}))
    .pipe(wiredep(wiredepConfig).on('error', gutil.log))
    .pipe(rename({extname: ''}))
    .pipe(gulp.dest(config.paths.indexHtml.out))
    .pipe(connect.reload());
});