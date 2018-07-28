import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/01portaldropcat_clean.json";
const api = require("../../api.js");

class CatDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
      Animated: 0,
    };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData
    };
    const { isStopped, isPaused, Animated } = this.state;

    const clickHandler = event => {
      api.test()
      event.preventDefault();
      if (!isStopped) {
        this.setState({ isStopped: true });
      }
      this.setState({ isStopped: false });
      console.log("clicked");
      this.setState({ Animated: 0 })
    };
    return (
      <div id="catdrop">
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
          width='100%'
          Animated={Animated}
         
        />
        <button onClick={clickHandler} className="cat-btn"></button>
      </div>
    );
  }
}

export default CatDrop;
