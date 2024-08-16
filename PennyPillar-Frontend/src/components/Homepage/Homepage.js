import React from 'react'; // Remove the duplicate import
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header'; // Ensure this path is correct
import './Homepage.css'; // Ensure this file exists and contains relevant styles
import './Home.css'; // Include your CSS here

// Sample data for carousel items
const carouselItems = [
  {
    id: 1,
    title: "Budgeting Made Easy",
    description: "Track your expenses and income effortlessly with our intuitive budgeting tools.",
    imgSrc: "budgeting-image.jpg" // Replace with your image paths
  },
  {
    id: 2,
    title: "Savings Goals",
    description: "Set and achieve your savings goals with our dedicated savings tracker.",
    imgSrc: "savings-image.jpg" // Replace with your image paths
  },
  {
    id: 3,
    title: "Investment Insights",
    description: "Gain insights into your investments with our comprehensive analysis tools.",
    imgSrc: "investment-image.jpg" // Replace with your image paths
  }
];

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />

      <div className="main-content">
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
          <h2 className="section-title">Explore the Features That Matter to You</h2>
          <Slider {...settings} className="carousel">
            {carouselItems.map(item => (
              <div key={item.id} className="carousel-item">
                <img src={item.imgSrc} alt={item.title} className="carousel-image" />
                <h3 className="carousel-title">{item.title}</h3>
                <p className="carousel-description">{item.description}</p>
              </div>
            ))}
          </Slider>
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
      </div>
    </>
  );
}

export default Homepage;
