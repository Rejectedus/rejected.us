var React = require('react');
var DefaultLayout = require('./default');

var Rejections = React.createClass({
  render: function() {
    var rejections = this.props.stories.map(function(story) {
      return (
        <div key={story.handle} className={(story.double) ? 'grid-item Rejection Rejection--width2' : 'grid-item Rejection'}>
          <div className="Rejection-Title">
            <h4 className="Rejection-Title--FullName">
              {story.fullName}
            </h4>
          </div>
          <div className="Rejection-Title--Handle">
            <a target="_blank" href={story.website}>@{story.handle}</a>
            <span> </span>
            (<span className="Rejection-Bio">{story.bio}</span>)
            <span> </span>
          </div>
          <a href={'/story/' + story.handle}>
            <img className="Rejection-Profile" alt={story.handle} src={"/img/" + story.avatar} />
          </a>
          <p>{story.story}</p>
        </div>
      )
    });

    return (
      <DefaultLayout title={this.props.title}>{rejections}</DefaultLayout>
    )
  }
});

module.exports = Rejections;
