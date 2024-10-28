import React, { useEffect } from "react";
import "./VinSearch.css"; // Import custom CSS file for styling
import Header from "../Header";
import "../Header.css";
import FaqComp from "../FaqComp";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import logo from "../Vin-Me-Now-LOGO-F.png";
import title from "../title-icn.svg";
import del from "../delet-icon.svg";
import brand from "../brand-check.svg";
import odometr from "../odometer.svg";
import value from "../vh-value.svg";
import inspaction from "../inspection.svg";
import safty from "../safty-recall.svg";
import openlens from "../openlens.svg";
import active from "../active-theft.svg";
import registration from "../title-icn.svg";
import otherinfo from "../other-info.svg";
import hiwone from "../how-it-work-11.png";
import hiwtow from "../how-it-work-22.png";
import hiwthree from "../how-it-work-33.png";
import vinbanner from "../vin-banner.png";
import vinmobile from "../bannerr-mobile.png";

const VinSearch = () => {
  const isMobile = window.innerWidth <= 480;

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

    // Trim the VIN to remove any leading/trailing whitespace
    const trimmedVin = vin.trim();

    // Check if VIN is empty
    if (!trimmedVin) {
      setMessage("Please enter VIN Number");
      return;
    }

    if (validateVin(trimmedVin)) {
      setMessage("VIN is valid. Redirecting to details form...");
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        navigate("/personal-info", { state: { vin: trimmedVin } });
      }, 1000);
    } else {
      setMessage(
        "Invalid VIN number. Please check and enter a valid 17-character VIN."
      );
    }
  };

  return (
    <>
      <div>
        <Header />

        <div className="vin-search-container">
          <div
            className="vin-search-content"
            style={{
              height: isMobile ? "85vh" : "40vw",
              backgroundImage: `url(${isMobile ? vinmobile : vinbanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="new-content">
              {/* Heading Section */}
              <h3 className="vin-subtitle">
                Get Your Car Ready With Our Detailed <br /> Auto Audit Services
              </h3>
              <h1 className="vinn-title">
                Verify Every Mile With a <br />
                Car’s History Report Before <br /> You Make the Deal
              </h1>

              <div className="vin-form-container sticky-searchbar">
                <form onSubmit={handleSubmit}>
                  <div className="vin-input-wrapper">
                    <input
                      type="text"
                      className="vin-input"
                      minLength="17"
                      maxLength="17"
                      placeholder="Enter VIN Number"
                      value={vin}
                      onChange={handleVinChange}
                    />
                    <button
                      type="submit"
                      className="vin-submit-btnn"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Get Report"}
                    </button>
                  </div>
                </form>
                {/* Display validation message */}
                {message && <p className="vin-message">{message}</p>}
              </div>
            </div>
            {/* VIN Search Form */}
          </div>

          {/* "How It Works" Section */}
          <section className="how-it-works">
            <div className="text-center">
              <h3 className="text-gray-500 text-[18px] font-medium mb-5">
                Avoid Any Unpleasant Surprise With a Vehicle History Report
              </h3>
              <h2 className="easy-steps">
                Make a confident decision about buying or selling with a
                comprehensive car history report
              </h2>
            </div>
            <div className="steps-container mt-8 flex justify-center items-center flex-wrap md:flex-nowrap">
              {/* Step 1 */}
              <div className="step-item text-center">
                <img
                  src={hiwone}
                  alt="Enter VIN Number"
                  className="step-image"
                />
                <h3 className="step-title">Enter VIN Number</h3>
                <p className="step-description">
                  Input your VIN to begin the report process.
                </p>
              </div>
              {/* Step 2 */}
              <div className="step-item text-center md:border-l-2 md:border-r-2 border-[#ddd]">
                <img src={hiwtow} alt="Verify Payment" className="step-image" />
                <h3 className="step-title">Verify Payment</h3>
                <p className="step-description">
                  Confirm payment securely to access your vehicle history
                  report.
                </p>
              </div>
              {/* Step 3 */}
              <div className="step-item text-center">
                <img src={hiwthree} alt="Email Report" className="step-image" />
                <h3 className="step-title">Email Report</h3>
                <p className="step-description">
                  Get your complete history report sent to your email
                </p>
              </div>
            </div>
          </section>
          <div className="card-h">
            <h1>
              Access Detailed Data With a VIN Report to Check Ownership and
              Vehicle Condition
            </h1>
            <p>
              Get accurate vehicle records to ensure transparent buying or
              selling.
            </p>
          </div>
          <section class="card-container">
            <div class="card">
              <img src={title} alt="Title History Icon" />
              <h3>Title History</h3>
              <p>
                Verify ownership transfers and detect potential disputes to
                avoid hidden issues affecting the vehicle's value.
              </p>
            </div>
            <div class="card">
              <img src={del} alt="Auto Audit Pro" />
              <h3>Junk / Salvage Info</h3>
              <p>
                Identify major past damage or total loss declarations to prevent
                safety concerns and resale problems.
              </p>
            </div>
            <div class="card">
              <img src={brand} alt="Title Brand Check Icon" />
              <h3>Title Brand Check</h3>
              <p>
                Spot designations like flood, rebuilt, or lemon titles to make
                informed decisions when buying used vehicles.
              </p>
            </div>
            <div class="card">
              <img src={odometr} alt="Odometer History Icon" />
              <h3>Odometer History</h3>
              <p>
                Ensure accurate mileage records to detect possible rollbacks and
                confirm the car's actual usage.
              </p>
            </div>
            <div class="card">
              <img src={value} alt="Vehicle Values Icon" />
              <h3>Vehicle Values</h3>
              <p>
                Analyze current market values to set competitive prices and stay
                informed about trends affecting resale value.
              </p>
            </div>
            <div class="card">
              <img src={inspaction} alt="Warranty Info Icon" />
              <h3>Warranty Info</h3>
              <p>
                Understand remaining warranty coverage to protect against
                unexpected repair or replacement costs.
              </p>
            </div>
            <div class="card">
              <img src={inspaction} alt="Inspection Information" />
              <h3>Inspection Information</h3>
              <p>
                Confirm the vehicle meets safety and emission standards to avoid
                compliance issues.
              </p>
            </div>
            <div class="card">
              <img src={safty} alt="Safety Recalls" />
              <h3>Safety Recalls</h3>
              <p>
                Check for unresolved recalls to ensure there are no issues
                impacting performance or safety on the road.
              </p>
            </div>
            <div class="card">
              <img src={openlens} alt="Open Liens" />
              <h3>Open Liens</h3>
              <p>
                Confirm there are no outstanding loans or legal claims to
                acquire the vehicle with a clear, transferable title.
              </p>
            </div>
            <div class="card">
              <img src={active} alt="Active and Recovered Theft" />
              <h3>Active and Recovered Theft</h3>
              <p>
                Ensure the vehicle hasn't been stolen or recently recovered to
                avoid legal issues.
              </p>
            </div>
            <div class="card">
              <img src={registration} alt="Registration Information" />
              <h3>Registration Information</h3>
              <p>
                Verify proper registration to avoid future legal issues and
                ensure the vehicle can be driven legally
              </p>
            </div>
            <div class="card">
              <img src={otherinfo} alt="Other Information" />
              <h3>Other Information</h3>
              <p>
                Access additional details like accident records and maintenance
                history for a fully informed purchase.
              </p>
            </div>
          </section>
        </div>
        <FaqComp />
      </div>
    </>
  );
};

export default VinSearch;
