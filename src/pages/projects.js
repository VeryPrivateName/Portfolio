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
import { FaGithub } from 'react-icons/fa';

const projects = () => {
  return (
    <Layout>
      <Head title='Projects' />
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Examples</h1>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <RCPslides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <div className={Style.links}>
                  <a
                    href='https://rcpdcp.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={Style.outLink}
                  >
                    <h3 className={Style.mbT}>rcpdcp.com</h3>
                  </a>
                </div>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> A functional and
                minimalistic portfolio website for an artist/content creative
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> Commercial
                Project
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>SCSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>GSAP</li>
                <li className={Style.box}>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.gradient2}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <GithubSlides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <a
                  href='https://find-a-github-user.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <h3 className={Style.mbT}>GitHub Users</h3>
                </a>
                <div className={Style.links}>
                  <a
                    href='https://github.com/VeryPrivateName/find-a-user'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={Style.outLink}
                  >
                    <FaGithub className={Style.icon} />
                  </a>
                </div>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> A web app for
                finding GitHub users
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> The purpose of
                the project was to get the hang of React and Context API
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>React</li>
                <li className={Style.box}>Github API</li>
                <li className={Style.box}>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.gradient3}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <SpaceSlides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <a
                  href='https://three-space.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <h3 className={Style.mbT}>3D Landing Page</h3>
                </a>
                <div className={Style.links}>
                  <a
                    href='https://github.com/VeryPrivateName/Three-js-Landing'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={Style.outLink}
                  >
                    <FaGithub className={Style.icon} />
                  </a>
                </div>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> A landing page
                template made with Three.js
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> My objective with
                this one was to learn how 3D computer graphics work in a web
                browser
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>Three.js</li>
                <li className={Style.box}>GSAP</li>
                <li className={Style.box}>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.gradient4}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <ContactSlides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <a
                  href='https://whispering-spire-98511.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <h3 className={Style.mbT}>Contact Keeper</h3>
                </a>
                <div className={Style.links}>
                  <a
                    href='https://github.com/VeryPrivateName/contact_book'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={Style.outLink}
                  >
                    <FaGithub className={Style.icon} />
                  </a>
                </div>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> A Web App made
                with MERN stack for keeping your contacts
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> The goal was to
                have some fun with one of the more popular stacks out there.
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
            </div>
          </div>
        </div>
        <div className={Style.gradient5}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <TaskSlides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <h3 className={Style.mbTask}>Task logger</h3>
                <div className={Style.links}>
                  <a
                    href='https://github.com/VeryPrivateName/Task-manager'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={Style.outLink}
                  >
                    <FaGithub className={Style.icon} />
                  </a>
                </div>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> A simulation of
                an internal IT department app for logging tasks
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> Learned the
                differences between Context API and Redux for React state
                management
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>CSS</li>
                <li className={Style.box}>Materialize</li>
                <li className={Style.box}>React</li>
                <li className={Style.box}>JSON-Server</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.gradient6}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <SpiralSlides />
            </div>
            <div className={Style.projectInfo}>
              <div className={Style.row}>
                <a
                  href='https://www.cyberspacewhat.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={Style.outLink}
                >
                  <h3 className={Style.mbT}>Cyberspacewhat.com</h3>
                </a>
              </div>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.What</span> One of my very
                first webpages. I created it for an affiliate startup focused on
                web privacy tools
              </p>
              <p className={Style.mb}>
                <span className={Style.blackpaint}>.Why</span> It was a
                comissioned work which I used as an opportunity to learn key
                design principles
              </p>
              <ul className={Style.ulSt}>
                <li className={Style.box}>HTML</li>
                <li className={Style.box}>SCSS</li>
                <li className={Style.box}>JavaScript</li>
                <li className={Style.box}>Bootstrap</li>
                <li className={Style.box}>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.gradient7}>
          <div className={Style.projectCurrent}>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbTT}>This portfolio is built with</h3>
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
                <FaGithub className={Style.icon2} />
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
