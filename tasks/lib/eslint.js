var eslint = require('eslint');

exports.init = function (grunt) {
  var exports = {};

  function parseOptions (options) {
    var args = [];

    if (options.config) {
      if (grunt.file.exists(options.config)) {
        args.push('-c', options.config);
      } else {
        grunt.warn("config:" + options.config + " could not be found");
      }
    }

    if (options.reporter) {
      args.push('-f', options.reporter);
    }

    if (options.rulesDir) {
      if (grunt.file.isDir(options.rulesDir)) {
        args.push('--rulesdir', options.rulesDir);
      } else {
        grunt.warn("rulesDir:" + options.rulesDir + " could not be found");
      }
    }

    return args;
  }

  exports.lint = function (files, options, callback) {
    var args = parseOptions(options),
        results = '';
    
    grunt.util.hooker.hook(console, 'log', {
      pre: function (msg) {
        results = results + msg;
        return grunt.util.hooker.preempt();
      }
    });

    eslint.cli.execute(args.concat(files));

    grunt.util.hooker.unhook(console, 'log');

    if (results == '\n0 problems') {
      grunt.log.ok(results);
    } else {
      grunt.log.error(results);
    }

    callback(results);
  };

  return exports;

};
