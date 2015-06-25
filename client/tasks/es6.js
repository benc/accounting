'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var connect = require('gulp-connect');

var errorHandler = notify.onError(function (error) {
    if(error && error.stack){
        gutil.log(error.plugin + ' ERROR ' + error.name + '\r\n' + error.stack);
    }
    return error.plugin + ' ' + error.name;
});

gulp.task('es6', function() {
  return gulp.src("src/app/**/*.js")
    .pipe(babel().on('error', errorHandler))
    .pipe(gulp.dest(".tmp/app"))
    .pipe(connect.reload());
});
