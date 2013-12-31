# require-grunt-configs 

[![Build Status](https://travis-ci.org/wilmoore/require-grunt-configs.png?branch=master)](https://travis-ci.org/wilmoore/require-grunt-configs)
[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations. I wrote this because even a trivial grunt configuration can look a bit unweildy lumped into one huge file. Check out the [before][] and [after][] examples to understand the benefit.

## Wait, What?

Keep your main gruntfile clean with task configurations extracted into individual files named after the task: 

    `grunt/jshint.js` => `grunt jshint`
    `grunt/uglify.js` => `grunt uglify`
    `grunt/concat.js` => `grunt concat`

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

When called, `require-grunt-configs` looks to the `grunt/` directory for configuration files if the second parameter is not specified; however, you may prefer to better organize your configurations like the example below:

    grunt
    └── conf
        ├── concat.js
        └── jshint.js
        └── notify.js
        └── pkg.js
        └── sass.js
        └── uglify.js
        └── watch.js

In order to load the above configuration files, you would call `require-grunt-configs` specifying the second parameter as depicted below:

    # look for configuration modules under the "grunt/conf" directory
    require('require-grunt-configs')(grunt, 'grunt/conf')
    
Explore the directory [grunt/conf](https://github.com/wilmoore/require-grunt-configs/tree/master/example/grunt/conf) to view the contents of the example configuration files listed above.

## Inspiration

- [load-grunt-tasks][]

## Alternative

- [load-grunt-config][]

## License

  MIT

[load-grunt-tasks]:   https://github.com/sindresorhus/load-grunt-tasks
[before]:             https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.original.js
[after]:              https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.js
[load-grunt-config]:  https://github.com/firstandthird/load-grunt-config

