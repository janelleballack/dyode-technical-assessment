import React from 'react'

const Newsletter = () => (
  <div className="Newsletter">
    <img className="Newsletter__image" src="" alt="Images" />
    <p className="Newsletter__title">Sign up.& stay connected</p>
    <p className="Newsletter__description">Sign up for the newsletter and get 20% off! Get access to exclusive offers and be the first to know when new stuff drops.</p>
    <form className="Newsletter__form">
      <input className="Newsletter__input" type="text" name="name" placeholder="Your Email Address"/>
      <input className="Newsletter__submitBtn" type="submit" value="Subscribe" />
    </form>
  </div> 
);

export default Newsletter;
 