import React, { Component } from 'react';

import "./../css/portalSection.css";

import Console from './svg/Console';
import Portal from './animations/Portal';
import CatDrop from './animations/CatDrop';
import EthDrop from './animations/EthDrop';
import DropButton from './DropButton';

import consolesvg from '../assets/presale-groups3_main.svg';
import Coin from './animations/Coin';

class PortalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catDropRef: false,
            ethDropRef: false
        };
    }

    render() {
        return (
            <div id="portal-main">

                <div className="monitor">
                    <img src={consolesvg} />
                    <DropButton dropRef={this.state.catDropRef} className="popup-btn cat-popup-btn"/>
                    <DropButton dropRef={this.state.ethDropRef} className="popup-btn eth-popup-btn"/>
                    <Coin />
                    <Portal />
                    <div className="remove-click-layer"/>
                    <CatDrop ref={ref => !this.state.catDropRef && this.setState({catDropRef: ref})}/>
                    <EthDrop ref={ref => !this.state.ethDropRef && this.setState({ethDropRef: ref})}/>
                </div>
                


            </div>
        );
    }
}

export default PortalContainer;
