import React, { Component } from 'react';

import header from '../assets/Header.png';
import LogoAnimation from './animations/LogoAnimation';

class HeroSplash extends Component {
    render() {
        return (
            <div id='herosplash'>
                <img className="background-img" src={header} width='100%' alt='header'/>
                
                <LogoAnimation/>
            </div>
        );
    }
}

export default HeroSplash;



