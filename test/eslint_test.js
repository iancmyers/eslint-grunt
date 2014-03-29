var hooker = require('grunt').util.hooker,
    path = require('path'),
    eslint = require('../tasks/lib/eslint'),
    assert = require('assert')
    fixtures = path.join(__dirname, 'fixtures');

suite('eslint-grunt', function () {

  before(function (done) {
    hooker.hook(console, 'log', { pre: function () { return hooker.preempt(); } });
    done();
  });

  after(function (done) {
    hooker.unhook(console, 'log');
    done();
  })

  test('pass', function () {
    var files = [path.join(fixtures, 'pass.js')];
    assert.equal(eslint.lint(files), 0);
  });

  test('core', function () {
    var files = [path.join(fixtures, 'fail-core.js')];
    assert.equal(eslint.lint(files), 1);
  });

  test('force', function () {
    var files = [path.join(fixtures, 'fail-core.js')];
    var options = { force: true };
    assert.equal(eslint.lint(files, options), 0);
  });

  test('custom', function () {
    var files = [path.join(fixtures, 'fail-custom-rule.js')];
    assert.equal(eslint.lint(files), 0);

    var options = { rulesDir: 'test/rules', config: 'test/conf/custom.json' };
    assert.equal(eslint.lint(files, options), 1);
  });

  test('modified', function () {
    var files = [path.join(fixtures, 'fail-core-modified.js')];
    assert.equal(eslint.lint(files), 0);

    var options = { config: 'test/conf/modified.json' };
    assert.equal(eslint.lint(files, options), 1);
  });

  test('formatter', function () {
    var options,
        files = [path.join(fixtures, 'fail-core-modified.js')];

    options = { config: 'test/conf/modified.json', formatter: 'checkstyle' };
    assert.equal(eslint.lint(files, options), 1);
  });

});
