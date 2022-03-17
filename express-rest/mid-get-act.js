//Aquino, Neo F.
//express-rest - mid-get-act.js
//Figure 7: setting up some get requests for fetching heroes from the server.  

const express = require('express');
const app = express();
 
//Array for GET Method
const movies = [
  {
    id: 1,
    title: 'Superman'
  },

  {
    id: 2,
    title: 'Thor'
  },

  {
    id: 3,
    title: 'Iron Man'
  }
];

//Figure 8: displaying all movies in the array

//get all movies
app.get('/api/movies', (req, res) =>
{
  res.send(movies);
});

//Figure 9: code to find specific movie

//get movie by id
app.get('/api/movies/:id', (req, res) =>
{
  const movie = movies.find(h => h.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.')
  res.send(movie);
});

app.listen(3030, () => console.log('Listening on Port 3030'));
