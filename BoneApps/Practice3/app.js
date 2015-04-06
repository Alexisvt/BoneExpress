var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var breadCrumbView = require("./views/breadCrumbView");
var databaseListView = require("./views/databaseListView");

module.exports = {
  init: function () {
    var breadCrumb = new this.BreadCrumbView({el: "#breadcrumbs"});
    breadCrumb.render();
    var dbView = new this.DatabaseListView();
    dbView.render();
  },
  BreadCrumbView: breadCrumbView,
  DatabaseListView: databaseListView
};
