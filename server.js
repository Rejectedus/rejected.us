var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(8080, function () {
  console.log('Example app listening at http://localhost:8080');
});
