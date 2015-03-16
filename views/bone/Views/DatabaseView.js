var Backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");
Backbone.$ = $;

var DatabaseView = Backbone.View.extend({
  tagName: "tr",
  events: {
    "click a": "diHola",
    "click button": "diHola"
  },
  diHola: function (){
    return alert("hola mundo");
  },
  render: function() {
    "use strict";
    var template = $("#database-list-template").html();
    var compiled = _.template(template, {name: "hola mundo"});
    $(this.el).html(compiled);
    return this;
  }
});

var DatabaseListView = Backbone.View.extend({
  tagName: "table",
  className: "table table-striped",
  render: function () {
    var i;
    var els = [];
    for (i = 1; i <= 5; i++) {
      var itemView = new DatabaseView();
      els.push(itemView.render().el);
    }

//    return this;
    $(this.el).html(els);
    $("#database-list").html(this.el);
  }
});

module.exports = DatabaseListView;
