'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var ngHtml2Js = require('gulp-ng-html2js');

gulp.task('html2js', function () {
  return gulp.src("app/**/*.html")
    .pipe(ngHtml2Js({
        moduleName: 'accounting',
        stripPrefix: 'src/'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(".tmp/src"))
    .pipe(connect.reload());
});
