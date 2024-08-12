import React from 'react';
import './Header.css';

const Header = () => {
  const toggleNav = () => {
    const navLinks = document.querySelector('.header .nav-links');
    navLinks.classList.toggle('show-nav');
  };

  return (
    <header className="header">
      <div className="logo">PennyPillar</div>
      <div className="hamburger" onClick={toggleNav}>☰</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#challenge">Penny Challenge</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#help">Help</a>
      </nav>
    </header>
  );
};

export default Header;

