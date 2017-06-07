import React, { Component } from 'react'
import Header from './Header'

import storiesData from './data/stories.js'

class App extends Component {
  render() {
    const stories = storiesData.map((story) => {
      return (
        <div key={story.handle} className={(story.double) ? 'grid-item Rejection Rejection--width2' : 'grid-item Rejection'}>
          <div>
            <h4>
              {story.fullName}
            </h4>
          </div>
          <div>
            <a target="_blank" href={story.website}>@{story.handle}</a>
            <span> </span>
            (<span>{story.bio}</span>)
            <span> </span>
          </div>
          <a href={'/story/' + story.handle}>
            <img alt={story.handle} src={"/images/" + story.avatar} />
          </a>
          <p>{story.story}</p>
        </div>
      )
    })
    return (
      <div>
        <Header />
        <div>{stories}</div>
      </div>
    )
  }
}

export default App
