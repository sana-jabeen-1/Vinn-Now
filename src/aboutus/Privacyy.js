import React, { useEffect } from "react";
import "./AboutUs.css"; // Import custom CSS file
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Privacyy = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="about-container">
      <Helmet>
        <title>VinMeNow Privacy Policy – Secure and Transparentt</title>
        <meta
          name="description"
          content=" VinMeNow prioritizes your data security. Learn about our privacy practices in car history reporting."
        />
      </Helmet>
      <div className="about-content">
        <h1 className="about-heading">Privacy Policy</h1>
        <p className="about-paragraph">
          Welcome to Vin Me Now (“we,” “our,” or “us”), powered by Bmymarketer.
          We value your privacy and are dedicated to safeguarding your personal
          information. This Privacy Policy outlines how we collect, use, share,
          and protect your data and information when you visit our website,
          Vinmenow.com, or utilize our services.
        </p>

        <h2 className="about-subheading">Information We Collect</h2>
        <p className="about-paragraph">
          Following are the types of information that we collect:
        </p>
        <ul className="about-list">
          <li>
            <strong>Personal Information:</strong> Details that identify you as
            an individual, such as your name, email address, phone number, and
            payment information.
          </li>
          <li>
            <strong>Vehicle Information:</strong> Information about the vehicle
            you are researching, including the Vehicle Identification Number
            (VIN), make, model, and year. information.
          </li>
          <li>
            <strong>Usage Data:</strong> Data related to how you interact with
            our website, such as your IP address, browser type, operating
            system, and pages visited.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            and similar tools to improve your experience, analyze usage
            patterns, and show targeted advertisements.
          </li>
        </ul>

        <h2 className="about-subheading">How We Use Your Information</h2>
        <p className="about-paragraph">
          The information we collect is used for the following purposes:{" "}
        </p>
        <ul className="about-list">
          <li>
            To Provide Services: Generate and deliver history reports of
            vehicles.
          </li>
          <li>
            To Process Payments: Ensure secure and efficient handling of
            transactions.
          </li>
          <li>
            To Communicate with You: To reply and answer to inquiries, provide
            updates, and offer customer support.
          </li>
          <li>
            To Improve Our Website: To evaluate and analyze user interactions to
            enhance our site and services.
          </li>
          <li>
            To Avoid Fraud: Detect and prevent fraudulent activities and any
            unauthorized access.
          </li>
        </ul>

        <h2 className="about-subheading">Sharing Your Information</h2>
        <p className="about-paragraph">
          Your personal information is not sold, traded or rented to any third
          parties or outside entities. However, we may share your data in the
          following situations:
          <br />
          Service Providers: We may provide your information to trusted
          third-party partners who help manage our website, process payments, or
          deliver services on our behalf.
          <br />
          Legal Obligations: Your information may be disclosed if required by
          law or as a response towards legal processes such as subpoenas, court
          orders, or other legal demands. Business Transfers: If our company
          undergoes a merger, acquisition, or reorganization, your data may be
          transferred as part of the transaction.
        </p>

        <h3 className="about-subheading">Data Security</h3>
        <p className="about-paragraph">
          We use multiple security measures, such as encryption, firewalls, and
          secure server hosting, to safeguard your personal information.
          However, it’s important to understand that no method of transmitting
          data over the internet or storing it electronically can be guaranteed
          to be completely secure so there is never a 100% security.
        </p>
        <h3 className="about-subheading">Your Privacy Rights</h3>
        <p className="about-paragraph">
          To exercise these rights, please contact us using the contact details
          provided below. You can have specific rights with respect to your
          personal information depending on your location, that includes:
        </p>
        <ul className="about-list">
          <li>
            Access: You can request access to the personal data that we hold in
            regards with you.
          </li>
          <li>
            Correction: You may request corrections if your personal information
            is not correct or complete.
          </li>
          <li>
            Deletion: You can ask for the deletion of your personal information,
            with the expectation of specific legal requirements or scenarios.
          </li>
          <li>
            Opt-Out: You have the right to opt out of receiving marketing
            communications from us.
          </li>
        </ul>
        <p className="about-paragraph">
          Please contact us on the contraction information given below to
          exercise any of these privacy rights.
        </p>
        <h3 className="about-subheading">Cookies and Tracking Technologies</h3>
        <p className="about-paragraph">
          We use cookies and similar tools to improve your browsing experience,
          provide highly personalized content, and evaluate website traffic. You
          can change and adjust your cookie preferences through the settings of
          your browser. But, please note that disabling cookies may limit some
          features of our website.
        </p>
        <h3 className="about-subheading">Third-Party Websites</h3>
        <p className="about-paragraph">
          There can be links to third-party websites on our website. We do not
          have control over the privacy practices or content of external
          websites. We recommend that you review the privacy policies of any
          third-party sites you visit to understand how they handle your
          information.
        </p>
        <h3 className="about-subheading">Changes to This Privacy Policy</h3>
        <p className="about-paragraph">
          This Privacy Policy may be revised periodically, and any updates will
          be reflected on this page with a revised “Last Updated” date. By
          continuing to use our website after these changes are made, you agree
          to accept the updated Privacy Policy.
        </p>
        <h3 className="about-subheading">Contact Us</h3>
        <p className="about-paragraph">
          Please contact us at the information given below if you have any
          confusions, concerns or questions about this Privacy Policy.
          <br />
          info@Vinmenow.com <br />
          +1 (334) 366-9567
        </p>
      </div>
    </div>
  );
};

export default Privacyy;
