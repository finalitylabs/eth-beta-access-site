import React, { Component } from 'react';
import Api from '../../Api';

class KittyCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kittyCount: ""
        }
    }
    componentDidMount = async () => {
        const api =  new Api();
        const kittyCount = await api.getPortalKittyCount();
        this.setState({
            kittyCount
        })
    }

    render() {
        return (
            <div className="kitty-count">{this.state.kittyCount}</div>
        );
    }
}

export default KittyCount;