import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.js';  // Adjusted path
import './components/Homepage/Homepage.css';  // Import your CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

