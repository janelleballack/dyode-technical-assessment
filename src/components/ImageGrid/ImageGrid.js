import React from 'react'; 

import Container from '../../containers/Container';
const ImageGrid = () => {
  const images = [ 
    { url  :`${require("../../assets/img/social-1.jpg")}`},
    { url  :`${require("../../assets/img/social-2.jpg")}`},
    { url  :`${require("../../assets/img/social-3.jpg")}`},
    { url  :`${require("../../assets/img/social-4.jpg")}`},
    { url  :`${require("../../assets/img/social-5.jpg")}`}
  ]; 

  const imageItem = images.map((image, i) =>
    <img key={i} className="ImageGrid__image" srcSet={image.url} alt="Images" /> 
  );
  return( 
    <div className="ImageGrid">
      <Container>
        <p className="ImageGrid__title ">Follow us on Instagram!</p>
        <div className="ImageGrid__images">
          {imageItem}
        </div>
      </Container>
    </div> 
  );
};

export default ImageGrid; 