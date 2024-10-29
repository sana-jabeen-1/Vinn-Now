import React, { useEffect } from "react";
import "./AboutUs.css"; // Import custom CSS file
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="about-container">
      <Helmet>
        <title>Learn More About VinMeNow’s Vehicle History Report</title>
        <meta
          name="description"
          content="Our mission is to make car buying safer with reliable vehicle history reports. Learn about VinMeNow here."
        />
      </Helmet>
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-paragraph">
          At Vin Me Now, we know that being informed is vital when you are
          making big decisions like buying a car. Our aim is to provide buyers,
          sellers, and car enthusiasts with detailed, and transparent vehicle
          history reports, so that they know the complete story behind every
          vehicle.
        </p>

        <h2 className="about-subheading">What We Do</h2>
        <p className="about-paragraph">
          Powered by AYS Technologies, Vin Me Now delivers advanced vehicle
          history reports using your car’s VIN (Vehicle Identification Number).
          We go beyond the surface-level data to provide a comprehensive
          analysis of a vehicle’s background that includes:
        </p>
        <ul className="about-list">
          <li>
            <strong>Ownership History:</strong> Learn about previous owners,
            transfer details, and title records
          </li>
          <li>
            <strong>Accident Reports:</strong> Discover if the car has been in
            any accident, also including severity, impact and repair
            information.
          </li>
          <li>
            <strong>Service and Maintenance Records:</strong> Obtain and examine
            a detailed history about the vehicle's service to make sure of the
            proper maintenance.
          </li>
          <li>
            <strong>Odometer Verification:</strong> Spot potential odometer
            rollbacks or irregularities.
          </li>
          <li>
            <strong>Theft and Salvage Checks:</strong> Verify the vehicle hasn’t
            been reported as stolen or declared salvage.
          </li>
        </ul>

        <p className="about-paragraph">
          We know that a car’s history directly affects its value and safety.
          With Vin Me Now, you get the data and information needed to prevent
          any future risks, guaranteeing your next vehicle purchase is a smart
          and secure investment.
        </p>

        <h2 className="about-subheading">Why Choose VIN ME NOW?</h2>
        <ul className="about-list">
          <li>
            <strong>Trusted Data:</strong> Our reports are sourced from verified
            and reliable databases, giving you accurate information you can
            depend on
          </li>
          <li>
            <strong>Advanced Technology:</strong> Powered by AYS Technologies,
            we utilize the latest technology to give you detailed, easy-to-read
            reports in just a few minutes.
          </li>
          <li>
            <strong>Customer-Focused Approach:</strong> Our dedicated team
            ensures a smooth, transparent, and hassle-free experience every step
            of the way with unmatchable service with Vin Me Now.
          </li>
          <li>
            <strong>Security and Privacy:</strong> We prioritize your data’s
            safety, safeguarding your information throughout the entire process.
          </li>
        </ul>

        <h2 className="about-subheading">Our Commitment</h2>
        <p className="about-paragraph">
          At Vin Me Now, we understand that it is important to double-check
          every detail about a vehicle for your peace of mind. It is very
          crucial to make well-informed decisions, especially when purchasing a
          vehicle. Our focus on transparency, accuracy, and customer
          satisfaction is at the heart of everything we do. We’re here to
          support you every step of the way with reliable data and dedicated
          assistance.
          <br />
          Count on Vin Me Now as your trusted partner in making smarter, safer
          vehicle choices. Whether you’re buying, selling, or simply verifying
          details, we are here for you.
        </p>

        <h3 className="about-subheading">Payment Processing</h3>
        <p className="about-paragraph">
          All payments for vehicle history reports are handled securely through
          our trusted payment gateway. Once the payment is successfully
          processed, your detailed report will be sent to your email within the
          specified timeframe.
          <br />
          On your card or bank statement, the transaction will be listed as AYS
          Technologies. Please keep this in mind when reviewing your payment
          history.
        </p>
        <h3 className="about-subheading">Charges</h3>
        <p className="about-paragraph">
          You are only charged for the detailed vehicle history report based on
          the VIN number you provide. The fee is final and includes the full
          cost of data retrieval and presentation services offered by Vin Me
          Now.
        </p>
        <h3 className="about-subheading">No Refund Policy</h3>
        <p className="about-paragraph">
          By completing your purchase, you acknowledge and accept that all sales
          are final. Due to the nature of our service, refunds, chargebacks, or
          payment reversals are not permitted after the report is delivered.
          <br />
          We are committed to providing accurate and comprehensive vehicle
          history reports. Once the report has been sent, the service is deemed
          fully rendered. Any attempts to request refunds or initiate
          chargebacks will be treated as a breach of these terms and conditions.
        </p>
        <h3 className="about-subheading">Acceptance of Terms</h3>
        <p className="about-paragraph">
          By completing the payment, you confirm that you have read, understood,
          and accepted these payment terms and conditions. Using Vin Me Now’s
          services signifies your binding agreement to these terms, and you
          waive any right to dispute or contest these conditions once your
          report has been delivered.
        </p>
        <h3 className="about-subheading">Delivery of Service</h3>
        <p className="about-paragraph">
          Vin Me Now is dedicated towards delivering your vehicle history report
          to the email address you provide us at purchase. Please ensure the
          email address you enter is correct and able to receive our emails, as
          we are not responsible for failed deliveries due to incorrect or
          invalid addresses
        </p>
        <h3 className="about-subheading">Dispute Resolution</h3>
        <p className="about-paragraph">
          If any disputes arise regarding your purchase, you agree to first
          reach out to Vin Me Now for resolution before seeking external claims.
          Our team is ready to help with any problems; however, please note that
          refunds or cancellations are not offered once the service has been
          completed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
