import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactUs.css"; // Import custom CSS file for styling
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gsxw5u4",
        "template_11p5kd9",
        {
          from_name: formData.name,
          to_name: "Vin Me Now Support",
          from_email: formData.email,
          to_email: "developer@vinmenow.com",
          message: formData.message,
        },
        `dnUq37UngSXhNR0mr` // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true); // Set submission status to true
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message, please try again later.");
        }
      );

    setFormData({ name: "", email: "", message: "" }); // Clear the form after submission
  };

  return (
    <div className="contact-main-container">
      <h1 className="cont-h">Contact Us</h1>
      <p className="cont-p">
        Any questions or remarks? Just write us a message.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-title">Contact Information</h3>
          <p className="contact-description">
            We'd love to hear from you! Reach out to us via email or phone.
          </p>
          <ul className="contact-details">
            <li className="contact-item">
              <a href="mailto:developer@vinmenow.com">developer@vinmenow.com</a>
            </li>
            <li className="contact-item">
              <a href="tel:2109035954">210-903-5954</a>
            </li>
            <li className="contact-item">
              <p className="contact-des">
                For corporate inquiries, complaints, or technical assistance, we
                are here to support you via live chat or email:{" "}
                <a href="mailto:developer@vinmenow.com">
                  developer@vinmenow.com
                </a>
              </p>
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Vinmenow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook2 />
            </a>
            <a
              href="https://www.instagram.com/vinmenow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Enter Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="textarea-field"
            placeholder="Enter your message..."
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <span className="checkbox-text">Subscribe to our newsletter</span>
          </label>
          <button type="submit" className="submit-buttonn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
