module.exports = function (grunt) {

  // configuration
  var configuration = require("require-grunt-configs")(grunt);

  // load all configuration files
  grunt.initConfig(configuration);

  // load custom tasks
  grunt.loadTasks("grunt/task");

  // load installed npm tasks
  require("load-grunt-tasks")(grunt);

  // Register the default tasks
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'notify']);

};
