(function() {
  'use strict';

  module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      notify: {
        watch: {
          options: {
            title: 'Who watches the watchmen?',
            message: '<%= pkg.name %> grunt tasks finished successfully.'
          }
        }
      },
      concat: {
        options: {
          separator: ';',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        dist: {
          files: {
            'js/app.js': ['js/jquery-1.10.2.min.js', 'js/foundation.min.js', 'js/main.js']
          }
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          sourceMap: 'js/source-map.js.map'
        },
        dist: {
          files: {
            'js/app.min.js': ['js/app.js']
          }
        }
      },
      jshint: {
        files: ['gruntfile.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },
      sass: {
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
      },
      watch: {
        files: ['<%= jshint.files %>', 'css/style.scss', 'js/main.js', 'css/foundation/*.scss'],
        tasks: 'default'
      }
    });

    // Load libs
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-notify');

    // Register the default tasks
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'notify']);

    // Create Production Build
    // Setup this to only run imagemin, sass:dist, etc when ready for production.
    //grunt.registerTask('production', ['jshint', 'concat', 'uglify', 'sass', 'notify']);
  };
}());
