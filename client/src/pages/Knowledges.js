import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Skills from '../components/knowledges/Skills';
import NavigationNew from '../components/NavigationNew';

const Knowledges = () => {
  return (
    <div className='knowledges'>
      <NavigationNew />
      <div className="knowledgesContent">
        <Skills />
        <Experience />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;