import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/02portalloopETH_clean.json";


class EthDrop extends Component {
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

  clickHandler = (e) => {
    this.setState({ 
        isStopped: false,
        Animated: 0
    });
    console.log("clicked");
  };

  render() {
    return (
      <div id="ethdrop">
        <Lottie
          className='ethdrop'
          options={this.defaultOptions}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          Animated={this.state.Animated}  
        />
    </div>
    );
  }
}

export default EthDrop;
