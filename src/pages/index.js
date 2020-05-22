import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Link from 'gatsby-plugin-transition-link';

// import { Link } from 'gatsby';

import '../App.scss';

import FaceLogo from '../components/scene/FaceLogo';

const IndexPage = () => {
  return (
    <div className='grid-2 text-dark'>
      <div className='holder'>
        <h1 className='xlarge pBottom primary-color'>Name</h1>
        <h2 className='large pBottom'>
          I am a Frontend developer based in Berlin.
        </h2>
        <div className='buttons'>
          {/* <Link to='/projects' className='linkStyle'>
            <div className='button btn-dark'>Projects</div>
          </Link> */}
          {/* <Link to='/about' className='linkStyle'>
            <div className='button btn-dark'>About</div>
          </Link> */}
          <AniLink
            className='linkStyle'
            cover
            to='/projects'
            direction='top'
            bg='#023B54'
          >
            <div className='button btn-dark'>About</div>
          </AniLink>
          <AniLink
            className='linkStyle'
            cover
            to='/about'
            direction='top'
            bg='#023B54'
          >
            <div className='button btn-dark'>About</div>
          </AniLink>
        </div>
      </div>
      <FaceLogo />
    </div>
  );
};

export default IndexPage;
