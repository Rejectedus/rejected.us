var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

module.exports = HelloMessage;
