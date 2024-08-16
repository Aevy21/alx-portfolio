import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from './components/Homepage/Homepage'; 
import './components/Homepage/Homepage.css'; 
import SignIn from './components/SignIn/SignInForm'; 
import SignUp from './components/SignUp/SignUpForm'; 
import About from './components/Aboutus/AboutUs'; 
import Policy from './components/Policy/Policies';
import Help from './components/Help/Helppage';
import Challenge from './components/Challenge/Challenge';
import Profile from './components/Profile/Profile';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/policy" element={<Policy/>} />
                <Route path="/help" element={<Help/>} />
                <Route path="/challenge" element={<Challenge/>} />
                <Route path="/Profile" element={<Profile/>} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
