import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Challenge.css'; // Import the CSS file

const numbers = [5, 12, 25, 8, 17, 30, 23, 10, 45, 50, 18, 29, 35, 40, 22, 15, 27, 42, 33, 19,
                 28, 14, 31, 24, 21, 48, 11, 38, 26, 7, 43, 16, 20, 41, 32, 49, 6, 39, 44, 13,
                 34, 47, 46, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
                 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
                 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

const Challenge = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [clickedNumbers, setClickedNumbers] = useState(new Set());

    const handleNumberClick = (number) => {
        setClickedNumbers((prevClicked) => {
            const newClicked = new Set(prevClicked);
            if (newClicked.has(number)) {
                if (window.confirm('Are you sure you want to revert this number?')) {
                    newClicked.delete(number);
                    setTotalAmount(prevTotal => prevTotal - number);
                }
            } else {
                newClicked.add(number);
                setTotalAmount(prevTotal => prevTotal + number);
            }
            return newClicked;
        });
    };

    return (
        <div className="challenge">
            <header className="header">
                <div className="logo">PennyPillar</div>
            </header>

            <div className="main-content">
                <div className="challenge-header">
                    <div className="challenge-title">Save A Penny Challenge</div>
                    <div className="challenge-description">Track your savings and reach your financial goals with this daily challenge.</div>
                </div>

                <div className="number-grid">
                    {numbers.map(number => (
                        <div
                            key={number}
                            className={`number ${clickedNumbers.has(number) ? 'clicked' : ''}`}
                            onClick={() => handleNumberClick(number)}
                        >
                            {number}
                        </div>
                    ))}
                </div>

                <div className="total-amount">
                    Total Saved: R{totalAmount}
                </div>

                <div className="navigation">
                    <Link to="/">Back to Home</Link>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 PennyPillar - Empowering Financial Wellness</p>
            </footer>
        </div>
    );
};

export default Challenge;
