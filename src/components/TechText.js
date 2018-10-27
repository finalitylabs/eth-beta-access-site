import React, { Component } from 'react';

import plasma from '../assets/EternalTimeHeroes_Plasma_Bk.png';

class TechText extends Component {
    render() {
        return (
            <div className='techtext'>
                <h1>FEE AND LATENCY REDUCTION</h1>
                    <p className='padding'>A core design goal of E.T.H. is to reduce the cost of interacting with the blockchain and avoid the same issues that other Ethereum games have presented in the past. Reducing on-chain transactions with layer2 scalability solutions increases transaction throughput so players don't have to wait for miners to confirm their actions with potential high fees. To accomplish this, E.T.H. is built on top of the latest theory in Ethereum scalability research. </p>
                <img src={plasma} />
                <p className='padding'>The above diagram is an illustration of a Plasma chain that can track NFT objects like E.T.H. heroes and items.</p>
                <br/>
                <div id='tech-trio'>
                <div className="tech-info-section">
                        <h2>State-Channels</h2>
                        <p>E.T.H. uses virtual channel systems to compute its turn-based logic. These state transitions ultimately settle to a winner-loser state. We use a form of force-push-moves to ensure that no party can stall or cheat a game inside the channel. </p>
                    </div>
                    <div className="tech-info-section">
                        <h2>Plasma</h2>
                        <p>E.T.H. heroes and items can interact with the Finality Labs’ Plasma Network to reduce the cost of transferring ownership. By default, all heroes are minted in Finality Network and may be withdrawn to the Ethereum chain.</p>
                    </div>
                    <div className="tech-info-section">
                        <h2>Marketplace</h2>
                        <p>The marketplace relies on atomic swaps on Plasma to be possible. An area of our Plasma research has specifically revolved around this. Look forward to documentation and proofs of concepts on this soon.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechText;
 