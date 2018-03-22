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
  ownerId: Number,
  ownerUrl: String,
  createdAt: String,
  description: String,
  updatedAt: String,
  url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO data */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('hi');
  
  dummyData.forEach( (entry) => {
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

module.exports.save = save;