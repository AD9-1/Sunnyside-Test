import React from "react";
import arrowdown from "../../assets/icon-arrow-down.svg";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <h1>We Are Creatives</h1>
      <div className="hero-image">
        <img src={arrowdown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
