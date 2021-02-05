import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Sorry, this page does not exist.</h3>
        <h5>Please comeback to my Home Page5</h5><br /><br /><br />
        <NavLink exact to="/">
          <i className="fas fa-home">
            <span>Home Page</span>
          </i>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
