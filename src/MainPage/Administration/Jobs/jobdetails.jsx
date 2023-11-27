/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../Entryfile/offcanvance";

const Jobdetails = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
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
          <title>Jobs - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Job Details</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Job Details</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-8">
              <div className="job-info job-widget">
                <h3 className="job-title">Android Developer</h3>
                <span className="job-dept">App Development</span>
                <ul className="job-post-det">
                  <li>
                    <i className="fa fa-calendar" /> Post Date:{" "}
                    <span className="text-blue">Feb 18, 2019</span>
                  </li>
                  <li>
                    <i className="fa fa-calendar" /> Last Date:{" "}
                    <span className="text-blue">May 31, 2019</span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" /> Applications:{" "}
                    <span className="text-blue">4</span>
                  </li>
                  <li>
                    <i className="fa fa-eye" /> Views:{" "}
                    <span className="text-blue">3806</span>
                  </li>
                </ul>
              </div>
              <div className="job-content job-widget">
                <div className="job-desc-title">
                  <h4>Job Description</h4>
                </div>
                <div className="job-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <div className="job-desc-title">
                  <h4>Job Description</h4>
                </div>
                <div className="job-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <ul className="square-list">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="job-det-info job-widget">
                <Link
                  className="btn job-btn"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_job"
                >
                  Edit
                </Link>
                <div className="info-list">
                  <span>
                    <i className="fa fa-bar-chart" />
                  </span>
                  <h5>Job Type</h5>
                  <p> Full Time</p>
                </div>
                <div className="info-list">
                  <span>
                    <i className="fa fa-money" />
                  </span>
                  <h5>Salary</h5>
                  <p>$32k - $38k</p>
                </div>
                <div className="info-list">
                  <span>
                    <i className="fa fa-suitcase" />
                  </span>
                  <h5>Experience</h5>
                  <p>2 Years</p>
                </div>
                <div className="info-list">
                  <span>
                    <i className="fa fa-ticket" />
                  </span>
                  <h5>Vacancy</h5>
                  <p>5</p>
                </div>
                <div className="info-list">
                  <span>
                    <i className="fa fa-map-signs" />
                  </span>
                  <h5>Location</h5>
                  <p>
                    {" "}
                    Dreamguy's Technologies
                    <br /> 3864 Quiet Valley Lane,
                    <br /> Sherman Oaks,
                    <br /> California, 91403
                  </p>
                </div>
                <div className="info-list">
                  <p className="text-truncate">
                    {" "}
                    818-978-7102
                    <br />{" "}
                    <Link
                      to="mailto:danielporter@example.com"
                      title="danielporter@example.com"
                    >
                      danielporter@example.com
                    </Link>
                    <br />{" "}
                    <Link
                      to="https://www.example.com"
                      target="_blank"
                      title="https://www.example.com"
                    >
                      https://www.example.com
                    </Link>
                  </p>
                </div>
                <div className="info-list text-center">
                  <Link className="app-ends" to="#">
                    Application ends in 2d 7h 6m
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Edit Job Modal */}
        <div id="edit_job" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <button type="button" className="close" data-bs-dismiss="modal">
              ×
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Job</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Job Title</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Web Developer"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Department</label>
                        <select className="select">
                          <option>-</option>
                          <option>Web Development</option>
                          <option>Application Development</option>
                          <option>IT Management</option>
                          <option>Accounts Management</option>
                          <option>Support Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Job Location</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="California"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>No of Vacancies</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={5}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Experience</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="2 Years"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Age</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Salary From</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="32k"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Salary To</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="38k"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Job Type</label>
                        <select className="select">
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Internship</option>
                          <option>Temporary</option>
                          <option>Remote</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Status</label>
                        <select className="select">
                          <option>Open</option>
                          <option>Closed</option>
                          <option>Cancelled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Start Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate1}
                            onChange={handleDateChange1}
                            type="text"
                            className="form-control datetimepicker"
                            defaultValue="3 Mar 2019"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Expired Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate2}
                            onChange={handleDateChange2}
                            type="text"
                            className="form-control datetimepicker"
                            defaultValue="31 May 2019"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={""} />
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
        </div>
        {/* /Edit Job Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Jobdetails;
