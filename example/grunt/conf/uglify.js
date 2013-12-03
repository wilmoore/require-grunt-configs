module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    sourceMap: 'js/source-map.js.map'
  },

  dist: {
    files: {
      'js/app.min.js': ['js/app.js']
    }
  }
}
