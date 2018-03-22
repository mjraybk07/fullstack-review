const request = require('request');
//const request = require('request-promise');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  var usernameUrl = `https://api.github.com/users/${username}/repos`;
  
  console.log('.........getReposByUsername usernameUrl: ', usernameUrl);

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    // url: 'FILL ME IN',
    url: usernameUrl,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json' // explicitly request this version via the Accept header
    }

  };
  //callback('getReposByUsername........')
  //user request module to send GET request to github
  request(options, function (error, response, body) {
    if (error) {
      throw error;
    }
    console.log('.........getReposByUsername REQUEST: ');
    
    callback(JSON.parse(body));
    
  });

}



module.exports.getReposByUsername = getReposByUsername;