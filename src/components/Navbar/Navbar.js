import React from 'react';

function Navbar() {
  let navLinks = ['Womens', 'Mens', 'Accessories', 'Sale'];
  const listItems = navLinks.map((link) =>
    <li className="NavbarList__item">
      <a href="/">{link}</a>
    </li>
  );

  return (
    <ul className="NavbarList">
      {listItems}
    </ul>
  );
};
 
export default Navbar;
 