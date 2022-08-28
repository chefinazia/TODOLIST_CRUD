var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Task = require('./models/todoListModel');
var MongoClient = require('mongodb').MongoClient;

let toDoListRoutes = require('./routes/toDoListRoutes')
mongoose.Promise = global.Promise;

var url ="{{URL}}" //add your url here

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Tododb").collection("Tasks");
  // perform actions on the collection object
  client.close();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/todolist",toDoListRoutes)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('todo list APi server started on: ' + port);