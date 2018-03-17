const express = require('express');
var bodyParser = require('body-parser')
const morgan = require('morgan');

let app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  // FIX THIS.....
  var username = req.body.username;
  console.log('............/repos POST username: ', username);
  res.send(username);
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

