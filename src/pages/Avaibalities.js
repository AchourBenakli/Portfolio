import React from 'react';
import Calendar from "react-calendar";
import { NavLink } from 'react-router-dom';

class Avaibalities extends React.Component {
  render() {
    return (
      <>
        <div className={'container'}>
          <h2>My Avaibalities</h2>
          <Calendar className={'CalendarMain'} />
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span> Back Home</span>
            </NavLink>
          </li>
        </div>
      </>
    )
  }
}



export default Avaibalities;
