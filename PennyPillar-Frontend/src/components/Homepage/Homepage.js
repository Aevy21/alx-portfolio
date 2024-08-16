import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; // Ensure this file exists and contains relevant styles
import Header from '../Header'; // Ensure this import path is correct

function Homepage() {

  return (
    <>
      <Header />

      <div className="main-content">
        <main>
          <section className="hero-section" style={{ backgroundImage: 'url(./images/main.jpg)' }}>
            <div className="hero-content">
              <div className="hero-logo">
                <img src="./images/logo.png" alt="PennyPillar Logo" />
              </div>
              <h1 className="hero-name">PennyPillar</h1>
              <h2 className="hero-heading">Unlock Your Financial Potential</h2>
              <p className="hero-subheading">Empower yourself with tools and insights to make smarter financial decisions.</p>
              <p className="hero-tagline">Building Wealth, One Step at a Time</p>
              <a href="#get-started" className="hero-button">Get Started</a>
            </div>
          </section>



          <section className="value-proposition">
            <div className="container">
              <h2 className="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>
              <div className="value-proposition-content">
                <div className="value-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faDollarSign} />
                  </div>
                  <h3 className="value-heading">For Every Stage of Wealth</h3>
                  <p className="value-text">
                    Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all.
                  </p>
                </div>
                <div className="value-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </div>
                  <h3 className="value-heading">Simplify Financial Statements</h3>
                  <p className="value-text">
                    We turn complex financial statements into simple insights. Easily track your income, savings, and expenses.
                  </p>
                </div>
                <div className="value-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <h3 className="value-heading">Achieve Financial Clarity</h3>
                  <p className="value-text">
                    Our intuitive tools help you see exactly where your money goes. Use real-time data to evaluate your spending.
                  </p>
                </div>
              </div>
              <a href="#get-started" className="cta-button">Start Your Journey</a>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-container">
              <div className="branding">
                <img src="./images/logo.png" alt="App Name Logo" className="footer-logo" />
                <p className="tagline">Building Wealth, One Step at a Time</p>
              </div>
              <div className="footer-nav">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-products">
                <h3>Our Products</h3>
                <ul>
                  <li><a href="#dashboard">Dashboard</a></li>
                  <li><a href="#budget-tools">Budget Tools</a></li>
                  <li><a href="#investment-plans">Investment Plans</a></li>
                  <li><a href="#savings-challenge">Savings Challenge</a></li>
                  <li><a href="#financial-tips">Financial Tips</a></li>
                </ul>
              </div>
              <div className="footer-legal">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#privacy-policy">Privacy Policy</a></li>
                  <li><a href="#terms-service">Terms of Service</a></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Contact Us</h3>
                <ul>
                  <li>Email: <a href="mailto:support@appname.com">support@appname.com</a></li>
                  <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
                </ul>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Homepage;

