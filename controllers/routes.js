//Calling the Post Model to retreive and set information to the data bases
var result;
var modelos = require("../models/modelos");


module.exports = {
  registerRoutes: function(server) {

    server.get("/", this.c2);
    server.get("/practice2", this.practice2);
    server.get("/posts", this.getPosts);
    server.post("/posts", this.setPosts);
    server.use(this["404"]);
    server.use(this["500"]);

  },

  home: function(req, res, next) {
    res.render("index");
  },

  c2: function(req, res, next) {
    res.render("chapter2");
  },

  practice2: function(req,res,next){
    res.render("practice2");
  },

  getPosts: function(req, res, next) {

    var postDocument = modelos.postModel();
    var seed;

    // if (req.xhr) {
      if (postDocument.getPosts === undefined) {
        return res.status(500).json({error: 'getPosts is undefined'});
      }

      postDocument.getPosts(function callback (err,found){

        if(err) return next(err);

        if(found.length === 0){

          //seeding the database
          var newCreatedPost = new modelos.postModel({
            pudDate : '12-03-2015',
            title: 'hola mundo',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
          });

          //Created a new post to display
          seed = newCreatedPost.save(function (err, postSaved) {
      			if(err) return next(err);

            return postSaved;

      		//	res.json(postSaved);
      		});

        }

        if(seed)
        res.json(seed)
        else
        res.json(found);

      });

    // }
    // else {
    //   return next();
    // }

  },

  setPosts: function(req, res, next) {

    var postDocument;

    //the request came from AJAX?
    if (req.xhr) {

      //We are getting the data from the req and putting into the model
      postDocument = new modelos.postModel({
        pubDate: req.body.pudDate,
        title: req.body.title,
        content: req.body.content
      });

      result = postDocument.save(function callback(err, postSaved, numberAffected) {
        if (err) return {
          error: err
        };
        return postSaved;
      });

      if (result.error !== undefined) {
        return res.json(result);
      }
      return res.json(result);
    } else {
      return next();
    }
  },

  404: function(req, res) {
    res.status(400);
    res.send('400 - Page not found');
  },

  500: function(req, res, next) {
    res.status(500);
    res.send('500 - Server error');
  }
};
