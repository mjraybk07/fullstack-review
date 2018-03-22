const express = require('express');
const helpers = require ('../helpers/github.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dummyData = require('../data.json');
const db =  require('../database');

let app = express();

app.use(morgan('dev'));

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());

// Parse forms 
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  // FIX THIS.....
  var username = req.body.username;
  console.log('req body: ', req.body)
  console.log('............/repos POST username: ', username);
  
  helpers.getReposByUsername(username, function (data) {
    // console.log('this is the data....... ', data);
    
    // add repos data to database
    db.save(data);
    
    
    res.sendStatus(201); 
  });
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('Getting top 25 repos....');
  
  // TEST - send dummy data to client
  db.getTop25Repos( (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
  
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

