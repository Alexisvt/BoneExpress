var mongoose = require('mongoose');

//Defining Post Schema
var postSchema = mongoose.Schema({
  // id : 'String',
  pubDate: 'String',
  title: 'String',
  content: 'String'
});

module.exports = postSchema;
