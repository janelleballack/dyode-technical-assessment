import React from 'react';

import Container from '../containers/Container';
import Logo from '../../assets/img/logo.png';
const header = () => (
  <div className='Header'>
    <Container>
      <div className="Logo">
        <img src={Logo} alt="Logo"/>
      </div>
    </Container>
  </div>
);

export default header;
