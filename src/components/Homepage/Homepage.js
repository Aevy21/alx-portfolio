import React, { useState } from 'react';
import './App.css'; // Adjust path as needed
import Header from '../Header';
function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    
      <header/>
      
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
          <div className="carousel-container">
            {/* Carousel Items */}
            {[ 
              {
                title: 'Budget Tracking: Set limits, track expenses, and stay on top of your budget',
                items: [
                  'Track all your expenses easily.',
                  'Set and manage budget limits.',
                  'Receive notifications for overspending.'
                ],
                image: 'budget.jpg'
              },
              {
                title: 'Savings Goals: Visualize your savings progress and achieve financial milestones.',
                items: [
                  'Set and track savings goals.',
                  'Monitor your progress visually.',
                  'Get reminders for saving milestones.'
                ],
                image: 'savings.jpg'
              },
              {
                title: 'Subscription Management: Track your subscriptions and set payment reminders',
                items: [
                  'Monitor all your active subscriptions.',
                  'Set and manage payment reminders.',
                  'Get notifications for upcoming payments.'
                ],
                image: 'subscriptions.jpg'
              },
              {
                title: 'Insights: Discover tips and strategies to improve your financial habits',
                items: [
                  'Get personalized financial tips based on your spending habits.',
                  'Access strategies to save money and manage your budget effectively.',
                  'Receive expert advice on improving your financial health.'
                ],
                image: 'insights.jpg'
              },
              {
                title: 'Save A Penny a Day: A fun way to save more by challenging yourself every day',
                items: [
                  'Set and track savings goals.',
                  'Monitor your progress visually.',
                  'Get reminders for saving milestones.'
                ],
                image: 'penny.jpg'
              }
            ].map((carouselItem, index) => (
              <div className="carousel-item" key={index}>
                <div className="infographic">
                  <div className="infographic-header">
                    <h2 className="feature-title">{carouselItem.title}</h2>
                  </div>
                  <ul className="feature-list">
                    {carouselItem.items.map((item, i) => (
                      <li key={i}>
                        <svg className="check-icon" viewBox="0 0 24 24">
                          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <img src={carouselItem.image} alt={`${carouselItem.title} Screenshot`} className="feature-screenshot" />
                </div>
              </div>
            ))}

            {/* Carousel Navigation */}
            <button className="carousel-nav prev">&#10094;</button>
            <button className="carousel-nav next">&#10095;</button>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="value-proposition">
          <div className="container">
            <h2 className="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>
            <div className="value-proposition-content">
              <div className="value-item">
                <div className="icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="value-heading">For Every Stage of Wealth</h3>
                <p className="value-text">Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all. From budgeting for those with modest incomes to advanced strategies for the affluent, we’ve got you covered.</p>
              </div>
              <div className="value-item">
                <div className="icon">
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h3 className="value-heading">Simplify Financial Statements</h3>
                <p className="value-text">We turn complex financial statements into simple insights. Easily track your income, savings, and expenses to make informed decisions and stay on top of your financial goals.</p>
              </div>
              <div className="value-item">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
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
                <li><a href="#budget-tools">Budget Tools</a></li>
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
                <li>Phone: +123 456 7890</li>
              </ul>
              <div className="social-media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
