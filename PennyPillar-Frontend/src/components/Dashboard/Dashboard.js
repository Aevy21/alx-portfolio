import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './Dashboard.css';

Chart.register(...registerables);

const Dashboard = () => {
    const budgetChartRef = useRef(null);
    const cashFlowChartRef = useRef(null);
    const recurringChartRef = useRef(null);
    const challengeChartRef = useRef(null);

    useEffect(() => {
        let budgetChartInstance;
        let cashFlowChartInstance;
        let recurringChartInstance;
        let challengeChartInstance;

        // Destroy any existing chart instances before creating new ones
        if (budgetChartRef.current) {
            budgetChartInstance = new Chart(budgetChartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Total Budget', 'Spent', 'Remaining'],
                    datasets: [{
                        label: 'Budget Overview',
                        data: [1200, 400, 800], // Placeholder values
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += '$' + context.parsed.y;
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        if (cashFlowChartRef.current) {
            cashFlowChartInstance = new Chart(cashFlowChartRef.current, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Cash Flow',
                        data: [500, 700, 600, 800], // Placeholder values
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += '$' + context.parsed.y;
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        if (recurringChartRef.current) {
            recurringChartInstance = new Chart(recurringChartRef.current, {
                type: 'pie',
                data: {
                    labels: ['Rent', 'Utilities', 'Subscriptions'],
                    datasets: [{
                        label: 'Recurring Payments',
                        data: [500, 200, 100], // Placeholder values
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += '$' + context.parsed;
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        }

        if (challengeChartRef.current) {
            challengeChartInstance = new Chart(challengeChartRef.current, {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
                    datasets: [{
                        label: 'Penny Challenge Savings',
                        data: [0.01, 0.02, 0.04, 0.08], // Placeholder values
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += '$' + context.parsed.y.toFixed(2);
                                    }
                                    return label;
                                }
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Days'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Amount Saved ($)'
                                }
                            }
                        }
                    }
                }
            });
        }

        // Cleanup on component unmount
        return () => {
            if (budgetChartInstance) budgetChartInstance.destroy();
            if (cashFlowChartInstance) cashFlowChartInstance.destroy();
            if (recurringChartInstance) recurringChartInstance.destroy();
            if (challengeChartInstance) challengeChartInstance.destroy();
        };
    }, []);

    return (
        <div className="content">
            <div className="chart-container" id="budget">
                <div className="chart-header">Budget Overview</div>
                <div className="chart-body">
                    <canvas id="budgetChart" ref={budgetChartRef}></canvas>
                    <div className="safe-to-spend-container">
                        <div className="safe-to-spend-header">
                            <div className="safe-to-spend-label">Safe to Spend</div>
                            <button className="safe-to-spend-button" onClick={() => window.location.href = 'budget-check.html'}>
                                Check Budget
                            </button>
                        </div>
                        <div className="safe-to-spend-amount">$800</div>
                    </div>
                </div>
            </div>

            <div className="chart-container" id="cashflow">
                <div className="chart-header">Cash Flow</div>
                <div className="chart-body">
                    <canvas id="cashFlowChart" ref={cashFlowChartRef}></canvas>
                </div>
            </div>

            <div className="chart-container" id="recurring">
                <div className="chart-header">Recurring Payments</div>
                <div className="chart-body">
                    <canvas id="recurringChart" ref={recurringChartRef}></canvas>
                </div>
            </div>

            <div className="chart-container" id="challenge">
                <div className="chart-header">Penny Challenge</div>
                <div className="chart-body">
                    <canvas id="challengeChart" ref={challengeChartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
