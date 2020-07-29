import React from 'react'

import HeroImage1 from '../../assets/img/hero-image-1.jpg';
import HeroImageMobile from '../../assets/img/hero-image-1-mobile.jpg';

const TextCard = () => (
  <picture >
    <source srcSet={HeroImage1} media="(min-width: 600px)" />
    <img srcSet={HeroImageMobile} alt="Images" />
      <div className="TextCardInfo">
      <h1 className="TextCardTitle">Title Goes Here</h1>
      <h2 className="TextCardTagline">Tagline will go right here.</h2>
      <button className="TextCardButton">Shop Now</button>
    </div> 
  </picture>
);

export default TextCard;
 