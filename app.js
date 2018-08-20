var express = require("express");
var path = require("path");
var user = require("./user");

var bodyParser = require("body-parser");

var app = express();

app.use(express.static(path.join(__dirname, "/html")));

app.use(bodyParser.json());

app.listen(9000, function(){
    console.log("Blog Server Started listening on port 9000");
});

app.post('/signin', function(request, response){
    var username = request.body.email;
    var password = request.body.password;
    if (username == "admin" && password == "admin") {
      response.send("success");
    } else {
      response.send("failure"); 
    }
});

app.post('/signup', function(request, response){
    user.signup('','','');
    console.log(response);
});
