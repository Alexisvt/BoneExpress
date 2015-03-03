var Backbone = require("backbone");
var $ = require("jquery");

Backbone.$ = $;

//defining a backbone model
var Post = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: Post,
  url: "/posts"
})
