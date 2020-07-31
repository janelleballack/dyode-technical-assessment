import React from 'react'; 

const card = (props) => {
  const mobile = props.mobile;

  return( 
    <div className="GridItem">
      <picture>
        {mobile ? (<source srcSet={props.mobile} media="(max-width: 768px)" />) : 
        (<source srcSet={props.url} />)}
        <img srcSet={props.url} alt="Images" />  
      </picture>
      <p className="GridItem__title ">{props.name}</p>
    </div> 
  );
};

export default card; 