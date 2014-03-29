module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      all: ["Gruntfile.js", "tasks/**/*.js"]
    },

    mochacli: {
      options: {
        reporter: "dot",
        ui: "tdd"
      },
      all: ["test/eslint_test.js"]
    }
  });

  grunt.loadTasks("tasks");

  grunt.loadNpmTasks("grunt-mocha-cli");

  grunt.registerTask("test", ["eslint", "mochacli"]);
  grunt.registerTask("default", ["test"]);
};
