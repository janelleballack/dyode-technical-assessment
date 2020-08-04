import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from '../../containers/Container';
import ProductCard from "../ProductCard/ProductCard";
import LeftArrow from "../../assets/img/arrow-left.png";
import RightArrow from "../../assets/img/arrow-right.png";

const ProductCarousel= () => {
  var times = 8; // or more
  var slides = Array(times);
  for(var i = 0; i < times; i++){
    slides[i] = <div key={i}><ProductCard /></div>
  }
 
  const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}> <img src={RightArrow} alt="" />
    </div>
  );
  }

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}><img src={LeftArrow} alt="" />
      </div>
    );
  }

  var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: "ProductSlider",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
    };

  return (
    <div className="ProductCarousel">
      <Container>
      <p className="ProductCarousel__title">New Arrivals</p>
        <Slider {...settings}>
          {slides}
        </Slider>
      </Container>
    </div>
  );
}
 
export default ProductCarousel;