import React from 'react'

import HeroImage from '../../assets/img/hero-image-2.jpg';
import HeroImageMobile from '../../assets/img/hero-image-2-mobile.jpg';

const Hero = () => (
  <div className="Hero">
    <picture>
      <source srcSet={HeroImage} media="(min-width: 600px)" />
      <img srcSet={HeroImageMobile} alt="Images" />
    </picture>
      <div className="HeroInfo">
        <h1 className="HeroTitle">Title Goes Here</h1>
        <h2 className="HeroTagline">Tagline will go right here.</h2>
        <button className="Button HeroButton">Shop Now</button>
    </div> 
  </div>
);

export default Hero;
 