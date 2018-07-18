import React, { Component } from 'react';

import bigboy from '../assets/bigboy_blueprint.png';

class Bulletin extends Component {
    render() {
        return (
            <div>
                <div className="bulletin">
                    Bulletin
                    <img src={bigboy} 
                        style={{
                        position: 'absolute', 
                        width: '20%', 
                        marginLeft: '-400px',
                        marginTop: '100px',
                        }}
                        alt="placeholder"/>
                    <img src={bigboy} 
                        style={{
                        position: 'absolute', 
                        width: '20%', 
                        marginLeft: '-200px',
                        marginTop: '40px',
                        }}
                        alt="placeholder"/>
                    <img src={bigboy} 
                        style={{
                        position: 'absolute', 
                        width: '20%', 
                        marginLeft: '100px',
                        marginTop: '200px',
                        }}
                        alt="placeholder"/>
                </div>
                <h2>Slogan</h2>
                
            </div>
        );
    }
}

export default Bulletin;
