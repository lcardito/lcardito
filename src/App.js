import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome!</h2>
        </div>
        <p className="App-intro">
		    This is a work in progress as a re-write of a personal profile.
        </p>
      </div>
    );
  }
}

export default App;
