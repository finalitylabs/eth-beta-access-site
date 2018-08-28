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
    }
    
    render() {
        const defaultOptions = {
            loop: false,
            autoplay: false,
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
