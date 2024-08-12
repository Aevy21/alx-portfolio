import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.js';  // Adjusted path
import './components/Homepage/Homepage.css';  // Import your CSS file
import SignIn from './components/SignIn/SignInForm.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;

