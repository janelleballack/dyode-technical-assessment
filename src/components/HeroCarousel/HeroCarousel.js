import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aux from '../../hoc/Aux';
import TextCard from '../TextCard/TextCard';

function HeroCarousel() {
  var times = 4; // or more
  var result = Array(times);
  for(var i = 0; i < times; i++){
    result[i] = <Aux key={i}><TextCard /></Aux>
}


var settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      className: "HeroCarousel",
      customPaging: i => (
        <button></button>
      )
    };
 
  return (
    <Slider {...settings}>
      {result }
    </Slider>
  );
}
 
export default HeroCarousel;
 