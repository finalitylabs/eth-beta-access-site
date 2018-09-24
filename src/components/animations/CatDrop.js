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

    clickHandler = async event => {
        console.log("clicked");
        testApi()
        event.preventDefault();
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
        let helpers = new api()
        let network = helpers.getNetwork()
        console.log(network)
        let qrt = await helpers.getQRTcount()
        console.log(qrt)
        let kittyCount = await helpers.getPortalKittyCount()
        console.log(kittyCount)
    };
    render() {
        return (
            <div id="catdrop">
                <Lottie
                    options={defaultOptions}
                    isStopped={isStopped}
                    isPaused={isPaused}
                    width='100%'
                    Animated={Animated}
                />
                <button onClick={clickHandler} className="cat-btn"></button>
            </div>
        );
    }
}

export default CatDrop;
