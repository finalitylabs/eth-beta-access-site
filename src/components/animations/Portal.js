import React, { Component } from 'react';
import Lottie from 'react-lottie';

import SingularityProgress from './../portalComponents/SingularityProgress';

import * as animationData from '../../assets/animation_data/00portalloop.json';

class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
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
                <SingularityProgress/>
                <Lottie 
                    options={defaultOptions}
                    isStopped={isStopped}
                    isPaused={isPaused}
                />
            </div>
        );
    }
}

export default Portal;
