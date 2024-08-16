import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="navbar-logo" />
      </div>
      <ul className="navbar-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
