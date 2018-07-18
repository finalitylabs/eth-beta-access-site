import React, { Component } from 'react';

import './App.css';
import CatDrop from './components/animations/CatDrop';
import EthDrop from './components/animations/EthDrop';
import Portal from './components/animations/Portal';



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="main">
            <div className="monitor">Monitor</div>

            <div className="cat-btn"/>
            <div className="eth-btn"/>
          
            <Portal />
            <CatDrop />
            <EthDrop />
          
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
