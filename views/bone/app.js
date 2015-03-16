var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var BreadcrumbView = require("./Views/breadcrumbView");
var DatabaseListView = require("./Views/DatabaseView");

var App = {
  init: function(){
    var crubView = new BreadcrumbView({el: "#breadcrumbs"});
//    var listView = new DatabaseListView({el : "#database-list"});
    var listView = new DatabaseListView();
    crubView.render();
    listView.render();
  }
};

$(function(){
  App.init();
});
