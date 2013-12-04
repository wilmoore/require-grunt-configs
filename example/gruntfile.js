module.exports = function (grunt) {

  // load all configuration files
  var configuration = require("require-grunt-configs")(grunt, "grunt/conf");
  grunt.initConfig(configuration);

  // load custom tasks
  grunt.loadTasks("grunt/task");

  // load installed npm tasks
  require("load-grunt-tasks")(grunt);

  // Register the default tasks
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'notify']);

};
