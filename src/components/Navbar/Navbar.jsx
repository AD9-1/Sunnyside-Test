import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import iconHamburger from "../../assets/icon-hamburger.svg";
import "./Navbar.scss";
const Navbar = () => {
  const [expandbar, setExpandbar] = React.useState(false);
  const openMenu = () => {
    setExpandbar(!expandbar);
    console.log(expandbar);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 375) {
        setExpandbar(false);
      }
    };
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} />
      </div>
      <div className="navbar-open-icon">
        <img src={iconHamburger} onClick={openMenu} />
      </div>
      <ul className={expandbar ? "navbar-list-mobile" : "navbar-list"}>
        <li>About</li>
        <li>Services</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
