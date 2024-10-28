import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset errors
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Name can only contain alphabetic characters.",
        }));
      }
    } else if (name === "email") {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    // Check for other errors before sending
    if (!errors.name && !errors.email) {
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
          `dnUq37UngSXhNR0mr`
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSubmitted(true);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Failed to send message, please try again later.");
          }
        );

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-main-container">
      <Helmet>
        <title>
          Reach Out to VinMeNow for Vehicle History Report Assistance
        </title>
        <meta
          name="description"
          content="VinMeNow offers customer support for all VIN check inquiries. Contact us for fast, friendly assistance."
        />
      </Helmet>
      <h1 className="cont-h">
        Reach Out to VinMeNow for Vehicle History Report Assistance
      </h1>
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
              <a href="mailto:team@vinmenow.com">team@vinmenow.com</a>
            </li>
            <li className="contact-item">
              <a href="tel:3343669567">(334) 366-9567</a>
            </li>
            <li className="contact-item">
              <p className="contact-des">
                For corporate inquiries, complaints, or technical assistance, we
                are here to support you via live chat or email:{" "}
                <a href="mailto:info@vinmenow.com">info@vinmenow.com</a>
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
            {errors.name && <span className="error-text">{errors.name}</span>}
            <input
              type="email"
              className="input-field"
              placeholder="Enter Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
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
