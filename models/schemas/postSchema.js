var mongoose = require('mongoose');

//Defining Post Schema
var postSchema = new mongoose.Schema({
  // id : 'String',
  pubDate: 'String',
  title: 'String',
  content: 'String'
});

postSchema.methods.getPosts = function(){
  return this.model('Post').find({}, function callback (err,postsFound,numberPostFound){

    if(err) return {error : err};

    return postsFound;
  });
}

module.exports = postSchema;
