import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';
import ScrollArrow from '../components/ScrollArrow';

import Style from './projects.module.scss';
import RCPslides from '../components/projectImageControl/RCPslides';
import GithubSlides from '../components/projectImageControl/GithubSlides';
import SpaceSlides from '../components/projectImageControl/SpaceSlides';
import ContactSlides from '../components/projectImageControl/ContactSlides';
import TaskSlides from '../components/projectImageControl/TaskSlides';
import SpiralSlides from '../components/projectImageControl/SpiralSlides';
import { FaEye, FaGithub } from 'react-icons/fa';

const projects = () => {
  return (
    <Layout>
    <Head title='Projects'/>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>My Work</h1>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <RCPslides />
            </div>
            <div className={Style.projectInfo}>
              {/* idet linkus i koda ir site */}
              <h3 className={Style.mbT}>rcpdcp.com</h3>
              <p className={Style.mb}>
                A functional and minimalistic portfolio website for an artist /
                content creative. "rcpdcp", which can be deciphered as
                recomposer / decomposer, is a dual web universe of a visual
                artist/(copy) writer-music journalist.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>SCSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>Netlify</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient2}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <GithubSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>GitHub Users</h3>
              <p className={Style.mb}>
                Web app for finding Github users. The purpose of the project was
                to practice working with React and Context API.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>React</li>
                <li className={Style.box}>Github API</li>
                <li className={Style.box}>Netlify</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaGithub className={Style.icon} />
                </a>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient3}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <SpaceSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Interactive Landing Page</h3>
              <p className={Style.mb}>
                A landing page template done with Three.js. Main purpose of the
                project was to learn how 3D computer graphics work in a web
                browser.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>Three.js</li>
                <li className={Style.box}>GSAP</li>
                <li className={Style.box}>Netlify</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaGithub className={Style.icon} />
                </a>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient4}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <ContactSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Contact Keeper</h3>
              <p className={Style.mb}>
                Web App done with MERN stack for keeping your contacts. The goal
                of the project was to practise with one of the more popular
                stacks out there.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>React</li>
                <li className={Style.box}>MongoDB</li>
                <li className={Style.box}>Node.js</li>
                <li className={Style.box}>Express.js</li>
                <li className={Style.box}>Heroku</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaGithub className={Style.icon} />
                </a>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient5}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <TaskSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Task logger</h3>

              <p className={Style.mb}>
                Imitation of internal IT department app for logging tasks. Main
                objective of the project was to learn the differences between
                Context API and Redux for React state management.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>Materialize</li>
                <li className={Style.box}>React</li>
                <li className={Style.box}>JSON-Server</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaGithub className={Style.icon} />
                </a>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient6}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <SpiralSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Cyberspacewhat.com</h3>

              <p className={Style.mb}>
                One of my the very first webpages done for affiliate business.
                The general theme of the website being personal privacy.
                Currently discontinued.
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>SCSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>Bootstrap</li>
                <li className={Style.box}>Netlify</li>
              </ul>
              <div className={Style.links}>
                <a
                  href='https://github.com/VeryPrivateName'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <FaEye className={Style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.gradient7}>
          <div className={Style.projectCurrent}>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbTT}>This portfolio is built with:</h3>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>SCSS</li>
                <li className={Style.box}>Gatsby.js</li>
                <li className={Style.box}>React Three Fiber</li>
                <li className={Style.box}>GraphQL</li>
                <li className={Style.box}>Netlify</li>
              </ul>
            </div>
            <div className={Style.links}>
              <a
                href='https://github.com/VeryPrivateName'
                target='_blank'
                rel='noopener noreferrer'
                className={Style.outLink}
              >
                <FaGithub className={Style.icon} />
              </a>
            </div>
          </div>
        </div>
        <ScrollArrow />
      </div>
    </Layout>
  );
};

export default projects;
