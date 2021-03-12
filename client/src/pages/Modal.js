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
          <br />
          <br />
          <p>Thank you for your request, I will comeback to you very soon</p>

        </div>
      </div>
    );
  }
}


export default Modal;