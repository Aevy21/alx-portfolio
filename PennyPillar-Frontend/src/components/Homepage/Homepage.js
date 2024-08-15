import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

const Homepage = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleNav = () => {
        setNavOpen(!navOpen);
        if (navRef.current) {
            navRef.current.classList.toggle('nav-open');
        }
    };
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselItems = [
        {
            title: "Budget Tracking: Set limits, track expenses, and stay on top of your budget",
            features: [
                "Track all your expenses easily.",
                "Set and manage budget limits.",
                "Receive notifications for overspending."
            ],
            image: "budget.jpg"
        },
        {
            title: "Savings Goals: Set and achieve your financial goals.",
            features: [
                "Create and manage savings goals.",
                "Monitor your progress.",
                "Get tips on how to save more efficiently."
            ],
            image: "savings.jpg"
        },
        {
            title: "Investment Planning: Make informed investment decisions.",
            features: [
                "Track your investments.",
                "Receive tailored investment advice.",
                "Monitor market trends."
            ],
            image: "investments.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1));
    };

    return (
        <div>
            <header className="header">
                <div className="logo">PennyPillar</div>
                <div className="hamburger" onClick={toggleNav}>☰</div>
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

            <main className="main-content">
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

                <section className="infographic-container">
                    <div className="page-container">
                        <h2 className="section-title">Explore the Features That Matter to You</h2>

                        <div className="carousel">
                            <div className="carousel-item">
                                <div className="infographic">
                                    <div className="infographic-header">
                                        <h2 className="feature-title">{carouselItems[currentSlide].title}</h2>
                                    </div>
                                    <ul className="feature-list">
                                        {carouselItems[currentSlide].features.map((feature, index) => (
                                            <li key={index}>
                                                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <img src={carouselItems[currentSlide].image} alt="Feature Screenshot" className="feature-screenshot" />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-nav">
                            <button className="prev" onClick={prevSlide}>&#10094;</button>
                            <button className="next" onClick={nextSlide}>&#10095;</button>
                        </div>
                    </div>
                </section>

                <section className="value-proposition">
                    <div className="container">
                        <h2 className="section-title">Reasons to Choose PennyPillar For Your Financial Future</h2>
                        <div className="value-proposition-content">
                            <div className="value-item">
                                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                                <h3 className="value-heading">For Every Stage of Wealth</h3>
                                <p className="value-text">Whether you're just starting to manage your finances or looking to optimize your wealth, our app caters to all. From budgeting for those with modest incomes to advanced strategies for the affluent, we’ve got you covered.</p>
                            </div>
                            <div className="value-item">
                                <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                                <h3 className="value-heading">Simplify Financial Statements</h3>
                                <p className="value-text">We turn complex financial statements into simple insights. Easily track your income, savings, and expenses.</p>
                            </div>
                            {/* Add more value items as needed */}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Homepage;
