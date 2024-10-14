import React from 'react';
import './ContactUs.css'; // Import custom CSS file for styling

const ContactUs = () => {
  return (

    <div>
      <h1 className='cont-h'> Contact US </h1>
      <p className='cont-p'>Any question or remarks ? Just write us a message </p>
    <div className="contact-container">
     
        {/* Contact Information Section */}
        <div className="contact-info">
          <h3 className="contact-title">Contact Information</h3>
          <p className="contact-description">contact us via email!</p>
          <ul className="contact-details">
            <li className="contact-item">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v-1.5a4.5 4.5 0 10-9 0V12M8.5 12h7M9 16h6m3.878-2.88A2.992 2.992 0 0121 12.75V6a3 3 0 00-3-3H6a3 3 0 00-3 3v6.75c0 1.657 1.343 3 3 3h1.5M15 9h6v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V9z" />
              </svg>
              <a href="mailto:info@bmymarketer.com">info@bmymarketer.com</a>
            </li>
            <li className="contact-item">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9h12M6 12h12M6 15h12M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <a href="tel:46994301566">469-943-01333</a>
            </li>
            <li className="contact-item">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16.5v1a2.5 2.5 0 01-5 0v-1a2.5 2.5 0 015 0zM7 12v6a3 3 0 003 3h4a3 3 0 003-3v-6a3 3 0 00-3-3H10a3 3 0 00-3 3z" />
              </svg>
              <a href="#">ABZ</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/autoauditpro">
              <img src="/_next/static/media/facebook-icon.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/autoauditpro/">
              <img src="/_next/static/media/instagram-icon.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form">
          <div className="input-group">
            <input type="text" className="input-field" placeholder="Enter Name" required />
            <input type="email" className="input-field" placeholder="Enter Email Address" required />
          </div>
          <textarea className="textarea-field" placeholder="Enter your message..." rows="5" required></textarea>
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <span className="checkbox-text">Subscribe to our newsletter</span>
          </label>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
     
    </div>

    </div>
  );
};

export default ContactUs;
