import React from 'react'



const ProductCard = (props) => (
  <div className="ProductCard">
    <img className="ProductCard__image" src={props.url} alt="Images" />
      <div className="ProductCard__info">
      <p className="ProductCard__title">{props.title}</p>
      <p className="ProductCard__description">{props.description}</p>
      <p className="ProductCard__price">{props.price}</p>
    </div> 
  </div>
);

export default ProductCard;
 