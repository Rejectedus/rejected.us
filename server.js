var fs = require('fs');
var express = require('express');
var app = express();
var RSS = require('rss');

// Public directory for all static assets
app.use(express.static('public'));

// Set views and jsx for view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
  const data = readData();
  res.render('index', { title: "They Rejected Us.", stories: data.stories.reverse() });
});

app.get('/feed.xml', function(req, res) {
  const data = readData();
  const feed = createFeed(data);
  res.set('Content-Type', 'application/rss+xml');

  res.send(feed.xml());
});

// rss rendering
function createFeed(data) {
  var feed = new RSS({
    title: 'rejected.us',
    description: 'They Rejected Us. Everyone’s been rejected - these are our stories',
    feed_url: 'http://rejected.us/feed.xml',
    site_url: 'http://rejected.us',
    language: 'en',
    pubDate: Date.now(),
    ttl: '60'
  });

  data.stories.forEach(function(story){
    feed.item({
      title:  story.fullName + " - " + story.bio,
      description: story.story,
      url: 'http://rejected.us',
      author: story.fullName,
      date: Date.now()
    });
  });

  return feed;
}

function readData() {
  return JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
}

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:8080');
});
