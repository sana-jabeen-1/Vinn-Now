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
        
<div id='tawk_66d2477aea492f34bc0bf0b4'></div>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_66d2477aea492f34bc0bf0b4';
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66d2477aea492f34bc0bf0b4/1ib0hq6sg';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);})();
</script>
<!--End of Tawk.to Script-->
        
    </header>
  );
};

export default Header;
