//Aquino, Neo F.
//express-get - server.js
//This program uses GET method and displays the queried string in the URL

var express = require('express');
var app = express();
 
app.use(express.static('public'));
app.get('/index.html', function (req, res) 
{
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function (req, res) 
{
  //Prepare output in JSON format
  response = 
  {
    first_name:req.query.first_name,
    last_name:req.query.last_name,
    course:req.query.course,
    age:req.query.age,
    comments_suggestions:req.query.comments_suggestions
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(2022, 'localhost', function()
{
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
