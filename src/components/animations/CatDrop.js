import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/01portaldropcat_clean.json";
import api from "../../api.js";

class CatDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: true,
            isPaused: false,
            Animated: 0,
        };
        this.defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        };
    }

    clickHandler = () => {
        this.testApi()
        if (!this.state.isStopped) {
            this.setState({ isStopped: true });
        }
        this.setState({ 
            isStopped: false,
            Animated: 0
        });
        console.log("clicked");
    };

    testApi = async () => {
        let helpers = new api();
        let network = helpers.getNetwork()
        console.log("network:", network)
        let qrt = await helpers.getQRTcount()
        console.log("wrt:", qrt)
        let kittyCount = await helpers.getPortalKittyCount()
        console.log("kittyCount:", kittyCount)
    };
    render() {
        return (
            <div id="catdrop">
                <Lottie
                    options={this.defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                    width='100%'
                    Animated={this.state.Animated}
                />
            </div>
        );
    }
}

export default CatDrop;
