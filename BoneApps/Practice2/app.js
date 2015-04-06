var Config = require("config");

var todo= Config.Backbone.Model.extend({
  defaults: {
    title: "",
    completed: false
  }
});

var initModel = Config.Backbone.Model.extend({
  initialize: function(){
    console.log("This model has been initialize");
  }
})

// var getModel= Config.Backbone.Model.extend({
//
// })

module.exports= {model: todo, initModel: initModel};
