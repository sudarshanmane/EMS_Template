/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Vendors = () => {
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
              {/* <div className="col">
                <h3 className="page-title">Horizontal Form</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Horizontal Form</li>
                </ul>
              </div> */}
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Vendor Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                       <h4> Company Name</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                     <h4>Telephone</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="tel" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>Email Address</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>Website</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>FAX</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                   
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           
          </div>
          
         
        </div>
      </div>
 
    </>
  );
};
export default Vendors;
