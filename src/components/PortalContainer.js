import React, { Component } from 'react';

import "./../css/portalSection.css";

import Console from './svg/Console';
import Portal from './animations/Portal';
import CatDrop from './animations/CatDrop';
import EthDrop from './animations/EthDrop';

import consolesvg from '../assets/presale-groups3_main.svg';
import Coin from './animations/Coin';

class PortalContainer extends Component {
    render() {
        return (
            <div>

                <div className="monitor">
                {/* <Console /> */}
                <img src={consolesvg} />
                </div>
                <div className="layer"/>
                <div className="cat-popup-btn"/>
                <div className="progress" />
                <div className="percentage">50%</div>
                <Portal />
                <CatDrop />
                <EthDrop />
                <Coin />

            </div>
        );
    }
}

export default PortalContainer;
