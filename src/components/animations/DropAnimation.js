import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/01portaldropcat_clean.json";

class DropAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: true,
            isPaused: false,
            progress: 0
        };
        this.defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: this.props.animationData,
        };
    }
    
    
    clickHandler = () => {
        this.animation.play();
    };
    
    onAnimationComplete = () => {
        this.setState({ 
            progress:0
        });
        console.log(this.props.kittyId)
        if (this.props.kittyId === false || this.props.kittyId === "" || typeof this.props.kittyId === 'undefined' ) {
            //this.props.startCoinAnimation();
            // this still bugs, need to find a better element or make a flag maybe
        }
    }
    
    render() {
        return (
            <div className="drop-animation">
                <Lottie
                    ref={ animation => {
                            this.animation = animation;
                        }
                    }
                    progress={this.state.progress}
                    options={this.defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                    width='100%'
                    Animated={this.state.Animated}
                    eventListeners={
                        [
                            {
                                eventName: 'complete',
                                callback: this.onAnimationComplete,
                            },
                        ]
                    }
                />
            </div>
        );
    }
}

export default DropAnimation;
