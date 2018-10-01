import React, { Component } from 'react';
import Api from '../../api';

class KittyCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kittyCount: ""
        }
    }
    componentDidMount = async () => {
        const api =  new Api();
        const account = await api.getAccount();
        const kittyCount = await api.getPortalKittyCount(account);
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