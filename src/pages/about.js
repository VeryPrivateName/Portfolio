import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Style from './about.module.scss';

// import peep from '../images/peep.svg';

// import peep4 from '../images/IGNO AVATAR-04.png';

import { IconContext } from 'react-icons';
import {
  FaChild,
  FaFire,
  FaCrosshairs,
  FaSignature,
  FaChess,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IGNOAVATAR-04.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const about = props => {
  return (
    <Layout>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Frontend Developer</h1>
        <div className={Style.gridIntro}>
          <div className={Style.graphic}>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </div>
          <div>
            <div className={Style.card}>
              <IconContext.Provider
                value={{
                  className: 'iconsProf',
                }}
              >
                <div className={Style.gridy}>
                  <FaChild className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>Who:</span> Ignas, a
                    Lithuanian Frontend developer based in Berlin.
                  </p>
                  <FaFire className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>Passions:</span> all
                    things technology, music, gym, history, traveling and - very
                    much so - video games.
                  </p>
                  <FaCrosshairs className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>Motto:</span> life is too
                    short for bad websites.
                  </p>
                  <FaSignature className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>Languages:</span> English,
                    Lithuanian, Russian and some German.
                  </p>
                  <FaChess className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>Personality:</span>{' '}
                    hungry, determined, passionate, punctual, adaptive and
                    collaborative.
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <h2 className={Style.mtitle}>Skills</h2>
        <div className={Style.wrapper}>
          <h3 className={Style.m1}>Languages</h3>
          <ul className={Style.ulSt}>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
          </ul>
        </div>
        <div className={Style.wrapper}>
          <h3 className={Style.m1}>Tools</h3>
          <ul className={Style.ulSt}>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
          </ul>
        </div>
        <div className={Style.wrapper}>
          <h3 className={Style.m1}>Other</h3>
          <ul className={Style.ulSt}>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
          </ul>
        </div>
        <div className={Style.wrapper}>
          <h3 className={Style.m1}>Databases</h3>
          <ul className={Style.ulSt}>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
            <li className={Style.box}>HTML</li>
          </ul>
        </div>
        <h2 className={Style.mtitle}>Contact</h2>
        <div className={Style.wrapperBorder}>
          <IconContext.Provider
            value={{
              className: 'iconsCont',
            }}
          >
            <div className={Style.contactholder}>
              <a
                href='https://www.linkedin.com/in/ignass/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/VeryPrivateName'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
              <p className={Style.colorspanMail}>ignas@ignas.link</p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </Layout>
  );
};

export default about;
