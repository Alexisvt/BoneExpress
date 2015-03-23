var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;
var Movies = require("collections/movies");
var data = require("./movies.json");
var movies = new Movies(data);
var Monitor = require("./monitor");
var monitor = new Monitor(movies);

module.exports = {movies: movies, MovieViews: {}};
