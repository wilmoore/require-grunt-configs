module.exports = function (grunt) {
  var title = grunt.option('title');

  return {
    watch: {
      options: {
        title:   title || 'Who watches the watchmen?',
        message: '<%= pkg.name %> grunt tasks finished successfully.'
      }
    }
  };
};
