/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Offcanvas from "../../../Entryfile/offcanvance";

const EmailSettings = () => {
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Email Settings - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="input-block">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mailoption"
                      id="phpmail"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="phpmail">
                      PHP Mail
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="mailoption"
                      id="smtpmail"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="smtpmail">
                      SMTP
                    </label>
                  </div>
                </div>
                <h4 className="page-title">PHP Email Settings</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Email From Address</label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Emails From Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <h4 className="page-title m-t-30">SMTP Email Settings</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP HOST</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP USER</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP PASSWORD</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP PORT</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP Security</label>
                      <select className="select">
                        <option>None</option>
                        <option>SSL</option>
                        <option>TLS</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>SMTP Authentication Domain</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">
                    Save &amp; update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};

export default EmailSettings;
