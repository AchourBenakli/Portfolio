import React from 'react';
import NavigationNew from '../components/NavigationNew';
import Modal from './Modal';

const Home = () => {
  return (
    <div className="home">
      <NavigationNew />
      <div className="homeContent">
        <div className="content">
          <h1>Welcome</h1>
          <h2>I'm a Front Desk Agent.</h2>
          <a href="./CV.pdf" target="_blank">Download CV</a>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Home;