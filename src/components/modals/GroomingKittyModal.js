import React from 'react';

import "../../css/modal.css";
import { throws } from 'assert';

class GroomingKittyModal extends React.Component {
    // TODO We'll want some error handling for these transactions, that's when the following function will come in handy to close the modal after
    // the error is fired from the api
    closeModal = () => {
        this.props.setParentState("showKittyModal", false);
    }
    render () {
        return (
            <div className={`modal-container ${this.props.showKittyModal ? 'show' : 'hide'}`}>
                <div className="blackground"/>
                <div className="content">
                    <h1>{this.props.header}</h1>
                    <img className="modal-kitty" src={this.props.kittyImg}/>
                    <p>{this.props.paragraph}</p>

                    {/* <button onClick={this.closeModal}>Close</button> */}
                </div>
            </div>
        )
    }
}

export default GroomingKittyModal;