import Layout from "components/layout";
import { StyledH1 } from "components/styledComponents";
import { graphql } from "gatsby";
import React from "react";
import { commonMsgs } from "utils/commonMsgs";

export const query = graphql`
query ($id: String = "") {
  contentfulCity(id: {eq: $id}) {
    name
    description
    location {
      lat
      lon
    }
  }
}
`

const City = ({data}) => (
  <Layout>
    <StyledH1>{commonMsgs.youAreIn}{data.contentfulCity.name}</StyledH1>
    <p>{data.contentfulCity.description}</p>
  </Layout>
)

export default City;
