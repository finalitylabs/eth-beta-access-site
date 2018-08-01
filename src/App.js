import React, { Component } from 'react';

import './App.css';


import Bulletin from './components/Bulletin';

import PortalContainer from './components/PortalContainer';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="portal-main">

            <PortalContainer />
            
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
