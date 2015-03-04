//Calling the Post Model to retreive and set information to the data bases
var PostModel = require('../models/postModel');

module.exports = {
  registerRoutes: function (server){
    server.get('/', this.home);
    server.get('/posts', this.getPosts);
    server.post('/posts', this.setPosts);
    server.use(this['404']);
    server.use(this['500']);
  },

  home: function(req,res,next){
    res.render("index.ejs");
  },

  getPosts: function (req,res){
    //get data from the database

    res.json(results);
  },

  setPosts: function (req,res){

    var post;

    //the req came from AJAX?
    if(req.xhr)
    {
      //We are getting the data from the req and putting into the model
      post = new PostModel({
        pubDate : req.body.pudDate,
        title: req.body.title,
        content: req.body.content
      })

      post.save(function callback (err){
        if(err) return console.log(err);
      });
    }

    //put data to the database then send the results
    res.json(results);
  },

  404: function(req,res){
    res.status(400);
    res.send('400 - Page not found');
  },

  500: function(req,res,next) {
    res.status(500);
    res.send('500 - Server error');
  }
};
