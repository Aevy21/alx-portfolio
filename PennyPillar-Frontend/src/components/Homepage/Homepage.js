// src/pages/Homepage.js
import React, { useState } from 'react';
import Header from '../components/Header'; // Import Header component
import './Homepage.css'; // Import your custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state

  const slides = [
    {
      title: 'Budget Tracking',
      description: [
        'Track all your expenses easily.',
        'Set and manage budget limits.',
        'Receive notifications for overspending.'
      ],
      image: 'budget.jpg'
    },
    {
      title: 'Savings Goals',
      description: [
        'Set and track savings goals.',
        'Monitor your progress visually.',
        'Get reminders for saving milestones.'
      ],
      image: 'savings.jpg'
    },
    {
      title: 'Subscription Management',
      description: [
        'Monitor all your active subscriptions.',
        'Set and manage payment reminders.',
        'Get notifications for upcoming payments.'
      ],
      image: 'subscriptions.jpg'
    },
    {
      title: 'Insights',
      description: [
        'Get personalized financial tips based on your spending habits.',
        'Access strategies to save money and manage your budget effectively.',
        'Receive expert advice on improving your financial health.'
      ],
      image: 'insights.jpg'
    },
    {
      title: 'Save A Penny a Day',
      description: [
        'Set and track savings goals.',
        'Monitor your progress visually.',
        'Get reminders for saving milestones.'
      ],
      image: 'penny.jpg'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="homepage">
      <Header isLoggedIn={isLoggedIn} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
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

        {/* Infographic Section */}
        <section className="infographic-container">
          <h2 className="section-title">Explore the Features That Matter to You</h2>
          <div className="carousel">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="infographic">
                  <div className="infographic-header">
                    <h2 className="feature-title">{slide.title}</h2>
                  </div>
                  <ul className="feature-list">
                    {slide.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <img src={slide.image} alt={`${slide.title} Screenshot`} className="feature-screenshot" />
                </div>
              </div>
            ))}

            {/* Carousel Navigation */}
            <button className="carousel-nav prev" onClick={handlePrevSlide}>&#10094;</button>
            <button className="carousel-nav next" onClick={handleNextSlide}>&#10095;</button>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="value-proposition">
          <div className="container">
            <h2 className="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>
            <div className="value-proposition-content">
              <div className="value-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <h3 className="value-heading">For Every Stage of Wealth</h3>
                <p className="value-text">Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all. From budgeting for those with modest incomes to advanced strategies for the affluent, we’ve got you covered.</p>
              </div>
              <div className="value-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faPiggyBank} />
                </div>
                <h3 className="value-heading">Simplify Financial Statements</h3>
                <p className="value-text">We turn complex financial statements into simple insights. Easily track your income, savings, and expenses to make informed decisions and stay on top of your financial goals.</p>
              </div>
              <div className="value-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="value-heading">Achieve Financial Clarity</h3>
                <p className="value-text">Our intuitive tools help you see exactly where your money goes. Use real-time data to evaluate your spending, savings, and investments to make smarter choices for your financial future.</p>
              </div>
            </div>
            <a href="#get-started" className="cta-button">Start Your Journey</a>
          </div>
        </section>

        {/* Footer */}
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
                <li>Email: support@pennypillar.com</li>
                <li>Phone: (123) 456-7890</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
