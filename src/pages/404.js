import { StyledH1 } from "components/styledComponents";
import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { commonMsgs } from "utils/commonMsgs";
import { CSS_ALIGN, CSS_BACKGROUND_COLOR, CSS_COLOR, CSS_FONT_WEIGHT } from "utils/theme";

const Container = styled.div({
  maxWidth: 1600,
  margin: "10px auto",
  padding: "50px",
  textAlign: CSS_ALIGN.CENTER,
  color: CSS_COLOR.CODE_STYLE,
  backgroundColor: CSS_BACKGROUND_COLOR.CODE_STYLE,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
});

const StyledLink = styled(Link)({
  fontWeight: CSS_FONT_WEIGHT.BOLD,
  color: CSS_COLOR.CODE_STYLE,
});

const NotFoundPage = () => (
  <Container>
    <title>{commonMsgs.pageNotFound}</title>
    <StyledH1>{commonMsgs.pageNotFound}</StyledH1>
    <p>
      {commonMsgs.sorry}{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      {commonMsgs.weCouldntFind}.
    </p>
    <StyledLink to="/">{commonMsgs.backToHomePage}</StyledLink>
  </Container>
)

export default NotFoundPage;
