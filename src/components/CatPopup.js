import React from "react";
import Popup from "reactjs-popup";

import '../App.css'

export default () => (
  <Popup
    trigger={<button className="button"></button>}
    modal
    closeOnDocumentClick
  >
    <span> Kitties list populates here </span>
  </Popup>
);