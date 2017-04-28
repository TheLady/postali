var express = require('express')
var app = express()

app.get('/', function( req, res ) {
  req.param('type')
  res.send( 'working' ) //appears in browser and get request
})

app.listen(3000)
  console.log('API is running on port 3000.' ) // appears in terminal


