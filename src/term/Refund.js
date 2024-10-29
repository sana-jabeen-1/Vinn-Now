import React, { useEffect } from "react";
import "./Refund.css";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Refund = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="redund-container">
      <Helmet>
        <title>Refund Policy | VinMeNow’s Commitment to Quality</title>
        <meta
          name="description"
          content=" VinMeNow’s refund policy ensures customer satisfaction with our vehicle history report services."
        />
      </Helmet>
      <div className="refunds-content">
        <h1 className="refunds-heading">Refund Policy Details:</h1>
        <p className="refunds-paragraph">
          If you discover any defective or inaccurate data in your report, you
          are required to provide documented proof of the issue. Should you wish
          to request a refund, please contact us at refund@vinmenow.com with the
          relevant details. Once the issue is validated, we will initiate your
          refund, and the payment will be returned within 1–2 working days. You
          can reach us anytime via email or live chat support. For faster
          resolution of your inquiries, we recommend using our 24/7 live chat
          service, where our support team is always committed to resolving any
          issues efficiently.
        </p>

        <h2 className="trems-subheading">Grounds for Refund:</h2>

        <ul className="trems-list">
          <li>Data provided is incorrect or missing key details</li>
          <li>If you encounter access issues due to technical errors</li>
        </ul>
        <p className="trems-paragraph">
          If the report matches the data available at the time of purchase, no
          refund will be provided based on personal dissatisfaction.
        </p>

        <h2 className="refunds-heading">Money-Back Guarantee:</h2>
        <p className="refunds-paragraph">
          We take pride in the precision and reliability of our reports. To
          ensure complete customer satisfaction, we back all our services with a
          100% money-back guarantee. If the report fails to meet our established
          quality standards, you will be eligible for a full or partial refund.
        </p>
        <h2 className="refunds-heading">Note:</h2>
        <p className="refunds-paragraph">
          On your bank or card statement, the transaction will appear as AYS
          Technologies.
          <br />
          If you believe you are eligible for a refund, please fill out the form
          below with the required details or email the following information to
          refund@vinmenow.com:
        </p>
        <p>Email Subject: Refund Request</p>
        <ul className="refunds-list">
          <li>Your Email</li>
          <li>Vehicle VIN Number</li>
          <li>Reason for Refund Request</li>
          <li>Your First Name</li>
          <li>Your Last Name</li>
          <li>Date of Purchase</li>
          <li>Payment Method</li>
          <li>PayPal Invoice NO #</li>
        </ul>
      </div>
    </div>
  );
};

export default Refund;
