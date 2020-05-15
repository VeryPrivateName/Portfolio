import React from 'react';
import { Link } from 'gatsby';

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
