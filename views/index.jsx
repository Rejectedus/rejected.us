var React = require('react');
var DefaultLayout = require('./default');

var Rejections = React.createClass({
  render: function() {
    var rows = [];
    this.props.stories.forEach(function(story) {
      rows.push(story.fullName);
    });
    return (
      <DefaultLayout>{rows}</DefaultLayout>
    )
  }
});

module.exports = Rejections;
