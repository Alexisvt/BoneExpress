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

    if(req.xhr)

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
