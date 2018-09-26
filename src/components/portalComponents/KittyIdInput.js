import React, { Component } from 'react';
import Api from '../../api';

class QRTCount extends Component {

    onInputChange = event => {
        event.preventDefault();
        const isNumber = /^[0-9\b]+$/;
        if (event.target.value == '' || isNumber.test(event.target.value)) {
            this.props.setKittyId({
               kittyId: event.target.value
            })
        }
    } 
    handleSubmit = event => {
        event.preventDefault();
        this.props.setKittyId({
            kittyId: ""
        })
    }
    render() {
        return (
            <form className="kitty-id-form" onSubmit={this.handleSubmit}>
                <input placeholder="#123456" type="text" value={this.props.kittyId} onChange={this.onInputChange}/>
            </form>
        );
    }
}

export default QRTCount;