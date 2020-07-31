import React from 'react'; 

const Social = () => {
  const images = [ 
    {name : 'Facebook', 
     url  :`${require("../../assets/img/facebook.png")}`},
    {name : 'Instagram',  
     url  :`${require("../../assets/img/instagram.png")}`},
    {name : 'Twitter', 
     url  :`${require("../../assets/img/twitter.png")}`}
  ]; 

  const imageItem = images.map((image, i) =>
    <li className="Social__image" key={i}>
      <a href="/" alt={image.name}>
      <img srcSet={image.url} alt={image.name} /></a>
    </li>
  );
  return( 
    <div className="Social">
      <p className="Social__title ">Follow us</p>
      <ul className="Social__images">
        {imageItem}
      </ul>
    </div> 
  );
};

export default Social; 