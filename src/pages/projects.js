import React from 'react';

import Layout from '../components/Layout';
import ScrollArrow from '../components/ScrollArrow';

import Style from './projects.module.scss';
import RCPslides from '../components/projectImageControl/RCPslides';
import GithubSlides from '../components/projectImageControl/GithubSlides';
import SpaceSlides from '../components/projectImageControl/SpaceSlides';
import ContactSlides from '../components/projectImageControl/ContactSlides';
import TaskSlides from '../components/projectImageControl/TaskSlides';
import SpiralSlides from '../components/projectImageControl/SpiralSlides';

const projects = props => {
  return (
    <Layout>
      <div className={Style.grid}>
        <h1 className={Style.mtitle}>My Work</h1>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <RCPslides />
            </div>
            <div className={Style.projectInfo}>
              {/* idet linkus i koda ir site */}
              <h3 className={Style.mbT}>Project1</h3>
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
              <GithubSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Project1</h3>
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
              <SpaceSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Project1</h3>
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
              <ContactSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Project1</h3>
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
              <TaskSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Project1</h3>
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
              <SpiralSlides />
            </div>
            <div className={Style.projectInfo}>
              <h3 className={Style.mbT}>Project1</h3>
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
        <ScrollArrow />
      </div>
    </Layout>
  );
};

export default projects;
