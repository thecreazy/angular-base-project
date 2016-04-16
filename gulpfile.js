    'use strict';
    var gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        ngAnnotate = require('gulp-ng-annotate');

    var jsOrder = [
        'app/modules/**/module.js',
        'app/modules/**/*.js',
        'app/*.js'
    ];

    gulp.task('js', function() {
        gulp.src(jsOrder)
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest('app/dist'))
    });

    gulp.task('default', function() {
        gulp.watch(['app/*.js', 'app/modules/**/*.js'], ['js'])
    });
