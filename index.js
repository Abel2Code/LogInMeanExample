const express = require('express');
const path = require('path');

const app = express();
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname +'/public/index.html'));
});

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname + '/public/register.html'));
});

app.get('/users', function(req, res){
  res.sendFile(path.join(__dirname + '/public/users.html'));
});

const port = 3000;

app.listen(port, ()=>{
  console.log("Server now listening on: " + port);
});
