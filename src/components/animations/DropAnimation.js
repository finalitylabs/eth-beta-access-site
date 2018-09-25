import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/01portaldropcat_clean.json";

class DropAnimation extends Component {
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
            animationData: this.props.animationData,
            // eventListeners=[
            //     {
            //       eventName: 'complete',
            //       callback: this.onAnimationComplete,
            //     },
            //   ]
        };
    }

    clickHandler = () => {
        this.setState({ 
            isStopped: false,
            Animated: 0
        });
        console.log("clicked");
    };

    render() {
        return (
            <div className="drop-animation">
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

export default DropAnimation;
