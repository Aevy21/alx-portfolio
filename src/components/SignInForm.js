import React from 'react';
import './SignInForm.css';

const SignInForm = () => {
  return (
    <div className="main-content">
      <div className="form-container">
        <div className="header-content">
          <h3>Great to have you back! Your next financial milestone awaits.</h3>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
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
  );
};

export default SignInForm;

