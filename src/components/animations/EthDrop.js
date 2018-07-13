import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/02portalloopETH_clean.json";

class EthDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
    };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData
    };
    const { isStopped, isPaused } = this.state;
    return (
      <div id="ethdrop">
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
          
        />
        
      </div>
    );
  }
}

export default EthDrop;
