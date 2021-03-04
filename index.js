//npm init
//npm install express --save
var express = require("express");
var app = express();
var port = 3000;

app.get("/", function (request, response) {
  response.send("<h1>Hello ExpressJS</h1>");
});

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
