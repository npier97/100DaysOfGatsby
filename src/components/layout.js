import React from "react"
import Header from "./header"

const pageStyles = {
  color: "#232129",
  margin: "1rem auto",
  padding: 50,
  maxWidth: 1600,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ children }) => (
  <div style={pageStyles}>
    <Header />
    {children}
  </div>
)

export default Layout