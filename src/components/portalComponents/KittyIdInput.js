import React, { Component } from 'react';
import Api from '../../api';

class QRTCount extends Component {

    onInputChange = event => {
        event.preventDefault();
        const isNumber = /^[0-9\b]+$/;

        if ((event.target.value == '' || isNumber.test(event.target.value))) {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.props.setParentState("kittyId", event.target.value)
            this.currentTimeout = setTimeout((this.getKittyImg),1000);
        }

    } 

    getKittyImg = () =>  {
        const api = new Api();

        api.getKittyImageById(this.props.kittyId).then((res) =>{
            this.props.setParentState("kittyImg", res)
            this.props.terminal.addTerminalText("We've found your kitty, click on 'DROP KITTIES' to send it...")
        })
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