import React, { Component } from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

import './../../css/web3CheckModal.css';

import Api from '../../api';
import metamaskLogo from './../../assets/metamask-logo.png';
import downloadMetamask from './../../assets/download-metamask.png';
import toshiLogo from './../../assets/trust-wallet.svg';
import ethWallet from './../../assets/eth-wallet.png';
import connect_mainnet from './../../assets/connect_mainnet.png';

class Web3Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metamaskInstalled: true,
            metamaskLoggedin: true,
            mainnet: true
        }
        this.lastAccount = null;
        this.lastNetwork = null;
    }

    onMetamaskUpdate = (e) => {
        if (e && e.networkVersion !== this.lastNetwork || e.selectedAddress !== this.lastAccount) {
            this.web3Check();
        }
    }
    web3Check = async () => {
        const api = new Api();
        let web3 = window.web3;
        if (window.web3) {
            let account= await api.getAccount();
            this.lastAccount = account[0];
            let network = api.getNetwork(); 
            this.lastNetwork = network;
            this.setState({
                metamaskInstalled: !!web3,
                metamaskLoggedin: account.length > 0,
                mainnet: (network == 4)
            })
        } else {
            this.setState({
                metamaskInstalled: false
            })
        }
    }

    componentDidMount = () => {
        if (window.web3) {
            window.web3.currentProvider.publicConfigStore.on('update', this.onMetamaskUpdate);
            this.web3Check(); // Initial metmask check
        } else {
            this.setState({
                metamaskInstalled: false
            })
        }
    }

    render() {
        return (
            <div className="wallet-not-available">
                <MobileView>
                    <div className={`metamask-installed download mobile show}`}>
                        <div className="info-section">
                            <h1>This section is only available on desktop browsers.</h1>
                        </div>
                    </div>
                </MobileView>
                <BrowserView>
                    <div className={`metamask-installed ${this.state.metamaskInstalled ? "hide" : "show"}`}>
                        <div className="info-section">
                            <h1>Please download metamask</h1>
                            <p>It seems like you do not have the metamask chrome plugin please download it here:</p>
                            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                                <img src={downloadMetamask} alt="metamask logo with download text"/>
                            </a>
                        </div>
                    </div>
                    <div className={`metamask-installed ${this.state.metamaskLoggedin ? "hide" : "show"}`}>
                        <div className="info-section">
                            <h1>Please login to your metamask account</h1>
                            <img src={metamaskLogo} alt="metamask logo" />
                        </div>
                    </div>
                    <div className={`metamask-installed ${this.state.mainnet ? "hide" : "show"}`}>
                        <div className="info-section">
                            <h1>Please make sure you're connected to mainnet</h1>
                            <img src={connect_mainnet} alt="displaying how a selected mainnet should look" />
                        </div>
                    </div>
                </BrowserView>
            </div>
        );
    }

}

export default Web3Check;
