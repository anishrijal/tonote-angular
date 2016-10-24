//dependencies
var express = require('express');
var http = require('http');
var notes = require('./api/notes');

//express app
var app =express();

//middleware
// app.use(morgan('dev'));
app.use(express.static('client'));
// app.use(express.static('client'));


app.use('/notes', notes);
//default router
app.use('/', function(req, res, next){
  res.sendFile(__dirname + '/client/index.html')
})

app.listen(3000, function(){
  console.log('the server is running, http://localhost:3000');
})
