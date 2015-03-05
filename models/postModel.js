var mongoose = require('mongoose');
var postSchema = require('./schemas/postSchema');

//Defining Model from postSchema
var Post = mongoose.model('Post', postSchema);

module.exports = Post;
