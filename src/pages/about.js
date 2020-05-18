import React from 'react';
import Layout from '../components/Layout';
import Style from './about.module.scss';

const about = () => {
  return (
    <Layout>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Frontend Developer</h1>
        <div className={Style.card}>
          <div className={Style.gridy}>
            <i className='fas fa-child fa-lg'></i>{' '}
            <p>
              <span className={Style.colorspan}>Who:</span> Ignas, a Lithuanian
              Frontend developer based in Berlin.
            </p>
            <i className='fas fa-fire fa-lg'></i>{' '}
            <p>
              <span className={Style.colorspan}>Passions:</span> all things
              technology, music, gym, history, traveling and - very much so -
              video games.
            </p>
            <i className='fas fa-crosshairs fa-lg'></i>{' '}
            <p>
              <span className={Style.colorspan}>Motto:</span> life is too short
              for bad websites.
            </p>
            <i className='fas fa-signature fa-lg'></i>{' '}
            <p>
              <span className={Style.colorspan}>Languages:</span> English,
              Lithuanian, Russian and some German.
            </p>
            <i className='fas fa-chess fa-lg'></i>{' '}
            <p>
              <span className={Style.colorspan}>Personality:</span> hungry,
              determined, passionate, punctual, adaptive and collaborative.
            </p>
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
          <div className={Style.contactholder}>
            <a
              href='https://www.linkedin.com/in/ignass/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in fa-2x'></i>{' '}
            </a>
            <a
              href='https://github.com/VeryPrivateName'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-2x'></i>{' '}
            </a>
            <p className={Style.colorspanMail}>ignas@ignas.link</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
