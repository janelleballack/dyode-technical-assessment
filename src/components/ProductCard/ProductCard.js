import React from 'react'

const ProductCard = () => {
const product =  
    {title       : 'Product Title', 
     description : 'Women’s T-Shirt',
     price       : '$19.99',
     url  :`${require("../../assets/img/product-image-1.jpg")}`}
    


return(

  <div className="ProductCard">
    <img className="ProductCard__image" src={product.url} alt="Images" />
      <div className="ProductCard__info">
      <p className="ProductCard__title">{product.title}</p>
      <p className="ProductCard__description">{product.description}</p>
      <p className="ProductCard__price">{product.price}</p>
    </div> 
  </div>
)
};
export default ProductCard;
 