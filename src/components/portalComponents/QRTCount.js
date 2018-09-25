import React, { Component } from 'react';
import Api from '../../Api';

class QRTCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QRTCount: ""
        }
    }
    componentDidMount = async () => {
        const api =  new Api();
        const QRTCount = await api.getQRTcount();
        this.setState({
            QRTCount
        })
    }

    render() {
        return (
            <div className="QRT-count">{this.state.QRTCount}</div>
        );
    }
}

export default QRTCount;