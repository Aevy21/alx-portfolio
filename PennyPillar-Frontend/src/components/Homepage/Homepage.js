import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; // Add any additional CSS if needed
import React, { useState } from 'react';



function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: 'Budget Tracking',
      description: 'Set limits, track expenses, and stay on top of your budget',
      img: 'budget.jpg',
      features: [
        'Track all your expenses easily.',
        'Set and manage budget limits.',
        'Receive notifications for overspending.',
      ],
    },
    {
      title: 'Savings Goals',
      description: 'Visualize your savings progress and achieve financial milestones.',
      img: 'savings.jpg',
      features: [
        'Set and track savings goals.',
        'Monitor your progress visually.',
        'Get reminders for saving milestones.',
      ],
    },
    {
      title: 'Subscription Management',
      description: 'Track your subscriptions and set payment reminders',
      img: 'subscriptions.jpg',
      features: [
        'Monitor all your active subscriptions.',
        'Set and manage payment reminders.',
        'Get notifications for upcoming payments.',
      ],
    },
    {
      title: 'Insights',
      description: 'Discover tips and strategies to improve your financial habits',
      img: 'insights.jpg',
      features: [
        'Get personalized financial tips based on your spending habits.',
        'Access strategies to save money and manage your budget effectively.',
        'Receive expert advice on improving your financial health.',
      ],
    },
    {
      title: 'Save A Penny a Day',
      description: 'A fun way to save more by challenging yourself every day',
      img: 'penny.jpg',
      features: [
        'Set and track savings goals.',
        'Monitor your progress visually.',
        'Get reminders for saving milestones.',
      ],
    },
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">PennyPillar</div>
        <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('nav-open')}>
          ☰
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#cashflow">Cash Flow</a>
          <a href="#budget">Budget</a>
          <a href="#recurring">Recurring Payments</a>
          <a href="#challenge">Penny Challenge</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </nav>
      </header>

      <div className="main-content">
        <main>
          <section className="hero-section" style={{ backgroundImage: 'url(hero-background.jpg)' }}>
            <div className="hero-content">
              <div className="hero-logo">
                <img src="logo.png" alt="PennyPillar Logo" />
              </div>
              <h1 className="hero-name">PennyPillar</h1>
              <h2 className="hero-heading">Unlock Your Financial Potential</h2>
              <p className="hero-subheading">Empower yourself with tools and insights to make smarter financial decisions.</p>
              <p className="hero-tagline">Building Wealth, One Step at a Time</p>
              <a href="#get-started" className="hero-button">Get Started</a>
            </div>
          </section>

          <section className="infographic-container">
            <h2 className="section-title">Explore the Features That Matter to You</h2>
            <div className="carousel-container">
              <div className="carousel">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.img})` }}
                  >
                    <div className="infographic">
                      <div className="infographic-header">
                        <h2 className="feature-title">{slide.title}</h2>
                      </div>
                      <ul className="feature-list">
                        {slide.features.map((feature, i) => (
                          <li key={i}>
                            <svg className="check-icon" viewBox="0 0 24 24">
                              <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                <button className="carousel-nav prev" onClick={goToPrevSlide}>&#10094;</button>
                <button className="carousel-nav next" onClick={goToNextSlide}>&#10095;</button>
              </div>
            </div>
          </section>

          <section className="value-proposition">
            <div className="container">
              <h2 className="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>
              <div className="value-proposition-content">
                <div className="value-item">
                  <div className="icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3 className="value-heading">For Every Stage of Wealth</h3>
                  <p className="value-text">
                    Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all.
                  </p>
                </div>
                <div className="value-item">
                  <div className="icon">
                    <i className="fas fa-piggy-bank"></i>
                  </div>
                  <h3 className="value-heading">Simplify Financial Statements</h3>
                  <p className="value-text">
                    We turn complex financial statements into simple insights. Easily track your income, savings, and expenses.
                  </p>
                </div>
                <div className="value-item">
                  <div className="icon">
                    <i className="fas fa-chart-line"></i>
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
                <img src="logo.png" alt="App Name Logo" className="footer-logo" />
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
    </div>
  );
}

export default Homepage;
