var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "/html")));

app.listen(9000, function(){
    console.log("Blog Server Started listening on port 9000");
});
