/**
 * Signin Firebase
 */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";

const OTPscreen = () => {
  const [placeholder0, setPlaceholder0] = useState("0");
  const [placeholder1, setPlaceholder1] = useState("0");
  const [placeholder2, setPlaceholder2] = useState("0");
  const [placeholder3, setPlaceholder3] = useState("0");

  const [previousPlaceholder0, setPreviousPlaceholder0] = useState("");
  const [previousPlaceholder1, setPreviousPlaceholder1] = useState("");
  const [previousPlaceholder2, setPreviousPlaceholder2] = useState("");
  const [previousPlaceholder3, setPreviousPlaceholder3] = useState("");

  const clearPlaceholder0 = () => {
    setPreviousPlaceholder0(placeholder0);
    setPlaceholder0("");
  };

  const restorePlaceholder0 = () => {
    setPlaceholder0(previousPlaceholder0);
  };

  const clearPlaceholder1 = () => {
    setPreviousPlaceholder1(placeholder1);
    setPlaceholder1("");
  };

  const restorePlaceholder1 = () => {
    setPlaceholder1(previousPlaceholder1);
  };

  const clearPlaceholder2 = () => {
    setPreviousPlaceholder2(placeholder2);
    setPlaceholder2("");
  };

  const restorePlaceholder2 = () => {
    setPlaceholder2(previousPlaceholder2);
  };

  const clearPlaceholder3 = () => {
    setPreviousPlaceholder3(placeholder3);
    setPlaceholder3("");
  };

  const restorePlaceholder3 = () => {
    setPlaceholder3(previousPlaceholder3);
  };
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <Helmet>
          <title>OTP - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="account-content">
          {/* <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link> */}
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <Link to="/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">OTP</h3>
                <p className="account-subtitle">Verification your account</p>
                {/* Account Form */}
                <div>
                  <div className="otp-wrap">
                    <input
                      type="text"
                      placeholder={placeholder0}
                      maxLength={1}
                      onFocus={clearPlaceholder0}
                      onBlur={restorePlaceholder0}
                      className="otp-input"
                    />
                    <input
                      type="text"
                      placeholder={placeholder1}
                      maxLength={1}
                      className="otp-input"
                      onFocus={clearPlaceholder1}
                      onBlur={restorePlaceholder1}
                    />
                    <input
                      type="text"
                      placeholder={placeholder2}
                      maxLength={1}
                      className="otp-input"
                      onFocus={clearPlaceholder2}
                      onBlur={restorePlaceholder2}
                    />
                    <input
                      type="text"
                      placeholder={placeholder3}
                      maxLength={1}
                      className="otp-input"
                      onFocus={clearPlaceholder3}
                      onBlur={restorePlaceholder3}
                    />
                  </div>
                  <div className="form-group text-center">
                    <Link
                      to="/app/main/dashboard"
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Enter
                    </Link>
                  </div>
                  <div className="account-footer">
                    <p>
                      Not yet received? <Link to="#">Resend OTP</Link>
                    </p>
                  </div>
                </div>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPscreen;
