import React from 'react';
import NavigationNew from '../components/NavigationNew';

const Home = () => {
  return (
    <div className="home">
      <NavigationNew />
      <div className="homeContent">
        <div className="content">
          <h1>Welcome</h1>
          <h2>I'm a Front Desk Agent</h2>
          <a href="./CV.pdf" target="_blank">Download CV</a>
          <button><link to={"/Calendar"}>Book me</link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;