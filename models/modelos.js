var mongoose = require("mongoose");
var schemas = require("./schemas/schemas");

//Definiendo objeto que tendra todos los modelos
module.exports = {
  postModel: mongoose.model("postModel", schemas.PostSchema)
};
