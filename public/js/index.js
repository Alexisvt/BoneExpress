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


var BreadcrumbView = Backbone.View.extend({
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
