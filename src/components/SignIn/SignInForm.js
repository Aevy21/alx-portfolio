import React from 'react';
import './SignInForm.css'; // Your custom SignIn styles

const SignIn = () => {
  // Function to toggle navigation in mobile view
  const toggleNav = () => {
    const navLinks = document.querySelector('.header .nav-links');
    navLinks.classList.toggle('show-nav');
  };

  return (
    <>
      <Header toggleNav={toggleNav} />
      <div className="main-content flex justify-center items-center min-h-screen">
        <div className="form-container bg-white p-8 rounded-lg shadow-lg">
          <div className="header-content mb-4">
            <h3 className="text-center text-xl font-semibold">Great to have you back! Your next financial milestone awaits.</h3>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control block w-full px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control block w-full px-4 py-2 mt-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Sign In
            </button>
            <a href="/signup" className="block mt-2 text-center text-blue-500 hover:text-blue-700">
              Don't have an account? Sign Up
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
