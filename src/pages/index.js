import React from 'react';
import { Link } from 'gatsby';

import '../App.css';
import svg from '../images/wavy.svg';

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
          <div className='button btn-dark'>
            <Link to='/projects' className='linkStyle'>
              <p>Projects</p>
            </Link>
          </div>
          <div className='button btn-dark'>
            <Link to='/about' className='linkStyle'>
              About
            </Link>
          </div>
        </div>
      </div>
      <FaceLogo />
    </div>
  );
};

export default IndexPage;
