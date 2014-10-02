# coinbase-auth
### A Node.js library for interacting with the Coinbase Bitcoin API

Takes care of nonce-ing and authentication for Coinbase's secure API. Usage could not be easier. First:

`npm install coinbase-auth`

Next, give coinbase-auth your API credentials:

````
var coinbase = require('coinbase-auth');

coinbase.key('myAPIkey');
coinbase.secret('myAPIsecret');
````

Making a request is as easy as creating an options object and specifying the method. I use the following format:

````
var options = {
  url: 'https://coinbase.com/api/v1/account/generate_receive_address',
  json: {
    'address': {
      'callback_url': 'http://www.example.com/callback',
      'label': 'Dalmation donations'
    }
  }
};

coinbase.post(options, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

var putOptions = {
  url: 'https://coinbase.com/api/v1/users/512db383f8182bd24d000001',
  json: {
    'user': {
      'email': 'goodmail@example.com'
    }
  }
};

coinbase.put(options, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
````

For a GET or DELETE request, omit the options object and pass in only the url.

````
var url = 'https://coinbase.com/api/v1/account/balance';

coinbase.get(url, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

var deleteUrl = 'https://coinbase.com/api/v1/transactions/501a3554f8182b2754000003/cancel_request';

coinbase.delete(url, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
````

To see what you can do with the Coinbase API, take a look at their [documentation](https://coinbase.com/api/doc).

To show your appreciation for this module, feel free to send love to 1EM5MS6pNdVKm1H5qu3VGY7NXh3ZqjAkti
