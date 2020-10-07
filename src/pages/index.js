import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import '../App.scss';
import FaceLogo from '../components/scene/FaceLogo';
import Head from '../components/Head';

const IndexPage = () => {
  return (
    <>
    <Head title='Home' />
    <div className='grid-2 text-dark'>
      <div className='holder'>
        <h1 className='xlarge pBottom colorpaint'>Ignas</h1>
        <h2 className='large pBottom defaultFont'>
          Creating face for Internet
        </h2>
        <div className='buttons'>
          <AniLink className='linkStyle' fade duration={0.5} to='/projects'>
            <div className='button'>Projects</div>
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
    </>
  );
};

export default IndexPage;
