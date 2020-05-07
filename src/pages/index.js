import React from 'react';

import '../App.css';
import FaceLogo from '../components/scene/FaceLogo';

const IndexPage = () => {
  return (
    <div className='grid-2 border'>
      <div className='holder'>
        <h1 className='xlarge pBottom'>Name</h1>
        <h2 className='large pBottom'>
          I am a Frontend developer based in Berlin.
        </h2>
        <div className='buttons'>
          <div className='button btn-dark'>Projects</div>
          <div className='button btn-dark'>About</div>
        </div>
      </div>
      <FaceLogo />
    </div>
  );
};

export default IndexPage;
