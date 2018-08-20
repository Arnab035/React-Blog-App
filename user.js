var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url= "mongodb://localhost:27017/Blog";

module.exports={
  signup: function(name, email, password) {
    MongoClient.connect(url, function(err, db){
      console.log("connected");
    });
  }
}


