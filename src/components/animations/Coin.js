import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation_data/coin.json';


class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: true
        }
    }
    
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
        }

        const { isStopped, isPaused } = this.state;
        return (
            <div id="coin-animation">
                <Lottie 
                    options={defaultOptions}
                    isStopped={isStopped}
                    isPaused={isPaused}
                    width='250px'
                />
            </div>
        );
    }
}

export default Coin;
