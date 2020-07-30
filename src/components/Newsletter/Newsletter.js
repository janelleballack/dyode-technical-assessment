import React from 'react'

import IconEmail from '../../../src/assets/img/email-icon.png';
import Container from '../../containers/Container';

const Newsletter = () => (
  <div className="Newsletter">
    <Container>
      <p className="Newsletter__title">
      <img className="Newsletter__icon" src={IconEmail} alt="Images" />
        <span>Sign up & Stay Connected</span>
      </p>
      <form className="Newsletter__form">
        <p className="Newsletter__description">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
        <input className="Newsletter__input" type="text" name="name" placeholder="Your Email Address"/>
        <input className="Newsletter__submitBtn" type="submit" value="Subscribe" />
      </form>
    </Container>
  </div> 
);

export default Newsletter;
 