import React, { Component } from 'react';

import rowdy from '../assets/Runner_Rowdy_Standing.png';
import bigboy from '../assets/PostApocalyptic_BigBoy_Standing.png';
import Logo from './svg/Logo';

class HeroSplash extends Component {
    render() {
        return (
            <div id='herosplash'>
                <Logo />
                <img className='rowdy' src={rowdy} />
                <img className='bigboy' src={bigboy} />
            </div>
        );
    }
}

export default HeroSplash;



