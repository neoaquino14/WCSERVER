//Aquino, Neo F.
//express-rest - index.js
//Figure 2: Requiring the express module, and then calling the express() function and assigning the result to the app constant. 

const express = require('express');
const app = express();

app.get('/', (req, res) => 
{ 
  res.send('My New App!');
});

//Figure 3: Simulating local data by populating a simple array as an example to be able to visit the /api/heroes endpoint and see all the heroes listed in the system.

app.get('/api/heroes', (req, res) => 
{
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

//Figure 4: passing route parameters by specifying to the server what resource it wants to fetch. 

app.get('/api/heroes/:id', (req, res) => 
{
  res.send(req.params.id);
});

//Figure 5: having more than one route parameter in the url.

// app.get('/api/heroes/:title/:publisher', (req, res) => 
// {
//   res.send(req.params);
// });

//Figure 6: accessing query parameters in the url

app.get('/api/heroes/:id/:publisher', (req, res) => 
{
  res.send([req.params.id, req.query]);
});

app.listen(2022, () => console.log('Listening on Port 2022'));
