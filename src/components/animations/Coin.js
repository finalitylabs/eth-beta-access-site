import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation_data/coin.json';


class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: true,
            isPaused: false
        }
        this.defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        }
    }

    clickHandler = (e) => {
        this.setState({ 
            isStopped: false,
            Animated: 0
        });
        console.log("clicked");
    };
    
    render() {
        return (
            <div id="coin-animation">
                <Lottie 
                    options={this.defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.sPaused}
                />
            </div>
        );
    }
}

export default Coin;
