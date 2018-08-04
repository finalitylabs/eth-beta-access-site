import React, { Component } from 'react';

import rowdy from '../assets/Runner_Rowdy_Standing.png';
import bigboy from '../assets/PostApocalyptic_BigBoy_Standing.png';

class HeroSplash extends Component {
    render() {
        return (
            <div id='herosplash'>
                <h1>Extreme Time Heroes</h1>
                <img className='rowdy' src={rowdy} />
                <img className='bigboy' src={bigboy} />
            </div>
        );
    }
}

export default HeroSplash;



