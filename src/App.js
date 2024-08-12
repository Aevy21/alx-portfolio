import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'; // Adjusted path without '.js'
import './components/Homepage/Homepage.css'; 
import SignIn from './components/SignIn/SignInForm'; 
import SignUp from './components/SignUp/SignUpForm'; 
import AboutUs from './components/Aboutus/AboutUs'; 
import Policy from '/components/Policy/Policies';
import Policy from '/components/Help/Helppage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/policy" element={<Policy/>} />
                <Route path="/help" element={<Help/>} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
