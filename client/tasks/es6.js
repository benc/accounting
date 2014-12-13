'use strict';

var gulp = require('gulp'),
    config = require('./config.json'),
    traceur = require('gulp-traceur'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect');

var errorHandler = notify.onError(function (error) {
    if(error && error.stack){
        gutil.log(error.plugin + ' ERROR ' + error.name + '\r\n' + error.stack);
    }
    return error.plugin + ' ' + error.name;
});

gulp.task('es6', function() {
  return gulp.src(config.paths.scripts.es6.in)
    .pipe(traceur({modules: 'instantiate'}).on('error', errorHandler))
    .pipe(gulp.dest(config.paths.scripts.es6.out))
    .pipe(connect.reload());
});
