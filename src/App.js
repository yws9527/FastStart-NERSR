import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Login from './login'

class App extends Component {

  render() {
    console.log('haha')
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {this.props.children}
        </header>
      </div>
    );
  }
}

export default App;
