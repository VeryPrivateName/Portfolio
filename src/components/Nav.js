import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Link from 'gatsby-plugin-transition-link';
// import { Link } from 'gatsby';

import navStyle from './nav.module.scss';
import '../App.scss';
import Logo from '../images/logo.png';
// import FaceLogo from '../components/scene/FaceLogo';

const Nav = () => {
  return (
    <div className={navStyle.container}>
      <div className={navStyle.navItem1}>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/projects'
        >
          Projects
        </AniLink>
      </div>
      <div className={navStyle.navItem2}>
        <AniLink
          className={navStyle.linkStyle}
          // cover
          fade
          duration={0.5}
          to='/'
          // direction='up'
          // bg='#023B54'
        >
          <img src={Logo} alt='logo' className={navStyle.imgNav}></img>
          {/* <FaceLogo /> */}
        </AniLink>
      </div>
      <div className={navStyle.navItem3}>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/about'
        >
          About
        </AniLink>
      </div>
    </div>
  );
};

export default Nav;
