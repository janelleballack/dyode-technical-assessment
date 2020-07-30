import React from 'react'; 

import Aux from '../../hoc/Aux';
const ImageGrid = () => {
  const images = [ 
    { url  :`${require("../../assets/img/social-1.jpg")}`},
    { url  :`${require("../../assets/img/social-2.jpg")}`},
    { url  :`${require("../../assets/img/social-3.jpg")}`},
    { url  :`${require("../../assets/img/social-4.jpg")}`},
    { url  :`${require("../../assets/img/social-5.jpg")}`}
  ]; 

  const imageItem = images.map((image, i) =>
    <Aux key={i}><img srcSet={image.url} alt="Images" /> </Aux> 
  );


  return( 
    <div className="ImageGrid">
      <p className="ImageGrid__title ">Follow us on Instagram!</p>
      <div className="ImageGrid__images">
        {imageItem}
      </div>
    </div> 
  );
};

export default ImageGrid; 