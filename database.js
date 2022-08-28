var MongoClient = require('mongodb').MongoClient,format = require('util').format;


var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, db) {
  if(err){throw err;}
  else{console.log("Connected correctly to server.");}    
  db.close();
});