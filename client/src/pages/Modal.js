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
          <p>Do you validate the dates?</p>
          <button className={'buttonModal'}>yes</button>
          <button className={'buttonModal'}>no</button>
        </div>
      </div>
    );
  }
}


export default Modal;