//Aquino, Neo F.
//express-rest - mid-post-act.js
//Figure 10: 

const express = require('express');
const app = express();

append.use(express.json());
 
//add a movie
app.post('/api/movies', (req, res) => 
{
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  }

  movies.push(movie);
  res.send(movie);
});
