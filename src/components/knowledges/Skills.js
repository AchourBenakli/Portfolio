import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import ProgressBarNew from './ProgressBarNew';


class Skills extends Component {
  state = {
    programs: [
      { id: 1, value: 'Opera', xp: 6.40 },
      { id: 2, value: 'Fols', xp: 4.40 },
      { id: 3, value: 'Micros', xp: 2.30 },
    ],
    languages: [
      { id: 1, value: 'French', xp: 6.40 },
      { id: 2, value: 'English', xp: 4.40 },
      { id: 3, value: 'Spanish', xp: 2.30 },
    ]
  }

  render() {
    let { programs, languages } = this.state;

    return (
      <div className="programsLanguages">
        <ProgressBar
          programs={programs}
          className="programsDisplay"
          title="programs"
        />
        <ProgressBarNew
          languages={languages}
          title="languages"
          className="languagesDisplay"
        />
      </div>
    );
  }
}

export default Skills;
