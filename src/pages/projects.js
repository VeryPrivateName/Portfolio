import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

import ft from '../images/ft1.jpg';
import Style from './projects.module.scss';

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    project1: file(relativePath: { eq: "ft1.jpg" }) {
      ...fluidImage
    }
    project2: file(relativePath: { eq: "ft1.jpg" }) {
      ...fluidImage
    }
    project3: file(relativePath: { eq: "ft1.jpg" }) {
      ...fluidImage
    }
    project4: file(relativePath: { eq: "ft1.jpg" }) {
      ...fluidImage
    }
  }
`;

const projects = props => {
  return (
    <Layout>
      <div className={Style.grid}>
        {/* Gal isimt title kadangi navigacijoje jau matosi kur randiesi */}
        <h1 className={Style.mtitle}>My Work</h1>
        <div className={Style.gradient}>
          <div className={Style.project}>
            <div className={Style.projectImage}>
              <Img fluid={props.data.project1.childImageSharp.fluid} />
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
              <Img fluid={props.data.project2.childImageSharp.fluid} />
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
              <Img fluid={props.data.project3.childImageSharp.fluid} />
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
              <Img fluid={props.data.project4.childImageSharp.fluid} />
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
