import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

const Sections = () => {
  return (
    <div className='bg-blue-400 flex justify-between p-5'>
      <Section1/>
      <Section2/>
    </div>
  );
}

export default Sections;
