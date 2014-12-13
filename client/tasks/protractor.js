'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    runSequence = require('run-sequence').use(gulp),
    connect = require('gulp-connect'),
    protractor = require('gulp-protractor').protractor,
    webdriverUpdate = require('gulp-protractor').webdriver_update;

gulp.task('connect:test', function() {
  return connect.server({
    root: ['.tmp', 'app'],
    port: 9001
  });
});

gulp.task('webdriver:update', webdriverUpdate);

gulp.task('protractor', ['webdriver:update', 'connect:test'], function () {
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
