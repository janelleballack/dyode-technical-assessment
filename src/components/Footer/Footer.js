import React from 'react';
 
import Container from '../../containers/Container';
import Social from '../Social/Social';
import FooterMenu from './FooterMenu/FooterMenu';

const Footer = () => {
 return (
  <footer className="Footer">
    <Container>
      <FooterMenu
        title="Customer Service"
        content="
          <li>Accessibility</li>
          <li>Contact Us</li>
          <li>Return Policy</li>
          <li>FAQ</li>
          <li>Gift Certificates</li>
          <li>Wishlist</li>
          <li>About Us</li>
        "
      />
      <FooterMenu
        title="Company"
        content="
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Affiliates</li>
        "
      />
      <div className="Footer__section Footer__section-social">
        <Social />
      </div>
    </Container>
  </footer>
);
};
export default Footer;
 