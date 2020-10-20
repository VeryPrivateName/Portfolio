import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { IconContext } from 'react-icons';
import {
  FaChild,
  FaFire,
  FaCrosshairs,
  FaSignature,
  FaChess,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

import Layout from '../components/Layout';
import Head from '../components/Head';
import ScrollArrow from '../components/ScrollArrow';
import Style from './about.module.scss';

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "igno-avatar-master.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

const About = props => {
  return (
    <Layout>
      <Head title='About' />
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Web Developer</h1>
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
                    <span className={Style.colorspan}>.Who</span> Ignas, a
                    multi-purpose geek based in Berlin
                  </p>

                  <FaCrosshairs className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>.Motto</span> life is too
                    short for bad websites
                  </p>
                  <FaSignature className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>.Languages</span> English,
                    Lithuanian, Russian and some German
                  </p>
                  <FaFire className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>.Passions</span> all
                    things technology, music, history, gym, traveling and - very
                    much so - video games
                  </p>
                  <FaChess className={Style.gridyCenter} />
                  <p>
                    <span className={Style.colorspan}>.Personality</span>{' '}
                    determined, creative, adaptive, punctual and considerate
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <h2 className={Style.mtitle}>My Toolbox</h2>
        <div className={Style.skills}>
          <div className={Style.wrapper}>
            <h3 className={Style.m1}>Front End</h3>
            <ul className={Style.ulSt}>
              <li className={Style.box}>HTML</li>
              <li className={Style.box}>CSS</li>
              <li className={Style.box}>SCSS</li>
              <li className={Style.box}>JavaScript</li>
              <li className={Style.box}>React</li>
              <li className={Style.box}>Gatsby JS</li>
              <li className={Style.box}>Three.js</li>
              <li className={Style.box}>GSAP</li>
              <li className={Style.box}>Bootstrap</li>
            </ul>
          </div>
          <div className={Style.wrapper}>
            <h3 className={Style.m1}>Back End</h3>
            <ul className={Style.ulSt}>
              <li className={Style.box}>Node.js</li>
              <li className={Style.box}>MongoDB</li>
              <li className={Style.box}>GraphQL</li>
              <li className={Style.box}>Express.js</li>
              <li className={Style.box}>REST API</li>
            </ul>
          </div>
          <div className={Style.wrapper}>
            <h3 className={Style.m1}>Other</h3>
            <ul className={Style.ulSt}>
              <li className={Style.box}>Puppeteer</li>
              <li className={Style.box}>GitHub / Git</li>
              <li className={Style.box}>Adobe Photoshop / XD</li>
              <li className={Style.box}>GIMP</li>
              <li className={Style.box}>Blender</li>
              <li className={Style.box}>DaVinci Resolve</li>
              <li className={Style.box}>Google Analytics</li>
              <li className={Style.box}>Backlinks</li>
              <li className={Style.box}>Microsoft Office</li>
            </ul>
          </div>
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
              {/* Pakeist emailo adresa */}
              <a
                href='mailto:ignas@ignas.link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaEnvelope />
              </a>
              <p>
                <span className={Style.colorspanMail}>ignas</span>
                <span className={Style.colorspanMail2}>@ignas.link</span>
              </p>
            </div>
          </IconContext.Provider>
        </div>
        <ScrollArrow />
      </div>
    </Layout>
  );
};

export default About;
