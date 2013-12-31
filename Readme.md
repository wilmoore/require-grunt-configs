# require-grunt-configs 

[![Build Status](https://travis-ci.org/wilmoore/require-grunt-configs.png?branch=master)](https://travis-ci.org/wilmoore/require-grunt-configs)
[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations. I wrote this because even a trivial grunt configuration can look a bit unweildy lumped into one huge file. Check out the [before][] and [after][] examples to understand the benefit.

## Wait, What?

Keep your main gruntfile clean with task configurations extracted into individual files named after the task. For example, the `grunt jshint` configuration would go into `grunt/jshint.js` while the `grunt concat` configuration would go into `grunt/concat.js`.

Check out [these examples][grunt/conf] to get a more in-depth look at how this works.

## Installation

    % npm install require-grunt-configs --save-dev

### Configuration

When called, `require-grunt-configs` looks to the `grunt/` directory for configuration files if the second parameter is not specified; however, you may prefer a more organized directory structure such as the one below:

    grunt
    └── conf
        ├── concat.js
        └── jshint.js
        └── notify.js
        └── pkg.js
        └── sass.js
        └── uglify.js
        └── watch.js

In order to load the above configuration files, in your [Gruntfile][after] you would call `require-grunt-configs` specifying the second parameter as depicted in the following code sample:

    # look for configuration modules under the "grunt/conf" directory (this goes in your main Gruntfile).
    require('require-grunt-configs')(grunt, 'grunt/conf')
    
Explore the directory [grunt/conf][] to view the contents of the example configuration files listed above.

## Examples

- [Gruntfile][after]
- [grunt/conf]

## Inspiration

- [load-grunt-tasks][]

## Alternative

- [load-grunt-config][]

## License

  MIT

[load-grunt-tasks]:   https://github.com/sindresorhus/load-grunt-tasks
[before]:             https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.original.js
[after]:              https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.js
[grunt/conf]:         https://github.com/wilmoore/require-grunt-configs/tree/master/example/grunt/conf
[load-grunt-config]:  https://github.com/firstandthird/load-grunt-config

