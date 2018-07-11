import React, { Component } from 'react';

import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="portal">Portal</div>
          <div className="monitor">Monitor
            <div onClick="" className="btn">PUSH</div>
          </div>
        </div>
        <div className="teaser">
          <div className="bulletin">Bulletin</div>
          <h2>Slogan</h2>
        </div>
        
        <a href="mailto:team@finalitylabs.io"><h4>team@finalitylabs.io</h4></a>
        
      </div>
    );
  }
}

export default App;
