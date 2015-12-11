var express = require('express');
var app = express();

// Public directory for all static assets
app.use(express.static('public'));

// Set views and jsx for view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);

var server = app.listen(8080, function () {
  console.log('Example app listening at http://localhost:8080');
});
