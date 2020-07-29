import React from "react";

import { Carousel }  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Aux from '../../hoc/Aux';
import TextCard from '../TextCard/TextCard';

function HeroCarousel() {
  var times = 4; // or more
  var result = Array(times);
  for(var i = 0; i < times; i++){
    result[i] = <Aux key={i}><TextCard /></Aux>
}
 
  return (
    <Carousel
      showThumbs={false} 
      showStatus={false} 
      showArrows={false} 
      className="HeroCarousel">
      {result }
    </Carousel>
  );
}
 
export default HeroCarousel;
 