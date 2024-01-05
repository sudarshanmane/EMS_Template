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
                
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Record</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                            <h4>Reimbursment Ammount</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" placeholder="$1,100.06" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4> Paid To</h4>
                      </label>
                      <div className="col-lg-9">
                       <p>Kajal</p>
                       <p>( kajal@zillum.com )</p>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                     <h4> Reimbursed on</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" placeholder="03.09.2016" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                   <h4>  Paid Throught</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                       <h4>Notes</h4>
                      </label>
                      <div className="col-lg-9">
                            <textarea
                              rows={4}
                              cols={5}
                              className="form-control"
                              placeholder="Enter message"
                              defaultValue={""}
                            />
                          </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                       <h4> Ref#</h4>
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-success">
                      <h4>Record Reimbursment</h4>
                      </button>
                      <button type="button" className="btn btn-light me-1"><h4>Cancel</h4></button>
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
export default ReimbursmentRecord;
