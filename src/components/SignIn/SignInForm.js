import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignInForm.css'; // Your custom SignIn styles

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log('Sign in:', email, password);
    };

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
                    <Link to="/">Home</Link>
                    <Link to="/challenge">Penny Challenge</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/help">Help</Link>
                </nav>
            </header>

            <div className="main-content">
                <div className="form-container">
                    <div className="header-content">
                        <h3>Great to have you back! Your next financial milestone awaits.</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <Link to="/signup">Don't have an account? Sign Up</Link>
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
