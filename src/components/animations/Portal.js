import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation_data/00portalloop.json';


class Portal extends Component {
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
            <div id="portal-animation">
                <div className="percentage">60%</div>
                <div className="progress" />
                <Lottie 
                    options={defaultOptions}
                    isStopped={isStopped}
                    isPaused={isPaused}
                    width='1000px'
                />
            </div>
        );
    }
}

export default Portal;
