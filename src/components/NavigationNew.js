import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/AvatarMaker.png';



const NavigationNew = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={Logo} alt="profile-pic" className="logo" />
          <h3>Achour Benakli </h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/in/achour-benakli-280231100"
              target="_blank"
              rel="noopener noreferer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AchourBenakli"
              target="_blank"
              rel="noopener noreferer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Achour Benakli - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationNew;
