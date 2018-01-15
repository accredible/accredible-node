const express = require('express');
const rp = require('request-promise');

const config = require('./config.json');

const app = express();

// Handle all requests that begin with `/accredible`
app.get(/^\/accredible/, function(req, res){
  // Extract the URL from the path
  var apiPath = req.path.replace(/^\/accredible/, '');
  // Pass this to the accredible API
  var options = {
    uri: `${config.url}${apiPath}`,
    qs: req.query,
    headers: {
      Authorization: `Token token=${config.key}`
    }
  };
  rp(options)
    .then(responseData => {
      var response = JSON.parse(responseData);
      res.send(response);
    })
    .catch(err => {
      console.error(err);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log('Try localhost:3000/accredible/v1/all_credentials?page_size=5');
});
