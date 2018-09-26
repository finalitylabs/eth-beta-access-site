import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleText: []
        }
    }

    componentDidMount = () => {
        this.setState({
            consoleText: [
                <Typing 
                    key={this.state.consoleText.length ? this.state.consoleText.length : 0}
                    speed={12} 
                    className="terminal-text">
                    E.T.H. <br></br><br></br> WELCOME, ETERNAL TIME HERO, <br></br> Reach the Point Of Singularity! <br></br> > Press "ETH for QRT" to purchase QRT <br></br> or <br></br> > Select 1 Cryptokitty (ID#) then drop it into the portal
                </Typing>
            ]
        })
    }

    addTerminalText = (newText) => {
        this.setState({
            consoleText: [
                ...this.state.consoleText, 
                <Typing 
                    key={this.state.consoleText.length}
                    speed={12} 
                    className="terminal-text"> 
                    > {newText}
                </Typing>
            ]
        })
    }
    
    render() {
        return (
            <div className="terminal">
                {this.state.consoleText}
            </div>
        );
    }
}

export default Terminal;
