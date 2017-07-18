const express = require('express'); // imports express
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
   res.sendFile(path.join(__dirname +'/../public/index.html'));
});

router.get('/login', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/login.html'));
});

router.get('/register', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/register.html'));
});

router.get('/users', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/users.html'));
});

module.exports = router;
