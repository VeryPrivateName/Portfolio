import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Link from 'gatsby-plugin-transition-link';

// import { Link } from 'gatsby';

import '../App.scss';

import FaceLogo from '../components/scene/FaceLogo';
import Loader from '../components/Loader';

const IndexPage = () => {
  return (
    <div className='grid-2 text-dark'>
      <div className='holder'>
        <h1 className='xlarge pBottom colorpaint'>Ignas</h1>
        <h2 className='large pBottom defaultFont'>
          I will create you a Internet face
        </h2>
        <div className='buttons'>
          <AniLink className='linkStyle' fade duration={0.5} to='/projects'>
            <div className='button '>Projects</div>
          </AniLink>
          <AniLink className='linkStyle' fade duration={0.5} to='/about'>
            <div className='button'>About</div>
          </AniLink>
        </div>
      </div>

      <div className='holder2'>
        <FaceLogo />
      </div>
    </div>
  );
};

export default IndexPage;
