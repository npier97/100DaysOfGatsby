import Layout from "components/layout";
import { StyledH1 } from "components/styledComponents";
import { Link } from "gatsby";
import React from "react";
import { commonMsgs } from "utils/commonMsgs";
import { CSS_ALIGN, CSS_DISPLAY, CSS_FLEX_DIRECTION } from "utils/theme";
import { useContentfulCities } from "./contentful";

const locationsList = {
  display: CSS_DISPLAY.FLEX,
  alignItems: CSS_ALIGN.CENTER,
  flexDirection: CSS_FLEX_DIRECTION.COLUMN,
}

const LocationPage = () => {
  const { edges } = useContentfulCities();

  return (
    <Layout>
      <StyledH1>{commonMsgs.findUs}</StyledH1>
      <ul style={locationsList}>
      {
        edges.map(({node}) => (
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
