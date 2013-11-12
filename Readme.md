# require-grunt-configs

[![Build Status](https://david-dm.org/wilmoore/require-grunt-configs.png)](https://david-dm.org/wilmoore/require-grunt-configs)
[![NPM version](https://badge.fury.io/js/require-grunt-configs.png)](http://badge.fury.io/js/require-grunt-configs)

  Load a directory of grunt configurations.

## Installation

    % npm install require-grunt-configs

## Usage

    var configuration = require('require-grunt-configs')(grunt);
    grunt.config.init(configuration);

## Inspiration

- [load-grunt-tasks][]

## License

  MIT

[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks
