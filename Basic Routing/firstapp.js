//Aquino, Neo F.
//firstapp.js
//This program demonstrates on creating and running an Express Application

const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response) 
{
  response.send("Hello World!");
});

app.listen(2050, function() 
{
  console.log('Server running at http://localhost:2050');
});
