import React from "react";
import "./Terms.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>VinMeNow Terms & Conditions for Car History Reports</title>
        <meta
          name="description"
          content="Understand VinMeNow’s terms and conditions for safe and reliable Vehicle History Report check services."
        />
      </Helmet>
      <div className="terms-content">
        <h1 className="terms-heading">DISCLAIMERs</h1>
        <p className="terms-paragraph">
          By completing the payment, you confirm that the charges are
          exclusively for the vehicle history report and acknowledge that they
          are non-refundable unless the report is not delivered within 24 hours
          of purchase. If the report is not received within this timeframe, you
          are eligible to request a refund. Beyond this, no chargeback or refund
          requests will be accepted.
        </p>

        <h1 className="terms-heading">Terms and Conditions</h1>
        <p className="terms-paragraph">
          If you continue to browse and use this website, you agree to abide by
          and be limited and bound by the following terms and conditions, along
          with the NMVTIS Disclaimer and Privacy Policy, which together police
          over Vinmenow.com’s relationship with you in relation to this website.
          <br />
          BY ACCESSING OR USING THIS SITE, YOU AGREE TO BE GOVERNED BY THESE
          TERMS AND CONDITIONS. IF YOU DO NOT ACCEPT THESE TERMS OF USE, PLEASE
          LEAVE THE SITE IMMEDIATELY. IF YOU ARE DISSATISFIED WITH THE SITE, OR
          ANY PRODUCTS, SERVICES, CONTENT, OR INFORMATION PROVIDED THROUGH IT,
          YOUR ONLY RECOURSE IS TO STOP USING THE SITE AND/OR THOSE SPECIFIC
          PRODUCTS OR SERVICES. YOUR AGREEMENT TO ABIDE BY THESE TERMS OF USE
          TAKES EFFECT IMMEDIATELY UPON YOUR FIRST USE OF THIS SITE.
          <br />
          We fully retain the right to update these Terms and Conditions at any
          time without prior notice. You agree and acknowledge that it is your
          responsibility to periodically review this website and the Terms and
          Conditions to stay familiar with any changes. Continuing to use this
          website after such modifications will serve as your acknowledgment of
          the updated Terms and Conditions and your agreement to follow and be
          bound by the new Terms and Conditions.
        </p>

        <h2 className="terms-subheading">Registration Data and Privacy</h2>
        <p className="terms-paragraph">
          To use the services on this site, you will need to create an account
          with a password by completing our online registration form, which
          collects specific personal information and data from you
          (“Registration Data”). By registering, you confirm that the details
          you provided are correct and accurate and agree to update them
          regularly to ensure they remain current, complete, and true.
          <br />
          The information we collect from your use of this site, including your
          Registration Data, is managed according to our Privacy Policy. This
          policy is incorporated by reference into these Terms and Conditions
          and applies to all interactions with this site.
        </p>

        <h2 className="terms-subheading">Third Party Sites and Information</h2>
        <p className="terms-paragraph">
          This site may contain links to other websites or references to
          information, documents, software, materials, or services provided by
          third parties. It is important to note that we do not control these
          external sites or services. Therefore, we cannot take responsibility
          for their accuracy, copyright compliance, legality, or any other
          aspect. These links or references are offered solely for your
          convenience and do not imply our endorsement, association, or any type
          of warranty, whether express or implied. We encourage you to carefully
          review the terms of use and privacy policies of any external sites you
          visit to ensure you understand their policies and how they manage your
          information.
        </p>

        <h2 className="terms-subheading">Payment</h2>
        <p className="terms-paragraph">
          All payments for services must be made by the Customer in United
          States dollars through an approved payment processor, such as
          Authorize.net or WePay. Payments are non-refundable, except in cases
          where a representative of Vinmenow.com grants an approved exception.
          Applicable sales tax may be applied on the basis of Customer’s billing
          zip code. For residents of Washington State, both local and state tax
          rates will be evaluated according to the guidelines provided by the
          Washington State Department of Revenue.
        </p>

        <h2 className="terms-subheading">
          Right to Access and Use Vehicle History Reports
        </h2>
        <p className="terms-paragraph">
          You are hereby granted a restricted, voidable, non-exclusive, and
          non-transferable license to access and use the Vehicle History Reports
          (“Reports”) provided by Vinmenow.com for personal use only and
          strictly according to these Terms and Conditions. You are prohibited
          from modifying, publishing, transmitting, displaying, selling,
          assigning, renting, sublicensing, or transferring the Reports or any
          content within them to any other person or entity. Additionally, you
          may not act as a service bureau or otherwise misuse or exploit the
          Reports in whole or in part. Unless explicitly and clearly granted
          permission by these Terms or copyright law, copying, redistributing,
          retransmitting, or commercially using the downloaded content without
          the prior written consent of Vinmenow.com is strictly prohibited.
        </p>

        <h2 className="terms-subheading">Intellectual Property Information</h2>
        <p className="terms-paragraph">
          By agreeing to these Terms and Conditions, you understand and agree
          that all content on this website is secured by copyrights, trademarks,
          service marks, patents, proprietary rights, and applicable laws and
          belongs exclusively to Vinmenow.com and/or its affiliates. You are
          only allowed to use the content as explicitly authorized by us or the
          relevant content provider. Except for a single copy made for personal
          use, you may not copy, reproduce, modify, republish, upload, post,
          transmit, or distribute any documents or information from this website
          by any means without previous written consent or permission from us or
          the content provider.It is completely your responsibility to request
          for such permission before you decide to reuse any copyrighted
          material that is available on this website. Unauthorized use of the
          materials may result in civil or criminal penalties and constitute a
          violation of copyright, trademark, or other applicable relevant laws.
          <br />
          We and our Affiliates do not extend any guarantees that your use of
          the materials available on or acquired through this website will not
          violate the rights of third parties.
          <br />
          All customized graphics, icons, logos, and service names are
          registered as trademarks or service marks of Vinmenow.com or its
          Affiliates. Any other trademarks or service marks mentioned on this
          website belong to their respective owners. These Terms and Conditions
          do not give you any rights to utilize the trademarks, service marks,
          logos, or the name of Vinmenow.com or its Affiliates in any form.
        </p>
        <h2 className="terms-subheading">Disclaimer of Warranties</h2>
        <p className="terms-paragraph">
          ALL MATERIALS AND SERVICES ON THIS SITE ARE GIVEN ON AN “AS IS” AND
          “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY SORT, EITHER EXPRESS OR
          IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT. WE MAKE NO CLAIMS THAT:
        </p>
        <ul className="about-list">
          <li>
            THE SERVICES AND MATERIALS WILL MEET YOUR SPECIFIC REQUIREMENTS OR
            EXPECTATIONS.
          </li>
          <li>
            ACCESS TO THE SERVICES AND MATERIALS WILL BE WITHOUT INTERRUPTIONS,
            ON TIME, SAFE, OR WITHOUT MISTAKES.
          </li>
          <li>
            THE RESULTS PROCURED FROM USING THE SERVICES OR MATERIALS WILL BE
            CORRECT, EFFECTIVE, OR RELIABLE.
          </li>
          <li>
            THE QUALITY OF ANY PRODUCTS, SERVICES, OR INFORMATION YOU PURCHASE
            FROM US OR OUR AFFILIATES WILL BE AS PER YOUR EXPECTATIONS OR BE
            WITHOUT ANY MISTAKES, ERRORS, OR DEFECTS.
          </li>
        </ul>
        <p className="terms-paragraph">
          THIS WEBSITE MAY NOT BE FREE FROM TECHNICAL ERRORS, INACCURACIES, OR
          TYPING MISTAKES OR OTHER FAULTS. WE RESERVE THE RIGHT TO MODIFY THE
          MATERIALS AND SERVICES LISTED ON THIS WEBSITE, INCLUDING PRICING
          INFORMATION AND PRODUCT DESCRIPTIONS, AT ANY TIME WITHOUT PRIOR
          NOTIFICATION. SOME MATERIALS OR SERVICES PROVIDED MAY BECOME OUTDATED,
          AND WE ASSUME NO OBLIGATION TO KEEP THEM UPDATED AND CURRENT.
        </p>
        <p className="terms-paragraph">
          THE UTILIZATION OF THE SERVICES, AS WELL AS THE DOWNLOADING OR
          OBTAINING OF ANY MATERIALS THROUGH THIS WEBSITE, IS CARRIED OUT AT
          YOUR OWN DISCRETION AND RISK. BY PROCEEDING, YOU AGREE THAT YOU ALONE
          WILL BE RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF
          DATA RESULTING FROM THESE ACTIVITIES.
        </p>
        <h2 className="terms-subheading">
          Security, Password and Personal Use
        </h2>
        <p className="terms-paragraph">
          It is your responsibility to keep your password and account details
          confidential. You must take appropriate steps to prevent unauthorized
          access to your account and ensure your password remains secure. Our
          team will never request your password. Sharing or transferring your
          account with anyone else is strictly prohibited. If we discover that
          your account has been shared or transferred, we reserve the right to
          terminate it immediately.
          <br />
          We provide access to the Vinmenow.com website exclusively for your
          personal, non-commercial use. You are strictly prohibited from
          reselling or using the website and its content for commercial
          purposes. Any breach of these terms may result in immediate account
          termination and potential legal action.
        </p>
        <h2 className="terms-subheading">Termination of Use</h2>
        <p className="terms-paragraph">
          We reserve the right to suspend or terminate your access to some or
          all parts of the site, at our sole discretion, with or without prior
          notice, for any reason, including but not limited to a violation of
          these Terms of Use. If any fraudulent, abusive, or illegal activity is
          suspected, we may end our relationship with you, terminate your
          account and report the matter to the appropriate law enforcement
          authorities.
          <br />
          In case of a termination or suspension, for any reason, your access to
          the services on this website will immediately end. You acknowledge and
          agree that we may deactivate or delete your account without delay,
          including all files and related information stored within it. We shall
          be not legally responsible to you or any third party for any claims or
          damages resulting from the termination, suspension, or any actions we
          take in regards with such decisions.
        </p>
        <h2 className="terms-subheading">Governing Law</h2>
        <p className="terms-paragraph">
          We manage this website (excluding any linked websites) from our
          offices in the United States of America. By using the service, you
          agree to follow and abide by all applicable local, state, federal, and
          national laws, statutes, ordinances, and regulations without any
          exceptions.
        </p>
        <h2 className="terms-subheading">
          NMVTIS Consumer Access Product Disclaimer
        </h2>
        <p className="terms-paragraph">
          The National Motor Vehicle Title Information System (NMVTIS) is an
          electronic database that provides information on certain vehicles
          titled in the United States. While NMVTIS offers reliable and
          dependable information into title and brand history of the vehicles,
          it does not include comprehensive details about the repair history of
          the vehicle.
          <br />
          Federal law requires all states, insurance companies, and junk or
          salvage yards to report information regularly to NMVTIS. However,
          NMVTIS does not cover all motor vehicles in the United States, as some
          states have yet to submit their data to the system. Additionally, the
          frequency of data updates varies—while some states report in
          “real-time” as title transactions occur, other states provide updates
          in lesser frequency or very late, such as every 24 hours or even over
          the period of several days.
          <br />
          The system may not include information about previous significant and
          serious vehicle damage if the vehicle was never classified as a “total
          loss” by an insurance company or another relevant entity, nor branded
          by a state titling agency. On the contrary, an insurance company may
          be bound to report a vehicle as a “total loss” even if the state
          titling agency of that vehicle has not labeled it as “salvage” or
          “junk.”
          <br />A vehicle history report is NOT a replacement for an independent
          vehicle inspection. Consumers are strongly advised to have the vehicle
          inspected independently before making a purchase to ensure there is no
          hidden damage. Approved NMVTIS Data Providers (identified by the
          NMVTIS logo) may also offer additional vehicle condition data and
          information from sources that are outside of NMVTIS.
          <br />
          NMVTIS data includes information (as reported by entities required to
          submit to the system) from participating state motor vehicle titling
          agencies.
          <br />
          It covers different vehicle types, including automobiles, buses,
          trucks, motorcycles, recreational vehicles, motor homes, and tractors.
          However, NMVTIS may not currently contain data on commercial vehicles
          if those records are maintained in a separate database by another
          state agency. These records may be added in the future. The system
          also provides information on "brands" assigned to vehicles by state
          motor vehicle titling agencies. There are variations in brand types
          and their definitions between states but these still can offer
          valuable information about condition or previous use of a car.
          <br />
          NMVTIS data includes the most recent odometer reading from the state’s
          title records. It also contains information from insurance companies
          and auto recyclers, including junk and salvage yards, as mandated by
          law since March 31, 2009. This data indicates whether the vehicle was
          classified as a “total loss” by an insurance carrier.
          <br />
          NMVTIS also includes data from junk and salvage yards that received
          “cash for clunker” vehicles through the Consumer Assistance to Recycle
          and Save (CARS) Act of 2009.
          <br />
          Consumers are encouraged to visit www.vehiclehistory.gov for guidance
          on understanding the information within the system and to better
          interpret the meanings of various labels assigned to vehicles by
          participating state motor vehicle titling agencies.
        </p>
        <h2 className="terms-subheading">VinMeNow.com Report Disclaimer</h2>
        <p className="terms-paragraph">
          The data in this report is compiled from a variety of sources,
          including government agencies, non-profit organizations, and industry
          partners. Access to the National Motor Vehicle Title Information
          System (NMVTIS) is provided through VinAudit Inc., an Approved NMVTIS
          Data Provider. The accuracy and reliability of the information rely
          heavily on the reporting entities, and all parties involved in
          producing this report assume no responsibility for any mistakes or
          omissions. Additionally, all warranties, whether express or implied,
          including implied warranties of merchantability or fitness for a
          specific purpose, are expressly disclaimed.
          <br />
          By accessing and using this website and its content, you agree to
          adhere to the Terms and Conditions and the Privacy Policy outlined
          above. If you do not agree with these terms, please leave the site
          immediately. If you have any questions about the Terms and Conditions,
          Privacy Policy, or other related matters, feel free to reach out to us
          through our Contact Us page.
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
