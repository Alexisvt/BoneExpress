//Especial rule to ignore jshint missing values
/* jshint -W117 */

var Backbone = require("backbone");
var $ = require("jquery");
var _ = require("underscore");
Backbone.$ = $;

var DatabaseView = Backbone.View.extend({
//  tagName: "li",

  events: {
    "click a": "diHola"
  },

  diHola: function () {
    alert('Hola mundo');
  },

  render: function () {
    var template = $("#database-list-template").html();
    var compiled = _.template(template, {name: "Templated Name"});
    $(this.el).html(compiled);
    return this;
  }
});

var DatabaseListView = Backbone.View.extend({
  tagName: "ul",

  render: function () {
    var i;
    var els = [];
    for (i = 0; i <= 5; i++) {
      var itemView = new DatabaseView();
      els.push(itemView.render().el);
    }

    $(this.el).html(els);
//    return this;
    $('#database-list').html(this.el);
  }
});

module.exports = DatabaseListView;
