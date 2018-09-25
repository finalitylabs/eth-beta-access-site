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
        const account = await api.getAccount();
        const QRTCount = await api.getParticipantQRTCount(account[0]);
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