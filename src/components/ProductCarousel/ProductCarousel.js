import React from "react";

import { Carousel }  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Aux from '../../hoc/Aux';
import ProductGrid from "../ProductGrid/ProductGrid";

function ProductCarousel() {
//   var times = 4; // or more
//   var result = Array(times);
//   for(var i = 0; i < times; i++){
//     result[i] = <Aux key={i}><ProductGrid /></Aux>
// }
 
  return (
    <Carousel
      showThumbs={false} 
      showStatus={false} 
      showIndicators={false} 
      className="ProductCarousel">
      <ProductGrid />
    </Carousel>
  );
}
 
export default ProductCarousel;
 