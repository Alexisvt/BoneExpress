var mongoose = require('mongoose');
var postSchema = require('./schemas/postSchema');

//Defining Model from postSchema
exports.PostModel = mongoose.model('Post', postSchema);
