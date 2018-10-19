import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation_data/coin.json';


class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: true,
            isPaused: false,
            progress: 0
        }
        this.defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData
        }
    }

    startAnimation = (e) => {
        this.animation.play()
        console.log("clicked");
    };

    onAnimationComplete = () => {
        this.setState({ 
            progress:0
        });
    }
    
    render() {
        return (
            <div id="coin-animation">
                <Lottie 
                    ref={ 
                        animation => {
                            this.animation = animation;
                        }
                    }
                    eventListeners={
                        [
                            {
                                eventName: 'complete',
                                callback: this.onAnimationComplete,
                            },
                        ]
                    }
                    options={this.defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.sPaused}
                />
            </div>
        );
    }
}

export default Coin;
