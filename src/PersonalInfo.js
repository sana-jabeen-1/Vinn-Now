import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './PersonalInfo.css'; // Import custom CSS
import axios from 'axios'; // Import axios for API requests
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // Import PayPal components

const PersonalInfo = () => {
  const location = useLocation();
  const vinNumber = location.state?.vin || '';
  const [paid, setPaid] = useState(false); // State to handle payment status
  const [error, setError] = useState(null); // State to handle errors
  const [vinDetails, setVinDetails] = useState(null); // State to store VIN details
  const [loading, setLoading] = useState(false); // State to show loading spinner or message
  const [termsAccepted, setTermsAccepted] = useState(false); // State for terms and conditions checkbox
  const [showPayPal, setShowPayPal] = useState(false); // State to manage PayPal button visibility

  // PayPal client ID (replace with your sandbox client ID)
  const CLIENT_ID = 'ARxbxvm8ORE3KhXg9IXdslJOzw_qpFzY8Gj34Cf1--G0y3z_vqTFDRvkjzGBh49pwCfgj3u5k_2a10kK';

  // Handle successful payment
  const handleApprove = (orderID) => {
    setPaid(true);
    fetchVinDetails(vinNumber); // Fetch VIN details after payment
    alert(`Payment successful! Order ID: ${orderID}`);
  };

  // Fetch VIN details from the API after successful payment
  const fetchVinDetails = async (vin) => {
    setLoading(true);
    const config = {
      method: 'get',
      url: `https://api.vehicledatabases.com/vin-decode/${vin}`,
      headers: {
        'x-AuthKey': '3a4b3c05de634ec98e38a3406717362a',
      },
    };

    try {
      const response = await axios(config);
      const data = response.data;

      if (data && data.data) {
        setVinDetails(data.data);
      } else {
        setVinDetails(null);
        setError('No details found for this VIN.');
      }
    } catch (err) {
      setError('Error fetching VIN details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle the checkbox change
  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  // Handle Proceed button click
  const handleProceed = () => {
    if (termsAccepted) {
      setShowPayPal(true); // Show the PayPal button if terms are accepted
    } else {
      alert("Please check this box to proceed"); // Alert if not checked
    }
  };

  return (
    <section className="personal-info-section">
      <div className="container">
        <div className="form-header text-center">
          <h3 className="sub-title">Personal Information</h3>
          <h2 className="main-title">Fill The Form Below</h2>
        </div>

        {/* Render the form if payment has not been made yet */}
        {!paid ? (
          <form className="form-container">
            <div className="form-grid">
              {/* Full Name Field */}
              <div className="input-group">
                <label>Full Name</label>
                <input className="input-field" placeholder="Enter Full Name" type="text" name="name" required />
              </div>

              {/* VIN Number Field (Pre-filled) */}
              <div className="input-group">
                <label>VIN Number</label>
                <input
                  disabled
                  className="input-field input-disabled"
                  placeholder="Enter VIN Number"
                  type="text"
                  value={vinNumber}
                  name="vinNumber"
                />
              </div>

              {/* Email Address Field */}
              <div className="input-group">
                <label>Email Address</label>
                <input className="input-field" placeholder="Enter Email Address" type="email" name="email" required />
              </div>

              {/* Phone Number */}
              <div className="input-group phone-group">
                <label>Phone Number</label>
                <div className="phone-input-wrapper">
                  <img
                    className="flag-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                    alt="US Flag"
                  />
                  <input disabled className="input-small" value="+1" />
                  <input
                    className="input-field phone-input"
                    placeholder="(XXX)-XXX-XXXX"
                    type="tel"
                    name="phone"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <label className="terms-label">
                <input 
                  type="checkbox" 
                  required 
                  checked={termsAccepted} 
                  onChange={handleCheckboxChange} 
                /> I accept the{' '}
                <Link className="terms-link" to="/terms"> 
                  terms and conditions
                </Link>
                , including the payment and refund policy.
              </label>
            </div>

            {/* Proceed Button */}
            <button type="button" className="proceed-button" onClick={handleProceed}>
              Proceed
            </button>

            {/* Show PayPal Integration if terms are accepted */}
            {showPayPal && (
              <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                <div className="paypal-button-container">
                  <PayPalButtons
                    style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            description: 'VIN Report Purchase',
                            amount: { value: '35.00' },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(() => handleApprove(data.orderID));
                    }}
                    onError={(err) => {
                      setError(err);
                      console.error('PayPal Checkout Error:', err);
                    }}
                  />
                </div>
              </PayPalScriptProvider>
            )}
          </form>
        ) : (
          // Display VIN Details After Payment
          <div className="vin-details">
            <h3>Vehicle Information</h3>
            {loading ? (
              <p>Loading VIN details...</p>
            ) : vinDetails ? (
              <>
                <div className="field">
                  <label>VIN:</label>
                  <span>{vinDetails?.intro?.vin}</span>
                </div>
                <div className="field">
                  <label>Make:</label>
                  <span>{vinDetails?.basic?.make}</span>
                </div>
                <div className="field">
                  <label>Model:</label>
                  <span>{vinDetails?.basic?.model}</span>
                </div>
                <div className="field">
                  <label>Year:</label>
                  <span>{vinDetails?.basic?.year}</span>
                </div>
              </>
            ) : (
              <p>No VIN details found.</p>
            )}
          </div>
        )}

        {/* Display error message if present */}
        {error && <div className="error-message">Error: {error}</div>}
      </div>
    </section>
  );
};

export default PersonalInfo;
