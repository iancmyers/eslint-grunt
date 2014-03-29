var eslint = require("eslint");

module.exports = {
  lint: function (files, options) {
    var args = ["node", "eslint"];

    options = options || {};

    if (options.config) {
      args.push("-c", options.config);
    }

    if (options.formatter) {
      args.push("-f", options.formatter);
    }

    if (options.rulesDir) {
      args.push("--rulesdir", options.rulesDir);
    }

    if (options.force) {
      return 0;
    }

    return eslint.cli.execute(args.concat(files));
  }
};
