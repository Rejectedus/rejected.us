var fs = require('fs');
var express = require('express');
var app = express();

// Public directory for all static assets
app.use(express.static('public'));

// Set views and jsx for view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
  const data = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  res.render('index', { title: "They Rejected Us.", stories: data.stories.reverse() });
});

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:8080');
});
