import React from "react";
import "./Hero.scss"
import ArrowDown from "../../assets/icon-arrow-down.svg"
const Hero = () => {
  return (
    <div className="hero">
      <h1>We Are Creatives</h1>
      <div className="hero_image">
        <img src={ArrowDown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
