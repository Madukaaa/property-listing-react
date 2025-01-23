import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="navbar-wordmark">
                <h1>HORIZON ESTATES</h1>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
