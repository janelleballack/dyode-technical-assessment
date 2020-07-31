import React from 'react'
 
import Container from '../../containers/Container';
import Social from '../Social/Social';

const Footer = () => (
  <footer className="Footer">
    <Container>
      <div className="Footer__section Footer__section-service">
        <p className="Footer__section-title">Customer Service</p>
        <ul className="Footer__menu">
          <li>Accessibility</li>
          <li>Contact Us</li>
          <li>Return Policy</li>
          <li>FAQ</li>
          <li>Gift Certificates</li>
          <li>Wishlist</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="Footer__section Footer__section-company">
        <p className="Footer__section-title">Company</p>
        <ul className="Footer__menu">
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Affiliates</li>
        </ul>
      </div>
      <div className="Footer__section Footer__section-social">
        <Social />
      </div>
    </Container>
  </footer>
);
 
export default Footer;
 