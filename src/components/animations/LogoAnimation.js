import React, { Component } from "react";

import logoAnimation from './../../assets/logo-animation.gif';
import logo from './../../assets/logo/Logo animation_00149.png';

class LogoAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
            animationFinished: false
        }
    }
    componentDidMount = () => {
        window.setTimeout(()=>{
            this.setState({
                animationFinished: true
            })
        }, 3650)
    }

  render() {
    return (
        [
            <img className={`logo ${!this.state.animationFinished ? "hide" : "show"}`} src={logo} alt='logo'/>,
            <img className={`logo ${!this.state.animationFinished ? "show" : "hide"}`} src={logoAnimation} alt="animated ETH logo"/>
        ]
    );
  }
}

export default LogoAnimation;
