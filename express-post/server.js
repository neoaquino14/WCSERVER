//Aquino, Neo F.
//express-post - server.js
//This program uses POST method and does not display the queried string in the URL

var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded ({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res) 
{
  res.sendFile( __dirname + '/' + 'index.html' );
})

app.post('/process_post', urlencodedParser, function (req, res) 
{
  //Prepare output in JSON format
  response = 
  {
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    course:req.body.course,
    age:req.body.age,
    comments_suggestions:req.body.comments_suggestions
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(2022, function()
{
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
