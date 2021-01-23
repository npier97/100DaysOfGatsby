import { Link } from "gatsby";
import * as React from "react";
import { URL } from "utils/constants";

const navBar = {
  padding: 50,
  display: "flex",
  justifyContent: "space-around",
};

const Header = () => (
  <div style={navBar}>
    <Link to={URL.HOME}>Home</Link>
    <Link to={URL.LOCATIONS}>Locations</Link>
    <Link to={URL.ABOUT_US}>About us</Link>
  </div>
)

export default Header
