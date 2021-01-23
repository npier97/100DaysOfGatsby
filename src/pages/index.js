import Layout from "components/layout";
import { StyledH1 } from "components/styledComponents";
import * as React from "react";
import { commonMsgs } from "utils/commonMsgs";

const IndexPage = () => (
  <Layout>
    <StyledH1>{commonMsgs.welcome}</StyledH1>
  </Layout>
)

export default IndexPage;
