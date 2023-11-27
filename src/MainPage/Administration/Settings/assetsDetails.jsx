import React, { useState } from "react";
import { img1, img2, img3, img4, keyboard } from "../../../Entryfile/imagepath";
import Select2 from "react-select2-wrapper";

const AssetsDetails = () => {
  const [dep, setDep] = useState([
    { id: 1, text: "Department 1" },
    { id: 2, text: "Department 2" },
  ]);

  const [assign, setAssign] = useState([
    { id: 1, text: "Customer" },
    { id: 2, text: "Client" },
  ]);
  return (
    <div className="main-wrapper">
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid pb-1">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Assets</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Assets</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row">
            <div className="col-lg-12">
              <div className="assign-head">
                <div className="assign-content">
                  <img src={keyboard} alt="img" />
                  <h6>Dell Keyboard</h6>
                </div>
                <div className="assign-content">
                  <a
                    href="#"
                    className="btn btn-assign"
                    data-bs-toggle="modal"
                    data-bs-target="#add-assign">
                    <i className="fa fa-plus" /> Assign
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="assets-info">
                <h2>Asset Info</h2>
                <ul>
                  <li>
                    <span>Type</span>
                    <p>Keybaord</p>
                  </li>
                  <li>
                    <span>Brand</span>
                    <p>Dell</p>
                  </li>
                  <li>
                    <span>Model</span>
                    <p>SE5214 - 2022</p>
                  </li>
                  <li>
                    <span>Serial Number</span>
                    <p>3647952145678</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="assets-info">
                <h2>Asset History</h2>
                <ul>
                  <li>
                    <span>Vendor</span>
                    <p>Compusoft Systems Ltd.,</p>
                  </li>
                  <li>
                    <span>Category</span>
                    <p>Computer</p>
                  </li>
                  <li>
                    <span>Cost</span>
                    <p>₹ 1,200</p>
                  </li>
                  <li>
                    <span>Location</span>&nbsp;
                    <p>123 Street,DB Road,Coimbatore - 32</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex">
              <div className="assets-info">
                <h2>Warranty</h2>
                <ul>
                  <li>
                    <span>Start Date</span>
                    <p>12/11/2022</p>
                  </li>
                  <li>
                    <span>End Date</span>
                    <p>12/11/2024</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex">
              <div className="assets-info assets-image">
                <h2>Asset Images</h2>
                <ul>
                  <li>
                    <img src={img1} alt="img" />
                  </li>
                  <li>
                    <img src={img2} alt="img" />
                  </li>
                  <li>
                    <img src={img3} alt="img" />
                  </li>
                  <li>
                    <img src={img4} alt="img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* /Delete Asset Modal */}
      </div>
      {/* /Page Wrapper */}

      <div
        className="modal custom-modal fade"
        id="add-assign"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title">Assign Asset</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12 selectnew">
                    <div className="form-group">
                      <label>Department</label>
                      <div className="select">
                        <Select2
                          data={dep}
                          options={{
                            placeholder: "Department 1",
                          }}
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="col-md-12 selectnew">
                    <div className="form-group">
                      <label>Assign to</label>
                      <div className="select">
                        <Select2
                          data={assign}
                          options={{
                            placeholder: "Customer",
                          }}
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="submit-section mt-3">
                    <button className="btn btn-primary submit-btns w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsDetails;
