// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">PennyPillar</div>
      <div className="hamburger" onClick={() => document.querySelector('.header').classList.toggle('show-nav')}>
        ☰
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/cashflow">Cash Flow/Budget</Link>
            <Link to="/recurring">Recurring Payments</Link>
            <Link to="/challenge">Penny Challenge</Link>
          </>
        )}
        {!isLoggedIn ? (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : null}
        <Link to="/about">About Us</Link>
        <Link to="/help">Help</Link>
      </nav>
    </header>
  );
};

export default Header;
