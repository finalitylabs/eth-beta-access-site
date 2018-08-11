import React, { Component } from 'react';

import header from '../assets/Header.svg';

class HeroSplash extends Component {
    render() {
        return (
            <div id='herosplash'>
                <img src={header} width='100%' alt='header'/>
            </div>
        );
    }
}

export default HeroSplash;



