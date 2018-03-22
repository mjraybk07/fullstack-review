const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const dummyData = require('../data.json');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (callback) {
  console.log('db connected');
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  name: String,
  ownerLogin: String,
  ownerId: {type: Number, unique: true},
  ownerUrl: String,
  createdAt: String,
  description: String,
  updatedAt: String,
  url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (list) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('Saving to repos database....');
  
  list.forEach( (entry) => {
    var formated = {
      id: entry.id,
      name: entry.name,
      ownerLogin: entry.owner.login,
      ownerId: entry.owner.id,
      ownerUrl: entry.owner.html_url,
      createdAt: entry.created_at,
      description: entry.description,
      updatedAt: entry.updated_at,
      url: entry.svn_url,
      watchers: entry.watchers
    };
    
    new Repo(formated).save( function (err, thing) {
      if (err) {
       throw err;
      }
      console.log('Added entry to repos db: ', thing);
    })
  })
}

let getTop25Repos = (callback) => {
  console.log('getting top 25 repos .......>................>........');
  Repo.
    find().
    limit(25).
    sort('-watchers').
    select().
    exec(callback);
}


module.exports.save = save;
module.exports.getTop25Repos = getTop25Repos;
