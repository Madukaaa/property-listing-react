import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';
import logo from '../assets/images/logo.svg';

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="splash-screen">
            <img src={logo} alt="Logo" className="splash-logo" />
            <div className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    );
};

export default SplashScreen;
