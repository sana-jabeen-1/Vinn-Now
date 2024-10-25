import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file
import logo from './Vin-Me-Now-LOGO-F.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Vin Me Now logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'active' : ''}`}></div>
          <div className={`line ${menuOpen ? 'active' : ''}`}></div>
          <div className={`line ${menuOpen ? 'active' : ''}`}></div>
        </div>

        {/* Navigation Links and Contact Button Container */}
        <div className={`nav-button-container ${menuOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
            <Link to="/about-us" className="nav-item" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact-us" className="nav-item" onClick={toggleMenu}>Contact Us</Link>

          </nav>
        </div>

        {/* Contact Us Button - Always Visible */}
       
      </div>
                
    </header>
  );
};

export default Header;
