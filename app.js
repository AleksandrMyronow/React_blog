var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var user = require('./user');

var app = express();
app.use(express.static(path.join(__dirname,'/html')));
app.use(bodyParser.json());

app.post('/signin', (req, res) => {
  var user_name=req.body.email;
  var password=req.body.password;
  user_name=='admin' && password=='admin' ? res.send('success') : res.send('Failure');
});

app.post('/signup', function (req, res) {
  user.signup('','','')
  console.log(res);
});

app.listen(8000, () => console.log('Started listening on port', 8000));
