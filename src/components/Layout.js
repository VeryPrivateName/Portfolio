import React from 'react';
import '../App.scss';

import Nav from './Nav';
import layoutStyle from './layout.module.scss';

const Layout = props => {
  return (
    <div className={layoutStyle.grid}>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
