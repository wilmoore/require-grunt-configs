# require-grunt-configs 

[![Build Status](https://travis-ci.org/wilmoore/require-grunt-configs.png?branch=master)](https://travis-ci.org/wilmoore/require-grunt-configs)
[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations. I wrote this because even a trivial grunt configuration can look a bit unwieldy as one huge file. Check out the [before][] and [after][] examples to understand the benefit.

## Wait, What?

Keep your main [Gruntfile clean][after] by extracting configuration into individual files. The name of the file is the same as the task name. For example, the `grunt jshint` configuration would go into `grunt/jshint.js` while the `grunt concat` configuration would go into `grunt/concat.js`.

Check out [these examples][grunt/conf] for a more in-depth look at how this works.

## Installation

    % npm install require-grunt-configs --save-dev

### Configuration

By default, `require-grunt-configs` loads files from the `grunt` directory; however, you may prefer a more organized directory structure (as do I) such as the one below:

    grunt
    └── conf
        ├── concat.js
        └── jshint.js
        └── notify.js
        └── pkg.js
        └── sass.js
        └── uglify.js
        └── watch.js

In order to load the above configuration files, in your [Gruntfile][after] add:

    require('require-grunt-configs')(grunt, 'grunt/conf')

Explore the directory [grunt/conf][] to view the contents of the example configuration files listed above.

## Examples

- [Go ahead, have a look][examples].

## Inspiration

- [load-grunt-tasks][]

## Alternatives

- [load-grunt-config][]: _does a lot more than configuration._
- [grunt-configure][]: _I wasn't comfortable with the LOC and dependency list given the task._
- how [@cowboy][] modularizes [Gruntfiles][cowboy]: _uses tasks for external config -- I will be exploring this approach for future projects._

## License

  MIT

[load-grunt-tasks]:   https://github.com/sindresorhus/load-grunt-tasks
[before]:             https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.original.js
[after]:              https://github.com/wilmoore/require-grunt-configs/blob/master/example/gruntfile.js
[grunt/conf]:         https://github.com/wilmoore/require-grunt-configs/tree/master/example/grunt/conf
[examples]:           https://github.com/wilmoore/require-grunt-configs/tree/master/example
[load-grunt-config]:  https://github.com/firstandthird/load-grunt-config
[grunt-configure]:    https://npmjs.org/package/grunt-configure
[@cowboy]:            https://github.com/cowboy
[cowboy]:             https://github.com/cowboy/wesbos/blob/master/Gruntfile.js

