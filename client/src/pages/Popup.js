import React from 'react';
import Popup from 'reactjs-popup';


const PopupContact = () =>
(
  <Popup open={true} position="top left">
    <div className={'popup'}>
      Thank you for your message
      <br />
      <br />
      I will contact you soon
    </div>
  </Popup>
);


export default PopupContact;