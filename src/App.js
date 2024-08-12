import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'; // Adjusted path without '.js'
import './components/Homepage/Homepage.css'; 
import SignIn from './components/SignIn/SignInForm'; 
import SignUp from './components/SignUp/SignUpForm'; 
import SignIn from './components/Aboutus/AboutUs'; 



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
