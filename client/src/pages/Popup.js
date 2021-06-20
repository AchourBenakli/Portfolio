import React from 'react';
import Popup from 'reactjs-popup';

const PopupContact = () =>
(
  <Popup open={true} position="top left">
    <div className={'popup'}>
      Thank you for your request!
      <br />
      <br />
      I will contact you very soon
    </div>
  </Popup>
);


export default PopupContact;