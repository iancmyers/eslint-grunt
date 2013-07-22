module.exports = function (grunt) {

  grunt.config.init({
    eslint: {
      all: ['Gruntfile.js', 'tasks/**/*.js'],

      options: {
        config: "conf/eslint.json"
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['eslint', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};