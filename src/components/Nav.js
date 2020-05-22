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
          cover
          to='/projects'
          direction='top'
          bg='#023B54'
        >
          <li className={navStyle.navItem}>Projects</li>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          cover
          to='/'
          direction='top'
          bg='#023B54'
        >
          <li className={navStyle.navItem}>
            <FaceLogo />
          </li>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          cover
          to='/about'
          direction='top'
          bg='#023B54'
        >
          <li className={navStyle.navItem}>About</li>
        </AniLink>
      </ul>
    </div>
  );
};

export default Nav;
