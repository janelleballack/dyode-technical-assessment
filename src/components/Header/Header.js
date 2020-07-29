import React from 'react';

import Container from '../containers/Container';
import Logo from '../../assets/img/logo.png';
import Navbar from '../Navbar/Navbar';

const header = () => (
  <div className='Header'>
    <Container>
      <div className="Logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <Navbar/>
    </Container>
  </div>
);

export default header;
