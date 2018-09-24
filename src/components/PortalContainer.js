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
            dropButtonsRef: false
        };
    }

    handleImageLoad = () => {
        // this.state.dropButtonsRef.getButtonTopOffsets();
    }

    render() {
        return (
            <div id="portal-main">

                <div className="monitor">
                {/* <Console /> */}
                    <img onLoad={this.handleImageLoad}src={consolesvg} />
                    <DropButton ref={this.state.catDropRef}/>
                    {/* <div className="progress" /> */}
                    {/* <div className="percentage">40%</div> */}
                    {/* <Portal /> */}
                    {/* <CatDrop ref={ref => !this.state.catDropRef && this.setState({catDropRef: ref})}/> */}
                    {/* <EthDrop /> */}
                    {/* <Coin /> */}
                </div>
                


            </div>
        );
    }
}

export default PortalContainer;
