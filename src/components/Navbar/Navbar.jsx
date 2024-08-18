import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import hamburger from "../../assets/icon-hamburger.svg";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [expandBar, setExpandBar] = useState(false);
  const handleClick = () => {
    setExpandBar(!expandBar);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 375) {
        setExpandBar(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="navbar-logo" />
      </div>
      <div className="navbar-openIcon">
        <img onClick={handleClick} src={hamburger} alt="" />
      </div>
      <ul className={expandBar ? "navbar-mobile-list" : "navbar-list"}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
