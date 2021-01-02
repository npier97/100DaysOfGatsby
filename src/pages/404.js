import Layout from "components/layout"
import { Link } from "gatsby"
import * as React from "react"
import { headingStyles } from "utils/styles"

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => (
  <Layout>
    <title>Not found</title>
    <h1 style={headingStyles}>Page not found</h1>
    <p style={paragraphStyles}>
      Sorry{" "}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{" "}
      we couldn’t find what you were looking for.
      <br />
      {process.env.NODE_ENV === "development" ? (
        <>
          <br />
          Try creating a page in <code style={codeStyles}>src/pages/</code>.
          <br />
        </>
      ) : null}
      <br />
      <Link to="/">Go home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
