module.exports = function (grunt) {

  var eslint = require('./lib/eslint').init(grunt);

  grunt.registerMultiTask('eslint', 'Validate files with ESLint.', function() {
    var options = this.options({ force: false }),
        passed = true,
        force = options.force;

    var done = this.async();

    delete options.force;

    eslint.lint(this.filesSrc, options, function (results) {
      if (!results.match(/^(\s+)?0 problems/)) {
        passed = force;
      }
      
      done(passed);
    });
  });

};
