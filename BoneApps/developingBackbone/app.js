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


var modelListener = Config.Backbone.Model.extend({
  defaults: {
    title: "",
    completed: false
  },
  initialize: function(){
    console.log("This model has been initialized");
    this.on("change:title", function(){
      console.log("Title value for this model have changed");
    });
    this.on("change:completed", function(){
      console.log("Completed value for this model have changed");
    });
  },
  setTitle: function(newTitle){
    this.set({title: newTitle});
    console.log("The new title is: " + this.get("title"));
  },
  setCompleted: function(newCompleted){
    this.set({completed:newCompleted});
  }
})


// var getModel= Config.Backbone.Model.extend({
//
// })

module.exports= {
  model: todo,
  initModel: initModel,
  modelListener: modelListener,
  Backbone: Config.Backbone
  };
