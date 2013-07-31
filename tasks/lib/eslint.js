var eslint = require("eslint");

module.exports = {
  lint: function (files, options) {
    var args = [];

    if (options.config) {
      args.push("-c", options.config);
    }

    if (options.formatter) {
      args.push("-f", options.formatter);
    }

    if (options.rulesDir) {
      args.push("--rulesdir", options.rulesDir);
    }

    return eslint.cli.execute(args.concat(files));
  }
};
