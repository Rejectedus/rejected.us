var React = require('react');
var DefaultLayout = require('./default');

var Rejections = React.createClass({
  componentDidMount: function() {
    var msnry = new Masonry( '.grid', {
      columnWidth: 200,
      itemSelector: '.grid-item'
    });
  },

  render: function() {
    var rejections = this.props.stories.map(function(story) {
      return (
        <div className={(story.double) ? 'grid-item Rejection Rejection--width2' : 'grid-item Rejection'}>
          <div className="Rejection-Title">
            <h3 className="Rejection-Title--FullName">
              {story.fullName}
              <span className="Rejection-Title--Handle">
                <a target="_blank" href="https://twitter.com/getify">{story.handle}</a>
              </span>
            </h3>
          </div>
          <div className="Rejection-Bio">{story.bio}</div>
          <img className="Rejection-Profile" alt="Jkup" src={"/img/" + story.avatar} />
          <p>{story.story}</p>
        </div>
      )
    });

    return (
      <DefaultLayout>{rejections}</DefaultLayout>
    )
  }
});

module.exports = Rejections;
