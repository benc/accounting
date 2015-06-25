'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var runSequence = require('run-sequence').use(gulp);
var history = require('connect-history-api-fallback');

gulp.task('connect', function () {
  return connect.server({
    root: [
      '.tmp', // bevat getranspileerde js, css en gecompileerde templates.js
      'app' // in principe enkel voor bower_components te hosten
    ],
    port: 9000,
    livereload: true,
    middleware: function () {
      return [history()];
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('./bower.json', ['indexHtml']);
  gulp.watch("app/**/*.html.tpl", ['html2js']);
  gulp.watch(["app/styles/**/*.{scss,sass}","app/src/**/*.{scss,sass}"], ['sass']);
  gulp.watch("app/src/**/*.js", ['es6']);
});

gulp.task('serve', function (callback) {
  runSequence('clean',
              ['es6','indexHtml','html2js','sass'],
              ['connect', 'watch'],
              callback);
});
