'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    traceur = require('gulp-traceur'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

gulp.task('atscript', function() {
  return gulp.src(config.paths.scripts.atscript.in)
    .pipe(traceur({
      modules: 'amd', 
      script: false, 
      asyncFunctions: true, 
      types: true, 
      typeAssertions: true, 
      typeAssertionModule: "assert",
      annotations: true,
      sourceMaps: true}))
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest(config.paths.scripts.atscript.out))
    .pipe(connect.reload());
});
