var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var BreadcrumbView = require("./Views/breadcrumbView");

var App = {
  init: function(){
    var crubView = new BreadcrumbView({el : "#breadcrumbs"});
    crubView.render();
  }
};

$(function(){
  App.init();
})
