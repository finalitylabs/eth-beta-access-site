import React, { Component } from 'react';
import timeline from '../assets/ExtremeTimeHeroes_TimelineConcept.png'

class Synopsis extends Component {
    render() {
        return (
            
            <div id='synopsis'>
                <h1>INTRODUCTION</h1>
                <p>Scientists have discovered increasing instability in time as we know it. Extensive studies by the most brilliant minds of our world have reached the hypothesis that time will eventually fracture into multiple, simultaneous timelines and realities. From this chaos, heroes will arise to defend their timelines and claim dominance above all.
                </p>
                <br/>
                <img src={timeline} alt='Timeline' />
                <br/>
                <p className='synopsislastp'>
                    Eternal Time Heroes (E.T.H.) is Finality Labs’ first experimental application of our research on combining state-channels and Plasma. E.T.H. is a strategic turn-based battle game running on the Ethereum blockchain, using custom non-fungible token (NFT) standard champions to assemble armies in search of glory. Want in on the action? Use the time portal below to gain access to a limited-edition, legendary E.T.H. hero of your choice when the game is released. Only 10,000 beta access hero tokens (QRTs) will be minted. Have some extra CryptoKitties lying around being lazy? Throw one into the time portal to register for an E.T.H. mutation. Warning, portaling of a kitty to the E.T.H. time fracture is irreversible! 
                    <br/>
                    <br/>
                    Finality Labs is committed to keeping E.T.H.’s game access free of charge and open to all who are interested, starting from our beta builds and continuing past the official release of our game. The proceeds from the beta access hero tokens (QRTs) will go solely into supporting our team in game development — helping us build a game that potentially pushes some technological and creative boundaries the world has yet to see.  
                </p>
                </div>
            
        );
    }
}

export default Synopsis;
