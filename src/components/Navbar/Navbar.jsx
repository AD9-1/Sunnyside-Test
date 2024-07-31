import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

const Navbar = () => {
  const [expandBar, setExpandBar] = useState(false);

  const handleClick = () => {
    setExpandBar(!expandBar);
  };


  useEffect(() =>{
    const handleResize=()=>{
        if(window.innerWidth>375)
        {
            setExpandBar(false);
        }
    }
    window.addEventListener("resize", handleResize);
  },[])


  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-open-icon">
        <img src={hamburger} onClick={handleClick} />
      </div>
      <ul className={expandBar ? "navbar-list-mobile" : "navbar-list"}>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
