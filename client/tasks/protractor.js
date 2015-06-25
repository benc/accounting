'use strict';

var gulp = require('gulp');
// var runSequence = require('run-sequence').use(gulp);
// var connect = require('gulp-connect');
// var protractor = require('gulp-protractor').protractor;
// var webdriverUpdate = require('gulp-protractor').webdriver_update;

// gulp.task('connect:test', function() {
//   return connect.server({
//     root: ['.tmp', 'app'],
//     port: 9001
//   });
// });
//
// gulp.task('serve:test', function (callback) {
//   runSequence('clean',
//               ['es6','indexHtml','html2js','sass'],
//               ['connect:test'],
//               callback);
// });
//
// gulp.task('webdriver:update', webdriverUpdate);

// gulp.task('protractor', ['webdriver:update', 'serve:test'], function () {
gulp.task('protractor', function () {
  throw new Error("Angular 2 does not support protractor yet");
  // return gulp.src(config.paths.tests.protractor)
  //   .pipe(protractor({
  //       configFile: "protractor.config.js",
  //       args: ['--baseUrl', 'http://127.0.0.1:9001']
  //   }).on('error', function(e) {
  //     throw e;
  //   }).on('end', function() {
  //     connect.serverClose();
  //   }));
});
