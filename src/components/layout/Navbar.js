import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icons, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icons} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>

      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Netflix Clone",
  icons: "fab fa-youtube",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};

export default Navbar;
