import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/01portaldropcat_clean.json";

class CatDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
      speed: 1,
      direction: 1,
      isClicked: false
    };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData
    };
    const { isStopped, isPaused, speed } = this.state;

    const clickHandler = event => {
      event.preventDefault();
      if (!isStopped) {
        this.setState({ isStopped: true });
      }
      this.setState({ isStopped: false });
      console.log("clicked");
    };
    return (
      <div id="catdrop">
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
          speed={speed}
          width='100%'
         
        />
        <button onClick={clickHandler}>drop cat</button>
      </div>
    );
  }
}

export default CatDrop;
