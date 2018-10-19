import React, { Component } from 'react';

import plasma from '../assets/EternalTimeHeroes_Plasma.png';

class TechText extends Component {
    render() {
        return (
            <div id='techtext'>
                <h1>FEE AND LATENCY REDUCTION</h1>
                <p>A core design goal of E.T.H. is to reduce the cost of interacting with the blockchain and avoid the same issues that other Ethereum games have presented in the past. Reducing "on-chain" transactions with "layer2" scalability solutions increases transaction throughput so players don't have to wait for miners to confirm their actions. To accomplish this, E.T.H. is built on top of the latest theory in Ethereum scalability research. </p>
                <img src={plasma} />
                <br/>
                <h2>State-Channels</h2>
                <p>E.T.H. uses virtual channel systems to compute advanced turn-based logic. These state transitions ultimately settle to a winner-loser state. We use a form of force-push-moves to ensure that no party can stall or cheat a game inside the channel. </p>
                <br/>
                <h2>Plasma</h2>
                <p>While in a battle channel it is assumed that both players will always be online to sign state updates, however this requirement may not always be desirable. If simple NFT swaps or payments are to be made, it would be nice to reduce the burden of all participants being online all of the time. To achieve this we have been working with most of the Plasma research teams. Users still have to check in periodically but this is still an improvement. </p>
                <br/>
                <h2>Marketplace</h2>
                <p>The marketplace relies on atomic swaps off-chain to be possible. An area of our plasma research has specifically revolved around this. Look forward to documentation and proofs of concepts on this soon. </p>
            </div>
        );
    }
}

export default TechText;
