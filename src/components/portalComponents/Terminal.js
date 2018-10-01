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
