gulp-dotnet5
============

Gulp plugin for .NET 5.

## Installation

```
npm install gulp-dotnet5
```

## Usage

Preferably, save this as dev dependency during installation:

```
npm install gulp-dotnet5 --save-dev
```

```javascript
var gulp = require('gulp'),
	dotnet = require('gulp-dotnet5');
	
gulp.task('build', function() {
	return gulp.src(path.join('**/project.json'))
		.pipe(dotnet.dnu('restore', {
			verbose: true,
			args: [
				'<%= file.path %>',
				'--no-cache',
				'--quiet'
			]
		}))
		.pipe(dotnet.dnu('build', {
			outPathBase: './build',
			args: [
				'<%= file.path %>',
				'--out', '<%= outPath %>',
				'--configuration', 'Release'
			]
		}));
});
```

## API

### .dnu(action, options)

Run  the DNU (Microsoft .NET Development Utility) tool.

#### action
type: `String`

A action to make up the DNU command.

Eg: action `restore` generate command `dnu restore`.

#### options.env
type: `Object`

default `process.env`.

Environment variables for process. You override the original variables with this option.

#### options.cwd
type: `String`

default: `process.cwd()`

Sets the current working directory for the command.

#### options.verbose
type: `Boolean`

default: `false`

If `true`, it will print the command output and other log messages.

#### options.outPathBase
type: `String`

default: `%FILE.PATH%/bin/artifacts`

Base path to join with the way .NET component and provide the variable `outPath` that can be used in arguments.

Eg:

`outPathBase => './build'` and `component => './src/My.Component/project.json'` creates `outPath => './build/My.Component'`.
 
#### options.args
type: `Array` of `String`

A list of arguments of command line tool. Use `<%= VarName %>` to use values of the processing file.

##### Possible variables:
* `file.path`: Absolute pathname of `project.json` file.
* `file.relative`: path.relative of `project.json` file.
* `file.dirname`: path.dirname of `project.json` file.
* `file.basename`: path.basename of `project.json` file.
* `file.stem`: (filename without suffix) of `project.json` file.
* `file.`: path.extname of `project.json` file.
* `outPath`: Combination of `options.outPathBase` with the .NET component directory processing.

### .dnx(command, options)

> TODO: Not implemented!

### .dnvm(command, options)

> TODO: Not implemented!