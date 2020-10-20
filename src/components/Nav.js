import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import navStyle from './nav.module.scss';

const Nav = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "faceLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
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
        <AniLink className={navStyle.linkStyle} fade duration={0.5} to='/'>
          <Img
            className={navStyle.imgNav}
            fluid={data.file.childImageSharp.fluid}
            alt='logo'
          />
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
