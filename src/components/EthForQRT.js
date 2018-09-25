import Api from '../Api';
import React from 'react';
const ethForQRT = async (terminal) => {
    return new Promise (async (resolve)=> {
        terminal.addTerminalText("Your request for QRT has been received, pay up now...")
        const api = new Api();
        const account = await api.getAccount()[0];
        const tx = await api.purchaseQRT(account);
        resolve(tx);
        terminal.addTerminalText(`Your payment is on it's way!`)
    });

}

export default ethForQRT;