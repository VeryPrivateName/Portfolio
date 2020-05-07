import React from 'react';

import '../App.css';
import FaceLogo from '../components/scene/FaceLogo';

const IndexPage = () => {
  return (
    <div className="grid-2 landingContainer">
      <div className="intro">
        <div className="textHolder">
          <h1>Name</h1>
          <h1>I am a Frontend developer based in Berlin.</h1>
        </div>
      </div>
      <FaceLogo />
    </div>
  );
};

export default IndexPage;
