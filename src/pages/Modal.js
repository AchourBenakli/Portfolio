import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink exact to="/Avaibalities" activeClassName="navActive">
          <button
            onClick={() => this.setState({ displayAvailabilities: true })}>
            Book me
        </button>
        </NavLink>
      </div>
    );
  }

}





export default Modal;