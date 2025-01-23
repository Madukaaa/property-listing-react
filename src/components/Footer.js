import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        Horizon Estates is your trusted partner in finding the perfect home.
                        We provide a seamless experience from search to settlement.
                    </p>
                </div>

                <div className="footer-section footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: madukakarunathilake2003@gmail.com</p>
                    <p>Phone: +94 701246124</p>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Horizon Estates. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
