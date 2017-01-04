import React, { Component } from 'react'
import Header from './Header'
import './css/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default App
