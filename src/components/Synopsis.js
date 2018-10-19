import React, { Component } from 'react';
import timeline from '../assets/ExtremeTimeHeroes_TimelineConcept.png'

class Synopsis extends Component {
    render() {
        return (
            
            <div id='synopsis'>
                <h1>SYNOPSIS</h1>
                <p>Scientists have discovered increasing instability in time as we know it. Extensive studies by the most brilliant minds of our world have reached the hypothesis that time will eventually fracture into multiple, simultaneous timelines and realities. From this chaos, heroes will arise to defend their timelines and claim dominance above all.
                </p>
                <br/>
                <img src={timeline} alt='Timeline' />
                <br/>
                <p className='synopsislastp'>
                Finality Labs’ Eternal Time Heroes is a strategic turn-based battle game running on the Ethereum blockchain using custom Non-Fungible token standard champions to assemble armies in search of glory. Want in on the action? Use the portal below to gain an early access token. Have some extra CryptoKitties laying around being lazy? Throw one into the time fracture and see what comes out!</p>
            </div>
            
        );
    }
}

export default Synopsis;
