import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

import "antd/dist/antd.min.css";

import "antd/dist/antd.min.css";
import Offcanvas from "../../Entryfile/offcanvance";

const CompanyPolicies = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Expenses - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Company Policies</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">General Policies</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    General Policies will be apply ro all expense category by
                    default.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Add Expense Modal */}

          <div className="modal-body">
            <form>
              <div className="col-md-10">
                <div className="checkbox">
                  <label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="True"
                    />{" "}
                    Expense Amount Limit
                  </label>
                </div>
                <div className="form-group">
                  <label>USD Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter USD amount"
                    // value={usdAmount}
                    // onChange={(e) => setUsdAmount(e.target.value)}
                  />
                </div>
              </div>

              <br></br>
              <br></br>

              <div className="col-md-10">
                <div className="checkbox">
                  <label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="True"
                    />{" "}
                    Receipt Required limit
                  </label>
                </div>
                <div className="form-group">
                  <label>USD Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter USD amount"
                    // value={usdAmount}
                    // onChange={(e) => setUsdAmount(e.target.value)}
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="col-md-10">
                <div className="checkbox">
                  <label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="True"
                    />{" "}
                    Make Description Mandatory
                  </label>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="col-md-10">
                <div className="checkbox">
                  <label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="True"
                    />{" "}
                    Allow Uncategorized Expenses To Be The Part Of Expense
                    Report
                  </label>
                </div>
              </div>

              <div className="submit-section">
                <button
                  className="btn btn-primary submit-btn"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* /Add Expense Modal */}
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};

export default CompanyPolicies;
