import React from 'react';

class Modal extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>Thank you for your booking</p>
        </div>
      </div>
    );
  }
}


export default Modal;