import React from 'react';
import Layout from '../components/Layout';

import ft from '../images/ft1.jpg';
import Style from './projects.module.scss';

const projects = () => {
  return (
    <Layout>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>Projects</h1>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <img src={ft} alt='dasdasd'></img>
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mb}>Project1</h3>
              <p className={Style.mb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ab ut dolore eius eveniet. Tenetur animi molestias
                officia recusandae ipsum, consequuntur soluta repellat
                exercitationem, dolor est a quae laudantium voluptatibus beatae
                blanditiis obcaecati doloremque at consectetur et cupiditate.
                Blanditiis qui id doloribus facere facilis placeat deserunt
                atque explicabo ipsum itaque.
              </p>
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
          </div>
        </div>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <img src={ft} alt='dasdasd'></img>
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mb}>Project1</h3>
              <p className={Style.mb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ab ut dolore eius eveniet. Tenetur animi molestias
                officia recusandae ipsum, consequuntur soluta repellat
                exercitationem, dolor est a quae laudantium voluptatibus beatae
                blanditiis obcaecati doloremque at consectetur et cupiditate.
                Blanditiis qui id doloribus facere facilis placeat deserunt
                atque explicabo ipsum itaque.
              </p>
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
          </div>
        </div>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <img src={ft} alt='dasdasd'></img>
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mb}>Project1</h3>
              <p className={Style.mb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ab ut dolore eius eveniet. Tenetur animi molestias
                officia recusandae ipsum, consequuntur soluta repellat
                exercitationem, dolor est a quae laudantium voluptatibus beatae
                blanditiis obcaecati doloremque at consectetur et cupiditate.
                Blanditiis qui id doloribus facere facilis placeat deserunt
                atque explicabo ipsum itaque.
              </p>
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
          </div>
        </div>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <img src={ft} alt='dasdasd'></img>
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mb}>Project1</h3>
              <p className={Style.mb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem ab ut dolore eius eveniet. Tenetur animi molestias
                officia recusandae ipsum, consequuntur soluta repellat
                exercitationem, dolor est a quae laudantium voluptatibus beatae
                blanditiis obcaecati doloremque at consectetur et cupiditate.
                Blanditiis qui id doloribus facere facilis placeat deserunt
                atque explicabo ipsum itaque.
              </p>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
