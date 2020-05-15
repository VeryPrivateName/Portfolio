import React from 'react';
import Layout from '../components/Layout';
import Style from './about.module.scss';

const about = () => {
  return (
    <Layout>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Frontend Developer</h1>
        <div className={Style.card}>
          <i class='fas fa-child fa-lg'></i>
          <p>
            <span class='colorspan'>Who:</span> Ignas, a Lithuanian Frontend
            developer based in Berlin.
          </p>
          <i class='fas fa-fire fa-lg'></i>
          <p>
            <span class='colorspan'>Passions:</span> all things technology,
            music, gym, traveling, history and - very much so - video games.
          </p>
          <i class='fas fa-crosshairs fa-lg'></i>
          <p>
            <span class='colorspan'>Motto:</span> life is too short for bad
            websites.
          </p>
          <i class='fas fa-signature fa-lg'></i>
          <p>
            <span class='colorspan'>Languages:</span> English, Lithuanian,
            Russian and some German.
          </p>
          <i class='fas fa-chess fa-lg'></i>
          <p>
            <span class='colorspan'>Personality:</span> hungry, determined,
            passionate, punctual, adaptive and collaborative.
          </p>
          <p></p>
        </div>
        <h2>Skills</h2>
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
        <h2>Contact</h2>
      </div>
    </Layout>
  );
};

export default about;
