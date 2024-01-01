/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import Offcanvas from "../../../../Entryfile/offcanvance";

const ReimbursmentRecord = () => {
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
          <title>Horizontal Form - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Reimbursment Record</h3>
                {/* <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Horizontal Form</li>
                </ul> */}
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
          <div className="col-xl-6">
                        <h4 className="card-title">Personal details</h4>
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Name
                          </label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block">
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block">
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Phone
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Address
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              className="form-control m-b-20"
                            />
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block">
                                  <select className="select">
                                    <option>Select Country</option>
                                    <option value={1}>USA</option>
                                    <option value={2}>France</option>
                                    <option value={3}>India</option>
                                    <option value={4}>Spain</option>
                                  </select>
                                </div>
                                <div className="input-block">
                                  <input
                                    type="text"
                                    placeholder="ZIP code"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-block">
                                  <input
                                    type="text"
                                    placeholder="State/Province"
                                    className="form-control"
                                  />
                                </div>
                                <div className="input-block">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
          
                    </div>
    
        </div>
      </div>
      {/* <Offcanvas /> */}
    </>
  );
};
export default ReimbursmentRecord;
