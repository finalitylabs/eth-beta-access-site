import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div id='social'>
                <h1>Social</h1>
                <div className='social-inner'>
                    <div className='twitter'></div>
                    <div className='github'></div>
                    <div className='instagram'></div>
                </div>
            </div>
        );
    }
}

export default Social;
