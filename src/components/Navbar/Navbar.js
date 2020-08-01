import React, {useState} from 'react';

import ToggleNav from '../Navbar/ToggleNav/ToggleNav';
import Aux from '../../hoc/Aux';

function Navbar() {
  const [setActive, setActiveState] = useState("");
  const [setStyle, setStyleState] = useState("none");
  const toggleMenu = () => {
    setActiveState(setActive === "" ? "active" : "");
    setStyleState(
      setActive === "active" ? "none" : "block"
    );
  }


  let navLinks = ['Womens', 'Mens', 'Accessories', 'Sale!'];
  const listItems = navLinks.map((link, i) =>
    <li key={i} className="NavbarList__item">
      <a href="/">{link}</a>
    </li>
  );
  

  return (
    <Aux>
      <ToggleNav 
        toggleMenu={toggleMenu}
      />
      <ul className="NavbarList" style={{ display: `${setStyle}` }}>
        {listItems}
      </ul>
  </Aux>
  );
};
 
export default Navbar;
 