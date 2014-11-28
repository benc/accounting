'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    protractor = require("gulp-protractor").protractor;

gulp.task('connect:test', function() {
  return connect.server({
    root: ['.tmp', 'app'],
    port: 9001
  });
});

gulp.task('protractor', ['connect:test'], function () {
  return gulp.src(config.paths.tests.protractor)
    .pipe(protractor({
        configFile: "protractor.config.js",
        args: ['--baseUrl', 'http://127.0.0.1:9001']
    }).on('error', function(e) { 
      throw e; 
    }).on('end', function() {
      connect.serverClose();
    }));
});
