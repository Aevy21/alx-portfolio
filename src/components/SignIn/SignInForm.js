import React from 'react';
import './SignInForm.css'; // Your custom SignIn styles

const SignInPage = () => {
    const toggleNav = () => {
        const navLinks = document.querySelector('.header .nav-links');
        navLinks.classList.toggle('show-nav');
    };

    return (
        <>
            <header className="header">
                <div className="logo">PennyPillar</div>
                <div className="hamburger" onClick={toggleNav}>☰</div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#challenge">Penny Challenge</a>
                    <a href="#login">Login</a>
                    <a href="#signup">Sign Up</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                </nav>
            </header>

            <div className="main-content">
                <div className="form-container">
                    <div className="header-content">
                        <h3>Great to have you back! Your next financial milestone awaits.</h3>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <a href="#">Don't have an account? Sign Up</a>
                    </form>
                </div>
            </div>

            <footer className="footer">
                © 2024 PennyPillar. All rights reserved.
            </footer>
        </>
    );
};

export default SignInPage;
