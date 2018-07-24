import React, { Component } from 'react';

import './App.css';
import CatDrop from './components/animations/CatDrop';
import EthDrop from './components/animations/EthDrop';
import Portal from './components/animations/Portal';

import Bulletin from './components/Bulletin';
import CatPopup from './components/CatPopup';
import Console from './components/svg/Console';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="main">

            <div className="monitor">
            <div className="screen">
            [ETH ~]$ print console here...
            </div>
            <Console />
            </div>
            <div className="layer"/>
            <div className="cat-popup-btn"/>
            
            <CatPopup />
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
