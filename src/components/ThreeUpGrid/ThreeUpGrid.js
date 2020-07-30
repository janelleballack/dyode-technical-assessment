import React, { useState } from 'react';

import Card from '../GridItem/GridItem';
import Aux from '../../hoc/Aux';
import Container from '../../containers/Container';

const ThreeUpGrid = () => {
const [collectionState] = useState(
  { collection:[ 
    {name : 'Womens', 
     url  :`${require("../../assets/img/womens-image.jpg")}`},
    {name : 'Mens',  
     url  :`${require("../../assets/img/mens-image.jpg")}`},
    {name : 'Accessories', 
     url  :`${require("../../assets/img/accessories-image.jpg")}`,
     mobile: `${require("../../assets/img/accessories-image-mobile.jpg")}`}
    ]
  }); 

  const gridItem = collectionState.collection.map((item, i) =>
    <Aux key={i}><Card name={item.name} url={item.url} mobile={item.mobile}/></Aux> 
  );
  
  return (
    <div className="ThreeUpGrid"> 
      <Container>
        {gridItem}     
      </Container>
    </div> 
  ); 
};
 
export default ThreeUpGrid;