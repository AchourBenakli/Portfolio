import React from 'react';

const Hobbies = () => {
  return (
    <div>
      <div className="hobbies">
        <h3>Hobbies</h3>
        <li className="hobby">
          <i className="fas fa-road"></i>
          <span>Travel and work</span>
          <p>Work holiday visa New Zealand - 2019 </p>
          <p>Work holiday visa Taiwan - 2018 </p>
          <p>Work holiday visa Canada - 2016 </p>
          <p>Work holiday visa Wales - 2012 </p>
        </li>
        <li className="hobby">
          <i className="fas fa-mountain"></i>
          <span>Hiking(Taiwan and New Zealand, Paris now.)</span>
          <span></span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Making Music (house Music)</span>
        </li>
        <li className="hobby">
          <i className="fas fa-laptop-code"></i>
          <span>Web development (beginner)</span>
        </li>
        <li className="hobby">
          <i className="fas fa-trademark"></i>
          <span>Crypto-Trading (beginner)</span>
        </li>
      </div>
    </div>
  );
};

export default Hobbies;
