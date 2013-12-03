module.exports = {
  options: {
    separator: ';',
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
  },

  dist: {
    files: {
      'js/app.js': ['js/jquery-1.10.2.min.js', 'js/foundation.min.js', 'js/main.js']
    }
  }
}
