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
          <p>Do you validate those dates</p>
          <br />
          <br />
          <button className="buttonModalOk">Ok</button>
          <button className="buttonModalNo">Cancel</button>
        </div>
      </div>
    );
  }
}


export default Modal;