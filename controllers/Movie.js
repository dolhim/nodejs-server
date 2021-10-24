'use strict';

var utils = require('../utils/writer.js');
var Movie = require('../service/MovieService');

module.exports.getMovieList = function getMovieList (req, res, next) {
  var apikey = req.swagger.params['apikey'].value;
  var credential = req.swagger.params['credential'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  var genre = req.swagger.params['genre'].value;
  Movie.getMovieList(apikey,credential,offset,limit,genre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
