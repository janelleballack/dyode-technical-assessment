import React from "react";

import { Carousel }  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Aux from '../../hoc/Aux';
import ProductGrid from "../ProductGrid/ProductGrid";

const ProductCarousel= () => {
  var times = 3; // or more
  var slides = Array(times);
  for(var i = 0; i < times; i++){
    slides[i] = <Aux key={i}><ProductGrid /></Aux>
}
 
  return (
    <Aux>
    <p className="ProductCarousel__title">New Arrivals</p>
      <Carousel
        showThumbs={false} 
        showStatus={false} 
        showIndicators={false} 
        className="ProductCarousel">
        {slides}
      </Carousel>
    </Aux>
  );
}
 
export default ProductCarousel;
 