var http = require('http');
var name = require('./name.js');
var nameA = new name('John', 'Smith');

var Server = http.createServer(function(req, res) {
  if (req.url == '/') {

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><h3><b>Welcome to my Node.js Application</b></h3></body></html>');
    res.write('<html><body><p>Welcome ' + nameA.fullName() + '. This is an activity about basics of Node.js</p></body></html>');
		res.end();
  }

  else if (req.url == "/about") {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3><b>This is the About Page</b></h3></body></html>');
    res.write('<html><body><p>Hello ' + nameA.fullName() + '. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
    res.end();

  }

  else if (req.url == "/contact") {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3><b>This is the Contact Page</b></h3></body></html>');
    res.write('<html><body><p>' + nameA.fullName() + ', ' + 'if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');
    res.end();

  }

  
  else if (req.url == "/gallery") {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3><b>This is the Gallery Page</b></h3></body></html>');
    res.end();

  }

  else
    res.end("Invalid Request!");

});
Server.listen(2022); 
console.log('NodeJS web server at port 2022 is running...');

//Neo Aquino
//Feb 2, 2022
//2075 - WCSERVER