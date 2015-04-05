var Backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");
Backbone.$ = $;

var DatabaseItemView = require("./databaseItemView");

module.exports = Backbone.View.extend({
  tagName: "table",
  className: "table table-striped",
  render: function () {
    var els = [];
    for (var i = 1; i <= 5; i++) {
      var itemView = new DatabaseItemView();
      els.push(itemView.render().el);
    }
    $(this.el).html(els);
    $("#database-list").html(this.el);
  }
});
