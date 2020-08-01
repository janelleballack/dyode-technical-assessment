import React from 'react'
 
const toggleNav = (props) => (
  
  <div className="ToggleNav"  onClick={props.toggleMenu}>
    <span className="Bar"></span>
    <span className="Bar"></span>
    <span className="Bar"></span>
  </div>
  
);
 
export default toggleNav;
 