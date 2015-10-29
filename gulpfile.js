// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    dotnet = require('./'),
    
    log = gutil.log,
    YELLOW = gutil.colors.yellow,
    RED = gutil.colors.red,
    GREEN = gutil.colors.green;

gulp.task('build', function(done) {
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

gulp.task('test', ['build'], function(done) {
    log(YELLOW('Verify result...'));
    
    var build_console = fs.existsSync('./build/My.DotNet.Component.Console/Release/dnx451/My.DotNet.Component.Console.dll')
        && fs.existsSync('./build/My.DotNet.Component.Console/Release/dnxcore50/My.DotNet.Component.Console.dll'),
        
        build_web = fs.existsSync('./build/My.DotNet.Component.Console/Release/dnx451/My.DotNet.Component.Console.dll')
        && fs.existsSync('./build/My.DotNet.Component.Console/Release/dnx451/My.DotNet.Component.Console.dll'),
        
        not_build_not_dotnet = !fs.existsSync('./build/My.NotDotNet.Component');
        
    var result = build_console && build_web && not_build_not_dotnet,
        resultText = result
            ? GREEN('Passed')
            : RED('Not passed'); 
    
    log(resultText);
    
    done(result ? null : new Error('Test not passed'));
});