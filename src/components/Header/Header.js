import React from 'react';

import Container from '../../containers/Container';
import Logo from '../../assets/img/logo.png';
import Navbar from '../Navbar/Navbar';
import Cart from '../../assets/img/cart.png';

const header = () => (
  <header className="Header">
    <Container>
      <div className="Logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <Navbar/>
      <div className="Icon-Cart">
        <img src={Cart} alt="cart"/>
      </div>
    </Container>
  </header>
);

export default header;
