import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function SlideShow() {
  const [index, setIndex] = useState(0);
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 700, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    `
  );
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1;
  const { node } = allFile.edges[index];
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  return (
    <>
      <div
        onMouseEnter={() => handlePrevious()}
        onMouseLeave={() => handleNext()}
      >
        <Img fluid={node.childImageSharp.fluid} key={node.id} alt={node.name} />
      </div>
      {/* <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div> */}
    </>
  );
}
export default SlideShow;
