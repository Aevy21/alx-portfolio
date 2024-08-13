import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import your CSS file

// Define the Homepage component
const Homepage = () => {
  // Function to handle navigation toggle
  const toggleNav = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-open');
  };

  // Refs for carousel controls
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    let index = 0;

    const showSlide = (slideIndex) => {
      const totalSlides = carousel.querySelectorAll('.carousel-item').length;
      if (slideIndex >= totalSlides) {
        index = 0;
      } else if (slideIndex < 0) {
        index = totalSlides - 1;
      } else {
        index = slideIndex;
      }
      carousel.style.transform = `translateX(-${index * 100}%)`;
    };

    const handlePrevClick = () => showSlide(index - 1);
    const handleNextClick = () => showSlide(index + 1);

    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);

    // Initialize with the first slide
    showSlide(index);

    return () => {
      // Cleanup event listeners on component unmount
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">PennyPillar</div>
        <div className="hamburger" onClick={toggleNav}>☰</div>
        <nav className="nav-links">
          <Link to="#home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/cashflow">Cash Flow/Budget</Link>
          <Link to="/recurring">Recurring Payments</Link>
          <Link to="/challenge">Penny Challenge</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        <main>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-logo">
                <img src="/images/logo.png" alt="PennyPillar Logo" />
              </div>
              <h1 className="hero-name">PennyPillar</h1>
              <h2 className="hero-heading">Unlock Your Financial Potential</h2>
              <p className="hero-subheading">Empower yourself with tools and insights to make smarter financial decisions.</p>
              <p className="hero-tagline">Building Wealth, One Step at a Time</p>
              <Link to="#get-started" className="hero-button">Get Started</Link>
            </div>
          </section>

          {/* Infographic Section */}
          <section>
            <div className="page-container">
              <section className="infographic-container">
                <div className="carousel-container">
                  <h2 className="section-title">Explore the Features That Matter to You</h2>
                  <div className="carousel" ref={carouselRef}>
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
                        <img src="/images/budget.jpg" alt="Budget Tracking Screenshot" className="feature-screenshot" />
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
                        <img src="/images/savings.png" alt="Savings Goals Screenshot" className="feature-screenshot" />
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
                            Review and cancel unnecessary subscriptions.
                          </li>
                        </ul>
                        <img src="/images/subscriptions.png" alt="Subscription Management Screenshot" className="feature-screenshot" />
                      </div>
                    </div>
                  </div>

                  {/* Carousel Navigation Buttons */}
                  <button className="carousel-button prev" ref={prevButtonRef}>&lt;</button>
                  <button className="carousel-button next" ref={nextButtonRef}>&gt;</button>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
