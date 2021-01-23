import Layout from "components/layout";
import { StyledH1 } from "components/styledComponents";
import { Link, useStaticQuery } from "gatsby";
import React from "react";
import { commonMsgs } from "utils/commonMsgs";
import { CSS_ALIGN, CSS_DISPLAY, CSS_FLEX_DIRECTION } from "utils/theme";

const locationsList = {
  display: CSS_DISPLAY.FLEX,
  alignItems: CSS_ALIGN.CENTER,
  flexDirection: CSS_FLEX_DIRECTION.COLUMN,
}


const useAllContentfulCity = () => {
  const { allContentfulCity } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulCity {
        edges {
          node {
            name
            description
            location {
              lat
              lon
            }
            gatsbyPath(filePath: "/city/{contentfulCity.name}")
          }
        }
      }
    }
  `
  );
  return allContentfulCity.edges;
}

const LocationPage = () => {
  const cities = useAllContentfulCity();

  return (
    <Layout>
      <StyledH1>{commonMsgs.findUs}</StyledH1>
      <ul style={locationsList}>
      {
        cities.map(({node}) => (
          <li key={node.name}>
            <Link to={node.gatsbyPath}>{node.name}</Link>
          </li>
        ))
      }
    </ul>
    </Layout>
  )
}

export default LocationPage
