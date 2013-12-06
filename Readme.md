# require-grunt-configs 

[![Build Status](https://travis-ci.org/wilmoore/require-grunt-configs.png?branch=master)](https://travis-ci.org/wilmoore/require-grunt-configs)
[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations. Very similar to [load-grunt-tasks][] but for configuration. Check out the [before][] and [after][] to understand the benefit.

## Wait, What?

Keep your main gruntfile clean while task configurations are tucked neatly away into individual files named after the task (i.e. `jshint.js`).

Check out the [example](https://github.com/wilmoore/require-grunt-configs/tree/master/example/grunt/conf) configuration modules to get a feel for how this works.

## Installation

    % npm install require-grunt-configs --save-dev

### gruntfile.js

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

### configuration modules

    grunt
    └── conf
        ├── concat.js
        └── jshint.js
        └── notify.js
        └── pkg.js
        └── sass.js
        └── uglify.js
        └── watch.js

Explore the directory [grunt/conf](https://github.com/wilmoore/require-grunt-configs/tree/master/example/grunt/conf) to view the contents of the above files.

## Root directory configuration examples

    # your configuration modules go under the "grunt" directory (default)
    require('require-grunt-configs')(grunt)

    # your configuration modules go under the ".grunt/conf" directory
    require('require-grunt-configs')(grunt, '.grunt/conf')

## Inspiration

- [load-grunt-tasks][]

## License

  MIT

[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks
[before]:           https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.original.js
[after]:            https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.js

