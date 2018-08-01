import React, { Component } from 'react';

import Console from './svg/Console';
import Portal from './animations/Portal';
import CatDrop from './animations/CatDrop';
import EthDrop from './animations/EthDrop';



class PortalContainer extends Component {
    render() {
        return (
            <div>

                <div className="monitor">
                <div className="screen">
                [ETH ~]$ print console here...
                </div>
                <Console />
                </div>
                <div className="layer"/>
                <div className="cat-popup-btn"/>
                <div className="progress" />
                <div className="percentage">50%</div>
                <Portal />
                <CatDrop />
                <EthDrop />

            </div>
        );
    }
}

export default PortalContainer;
