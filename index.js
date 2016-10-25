//dependencies
var express = require('express');
var mongoose = require("mongoose");
var notes = require('./server/notes');

//express app
var app =express();

mongoose.connect("localhost", "Notes")
var db = mongoose.connection;
db.on("error", function(e){
    console.log(e);
});
db.once("open", function(){
    console.log("Database connected.")
});

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
