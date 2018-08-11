import React, { Component } from 'react';
import RoadMapSVG from './svg/RoadmapSVG';

class Roadmap extends Component {
    render() {
        return (
            <div id='roadmap'>
                <h1>Roadmap</h1>
                
                <RoadMapSVG />
                
            </div>
        );
    }
}

export default Roadmap;
