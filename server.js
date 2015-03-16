var express = require("express");
var mongoose = require("mongoose");
var server = express();
var routes = require("./controllers/routes.js")
var bodyParser = require("body-parser");

//setting the server
server.set('port', process.env.PORT || 3500);
server.set('view cache', true);
server.set('view engine', 'jade');
//server.locals._ = require("underscore");

//connecting to mongoDB
mongoose.connect("mongodb://localhost/blog")

mongoose.connection.on('error', function (err) {
  if(err){

    console.log('Mongoose connection error: ' + err);

    mongoose.connection.close(function () {
      console.log('Mongoose default connection close for error on the connection')
    });
  }
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnnected');
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  })
})

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
