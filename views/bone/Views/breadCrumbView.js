var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

module.exports = Backbone.View.extend({
  render: function(){
    $(this.el).html("<h1>DATABASES</h1>");
  }
});
