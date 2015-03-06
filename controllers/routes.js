//Calling the Post Model to retreive and set information to the data bases
var modelos = require('../models/modelos');
var result;

module.exports = {
  registerRoutes: function(server) {

    server.get('/', this.home);
    server.get('/posts', this.getPosts);
    server.post('/posts', this.setPosts);
    server.use(this['404']);
    server.use(this['500']);

  },

  home: function(req, res, next) {
    res.render("index.ejs");
  },

  getPosts: function(req, res, next) {

    if (req.xhr) {
      if (modelos.postModel.getPosts === undefined) {
        return res.status(500).json({error: 'getPosts is undefined'});
      }
      result = modelos.postModel.getPosts();

      if (result.error !== undefined) {
        return res.json(result);
      }

      return res.json(result);
    } else {
      return next();
    }
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
