/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { DefaultEditor } from "react-simple-wysiwyg";
import { Link } from "react-router-dom";
import Editproject from "../../../_components/modelbox/Editproject";
import Offcanvas from "../../../Entryfile/offcanvance";

import "../../index.css";
import {
  Avatar_16,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_01,
} from "../../../Entryfile/imagepath";

const Projects = () => {
  const [html, setHtml] = React.useState("my <b>HTML</b>");
  const [focused, setFocused] = useState(false);
  const [focused1, setFocused1] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function onChange(e) {
    setHtml(e.target.value);
  }
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
          <title>Projects - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Projects</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Projects</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#create_project">
                  <i className="fa fa-plus" /> Create Project
                </Link>
                <div className="view-icons">
                  <Link
                    to="/app/projects/project_dashboard"
                    className="grid-view btn btn-link active mx-2">
                    <i className="fa fa-th" />
                  </Link>
                  <Link
                    to="/app/projects/projects-list"
                    className="list-view btn btn-link">
                    <i className="fa fa-bars" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focused
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }>
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <label className="focus-label">Project Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focused1
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }>
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused1(true)}
                  onBlur={() => setFocused1(false)}
                />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option>Select Roll</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Android Developer</option>
                  <option>Ios Developer</option>
                </select>
                <label className="focus-label">Designation</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* Search Filter */}
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown dropdown-action profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_project">
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_project">
                        <i className="fa fa-trash m-r-5" /> Delete
                      </Link>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <Link to="/app/projects/projects-view">
                      Office Management
                    </Link>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">1</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">9</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </Link>
                      </li>
                      <li className="dropdown avatar-dropdown">
                        <Link
                          to="#"
                          className="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          +15
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="avatar-group">
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_02} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_09} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_10} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_05} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_11} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_12} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_13} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_01} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_16} />
                            </Link>
                          </div>
                          <div className="avatar-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">Previous</span>
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">Next</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress <span className="text-success float-end">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      data-bs-toggle="tooltip"
                      title="40%"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown dropdown-action profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_project">
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_project">
                        <i className="fa fa-trash m-r-5" /> Delete
                      </Link>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <Link to="/app/projects/projects-view">
                      Project Management
                    </Link>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">2</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </Link>
                      </li>
                      <li className="dropdown avatar-dropdown">
                        <Link
                          to="#"
                          className="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          +15
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="avatar-group">
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_02} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_09} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_10} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_05} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_11} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_12} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_13} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_01} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_16} />
                            </Link>
                          </div>
                          <div className="avatar-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">Previous</span>
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">Next</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress <span className="text-success float-end">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      data-bs-toggle="tooltip"
                      title="40%"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown dropdown-action profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_project">
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_project">
                        <i className="fa fa-trash m-r-5" /> Delete
                      </Link>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <Link to="/app/projects/projects-view">
                      Video Calling App
                    </Link>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">3</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">3</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </Link>
                      </li>
                      <li className="dropdown avatar-dropdown">
                        <Link
                          to="#"
                          className="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          +15
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="avatar-group">
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_02} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_09} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_10} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_05} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_11} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_12} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_13} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_01} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_16} />
                            </Link>
                          </div>
                          <div className="avatar-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">Previous</span>
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">Next</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress <span className="text-success float-end">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      data-bs-toggle="tooltip"
                      title="40%"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown dropdown-action profile-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="material-icons">more_vert</i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_project">
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_project">
                        <i className="fa fa-trash m-r-5" /> Delete
                      </Link>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <Link to="/app/projects/projects-view">
                      Hospital Administration
                    </Link>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">12</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">4</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown gallery of type and
                    scrambled it..
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </Link>
                      </li>
                      <li className="dropdown avatar-dropdown">
                        <Link
                          to="#"
                          className="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          +15
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="avatar-group">
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_02} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_09} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_10} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_05} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_11} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_12} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_13} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_01} />
                            </Link>
                            <Link className="avatar avatar-xs" to="#">
                              <img alt="" src={Avatar_16} />
                            </Link>
                          </div>
                          <div className="avatar-pagination">
                            <ul className="pagination">
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Previous">
                                  <span aria-hidden="true">«</span>
                                  <span className="sr-only">Previous</span>
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link
                                  className="page-link"
                                  to="#"
                                  aria-label="Next">
                                  <span aria-hidden="true">»</span>
                                  <span className="sr-only">Next</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress <span className="text-success float-end">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      data-bs-toggle="tooltip"
                      title="40%"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Create Project Modal */}
        <div
          id="create_project"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Project</h5>
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
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Project Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Client</label>
                        <select className="select">
                          <option>Global Technologies</option>
                          <option>Delta Infotech</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Start Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate1}
                            onChange={handleDateChange1}
                            className="form-control datetimepicker"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>End Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate2}
                            onChange={handleDateChange2}
                            className="form-control datetimepicker"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="input-block">
                        <label>Rate</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="input-block">
                        <label>&nbsp;</label>
                        <select className="select">
                          <option>Hourly</option>
                          <option>Fixed</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Priority</label>
                        <select className="select">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Add Project Leader</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Team Leader</label>
                        <div className="project-members">
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Jeffery Lalor"
                            className="avatar">
                            <img src={Avatar_16} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Add Team</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>Team Members</label>
                        <div className="project-members">
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="John Doe"
                            className="avatar">
                            <img src={Avatar_16} alt="" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Richard Miles"
                            className="avatar">
                            <img src={Avatar_09} alt="" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="John Smith"
                            className="avatar">
                            <img src={Avatar_10} alt="" />
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="tooltip"
                            title="Mike Litorus"
                            className="avatar">
                            <img src={Avatar_05} alt="" />
                          </Link>
                          <span className="all-team">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Description</label>
                    <DefaultEditor value={html} onChange={onChange} />
                  </div>
                  <div className="input-block">
                    <label>Upload Files</label>
                    <input className="form-control" type="file" />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Create Project Modal */}
        {/* Edit Project Modal */}
        <Editproject />
        {/* /Edit Project Modal */}
        {/* Delete Project Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_project"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Project</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link to="" className="btn btn-primary continue-btn">
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to=""
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Project Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Projects;
