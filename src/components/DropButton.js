import React, { Component } from 'react';

class DropButtons extends Component {
    constructor(props) {
        super(props);
    }
    handleDropButtonClick() {
        this.props.ref.clickHandler();
    }

    render() {
        return (
            <div 
                onClick={() => this.handleDropButtonClick()} 
                className="cat-popup-btn"
            />
        );
    }
}

export default DropButtons;