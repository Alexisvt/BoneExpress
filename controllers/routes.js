module.exports = {
  registerRoutes: function (server){
    server.get('/', this.home);
    server.use(this['404']);
    server.use(this['500']);
  },

  home: function(req,res,next){
    res.render("index.ejs");
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
