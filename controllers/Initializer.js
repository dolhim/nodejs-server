var async = require("async");
var lib = require('../lib/sharedLibrary');

exports.initialize = (callback) => {
    async.waterfall([ 
      lib.mongoDBCheck,
      lib.cacheServerCheck
    ], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      };
    });
  }