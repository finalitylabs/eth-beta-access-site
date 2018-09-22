import React, { Component } from 'react';
import roadmap from '../assets/Roadmap.svg'

class Roadmap extends Component {
    render() {
        return (
            <div id='roadmap'>
                <h1>Roadmap</h1>
                
                <img src={roadmap} alt='roadmap' />
                
            </div>
        );
    }
}

export default Roadmap;
