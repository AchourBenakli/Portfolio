import React from 'react';
import Avaibalities from './Avaibalities';





class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAvailabilities: false,
    }
  }

  render() {
    return (
      <div>
        {this.state.displayAvailabilities && <Avaibalities />}
        <button
          onClick={() => this.setState({ displayAvailabilities: true })}>
          Book me
        </button>
      </div>
    );
  }
};


export default Modal;