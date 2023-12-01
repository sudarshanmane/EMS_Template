import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ marginLeft: "800px" }}>
      <Link to="/AboutUsPage" style={{ marginRight: "50px" }}>
        About Us
      </Link>
      <Link to="/ContactUsPage">Contact Us</Link>
    </div>
  );
};

export default Navbar;
