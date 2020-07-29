import React from "react";

import { Carousel }  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import HeroImage1 from '../../assets/img/hero-image-1.jpg';
import HeroImageMobile from '../../assets/img/hero-image-1-mobile.jpg';

function HeroCarousel() {
  var numberOfSlides = 4; // or more
  // create a new array of objects/slides.
  // create a new array populated with the results from function using map().
  const slide = [...Array(numberOfSlides)].map((e, i) => 
    <picture key={i}>
      <source srcSet={HeroImage1} media="(min-width: 600px)" />
      <img srcSet={HeroImageMobile} alt="Images" />
    </picture>
  )
 
  return (
    <Carousel
      showThumbs={false} 
      showStatus={false} 
      showArrows={false} 
      className="HeroCarousel">
      {slide}
    </Carousel>
  );
}
 
export default HeroCarousel;
 