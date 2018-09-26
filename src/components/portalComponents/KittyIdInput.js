import React, { Component } from 'react';
import Api from '../../api';

class QRTCount extends Component {

    onInputChange = event => {
        event.preventDefault();
        
        const api = new Api();
        const isNumber = /^[0-9\b]+$/;

        if ((event.target.value == '' || isNumber.test(event.target.value)) && event.target.value.length < 7) {
            this.props.setParentState("kittyId", event.target.value)
        }

        if (event.target.value.length === 6) {
            api.getKittyImageById(this.props.kittyId).then((res) =>{
                this.props.setParentState("kittyImg", res)
                this.props.terminal.addTerminalText("We've found your kitty, click on 'DROP KITTIES' to send it...")
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