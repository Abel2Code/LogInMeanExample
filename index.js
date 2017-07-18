const express = require('express');
const path = require('path');
const mongoClient = require('mongodb').MongoClient;

const app = express();

const route = require('./routes/route')
app.use(route);

var url = "mongodb://localhost:27017";
mongoClient.connect(url, function(err, db){
  if(err){
    throw err;
    process.exit(1);
  } else{
    console.log('Connected to MongoDB on port @27017');
  }
});

const port = 3000;

app.listen(port, ()=>{
  console.log("Server now listening on: " + port);
});
