import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import logo from '../Vin-Me-Now-LOGO-F.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img
            src={logo} 
            alt="Auto Audit Pro Logo"
            className="footer-logo"
          />
          <p><a href=""></a></p>
          <p><a href=""></a></p>
          <p>
            For corporate discussions, complaints, or technical assistance, please contact us via email us at <a href="mailto:info@bmymarketer.com">info@bmymarketer.com</a>.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Pages</h4>
          <ul>
            <li><Link to="./terms">Terms and Condition</Link></li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Address</h4>
          <p></p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
