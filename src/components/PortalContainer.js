import React, { Component } from 'react';

import "./../css/portalSection.css";

import Portal from './animations/Portal';
import Coin from './animations/Coin';

import DropAnimation from './animations/DropAnimation';
import DropButton from './portalComponents/DropButton';
import QRTCount from './portalComponents/QRTCount';
import KittyIdInput from './portalComponents/KittyIdInput';
import KittyCount from './portalComponents/KittyCount';
import Terminal from './portalComponents/Terminal';
import Web3Check from './modals/Web3Check';

import GroomingKittyModal from './modals/GroomingKittyModal';

import ethForQRT from './EthForQRT';
import kittyForGrunt from './KittyForGrunt';

import consolesvg from '../assets/presale-groups3_main.svg';

import * as catAnimationData from "../assets/animation_data/01portaldropcat_clean.json";
import * as ethAnimationData from "../assets/animation_data/02portalloopETH_clean.json";

class PortalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catDropAnimation: false,
            ethDropAnimation: false,
            coinAnimation: false,
            terminal: false,
            kittyId: "",
            kittyImg: "",
            showKittyModal: false,
            kittyModalHeader: "",
            kittyModalParagraph: ""
        };
    }

    setDynamicState = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div id="portal-main">
                <h1 className="portal-header">BETA ACCESS PORTAL</h1>
                <p className="portal-info">In order to gain presale access to E.T.H., you will need to either install MetaMask and fund your MetaMask wallet with 0.02 Ether (cost of the presale access) or find the CryptoKitty ID of a lazy kitty and input it into the ID number field (located directly above the number pad). Please see the console screen for further instructions.</p>
                <div className="monitor">
                    <Web3Check />
                    <div className="remove-click-layer"/>
                    <img className="console-svg" src={consolesvg} />
                    <img className="kitty-img" src={this.state.kittyImg}/>
                    <Terminal ref={ ref => !this.state.terminal && this.setState({terminal: ref})}/>

                    <GroomingKittyModal
                        kittyImg={this.state.kittyImg}
                        showKittyModal={this.state.showKittyModal}
                        header={this.state.kittyModalHeader}
                        paragraph={this.state.kittyModalParagraph}
                        setParentState={this.setDynamicState}
                    />

                    <DropButton 
                        dropAnimation={this.state.catDropAnimation}
                        kittyId={this.state.kittyId}
                        transactionFunction={kittyForGrunt}
                        terminal={this.state.terminal}
                        className="popup-btn cat-popup-btn"
                        setContainerState={this.setDynamicState}
                    />
                    <DropButton 
                        dropAnimation={this.state.ethDropAnimation}
                        transactionFunction={ethForQRT}
                        terminal={this.state.terminal}
                        className="popup-btn eth-popup-btn"
                    />
                    <KittyCount/>
                    <QRTCount/>
                    <KittyIdInput 
                        kittyId={this.state.kittyId} 
                        setState={this.setKittyId}
                        setParentState={this.setDynamicState}
                        terminal={this.state.terminal}
                    />
                    <Portal />
                    <Coin ref={ref => !this.state.coinAnimation && this.setState({coinAnimation: ref})}/>
                    <DropAnimation 
                        coinAnimation={false}
                        animationData={catAnimationData} 
                        ref={ref => !this.state.catDropAnimation && this.setState({catDropAnimation: ref})}
                        startCoinAnimation = {this.state.coinAnimation.startAnimation}
                    />
                    <DropAnimation 
                        coinAnimation={true}
                        animationData={ethAnimationData} 
                        ref={ref => !this.state.ethDropAnimation && this.setState({ethDropAnimation: ref})}
                        startCoinAnimation = {this.state.coinAnimation.startAnimation}
                    />
                </div>
                


            </div>
        );
    }
}

export default PortalContainer;
