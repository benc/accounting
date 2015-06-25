'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('indexHtml', function () {
  return gulp.src("src/index.html")
    .pipe(gulp.dest(".tmp"))
    .pipe(connect.reload());
});
