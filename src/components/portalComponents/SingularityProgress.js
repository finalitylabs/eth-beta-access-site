import React, { Component } from 'react';

import Api from './../../api';

class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singularityPercentage: 0,
            progressHeight: 0
        }
    }

    componentDidMount = async () => {
        const api =  new Api();
        const QRTCount = await api.getQRTcount();
        const QRTCountGoal = 10000; 
        const singularityPercentage = ((QRTCount / QRTCountGoal) * 100).toFixed(2);
        const progressHeight = (QRTCount / QRTCountGoal) * 25.9;
        this.setState({
            singularityPercentage,
            progressHeight
        })
    }
    
    render() {
        return (
            <div className="singularity-progress">
                <div className="percentage">{this.state.singularityPercentage}%</div>
                <div style={{height:`${this.state.progressHeight}%`}} className="progress" />
            </div>
        );
    }
}

export default Portal;
