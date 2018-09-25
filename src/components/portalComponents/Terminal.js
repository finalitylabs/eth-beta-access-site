import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleText: "",
        }
    }

    componentDidMount = async () => {
        
    }
    
    render() {
        return (
            <div className="terminal">
                <Typing className="terminal-text">TestTestTest</Typing>
            </div>
        );
    }
}

export default Portal;
