import React from 'react';
import NavigationNew from '../components/NavigationNew';
import Bookme from './Bookme';

const Home = () => {
  return (
    <div className="home">
      <NavigationNew />
      <div className="homeContent">
        <div className="content">
          <h1>Welcome</h1>
          <h2>I'm a Front Desk Agent.</h2>
          <a href="./CVAchour.pdf" target="_blank">Download CV</a>
          <Bookme />
        </div>
      </div>
    </div>
  );
};

export default Home;