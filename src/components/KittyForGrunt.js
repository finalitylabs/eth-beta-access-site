import Api from '../api';
import React from 'react';
const kittyForGrunt = async (terminal, kittyId) => {
    return new Promise (async (resolve)=> {
        terminal.addTerminalText("Your kitty has been sacrificed to the portal...")

        const api = new Api();
        const account = await api.getAccount()[0];
        const tx = await api.portalKitty(account, kittyId);

        terminal.addTerminalText(`Your kitty grunt is on its way!`)

        resolve(tx);
    });

}

export default kittyForGrunt;