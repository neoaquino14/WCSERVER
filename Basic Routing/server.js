//Aquino, Neo F.
//server.js
//This program starts a server that will listen on port 2022 for connection

var express = require("Express");

var app = express();

app.get("/", function(req, res) 
{
  res.send("Successfully created the second App!");
});

var server = app.listen(2022, 'localhost', function()
{
  var host = server.address().address
  var port = server.address().port

  console.log("Server running at http://%s:%s", host, port)
})

