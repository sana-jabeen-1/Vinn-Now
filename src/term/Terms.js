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
          solely for the vehicle history report, and you agree that charges are
          non-refundable unless the report is not delivered within 24 hours of
          purchase. In such a case, you are entitled to request a refund.
          Otherwise, no chargeback or refund claims will be entertained.
        </p>

        <h1 className="terms-heading">Terms and Conditions</h1>
        <p className="terms-paragraph">
          Should you continue to browse and use this website, you must agree to
          comply with and be bound by the following terms and conditions, which
          together with the NMVTIS Disclaimer and Privacy Policy govern
          Autoauditpro.com’s relationship with you in relation to this website.
        </p>

        <p className="terms-paragraph">
          BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS AND
          CONDITIONS...
        </p>

        <h2 className="terms-subheading">Registration Data and Privacy</h2>
        <p className="terms-paragraph">
          In order to access the services on this site, you will be required to
          use an account and password...
        </p>

        <h2 className="terms-subheading">Third Party Sites and Information</h2>
        <p className="terms-paragraph">
          This site may link you to other sites on the Internet or otherwise
          include references to information...
        </p>

        <h2 className="terms-subheading">Payment</h2>
        <p className="terms-paragraph">
          Any and all payments for services shall be made by the Customer in
          United States dollars...
        </p>

        <h2 className="terms-subheading">
          Right to Access and Use Vehicle History Reports
        </h2>
        <p className="terms-paragraph">
          You are hereby granted a limited, revocable, non-exclusive and
          non-transferable license...
        </p>

        <h2 className="terms-subheading">Intellectual Property Information</h2>
        <p className="terms-paragraph">
          By accepting these Terms and Conditions, you acknowledge and agree
          that all content presented...
        </p>

        <h2 className="terms-subheading">Disclaimer of Warranties</h2>
        <p className="terms-paragraph">
          ALL MATERIALS AND SERVICES ON THIS SITE ARE PROVIDED ON AN “AS IS” AND
          “AS AVAILABLE” BASIS...
        </p>

        <h2 className="terms-subheading">
          Security, Password and Personal Use
        </h2>
        <p className="terms-paragraph">
          You are solely responsible for maintaining the confidentiality of your
          password and account...
        </p>

        <h2 className="terms-subheading">Termination of Use</h2>
        <p className="terms-paragraph">
          You agree that we may, in our sole discretion, terminate or suspend
          your access to all or part of the site...
        </p>

        <h2 className="terms-subheading">Governing Law</h2>
        <p className="terms-paragraph">
          This site (excluding any linked sites) is controlled by us from our
          offices within the United States of America...
        </p>

        <h2 className="terms-subheading">
          NMVTIS Consumer Access Product Disclaimer
        </h2>
        <p className="terms-paragraph">
          The National Motor Vehicle Title Information System (NMVTIS) is an
          electronic system...
        </p>

        <h2 className="terms-subheading">Autoauditpro.com Report Disclaimer</h2>
        <p className="terms-paragraph">
          The information used to compile this report is aggregated from various
          government agencies...
        </p>
      </div>

      <div className="form-sec">
        <h1 className="font-medium md:text-[32px] sm:text-[28px] text-[24px] leading-[1.3em]">
          Buying a Used car? Check it using Auto Audit PRO
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
        <p> No VIN yet? Get a prepaid Auto Audit PRO VINreport</p>
      </div>
    </div>
  );
};

export default Terms;
