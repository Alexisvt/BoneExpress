var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

module.exports = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li><h3><a href="#"> DATABASES</a></h3></li>');
  },

  events: {
    "click a": "diHola"
  },

  diHola: function(){
    alert("Hola a todos");
  }

});
