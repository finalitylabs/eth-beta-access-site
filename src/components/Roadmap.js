import React, { Component } from 'react';
import roadmap from '../assets/Roadmap.png'

class Roadmap extends Component {
    render() {
        return (
            <div id='roadmap'>
                <div className='roadmap-inner'>
                    <h1>ROADMAP</h1>
                    <img src={roadmap} alt='roadmap' />
                </div>
            </div>
        );
    }
}

export default Roadmap;
