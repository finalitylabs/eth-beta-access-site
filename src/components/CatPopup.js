import React from "react";
import Popup from "reactjs-popup";

import '../App.css'

export default () => (
  <Popup
    trigger={<button className="button"> Select CryptoKitties </button>}
    modal
    closeOnDocumentClick
  >
    <span> This is where the Kitties List appears </span>
  </Popup>
);