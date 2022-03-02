//Aquino, Neo F.
//query-demo.js
//This program demonstrates on getting the string in the Path using the query property

const express = require('express')
const app = express()

app.get('/', (req, res) => 
{
  console.log(req.query)
})

app.listen(3030)