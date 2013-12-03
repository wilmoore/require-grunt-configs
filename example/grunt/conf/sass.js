module.exports = {
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      'css/style.min.css': 'css/style.scss'
    }
  },

  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      'css/style.css': 'css/style.scss'
    }
  }
}
