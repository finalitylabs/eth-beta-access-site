import Api from '../api';
import React from 'react';
import terminalText from './../../terminalText.json';

const ethForQRT = async (terminal) => {
    return new Promise (async (resolve)=> {
        terminal.addTerminalText(terminalText.ON_ETH_FOR_QRT_TRANSACTION_OPEN)
        const api = new Api();
        const account = await api.getAccount()[0];
        const tx = await api.purchaseQRT(account);
        resolve(tx);
        terminal.addTerminalText(terminalText.ON_ETH_FOR_QRT_TRANSACTION_SEND)
    });

}

export default ethForQRT;