import React from 'react';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // <Avaibalities />
    alert('Shitttt')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Book me</button>
      </div>
    );
  }
};


export default Modal;