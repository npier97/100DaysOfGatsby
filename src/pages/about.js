import Layout from "components/layout";
import { StyledH1 } from "components/styledComponents";
import * as React from "react";
import { commonMsgs } from "utils/commonMsgs";

const AboutPage = () => (
  <Layout>
    <StyledH1>{commonMsgs.ourStory}</StyledH1>
  </Layout>
)

export default AboutPage;
