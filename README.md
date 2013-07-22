# eslint-grunt [![Build Status](https://travis-ci.org/iancmyers/eslint-grunt.png?branch=master)](https://travis-ci.org/iancmyers/eslint-grunt)

> Validate files with ESLint.

## About ESLint

[ESLint](https://github.com/nzakas/eslint) is a tool for identifying and reporting on patterns in JavaScript, often for the purposes of validation. Rules a pluggable, so you can create your own custom rules to validate against.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install eslint-grunt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('eslint-grunt');
```

## The eslint Task

The eslint task can be run with the `grunt eslint` command. Files to run through ESLint and options may be specified according to the grunt [configuring tasks guide](http://gruntjs.com/configuring-tasks). There are a few options that you may pass to the eslint task:

**config** (_optional_, _String_): This should be a path to your ESLint config JSON file. This must be a valid ESLint config JSON. If a config is not specified, the default file will be used. Take a look at the [default ESLint config JSON](https://github.com/nzakas/eslint/blob/master/conf/eslint.json) and the [ESLint rules documentation](https://github.com/nzakas/eslint/blob/master/docs/Rules.md).

**rulesDir** (_optional_, _String_): The path to the directory containing your custom rules. These rules will be made available in addition to the rules that ship with ESLint core. You can take a look at the [source for the ESLint core rules](https://github.com/nzakas/eslint/tree/master/lib/rules) as an example for how to write your own, or read the ESLint [working with rules guide](https://github.com/nzakas/eslint/blob/master/docs/Working-with-Rules.md).

**force** (_optional_, _Boolean_): When force is set to `true` errors will be reported, but they will not fail the task.
