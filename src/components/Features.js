import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div id='features'>
                <div className='feature-desc'>
                    <h1>Beta Access Features</h1>
                    <p>With the purchase of a QRT coin and / or the portal conversion of a CryptoKitty, players will gain both E.T.H.’s Beta Access as well as access to the official release.
                    <br />
                    A QRT purchase comes with a limited edition Advanced Hero (power level: 100) from a timeline of the player’s choice. A portal conversion of a CryptoKitty comes with a limited edition CryptoKitties-inspired grunt (power level: 20) from a timeline of the player’s choice. Players may purchase a QRT as well as convert a CryptoKitty to acquire both the Advanced Hero and the CryptoKitties-inspired grunt.
                    </p>
                </div>
                <div className='feature-page'>
                    <div className='feature-col' />                    
                    <div className='feature-col' />
                    <div className='feature-col' />
                </div>
            </div>
        );
    }
}

export default Features;
