    'use strict';
    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        ts = require('gulp-typescript'),
        ngAnnotate = require('gulp-ng-annotate');

    var tsOrder = [
        'app/modules/**/module.ts',
        'app/modules/**/*.ts',
        'app/*.ts'
    ];

    gulp.task('ts', function() {
        gulp.src(tsOrder)
            .pipe(ts({
                noImplicitAny: true,
                out: 'app.js',
                target: 'ES5',
                removeComments:false
            }))
            .js
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest('app/dist'));
    });

    gulp.task('default', function() {
        gulp.watch(tsOrder , ['ts']);
    });


