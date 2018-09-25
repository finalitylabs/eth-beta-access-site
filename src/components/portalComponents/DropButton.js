import React, { Component } from 'react';

class DropButtons extends Component {
    constructor(props) {
        super(props);
    }
    handleDropButtonClick() {
        this.props.dropAnimation.clickHandler();
        this.props.coinAnimation.clickHandler();
    }

    render() {
        return (
            <div 
                onClick={() => this.handleDropButtonClick()} 
                className={this.props.className}
            />
        );
    }
}

export default DropButtons;