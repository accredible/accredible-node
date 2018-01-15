const rp = require('request-promise');

const config = require('./config.json');

var options = {
  uri: `${config.url}/v1/all_credentials`,
  qs: {
    page_size: 5
  },
  headers: {
    Authorization: `Token token=${config.key}`
  }
};

rp(options)
  .then(responseData => {
    var response = JSON.parse(responseData);
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });