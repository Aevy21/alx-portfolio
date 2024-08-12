// src/SignUpPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './SignUpPage.css'; // Import custom CSS if needed

const SignUpPage = () => {
    const toggleNav = () => {
        document.querySelector('.header').classList.toggle('show-nav');
    };

    return (
        <>
            <header className="header bg-teal-800 text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
                <div className="logo text-xl font-bold">PennyPillar</div>
                <div className="hamburger text-2xl cursor-pointer" onClick={toggleNav}>☰</div>
                <nav className="nav-links hidden md:flex flex-col md:flex-row md:space-x-4">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/challenge" className="nav-link">Penny Challenge</Link>
                    <Link to="/signin" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </nav>
            </header>

            <div className="main-content mt-16 md:mt-0 flex items-center justify-center min-h-screen bg-gray-100">
                <div className="form-container bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <div className="header-content bg-teal-800 text-white p-4 rounded-t-lg">
                        <h3 className="text-lg font-semibold">Discover the Easiest Way to Manage Your Finances. Sign Up!</h3>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                            <input type="text" className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input type="email" className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                            <input type="password" className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-full py-2 px-4 bg-teal-800 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700">Sign Up</button>
                    </form>
                    <Link to="/signin" className="block mt-4 text-center text-teal-800 hover:underline">Already have an account? Log In</Link>
                </div>
            </div>

            <footer className="footer bg-teal-800 text-white p-4 text-center fixed bottom-0 left-0 w-full">
                &copy; 2024 PennyPillar. All rights reserved.
            </footer>
        </>
    );
};

export default SignUpPage;
