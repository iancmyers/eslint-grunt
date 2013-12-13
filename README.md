# eslint-grunt [![Build Status](https://travis-ci.org/iancmyers/eslint-grunt.png?branch=master)](https://travis-ci.org/iancmyers/eslint-grunt)

> Validate files with ESLint.

## About ESLint

[ESLint](https://github.com/nzakas/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Esprima for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

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

The eslint task can be run with the `grunt eslint` command. Files to run through ESLint and options may be specified according to the grunt [configuring tasks guide](http://gruntjs.com/configuring-tasks). There are a few options that you may pass to the eslint task, _all of which are optional_:

* **config** _String_: This should be a path to your ESLint config JSON file. This must be a valid ESLint config JSON. Note that `eslint-grunt` will respect the reporting level in your ESLint config JSON (1 is warn, 2 is error). Warn will let the task exit successfully. Error will fail the task. If a config is not specified, the default JSON file will be used. Take a look at the [default ESLint config JSON](https://github.com/iancmyers/eslint-grunt/blob/master/tasks/conf/eslint.json) and the [ESLint rules documentation](https://github.com/nzakas/eslint/blob/master/docs/rules/README.md).

* **rulesDir** _String_: The path to the directory containing your custom rules. These rules will be made available in addition to the rules that ship with ESLint core. You can take a look at the [source for the ESLint core rules](https://github.com/nzakas/eslint/tree/master/lib/rules) as an example for how to write your own, or read the ESLint [working with rules guide](https://github.com/nzakas/eslint/blob/master/docs/Working-with-Rules.md). _You must enable custom rules in your config file in the same way that ESLint core rules are enabled_. The rule key will be the same as your rule filename.

* **formatter** _String_: The name of a built-in formatter or the path to a custom ESLint formatter. By default a variation on ESLint's default formatter will be used.

* **force** _Boolean_: When set to `true`, this option will force the task to pass, even if ESLint encounters errors (rules set to 2). This is useful if you'd like to use the same config for development and testing.

In addition, `eslint-grunt` will also respect options set in your `.eslintrc` file.

## Examples

### Task Configurations

Simplest configuration. Lint all of the JavaScript files in the project:

```js
module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      all: ['**/*.js']
    }
  });

  grunt.loadNpmTasks('eslint-grunt');
};
```

Lint all of the JavaScript files in the project using the the rules configuration at `conf/eslint.json` and the custom rules in the `conf/rules` directory:

```js
module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      all: ['**/*.js'],
      options: {
        config: "conf/eslint.json",
        rulesDir: "conf/rules"
      }
    }
  });

  grunt.loadNpmTasks('eslint-grunt');
};
```

Load custom rules from `conf/rules`, lint all of the server-side JavaScript using the rules specified in `conf/eslint-node.json` and lint all of the client-side JavaScript using the rules specified in `conf/eslint-browser.json`:

```js
module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      options: {
        rulesDir: "conf/rules"
      },

      nodeFiles: {
        files: {
          src: ['server/**/*.js']
        },
        options: {
          config: "conf/eslint-node.json"
        }
      },

      browserFiles: {
        files: {
          src: ['client/**/*.js']
        },
        options: {
          config: "conf/eslint-browser.json"
        }
      }
    }
  });

  grunt.loadNpmTasks('eslint-grunt');
};
```
### ESLint Configuration JSON

All rules below that are set to `2` will report an error, meaning the `eslint` grunt task will fail. All rules that are set to `1` will report a warning, but will not cause the task to fail. All rules that are set to `0` are off.

If you do not want to ever fail the task, set all the rules you want on to `1`. Similarly, if you'd like to always fail the task when encountering a problem, set all the rules you want on to `2`.

```js
{
    "rules": {

        "no-alert": 2,
        "no-caller": 2,
        "no-bitwise": 0,
        "no-console": 2,
        "no-dangle": 1,
        "no-debugger": 2,
        "no-empty": 2,
        "no-eval": 1,
        "no-ex-assign": 2,
        "no-floating-decimal": 0,
        "no-implied-eval": 2,
        "no-with": 2,
        "no-fallthrough": 2,
        "no-unreachable": 2,
        "no-undef-init": 2,
        "no-octal": 2,
        "no-obj-calls": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-native-reassign": 2,
        "no-plusplus": 0,
        "no-delete-var": 2,
        "no-return-assign": 2,
        "no-new-array": 2,
        "no-new-object": 2,
        "no-label-var": 2,
        "no-ternary": 0,
        "no-self-compare": 0,

        "smarter-eqeqeq": 0,
        "brace-style": 1,
        "camelcase": 2,
        "curly": 2,
        "dot-notation": 1,
        "eqeqeq": 1,
        "new-parens": 2,
        "guard-for-in": 0,
        "radix": 0,
        "new-cap": 2,
        "quote-props": 0,
        "semi": 2,
        "use-isnan": 2,
        "quotes": [1, "double"],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "regex-spaces": 2,
        "complexity": [0, 11],
        "wrap-iife": 1,
        "no-multi-str": 2
    }
}
```
