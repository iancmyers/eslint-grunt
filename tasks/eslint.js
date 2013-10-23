var eslint = require("./lib/eslint"),
    path = require("path");

var DEFAULTS = {
  formatter: path.relative(process.cwd(), path.join(__dirname, "formatters/grunt.js"))
};

module.exports = function (grunt) {

  grunt.registerMultiTask("eslint", "Validate files with ESLint.", function() {
    var options = this.options(DEFAULTS),
        files = this.filesSrc;

    return eslint.lint(files, options) === 0;
  });

};
