import React from 'react';
import navStyle from './nav.module.scss';
import Logo from '../images/logo.png';

const Nav = () => {
  return (
    <div>
      <ul className={navStyle.container}>
        <li className={navStyle.navItem}>Projects</li>
        <li className={navStyle.navItem}>
          <img className={navStyle.imgNav} src={Logo}></img>
        </li>
        <li className={navStyle.navItem}>About</li>
      </ul>
    </div>
  );
};

export default Nav;
