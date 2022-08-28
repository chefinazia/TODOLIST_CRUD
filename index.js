var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// var MongoClient = require('mongodb').MongoClient,format = require('util').format;


// var url = 'mongodb://localhost:27017';
// MongoClient.connect(url, function(err, db) {
//     if(err){throw err;}
//     else{console.log("Connected correctly to server.");}    
//     db.close();
// });


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017.Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);

console.log('todo list APi server started on: ' + port);