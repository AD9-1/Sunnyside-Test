import React from 'react';
import "./Hero.scss"
import arrowdown from "../../assets/icon-arrow-down.svg"
const Hero = () => {
  return (
    <div className='hero'>
      <h1>We Are Creatives</h1>
      <div className='hero-image'><img src={arrowdown} alt="" /></div>
    </div>
  )
}

export default Hero
