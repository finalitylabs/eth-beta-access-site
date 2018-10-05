import React, { Component } from 'react';

import header from '../assets/Header.svg';
import logo from '../assets/logo/Logo animation_00149.png';

class HeroSplash extends Component {
    render() {
        return (
            <div id='herosplash'>
                <img src={header} width='100%' alt='header'/>
                <img className='logo' src={logo} alt='logo'/>
            </div>
        );
    }
}

export default HeroSplash;



