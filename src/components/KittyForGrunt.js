import Api from '../api';
import React from 'react';
import terminalText from './terminalText.json';

const kittyForGrunt = async (terminal, kittyId, setContainerState) => {
    return new Promise (async (resolve)=> {
        if (kittyId.length > 0) {
            terminal.addTerminalText(terminalText.ON_KITTY_FOR_BETA_ACCESS_TRANSACTION_OPEN)
    
            const api = new Api();
            const account = await api.getAccount()[0];
    
            const tx = await api.portalKitty(account, kittyId);

            if (tx.res) {
                setContainerState("showKittyModal", true);
                setContainerState("kittyModalHeader", "Herding your kitty to the portal");
                setContainerState("kittyModalParagraph", "Please wait till the next Metamask transasction pops up.");            
                const txFound = await api.waitForConfirm(tx.res);
                setContainerState("kittyModalHeader", "Kitty is ready to portal jump");
                setContainerState("kittyModalParagraph", "Please accept the new metamask tx to finalize the transaction.");
                
                const txFinalized = await api.sendKitty(account, kittyId);

                setContainerState("showKittyModal", false);
                if (txFinalized.res) {
                    terminal.addTerminalText(terminalText.ON_KITTY_FOR_BETA_ACCESS_TRANSACTION_SEND)
                    resolve(txFinalized);
                } else {
                    terminal.addTerminalText(terminalText.ON_TRANSACTION_REJECTED)
                    resolve(false)
                }
            } else {
            }
        }
    });

}

export default kittyForGrunt;