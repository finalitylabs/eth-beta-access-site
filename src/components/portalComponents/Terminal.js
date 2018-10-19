import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleText: []
        }
    }

    scrollDown = () => {
        const terminal = document.querySelector('.terminal');
        if(terminal.scrollTop != terminal.scrollHeight){
            terminal.scrollTop = terminal.scrollHeight;
        }
    }

    componentDidMount = () => {
        this.setState({
            consoleText: [
                <Typing 
                    key={this.state.consoleText.length ? this.state.consoleText.length : 0}
                    speed={12} 
                    onFinishedTyping={()=>clearInterval(this.interval)}
                    className="terminal-text">
                    E.T.H. <br></br><br></br> WELCOME, ETERNAL TIME HERO, <br></br> Help us reach the Point Of Singularity! <br></br> > Click the "ETH for QRT" button to purchase a beta access QRT token <br></br> or <br></br> > Surrender a CryptoKitty to the portal by entering the CryptoKitty (ID#) and clicking the "Drop Kitties" button
                </Typing>
            ]
        })
        this.interval = setInterval(()=>{
            this.scrollDown();
        }, 100)    }

    addTerminalText = (newText) => {
        this.setState({
            consoleText: [
                ...this.state.consoleText, 
                <Typing 
                    key={this.state.consoleText.length}
                    speed={12} 
                    onFinishedTyping={()=>clearInterval(this.interval)}
                    className="terminal-text"> 
                    > {newText}
                </Typing>
            ]
        })
        this.interval = setInterval(()=>{
            this.scrollDown();
        }, 100)
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
