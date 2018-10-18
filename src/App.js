import React, { Component } from 'react';

import './App.css';

import PortalContainer from './components/PortalContainer';
import NavBar from './components/NavBar';
import HeroSplash from './components/HeroSplash';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Social from './components/Social';
import Synopsis from './components/Synopsis';
import TechText from './components/TechText';
import Web3Check from './components/modals/Web3Check';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Web3Check />
        <NavBar />
        <HeroSplash />
        <Synopsis />
        <PortalContainer />
        <Features />
        <TechText />
        <Roadmap />
        <Social />  
        
      </div>
    );
  }
}

export default App;
