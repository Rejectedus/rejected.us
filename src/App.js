import React, { Component } from 'react'
import Header from './Header'
import './css/App.css'

import storiesData from './data/stories.js'

class App extends Component {
  render() {
    const stories = storiesData.map((story) => {
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
            <img className="Rejection-Profile" alt={story.handle} src={"/images/" + story.avatar} />
          </a>
          <p>{story.story}</p>
        </div>
      )
    })
    return (
      <div>
        <Header />
        <div>
          <ul>
            {stories}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
