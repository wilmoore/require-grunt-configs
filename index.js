var path = require('path');

module.exports = function(grunt, rootdir) {
  'use strict';

  var config = {};

  // default root directory
  rootdir || (rootdir = 'grunt');

  grunt.file.recurse(rootdir, function callback(abspath, rootdir, subdir, filename) {
    var name = path.basename(filename, path.extname(filename));
    var file = path.resolve('.', abspath);

    config[name] = require(file);
  });

  return config;
};
