import React, { Component } from 'react';

import './App.css';
import CatDrop from './components/animations/CatDrop';
import EthDrop from './components/animations/EthDrop';
import Portal from './components/animations/Portal';


import Bulletin from './components/Bulletin';



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="main">
            <div className="monitor">Monitor</div>
            <div className="screen"/>
            <Portal />
            <CatDrop />
            <EthDrop />
          
        </div>
        <div className="teaser">
          <Bulletin />
          <a href="mailto:team@finalitylabs.io"><h4>team@finalitylabs.io</h4></a>
        </div>
      </div>
    );
  }
}

export default App;
