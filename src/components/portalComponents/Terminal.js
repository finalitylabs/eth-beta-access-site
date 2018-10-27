import React, { Component } from 'react';
import Typist from 'react-typist';

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
                <Typist
                    avgTypingDelay={40}
                    cursor={
                        {
                            show: false,
                            blink: false,
                            element: '|',
                        }
                    }
                    onTypingDone={()=>clearInterval(this.interval)}
                    key={this.state.consoleText.length++}
                    className="terminal-text">
                    WELCOME, ETERNAL TIME HERO, <br></br> Help us reach the Point Of Singularity! <br></br> > Click the "ETH for QRT" button to purchase a beta access QRT token <br></br> or <br></br> > Surrender a CryptoKitty to the portal by entering the CryptoKitty (ID#) and clicking the "Drop Kitties" button
                </Typist>
            ]
        })
        this.interval = setInterval(()=>{
            this.scrollDown();
        }, 100)    
    }

    addTerminalText = (newText) => {
        this.setState({
            consoleText: [
                ...this.state.consoleText, 
                <Typist 
                    avgTypingDelay={20}
                    cursor={
                        {
                            show: false,
                            blink: false,
                            element: '|',
                        }
                    }
                    onTypingDone={()=>clearInterval(this.interval)}
                    key={this.state.consoleText.length++}
                    className="terminal-text">
                    > {newText}
                </Typist>
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
