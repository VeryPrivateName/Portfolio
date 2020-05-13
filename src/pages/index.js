import React from 'react';
import { Link } from 'gatsby';

import '../App.scss';

import FaceLogo from '../components/scene/FaceLogo';

const IndexPage = () => {
  return (
    <div className='grid-2 border'>
      <div className='holder'>
        <h1 className='xlarge '>Name</h1>
        <h2 className='large pBottom'>
          I am a Frontend developer based in Berlin.
        </h2>
        <div className='buttons'>
          <Link to='/projects' className='linkStyle'>
            <div className='button btn-dark'>Projects</div>
          </Link>
          <Link to='/about' className='linkStyle'>
            <div className='button btn-dark'>About</div>
          </Link>
        </div>
      </div>
      <FaceLogo />
    </div>
  );
};

export default IndexPage;
