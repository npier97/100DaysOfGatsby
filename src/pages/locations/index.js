import Layout from "components/layout"
import { Link } from "gatsby"
import * as React from "react"
import { headingStyles } from "utils/styles"
import { URL } from "../../utils/constants"

const locationsList = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}

const LocationPage = () => {
  return (
    <Layout>
      <main>
        <h1 style={headingStyles}>Find us:</h1>
        <ol style={locationsList}>
          <li><Link to={URL.LOS_ANGELES}>Los Angeles</Link></li>
          <li><Link to={URL.SACRAMENTO}>Sacramento</Link></li>
          <li><Link to={URL.SAN_FRANCISCO}>San Francisco</Link></li>
        </ol>
      </main>
    </Layout>
  )
}

export default LocationPage
