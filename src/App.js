import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './login'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Login />
        </header>
      </div>
    )
  }
}

export default App
