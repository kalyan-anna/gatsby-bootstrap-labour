import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>;
  }

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />;
};
