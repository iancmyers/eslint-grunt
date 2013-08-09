var hooker = require('grunt').util.hooker,
    path = require('path'),
    eslint = require('../tasks/lib/eslint'),
    fixtures = path.join(__dirname, 'fixtures');

var DEFAULTS = {
  config: path.relative(process.cwd(), path.join(__dirname, "../conf/eslint.json")),
};

exports.eslint = {
  setUp: function (done) {
    hooker.hook(console, 'log', { pre: function () { return hooker.preempt(); } });
    done();
  },

  tearDown: function (done) {
    hooker.unhook(console, 'log');
    done();
  },

  pass: function (test) {
    test.expect(1);

    var files = [path.join(fixtures, 'pass.js')];
    test.equal(eslint.lint(files, DEFAULTS), 0);

    test.done();
  },

  core: function (test) {
    test.expect(1);

    var files = [path.join(fixtures, 'fail-core.js')];
    test.equal(eslint.lint(files, DEFAULTS), 1);

    test.done();
  },

  force: function (test) {
    test.expect(1);

    var files = [path.join(fixtures, 'fail-core.js')];
    var options = { config: DEFAULTS.config, force: true }
    test.equal(eslint.lint(files, options), 0);

    test.done();
  },

  custom: function (test) {
    test.expect(2);

    var files = [path.join(fixtures, 'fail-custom-rule.js')];
    test.equal(eslint.lint(files, DEFAULTS), 0);

    var options = { rulesDir: 'test/rules', config: 'test/conf/custom.json' };
    test.equal(eslint.lint(files, options), 1);

    test.done();
  },

  modified: function (test) {
    test.expect(2);

    var files = [path.join(fixtures, 'fail-core-modified.js')];
    test.equal(eslint.lint(files, DEFAULTS), 0);

    var options = { config: 'test/conf/modified.json' };
    test.equal(eslint.lint(files, options), 1);

    test.done();
  },

  formatter: function (test) {
    test.expect(2);
    var options,
        files = [path.join(fixtures, 'fail-core-modified.js')];

    options = { config: DEFAULTS.config, formatter: 'checkstyle' };
    test.equal(eslint.lint(files, DEFAULTS), 0);

    options = { config: 'test/conf/modified.json', formatter: 'checkstyle' };
    test.equal(eslint.lint(files, options), 1);

    test.done();

  }

};
