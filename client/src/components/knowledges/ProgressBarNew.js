import React from 'react';

const ProgressBarNew = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Years of Experience</span>
        <span>Beginner</span>
        <span>Bilingual</span>
        <span>Native</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 8;
          let progressBar = (item.xp / xpYears) * 100 + '%';
          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBarNew;
