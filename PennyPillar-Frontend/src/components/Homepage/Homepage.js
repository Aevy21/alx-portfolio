import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; // Add any additional CSS if needed

const Homepage = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">PennyPillar</div>
                <div className="hamburger" onClick={() => toggleNav()}>☰</div>
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
                    <section>
                        <div className="page-container">
                            <section className="infographic-container">
                                <h2 className="section-title">Explore the Features That Matter to You</h2>
                                <div className="carousel-container">
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
                                                        Receive expert advice on improving your financial health.
                                                    </li>
                                                </ul>
                                                <img src="insights.jpg" alt="Insights Screenshot" className="feature-screenshot" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-prev" onClick={() => prevSlide()}>&lt;</button>
                                    <button className="carousel-next" onClick={() => nextSlide()}>&gt;</button>
                                </div>
                            </section>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="testimonials-section">
                        <h2 className="section-title">What Our Users Are Saying</h2>
                        <div className="testimonials">
                            <div className="testimonial">
                                <p>"PennyPillar has been a game changer for my finances. The budgeting tools are incredibly intuitive and helpful!"</p>
                                <p>- Jamie L.</p>
                            </div>
                            <div className="testimonial">
                                <p>"I love the savings goals feature. It keeps me motivated and on track with my financial objectives."</p>
                                <p>- Alex M.</p>
                            </div>
                            <div className="testimonial">
                                <p>"The subscription management tool is fantastic. It helps me keep track of all my subscriptions effortlessly."</p>
                                <p>- Taylor R.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <footer>
                <div className="footer-content">
                    <section className="social-media">
                        <a href="https://www.facebook.com" className="social-icon">
                            
                        </a>
                        <a href="https://twitter.com" className="social-icon">
                            
                        </a>
                        <a href="https://www.instagram.com" className="social-icon">
                            
                        </a>
                        <a href="https://www.linkedin.com" className="social-icon">
                            </a>
                    </section>
                    <section className="footer-links">
                        <Link to="#about">About Us</Link>
                        <Link to="#contact">Contact</Link>
                        <Link to="#privacy">Privacy Policy</Link>
                        <Link to="#terms">Terms of Service</Link>
                    </section>
                    <section className="footer-info">
                        <p>&copy; 2024 PennyPillar. All rights reserved.</p>
                    </section>
                </div>
            </footer>
        </div>
    );

    function toggleNav() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('active');
    }

    function prevSlide() {
        const carousel = document.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const activeItem = carousel.querySelector('.carousel-item.active');
        let index = Array.from(items).indexOf(activeItem);
        if (index > 0) {
            items[index].classList.remove('active');
            items[index - 1].classList.add('active');
        } else {
            items[index].classList.remove('active');
            items[items.length - 1].classList.add('active');
        }
    }

    function nextSlide() {
        const carousel = document.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const activeItem = carousel.querySelector('.carousel-item.active');
        let index = Array.from(items).indexOf(activeItem);
        if (index < items.length - 1) {
            items[index].classList.remove('active');
            items[index + 1].classList.add('active');
        } else {
            items[index].classList.remove('active');
            items[0].classList.add('active');
        }
    }
};

export default Homepage;
