import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'; // Adjusted path without '.js'
import './components/Homepage/Homepage.css'; // Import your CSS file
import SignIn from './components/SignIn/SignInForm'; // Ensure this path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
