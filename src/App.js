import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dosha</h1>
        </header>
        <h2 className="App-intro">
          Hello, Oleg!
        </h2>
      </div>
    );
  }
}

export default App;
