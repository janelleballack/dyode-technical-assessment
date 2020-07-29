import React from 'react';

import ToggleNav from '../Navbar/ToggleNav/ToggleNav';
import Aux from '../../hoc/Aux';

function Navbar() {
  let navLinks = ['Womens', 'Mens', 'Accessories', 'Sale!'];
  const listItems = navLinks.map((link, i) =>
    <li key={i} className="NavbarList__item">
      <a href="/">{link}</a>
    </li>
  );
  

  return (
    <Aux>
      <ToggleNav />
      <ul className="NavbarList">
        {listItems}
      </ul>
  </Aux>
  );
};
 
export default Navbar;
 