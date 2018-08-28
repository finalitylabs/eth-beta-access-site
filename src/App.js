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

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <NavBar />
        <HeroSplash />
        <Synopsis />
        <div id="portal-main">
          <PortalContainer />
        </div>
        <Features />
        <TechText />
        <Roadmap />
        <Social />  
        <a className='email' href="mailto:team@finalitylabs.io">
          <h3>A Finality Labs Production</h3> 
          <h4>team@finalitylabs.io</h4>
        </a>
        
      </div>
    );
  }
}

export default App;
