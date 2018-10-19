import React, { Component } from 'react';
import Api from '../../api';

class QRTCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QRTCount: ""
        }
    }
    componentDidMount = async () => {
        const api =  new Api();
        if (window.web3) {
            const account = await api.getAccount();
            if (account.length > 0) {
                const QRTCount = await api.getParticipantQRTCount(account[0]);
                this.setState({
                    QRTCount
                })
            }
        }
    }

    render() {
        return (
            <div className="QRT-count">{this.state.QRTCount}</div>
        );
    }
}

export default QRTCount;