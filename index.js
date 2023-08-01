// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

//ip enable
app.enable('trust proxy')
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
// "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}



// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) =>{

  //Ip Get
  console.log(req.ip);
  //User-Agent
  let len = req.rawHeaders.length;
  let softwareObj = {};
  for(let i = 0; i<len; i+=2){
    softwareObj[`${req.rawHeaders[i]}`] = req.rawHeaders[i+1];
  }
  console.log(software['User-Agent']);
  console.log(software['Accept-Language']);

  
  res.send({
    ipaddress : req.ip,
    language : softwareObj['Accept-Language'],
    software : softwareObj['User-Agent']
  })

})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
