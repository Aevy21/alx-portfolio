// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine, faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; // Add any additional CSS if needed

const Homepage = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">PennyPillar</div>
                <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('nav-open')}>☰</div>
                <nav className="nav-links">
                    <Link to="#home">Home</Link>
                    <Link to="#dashboard">Dashboard</Link>
                    <Link to="#cashflow">Cash Flow</Link>
                    <Link to="#budget">Budget</Link>
                    <Link to="#recurring">Recurring Payments</Link>
                    <Link to="#challenge">Penny Challenge</Link>
                    <Link to="#login">Login</Link>
                    <Link to="#signup">Sign Up</Link>
                    <Link to="#about">About Us</Link>
                    <Link to="#contact">Contact</Link>
                    <Link to="#help">Help</Link>
                </nav>
            </header>

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
                        <Link to="#get-started" className="hero-button">Get Started</Link>
                    </div>
                </section>

                {/* Infographic Section */}
                <section className="page-container">
                    <section className="infographic-container">
                        <h2 className="section-title">Explore the Features That Matter to You</h2>
                        <div className="carousel">
                            {/* Carousel Item 1 */}
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
                            
                            {/* Carousel Item 2 */}
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

                            {/* Carousel Item 3 */}
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

                            {/* Carousel Item 4 */}
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
                                            Discover new ways to enhance your financial well-being.
                                        </li>
                                    </ul>
                                    <img src="insights.jpg" alt="Insights Screenshot" className="feature-screenshot" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Us Section */}
                    <section className="contact-us">
                        <h2 className="section-title">Stay Connected</h2>
                        <div className="contact-info">
                            <p className="contact-email">Email: info@pennypillar.com</p>
                            <p className="contact-phone">Phone: (123) 456-7890</p>
                        </div>
                        <div className="social-media-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </section>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">PennyPillar</h3>
                        <p className="footer-text">Your trusted partner in financial management.</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="#home">Home</Link></li>
                            <li><Link to="#dashboard">Dashboard</Link></li>
                            <li><Link to="#cashflow">Cash Flow</Link></li>
                            <li><Link to="#budget">Budget</Link></li>
                            <li><Link to="#recurring">Recurring Payments</Link></li>
                            <li><Link to="#challenge">Penny Challenge</Link></li>
                            <li><Link to="#login">Login</Link></li>
                            <li><Link to="#signup">Sign Up</Link></li>
                            <li><Link to="#about">About Us</Link></li>
                            <li><Link to="#contact">Contact</Link></li>
                            <li><Link to="#help">Help</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-text">© 2024 PennyPillar. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
