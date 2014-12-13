'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence').use(gulp),
    config = require('./config.json');

/**
 * SERVE
 */
gulp.task('connect', function() {
  return connect.server({
    root: ['.tmp', 'app'],
    livereload: true,
    port: 9000
  });
});

gulp.task('watch', function () {  
  gulp.watch('./bower.json', ['indexHtml']);
  gulp.watch(config.paths.indexHtml.in, ['indexHtml']);
  gulp.watch(config.paths.templates.html.in, ['html2js']);
  gulp.watch(config.paths.styles.sass.in, ['sass']);
  gulp.watch(config.paths.scripts.es6.in, ['es6']);
});

gulp.task('serve', function (callback) {
  runSequence('clean',
              ['es6','indexHtml','html2js','sass'],
              ['connect', 'watch'],
              callback);
});
