import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <section className="top-nav">
        <div className='host'>
          Host Beta
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>
        <ul className="menu">
          <li>Home</li>
          <li> <a href='#about'>About</a>  </li>
          <li> <a href='#services'>Services</a> </li>
          <li> <a href='#price'>Pricing</a> </li>
          <li> <a href='#footer'>Contact</a> </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
