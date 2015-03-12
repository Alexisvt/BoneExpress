var Schema = require('mongoose').Schema;

//Defining Post Schema
var postSchema = new Schema({
  pubDate: String,
  title: String,
  content: String
});

// cb is the callback function
postSchema.methods.getPosts = function(cb){
  /*
      this.model('postModel') ese nombre debe de ser el mismo nombre que
      tiene que tener el modelo ej: var postModel = mongoose.model('postModel', postSchema)
      Ademas ese metodo sera accesible solo en el documento que haremos
      ej: var postDocument = postModel();
      postDocument.getPosts()
  */
  return this.model('postModel').find({}, cb);
};

module.exports = postSchema;
