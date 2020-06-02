@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

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
        <Link
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          to='/projects'
        >
          <li className={navStyle.navItem}>Projects</li>
        </Link>
        <Link className={navStyle.linkStyle} to='/'>
          <li className={navStyle.navItem}>
            <FaceLogo />
          </li>
        </Link>
        <Link
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          to='/about'
        >
          <li className={navStyle.navItem}>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;

const Nav = () => {
  return (
    <div>
      <div className={navStyle.container}>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/projects'
        >
          <div className={navStyle.navItem1}>Projects</div>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          cover
          duration={1.5}
          to='/'
          direction='up'
          bg='#023B54'
        >
          <div className={navStyle.navItem2}>
            <FaceLogo />
          </div>
        </AniLink>
        <AniLink
          className={navStyle.linkStyle}
          activeClassName={navStyle.activeNav}
          fade
          duration={0.5}
          to='/about'
        >
          <div className={navStyle.navItem3}>About</div>
        </AniLink>
      </div>
    </div>
  );
};
