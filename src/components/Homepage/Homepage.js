// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <header />
        

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-logo">
              <img src="logo.png" alt="PennyPillar Logo" />
            </div>
            <h1 className="hero-name">PennyPillar</h1>
            <h2 className="hero-heading">Unlock Your Financial Potential</h2>
            <p className="hero-subheading">Empower yourself with tools and insights to make smarter financial decisions.</p>
            <p className="hero-tagline">Building Wealth, One Step at a Time</p>
            <Link to="#get-started" className="hero-button">Get Started</Link>
          </div>
        </section>

        <section>
          <div className="page-container">
            <section className="infographic-container">
              <h2 className="section-title">Explore the Features That Matter to You</h2>
              <div className="carousel">
                {/* Carousel items */}
                <div className="carousel-item">
                  <div className="infographic">
                    <div className="infographic-header">
                      <h2 className="feature-title">Budget Tracking: Set limits, track expenses, and stay on top of your budget</h2>
                    </div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Track all your expenses easily.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Set and manage budget limits.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Receive notifications for overspending.
                      </li>
                    </ul>
                    <img src="budget.jpg" alt="Budget Tracking Screenshot" className="feature-screenshot" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="infographic">
                    <div className="infographic-header">
                      <h2 className="feature-title">Savings Goals: Visualize your savings progress and achieve financial milestones.</h2>
                    </div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Set and track savings goals.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Monitor your progress visually.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Get reminders for saving milestones.
                      </li>
                    </ul>
                    <img src="savings.jpg" alt="Savings Goals Screenshot" className="feature-screenshot" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="infographic">
                    <div className="infographic-header">
                      <h2 className="feature-title">Subscription Management: Track your subscriptions and set payment reminders</h2>
                    </div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Monitor all your active subscriptions.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Set and manage payment reminders.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Get notifications for upcoming payments.
                      </li>
                    </ul>
                    <img src="subscriptions.jpg" alt="Subscription Management Screenshot" className="feature-screenshot" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="infographic">
                    <div className="infographic-header">
                      <h2 className="feature-title">Insights: Discover tips and strategies to improve your financial habits</h2>
                    </div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Get personalized financial tips based on your spending habits.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Access strategies to save money and manage your budget effectively.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Receive expert advice on improving your financial health.
                      </li>
                    </ul>
                    <img src="insights.jpg" alt="Insights Screenshot" className="feature-screenshot" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="infographic">
                    <div className="infographic-header">
                      <h2 className="feature-title">Save A Penny a Day: A fun way to save more by challenging yourself every day</h2>
                    </div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Challenge yourself to save a small amount daily.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Track your progress and see how it adds up.
                      </li>
                      <li>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        Share your progress with friends and family.
                      </li>
                    </ul>
                    <img src="penny-challenge.jpg" alt="Save A Penny a Day Screenshot" className="feature-screenshot" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer>
        <section className="footer-section">
          <div className="footer-container">
            <div className="footer-links">
              <Link to="#home">Home</Link>
              <Link to="#dashboard">Dashboard</Link>
              <Link to="#cashflow">Cash Flow/Budget</Link>
              <Link to="#recurring">Recurring Payments</Link>
              <Link to="#challenge">Penny Challenge</Link>
              <Link to="#login">Login</Link>
              <Link to="#signup">Sign Up</Link>
              <Link to="#about">About Us</Link>
              <Link to="#contact">Contact</Link>
              <Link to="#help">Help</Link>
            </div>
            <p className="footer-text">© 2024 PennyPillar. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Homepage;
