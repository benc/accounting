'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    ngHtml2Js = require('gulp-ng-html2js'),
    config = require('./config.json');

/**
 * SERVE
 */
gulp.task('html2js', function () {
  return gulp.src(config.paths.templates.html.in)
    .pipe(ngHtml2Js({
        moduleName: 'accounting',
        stripPrefix: 'src/',
        rename: function (url) {
          return url.replace('.html.tpl', '.html');
        }
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(config.paths.templates.html.out))
    .pipe(connect.reload());
});