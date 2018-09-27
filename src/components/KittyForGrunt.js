import Api from '../api';
import React from 'react';
const kittyForGrunt = async (terminal, kittyId, setContainerState) => {
    return new Promise (async (resolve)=> {
        if (kittyId.length > 0) {
            terminal.addTerminalText("Your kitty has been sacrificed to the portal...")
    
            const api = new Api();
            const account = await api.getAccount()[0];
    
            const tx = await api.portalKitty(account, kittyId);
            setContainerState("showKittyModal", true);
            setContainerState("kittyModalHeader", "Herding your kitty to the portal");
            setContainerState("kittyModalParagraph", "Please wait till the next Metamask transasction pops up.");
            
            
            const txFound = await api.waitForConfirm(account, kittyId, tx);
            console.log('after wait function')
            setContainerState("kittyModalHeader", "Kitty is ready to portal jump");
            setContainerState("kittyModalParagraph", "Please accept the new metamask tx to finalize the transaction.");
            console.log(txFound);
            
            const txFinalized = await api.sendKitty(account, kittyId);
            console.log("tx finalized, close modal", txFinalized)
            setContainerState("showKittyModal", false);

            terminal.addTerminalText(`Your kitty grunt is on its way!`)
            resolve(txFinalized);
        }
    });

}

export default kittyForGrunt;