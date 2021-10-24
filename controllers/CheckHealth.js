'use strict';

var utils = require('../utils/writer.js');
var CheckHealth = require('../service/CheckHealthService');

module.exports.checkhealth = function checkhealth (req, res, next) {
  CheckHealth.checkhealth()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
