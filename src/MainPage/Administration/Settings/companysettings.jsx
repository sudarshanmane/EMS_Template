/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Offcanvas from "../../../Entryfile/offcanvance";

const Settings = () => {
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
          <title>Settings - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2 box-align">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Company Settings</h3>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>
                        Company Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Dreamguy's Technologies"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Contact Person</label>
                      <input
                        className="form-control "
                        defaultValue="Daniel Porter"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label>Address</label>
                      <input
                        className="form-control "
                        defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block">
                      <label>Country</label>
                      <select className="form-control select">
                        <option>USA</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block">
                      <label>City</label>
                      <input
                        className="form-control"
                        defaultValue="Sherman Oaks"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block">
                      <label>State/Province</label>
                      <select className="form-control select">
                        <option>California</option>
                        <option>Alaska</option>
                        <option>Alabama</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="input-block">
                      <label>Postal Code</label>
                      <input
                        className="form-control"
                        defaultValue={91403}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Email</label>
                      <input
                        className="form-control"
                        defaultValue="danielporter@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        defaultValue="818-978-7102"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Mobile Number</label>
                      <input
                        className="form-control"
                        defaultValue="818-635-5579"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Fax</label>
                      <input
                        className="form-control"
                        defaultValue="818-978-7102"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label>Website Url</label>
                      <input
                        className="form-control"
                        defaultValue="https://www.example.com"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
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

export default Settings;
