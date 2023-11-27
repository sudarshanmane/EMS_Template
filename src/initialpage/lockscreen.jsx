import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo, Avatar_02 } from "../Entryfile/imagepath.jsx";

const Lockscreen = () => {
  return (
    <div className="account-page">
      <Helmet>
        <title>Lockscreen - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <Link to="/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <div className="lock-user">
                  <img alt="" src={Avatar_02} className="rounded-circle" />
                  <h4>John Doe</h4>
                </div>
                <div>
                  <div className="input-block">
                    <label>Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="input-block text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit">
                      Enter
                    </button>
                  </div>
                  <div className="account-footer">
                    <p>
                      Sign in as a different user?{" "}
                      <Link to="/register">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lockscreen;
