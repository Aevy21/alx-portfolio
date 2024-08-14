import React, { useState } from 'react';
// src/components/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
    return (
        <div className="help-wrapper">
            <header className="help-header">
                <h1>Help Center</h1>
                <p>We're here to assist you with any questions or issues you may have. Browse our FAQs or contact us directly for support.</p>
            </header>

            <main className="help-content">
                <section className="faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>How do I reset my password?</h3>
                        <p>You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to reset your password.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I contact customer support?</h3>
                        <p>You can contact our customer support team via email at support@pennypillar.com or call us at +1-800-123-4567.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I update my payment information?</h3>
                        <p>To update your payment information, log in to your account, go to the "Account Settings" section, and select "Payment Information" to update your details.</p>
                    </div>
                </section>

                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p>If you need further assistance, feel free to reach out to us using the contact form below or via the contact methods provided.</p>

                    <div className="contact-method">
                        <i className="fas fa-envelope"></i> Email: support@pennypillar.com
                    </div>
                    <div className="contact-method">
                        <i className="fas fa-phone"></i> Phone: +1-800-123-4567
                    </div>

                    <form className="contact-form" action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>

            <footer className="help-footer">
                &copy; 2024 PennyPillar. All rights reserved.
            </footer>
        </div>
    );
};

export default Help;
