import React, { Component } from 'react';
import Api from '../../api';

class QRTCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kittyId: ""
        }
    }
    componentDidMount = async () => {
        const api =  new Api();
        const QRTCount = await api.getQRTcount();
        this.setState({
            QRTCount
        })
    }
    onInputChange = event => {
        event.preventDefault();
        const isNumber = /^[0-9\b]+$/;
        if (event.target.value == '' || isNumber.test(event.target.value)) {
            this.setState({
               kittyId: event.target.value
            })
        }
    } 
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            kittyId: ""
        })
    }
    render() {
        return (
            <form className="kitty-id-form" onSubmit={this.handleSubmit}>
                <input placeholder="#123456" type="text" value={this.state.kittyId} onChange={this.onInputChange}/>
            </form>
        );
    }
}

export default QRTCount;