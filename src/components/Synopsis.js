import React, { Component } from 'react';
import timeline from '../assets/ExtremeTimeHeroes_TimelineConcept.png'

class Synopsis extends Component {
    render() {
        return (
            
            <div id='synopsis'>
                <h1>Synopsis</h1>
                <p>Scientists have discovered increasing instability in time as we know it. Extensive studies by the most brilliant minds of our world have reached the hypothesis that time will eventually fracture into multiple, simultaneous timelines and realities. From this chaos, heroes will arise to defend their timelines and claim dominance above all.
                </p>
                <img src={timeline} alt='Timeline' />
                <p className='synopsislastp'>
                Finality Labs’ Eternal Time Heroes is a strategic turn-based battle game that uses blockchain based champions to assemble armies in search of glory. Before the battle begins, use the portal below to gain an early access token. Have some extra crypto kitties laying around being lazy? Throw one into the time fracture and see what comes out!</p>
            </div>
            
        );
    }
}

export default Synopsis;
