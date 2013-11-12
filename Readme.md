# require-grunt-configs

[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations.

    grunt.initConfig(require('require-grunt-configs')(grunt));

## Installation

    % npm install require-grunt-configs

## Configuration Example

`% tree grunt`

    grunt
    └── config
        ├── common.js   # a convenient pattern for specifying common configuration values
        └── connect.js  # configuration file names correspond to task names (i.e. `connect` task)

`% cat grunt/config/common.js`

    module.exports =
      SOURCE_PATH: "src"

`% cat grunt/config/connect.js`

    module.exports =
      server:
        options:
          hostname: "*"
          port: 8800
          base: "<%= grunt.config.get('common.SOURCE_PATH') %>"

## Custom root directory

    grunt.initConfig(require('require-grunt-configs')(grunt, '.grunt/conf'));

## Inspiration

- [load-grunt-tasks][]

## License

  MIT

[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks

