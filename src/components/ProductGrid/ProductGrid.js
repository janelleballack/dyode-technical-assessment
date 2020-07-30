import React, { useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';
import Aux from '../../hoc/Aux';

const ProductGrid = () => {
const [productState] = useState(
  { product:[ 
    {title       : 'Product Title', 
     description : 'Women’s T-Shirt',
     price       : '$19.99',
     url  :`${require("../../assets/img/product-image-1.jpg")}`}
    ]
  }); 

  const productItem = productState.product.map((item, i) =>
    <Aux key={i}><ProductCard title={item.title} description={item.description} price={item.price} url={item.url}/></Aux> 
  );

  var widthSize = window.matchMedia( "(min-width: 600px)" );
  var times = widthSize.matches ? 4 : 2; // or more
  var result = Array(times);
  for(var i = 0; i < times; i++){
    result[i] = <Aux key={i}>{productItem}</Aux>
}
 
  return (
    <div className="ProductGrid"> 
      {result}     
    </div> 
  ); 
};
 
export default ProductGrid;