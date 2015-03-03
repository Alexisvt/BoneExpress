var express = require("express");
var mongoose = require("mongoose");
var server = express();
var routes = require("./controllers/routes.js")
var bodyParser = require("body-parser");

//setting the server
server.set('port', process.env.PORT || 3500);
server.set('view cache', true);

//connecting to mongoDB
mongoose.connect("mongodb://localhost/blog")
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback){
  console.log('we are in and connected');
});

//middlewares
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

//Implementing MVC Pattern
//Calling Controllers aka routing
if( routes.registerRoutes !== undefined){
  routes.registerRoutes(server);
}
else{
  console.log('routes are undefined');
}


//starting the server
server.listen(server.get('port'), function () {
  console.log("Express started on http://localhost:" + server.get('port'));
})
