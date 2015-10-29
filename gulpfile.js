// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    dotnet = require('./');

gulp.task('build', function() {
    return gulp.src('samples/**/project.json')
        .pipe(dotnet.dnu('restore', {
            verbose: true,
            args: [
                '<%= file.path %>',
                '--no-cache',
                '--quiet'
            ]
        }))
        .pipe(dotnet.dnu('build', {
            verbose: true,
            outPathBase: './build',
            args: [
                '<%= file.path %>',
                '--quiet',
                '--out', '<%= outPath %>',
                '--configuration', 'Release'
            ]
        }));
});