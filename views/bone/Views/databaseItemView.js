var Backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: "tr",
  events: {
    "click a": "sayHello",
    "click button": "sayHello"
  },
  sayHello: function(){
    alert("hello");
  },
  render: function (){
    var template = $("#database-list-template").html();
    var compiled = _.template(template);
    $(this.el).html(compiled({name: "Template Name var"}));
    return this;
  }
});
