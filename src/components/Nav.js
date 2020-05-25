import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Link from 'gatsby-plugin-transition-link';
// import { Link } from 'gatsby';

import navStyle from './nav.module.scss';
import '../App.scss';
// import Logo from '../images/logo.png';
import FaceLogo from '../components/scene/FaceLogo';

const Nav = () => {
  return (
    <div>
      <ul className={navStyle.container}>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/projects'
          direction='top'
        >
          <li className={navStyle.navItem}>Projects</li>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          cover
          duration={1.5}
          to='/'
          direction='up'
          bg='#023B54'
        >
          <li className={navStyle.navItem}>
            <FaceLogo />
          </li>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/about'
          direction='top'
        >
          <li className={navStyle.navItem}>About</li>
        </AniLink>
      </ul>
    </div>
  );
};

export default Nav;
