import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/logo-footer.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={footerLogo} alt="Medicare logo" className="footer-logo" />
            <p className="footer-tagline">
                Bring the harmony of your body with MediCare
            </p>
            <p className="footer-icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100008215602384"
                    rel="noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/search?q=%23Medicare.&lang=en" rel="noreferrer" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="tel: (123)456-7890">
                    <i className="fas fa-phone"></i>
                </a>
            </p>
        </footer>
    );
};

export default Footer;
