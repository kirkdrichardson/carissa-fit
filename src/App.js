import React, { Component } from 'react';
import './App.css';
import wreath from './wreath.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={wreath} className="App-logo" alt="logo" />
          <h1 className="App-title">Merry Christmas!</h1>
        </header>
        <p className="App-intro">
          {"It'll probably take a few months to build the site, but once we talk about design & content, I can get started. We can wait to release it until whenever you're ready. "}
        </p>
      </div>
    );
  }
}

export default App;
