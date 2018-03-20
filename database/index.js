const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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
  updatedAt: String,
  url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;