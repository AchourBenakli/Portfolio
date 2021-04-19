import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Years of Experience</span>
        <span>2 years</span>
        <span>5 years</span>
        <span>8 years</span>
      </div>

      <div>
        {props.programs.map((item) => {
          let xpYears = 8;
          let progressBar = (item.xp / xpYears) * 100 + '%';
          return (
            <div key={item.id} className="programsList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
