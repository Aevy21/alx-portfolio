// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine, faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css'; // Add any additional CSS if needed

const Homepage = () => {
    return (
               <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financial Management App</title>
    <link rel="stylesheet" href="foot.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <header class="header">
        <div class="logo">PennyPillar</div>
        <div class="hamburger" onclick="toggleNav()">☰</div>
        <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#cashflow">Cash Flow</a>
             <a href="#cashflow">Budget</a>
            <a href="#recurring">Recurring Payments</a>
            <a href="#challenge">Penny Challenge</a>
            <a href="#login">Login</a>
            <a href="#signup">Sign Up</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#help">Help</a>
        </nav>
    </header>
    
    <div class="main-content">
        <main>
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-content">
                    <!-- Logo -->
                    <div class="hero-logo">
                        <img src="logo.png" alt="PennyPillar Logo">
                    </div>
                    
                    <!-- Name -->
                    <h1 class="hero-name">PennyPillar</h1>
                    
                    <!-- Heading -->
                    <h2 class="hero-heading">Unlock Your Financial Potential</h2>
                    
                    <!-- Subheading -->
                    <p class="hero-subheading">Empower yourself with tools and insights to make smarter financial decisions.</p>
                    
                    <!-- Tagline -->
                    <p class="hero-tagline">Building Wealth, One Step at a Time</p>
                    
                    <!-- Call to Action Button -->
                    <a href="#get-started" class="hero-button">Get Started</a>
                </div>
            </section>

            <!-- Infographic Section -->
           <section>
    <div class="page-container">
        <section class="infographic-container">
            
            <div class="carousel-container">
                 <!-- Section Title -->
                    <h2 class="section-title">Explore the Features That Matter to You</h2>

       
                <div class="carousel">
                    <!-- Carousel Item 1 -->
                    <div class="carousel-item">
                        <div class="infographic">
                            <div class="infographic-header">
                                   <h2 class="feature-title">Budget Tracking: Set limits, track expenses, and stay on top of your budget</h2>
                            </div>
                            <ul class="feature-list">
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Track all your expenses easily.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Set and manage budget limits.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Receive notifications for overspending.
                                </li>
                            </ul>
                            <img src="budget.jpg" alt="Budget Tracking Screenshot" class="feature-screenshot">
                        </div>
                    </div>
                    
                    <!-- Carousel Item 2 -->
                    <div class="carousel-item">
                        <div class="infographic">
                            <div class="infographic-header">
                                  <h2 class="feature-title">Savings Goals: Visualize your savings progress and achieve financial milestones. </h2>
                            </div>
                            <ul class="feature-list">
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Set and track savings goals.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Monitor your progress visually.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Get reminders for saving milestones.
                                </li>
                            </ul>
                            <img src="savings.jpg" alt="Savings Goals Screenshot" class="feature-screenshot">
                        </div>
                    </div>
                   
<div class="carousel-item">
  <div class="infographic">
    <div class="infographic-header">
      <h2 class="feature-title">Subscription Management: Track your subscriptions and set payment reminders</h2>
    </div>
    <ul class="feature-list">
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Monitor all your active subscriptions.
      </li>
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Set and manage payment reminders.
      </li>
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Get notifications for upcoming payments.
      </li>
    </ul>
    <img src="subscriptions.jpg" alt="Subscription Management Screenshot" class="feature-screenshot">
  </div>
</div>
                <!-- courousel 5 -->
<div class="carousel-item">
  <div class="infographic">
    <div class="infographic-header">
      <h2 class="feature-title">Insights: Discover tips and strategies to improve your financial habits</h2>
    </div>
    <ul class="feature-list">
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Get personalized financial tips based on your spending habits.
      </li>
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Access strategies to save money and manage your budget effectively.
      </li>
      <li>
        <svg class="check-icon" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
        </svg>
        Receive expert advice on improving your financial health.
      </li>
    </ul>
    <img src="insights.jpg" alt="Insights Screenshot" class="feature-screenshot">
  </div>
</div>
                    <!-- Carousel Item 3 -->
                    <div class="carousel-item">
                        <div class="infographic">
                            <div class="infographic-header">
                                   <h2 class="feature-title">Save A Penny a Day: A fun way to save more by challenging yourself every day </h2>
                            </div>
                            <ul class="feature-list">
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Set and track savings goals.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Monitor your progress visually.
                                </li>
                                <li>
                                    <svg class="check-icon" viewBox="0 0 24 24">
                                        <path d="M10 15l-3-3 1.4-1.4L10 12.2l7.6-7.6L19 7l-9 9z"></path>
                                    </svg>
                                    Get reminders for saving milestones.
                                </li>
                            </ul>
                            <img src="penny.jpg" alt="Savings Goals Screenshot" class="feature-screenshot">
                        </div>
                    </div>
             </div>
            
            
                <!-- Carousel Navigation -->
                <button class="carousel-nav prev">&#10094;</button>
                <button class="carousel-nav next">&#10095;</button>
            </div>
        </section>
    </div>
    <script src="script.js"></script>


           </section>

            <!-- Value Proposition Section -->
            <section class="value-proposition">
                <div class="container">
                    <!-- Section Title -->
                    <h2 class="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>

                    <!-- Unique Value Proposition -->
                    <div class="value-proposition-content">
                        <div class="value-item">
                            <div class="icon">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                            <h3 class="value-heading">For Every Stage of Wealth</h3>
                            <p class="value-text">Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all. From budgeting for those with modest incomes to advanced strategies for the affluent, we’ve got you covered.</p>
                        </div>
                        <div class="value-item">
                            <div class="icon">
                                <i class="fas fa-piggy-bank"></i>
                            </div>
                            <h3 class="value-heading">Simplify Financial Statements</h3>
                            <p class="value-text">We turn complex financial statements into simple insights. Easily track your income, savings, and expenses to make informed decisions and stay on top of your financial goals.</p>
                        </div>
                        <div class="value-item">
                            <div class="icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h3 class="value-heading">Achieve Financial Clarity</h3>
                            <p class="value-text">Our intuitive tools help you see exactly where your money goes. Use real-time data to evaluate your spending, savings, and investments to make smarter choices for your financial future.</p>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <a href="#get-started" class="cta-button">Start Your Journey</a>
                </div>
            </section>

            <!-- Footer -->
            <footer class="footer">
                <div class="footer-container">
                    <!-- Branding & Logo -->
                    <div class="branding">
                        <img src="logo.png" alt="App Name Logo" class="footer-logo">
                        <p class="tagline">Building Wealth, One Step at a Time</p>
                    </div>
                    
                    <!-- Navigation Links -->
                    <div class="footer-nav">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Product Links -->
                    <div class="footer-products">
                        <h3>Our Products</h3>
                        <ul>
                            <li><a href="#dashboard">Dashboard. </a></li>
                            <li><a href="#budget-tools">Budget Tools</a></li>
                            <li><a href="#investment-plans">Investment Plans</a></li>
                            <li><a href="#savings-challenge">Savings Challenge</a></li>
                            <li><a href="#financial-tips">Financial Tips</a></li>
                             <li><a href="#budget-tools">Budget Tools</a></li>
                         
                        </ul>
                    </div>

                    <!-- Legal Information -->
                    <div class="footer-legal">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                            <li><a href="#terms-service">Terms of Service</a></li>
                        </ul>
                    </div>

                    <!-- Contact & Social Media -->
                    <div class="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: <a href="mailto:support@appname.com">support@appname.com</a></li>
                            <li>Phone: +123 456 7890</li>
                        </ul>
                        <div class="social-media">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>

    <!-- JavaScript for Toggle Navigation -->
    <script>
        function toggleNav() {
            const nav = document.querySelector('.nav-links');
            nav.classList.toggle('nav-open');
        }
    </script>

</body>
</html>
                                                         <p className="footer-text">© 2024 PennyPillar. All rights reserved.</p>
                
};

export default Homepage;
