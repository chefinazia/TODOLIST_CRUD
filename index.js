var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Task = require('./models/todoListModel');
var MongoClient = require('mongodb').MongoClient;

let toDoListRoutes = require('./routes/toDoListRoutes')
mongoose.Promise = global.Promise;

var url = 'mongodb+srv://Rachit:Rachit@cluster0.j3r0rb7.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(url, function(err, db) {
    if(err){throw err;}
    else{console.log("Connected correctly to server.");}    
    db.close();
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/todolist",toDoListRoutes)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('todo list APi server started on: ' + port);