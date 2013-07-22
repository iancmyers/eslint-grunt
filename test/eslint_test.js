var grunt = require('grunt'),
    path = require('path'),
    eslint = require('../tasks/lib/eslint').init(grunt),
    fixtures = path.join(__dirname, 'fixtures');

exports.eslint = {
  pass: function (test) {
    test.expect(1);

    var files = [path.join(fixtures, 'pass.js')];

    eslint.lint(files, {}, function (results) {
      test.ok(results === "\n0 problems");
    });

    test.done();
  },

  core: function (test) {
    test.expect(1);

    var files = [path.join(fixtures, 'fail-core.js')];

    eslint.lint(files, {}, function (results) {
      test.ok(results != "\n0 problems");
    });

    test.done();
  },

  custom: function (test) {
    test.expect(2);

    var files = [path.join(fixtures, 'fail-custom-rule.js')];

    eslint.lint(files, {}, function (results) {
      test.ok(results === "\n0 problems");
    });

    var options = {
      rulesDir: 'test/rules',
      config: 'test/conf/custom.json'
    };

    eslint.lint(files, options, function (results) {
      test.ok(results.match("He who shall not be named must remain unnamed."));
    });

    test.done();
  },

  modified: function (test) {
    test.expect(2);

    var files = [path.join(fixtures, 'fail-core-modified.js')];

    eslint.lint(files, {}, function (results) {
      test.ok(results === "\n0 problems");
    });

    var options = {
      config: 'test/conf/modified.json'
    };

    eslint.lint(files, options, function (results) {
      test.ok(results != "\n0 problems");
    });

    test.done();
  }

};
