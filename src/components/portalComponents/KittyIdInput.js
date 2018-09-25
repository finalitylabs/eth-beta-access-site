import React, { Component } from 'react';
import Api from '../../Api';

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
    onInputChange = e => {
        
    } 
    render() {
        return (
            <form>
                <input type="text" value={this.state.kittyId} onChance={this.onInputChange}/>
            </form>
        );
    }
}

export default QRTCount;