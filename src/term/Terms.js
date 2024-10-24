import React from "react";
import "./Terms.css";
import { useLocation, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const Terms = () => {
  const [vin, setVin] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const transliterate = (c) => {
    return "0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ".indexOf(c) % 10;
  };

  // Calculate the check digit for VIN validation
  const getCheckDigit = (vin) => {
    const map = "0123456789X";
    const weights = "8765432X098765432";
    let sum = 0;
    for (let i = 0; i < 17; ++i)
      sum += transliterate(vin[i]) * map.indexOf(weights[i]);
    return map[sum % 11];
  };

  const validateVin = (vin) => {
    if (vin.length !== 17) return false;
    return getCheckDigit(vin) === vin[8];
  };

  const handleVinChange = (e) => {
    setVin(e.target.value.toUpperCase());
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVin(vin)) {
      setMessage("VIN is valid. Redirecting to details form...");
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        navigate("/personal-info", { state: { vin: vin } });
      }, 1000);
    } else {
      setMessage(
        "Invalid VIN number. Please check and enter a valid 17-character VIN."
      );
    }
  };

  return (
    <div className="term-container">
      <div className="terms-content">
        <h1 className="terms-heading">DISCLAIMER</h1>
        <p className="terms-paragraph">
          By proceeding with the payment, you acknowledge that you are paying
          solely for the vehicle history report from VIN ME NOW, and you agree
          that charges are non-refundable unless the report is not delivered
          within 24 hours of purchase. In such a case, you are entitled to
          request a refund. Otherwise, no chargeback or refund claims will be
          entertained.
        </p>

        <h1 className="terms-heading">Terms and Conditions</h1>
        <p className="terms-paragraph">
          By continuing to browse and use this website, you agree to comply with
          and be bound by the following terms and conditions, which together
          with the NMVTIS Disclaimer and Privacy Policy govern VIN ME NOW's
          relationship with you in relation to this website.
        </p>

        <p className="terms-paragraph">
          BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS AND
          CONDITIONS.
        </p>

        <h2 className="terms-subheading">Registration Data and Privacy</h2>
        <p className="terms-paragraph">
          In order to access the services on this site, you may be required to
          use an account and password. You agree to provide accurate information
          when registering. Protecting the confidentiality of your account and
          password is your responsibility.
        </p>

        <h2 className="terms-subheading">Third-Party Sites and Information</h2>
        <p className="terms-paragraph">
          This site may contain links to other websites or references to
          information provided by third parties. VIN ME NOW is not responsible
          for the content of such external sites and does not endorse any
          third-party products or services.
        </p>

        <h2 className="terms-subheading">Payment</h2>
        <p className="terms-paragraph">
          All payments for services shall be made in United States dollars. You
          agree to pay all fees and charges incurred through your account at the
          rates in effect when the charges were incurred.
        </p>

        <h2 className="terms-subheading">
          Right to Access and Use Vehicle History Reports
        </h2>
        <p className="terms-paragraph">
          You are granted a limited, non-exclusive, non-transferable license to
          access and use the vehicle history reports provided by VIN ME NOW for
          your personal use only.
        </p>

        <h2 className="terms-subheading">Intellectual Property Information</h2>
        <p className="terms-paragraph">
          All content on this site, including text, graphics, logos, and images,
          is the property of VIN ME NOW or its content suppliers and is
          protected by intellectual property laws.
        </p>

        <h2 className="terms-subheading">Disclaimer of Warranties</h2>
        <p className="terms-paragraph">
          ALL MATERIALS AND SERVICES ON THIS SITE ARE PROVIDED "AS IS" WITHOUT
          WARRANTY OF ANY KIND. VIN ME NOW DISCLAIMS ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2 className="terms-subheading">
          Security, Password, and Personal Use
        </h2>
        <p className="terms-paragraph">
          You are responsible for maintaining the confidentiality of your
          password and account information. You agree to notify VIN ME NOW
          immediately of any unauthorized use of your account.
        </p>

        <h2 className="terms-subheading">Termination of Use</h2>
        <p className="terms-paragraph">
          VIN ME NOW reserves the right to terminate or suspend your access to
          the site at any time without notice if you violate these terms and
          conditions.
        </p>

        <h2 className="terms-subheading">Governing Law</h2>
        <p className="terms-paragraph">
          These terms and conditions are governed by the laws of the United
          States and the State in which VIN ME NOW operates, without regard to
          conflict of law principles.
        </p>

        <h2 className="terms-subheading">
          NMVTIS Consumer Access Product Disclaimer
        </h2>
        <p className="terms-paragraph">
          The National Motor Vehicle Title Information System (NMVTIS) is an
          electronic system that contains information about certain automobiles
          titled in the United States. VIN ME NOW provides NMVTIS reports but is
          not responsible for the accuracy of the data.
        </p>

        <h2 className="terms-subheading">VIN ME NOW Report Disclaimer</h2>
        <p className="terms-paragraph">
          The information used to compile this report is aggregated from various
          government agencies and third-party sources. VIN ME NOW does not
          guarantee the accuracy or completeness of the information provided.
        </p>
      </div>

      <div className="form-sec">
        <h1 className="font-medium md:text-[32px] sm:text-[28px] text-[24px] leading-[1.3em]">
          Buying a Used Car? Check it using VIN ME NOW
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="vin-input-term">
            <input
              type="text"
              className="vin-input-term"
              minLength="17"
              maxLength="17"
              placeholder="Enter VIN Number"
              value={vin}
              onChange={handleVinChange}
            />
          </div>
          <button type="submit" className="submit-btn-term" disabled={loading}>
            {loading ? "Loading..." : "Get Report"}
          </button>
        </form>
        {message && <p className="vin-message">{message}</p>}
        <p>No VIN yet? Get a prepaid VIN ME NOW report.</p>
      </div>
    </div>
  );
};

export default Terms;
