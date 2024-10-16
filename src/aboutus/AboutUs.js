import React from 'react';
import './AboutUs.css'; // Import custom CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-paragraph">
          At VIN ME NOW, we believe that knowledge is power, especially when it comes to making one of life’s significant investments—buying a car. Our mission is to empower buyers, sellers, and car enthusiasts by providing detailed and transparent vehicle history reports that unveil the true story behind every vehicle.
        </p>

        <h2 className="about-subheading">What We Do</h2>
        <p className="about-paragraph">
          Powered by BeMyMarketer, Vin Me Now Pro offers cutting-edge vehicle history reports based on your car’s VIN (Vehicle Identification Number). We go beyond the basics to deliver a thorough, in-depth analysis of a vehicle’s past, including:
        </p>
        <ul className="about-list">
          <li><strong>Ownership History:</strong> Know the number of previous owners, transfer details, and title history.</li>
          <li><strong>Accident Reports:</strong> Find out if the vehicle has been in any accidents, along with the severity and repair details.</li>
          <li><strong>Service and Maintenance Records:</strong> Get access to a detailed service history, ensuring the car has been well-maintained.</li>
          <li><strong>Odometer Verification:</strong> Detect potential odometer rollbacks or inconsistencies.</li>
          <li><strong>Theft and Salvage Checks:</strong> Ensure the vehicle hasn’t been reported stolen or labeled as a salvage vehicle.</li>
        </ul>

        <p className="about-paragraph">
          We understand that a vehicle’s history plays a crucial role in determining its true value and safety. With Auto Audit Pro, you gain access to data that helps protect you from potential risks, ensuring that your next car purchase is a sound investment.
        </p>

        <h2 className="about-subheading">Why Choose Auto Audit Pro?</h2>
        <ul className="about-list">
          <li><strong>Trusted Data:</strong> Our reports pull from trusted and verified databases, providing you with accurate and reliable information.</li>
          <li><strong>Advanced Technology:</strong> Backed by AYS Technologies, we leverage the latest technology to deliver comprehensive and easy-to-read reports within minutes.</li>
          <li><strong>Customer-Focused Approach:</strong> Our dedicated team is committed to providing exceptional service, ensuring that your experience with Auto Audit Pro is smooth, transparent, and stress-free.</li>
          <li><strong>Security and Privacy:</strong> We prioritize the security of your data, ensuring that your information is protected at every step.</li>
        </ul>

        <h2 className="about-subheading">Our Commitment</h2>
        <p className="about-paragraph">
          At Auto Audit Pro, we don’t just provide reports; we provide peace of mind. We understand the importance of making informed decisions, especially when it comes to purchasing a vehicle. Our commitment to transparency, accuracy, and customer satisfaction drives everything we do.
        </p>

        <h2 className="about-subheading">Payment Terms and Conditions</h2>
        <p className="about-paragraph">
          By purchasing a detailed vehicle history report from Auto Audit Pro, you agree to the following payment terms and conditions:
        </p>
        
        <h2 className="about-subheading">Payment Processing</h2>
        <p className="about-paragraph">
          All payments for vehicle history reports are processed securely through our payment gateway. Upon successful payment, you will receive an email containing your detailed report within the agreed-upon timeframe.
        </p>

        <h2 className="about-subheading">No Refund Policy</h2>
        <p className="about-paragraph">
          By completing your purchase, you acknowledge and agree that all sales are final. Given the nature of our service, you are not entitled to ask for any refunds, chargebacks, or reversals after receiving your report.
        </p>

        <h2 className="about-subheading">Acceptance of Terms</h2>
        <p className="about-paragraph">
          By proceeding with the payment, you confirm that you have read, understood, and agreed to these payment terms and conditions. Your use of Auto Audit Pro’s services constitutes your binding agreement to these terms.
        </p>
        
        <h2 className="about-subheading">Dispute Resolution</h2>
        <p className="about-paragraph">
          In the unlikely event of any dispute arising from your purchase, you agree to contact Auto Audit Pro directly for resolution before pursuing any external claims. Our team is here to assist with any concerns, but please be reminded that refunds or cancellations are not available for completed services.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

