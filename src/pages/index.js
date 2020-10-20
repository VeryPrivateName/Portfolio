import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import '../App.scss';
import Head from '../components/Head';
import NewFull from '../components/scene/NewFull';

const IndexPage = () => {
  return (
    <>
      <Head title='Home' />
      <div className='landing'>
        <NewFull />
        <div className='holder'>
          <h1 className='xlarge colorpaint'>Ignas</h1>
          <h2 className='large pBottom defaultFont'>
            Creating faces for Internet
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
        <div className='layer' />
      </div>
    </>
  );
};

export default IndexPage;
