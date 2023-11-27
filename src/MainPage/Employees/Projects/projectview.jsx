/* eslint-disable no-undef */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_16,
  Avatar_02,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_01,
  PlaceHolder,
} from "../../../Entryfile/imagepath";
import Editproject from "../../../_components/modelbox/Editproject";
import Offcanvas from "../../../Entryfile/offcanvance";

const ProjectView = () => {
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });
  return (
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
              <h3 className="page-title">Hospital Admin</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Project</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <Link
                to="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#edit_project">
                <i className="fa fa-plus" /> Edit Project
              </Link>
              <Link
                to="/app/projects/task-board"
                className="btn btn-white float-end m-r-10"
                data-bs-toggle="tooltip"
                title="Task Board">
                <i className="fa fa-bars" />
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">Hospital Administration</h5>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">2</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel elit neque. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.
                  Vestibulum sollicitudin libero vitae est consectetur, a
                  molestie tortor consectetur. Aenean tincidunt interdum ipsum,
                  id pellentesque diam suscipit ut. Vivamus massa mi, fermentum
                  eget neque eget, imperdiet tristique lectus. Proin at purus ut
                  sem pellentesque tempor sit amet ut lectus. Sed orci augue,
                  placerat et pretium ac, hendrerit in felis. Integer
                  scelerisque libero non metus commodo, et hendrerit diam
                  aliquet. Proin tincidunt porttitor ligula, a tincidunt orci
                  pellentesque nec. Ut ultricies maximus nulla id consequat.
                  Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                  neque id massa porttitor, a pretium velit vehicula. Morbi
                  volutpat tincidunt urna, vel ullamcorper ligula fermentum at.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  vel elit neque. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.
                  Vestibulum sollicitudin libero vitae est consectetur, a
                  molestie tortor consectetur. Aenean tincidunt interdum ipsum,
                  id pellentesque diam suscipit ut. Vivamus massa mi, fermentum
                  eget neque eget, imperdiet tristique lectus. Proin at purus ut
                  sem pellentesque tempor sit amet ut lectus. Sed orci augue,
                  placerat et pretium ac, hendrerit in felis. Integer
                  scelerisque libero non metus commodo, et hendrerit diam
                  aliquet. Proin tincidunt porttitor ligula, a tincidunt orci
                  pellentesque nec. Ut ultricies maximus nulla id consequat.
                  Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                  neque id massa porttitor, a pretium velit vehicula. Morbi
                  volutpat tincidunt urna, vel ullamcorper ligula fermentum at.{" "}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded image files</h5>
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded files</h5>
                <ul className="files-list">
                  <li>
                    <div className="files-cont">
                      <div className="file-type">
                        <span className="files-icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </div>
                      <div className="files-info">
                        <span className="file-name text-ellipsis">
                          <Link to="#">
                            AHA Selfcare Mobile Application Test-Cases.xls
                          </Link>
                        </span>
                        <span className="file-author">
                          <Link to="#">John Doe</Link>
                        </span>{" "}
                        <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <Link
                            to=""
                            className="dropdown-toggle btn btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="material-icons">more_horiz</i>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="">
                              Download
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#share_files">
                              Share
                            </Link>
                            <Link className="dropdown-item" to="">
                              Delete
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="files-cont">
                      <div className="file-type">
                        <span className="files-icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </div>
                      <div className="files-info">
                        <span className="file-name text-ellipsis">
                          <Link to="#">
                            AHA Selfcare Mobile Application Test-Cases.xls
                          </Link>
                        </span>
                        <span className="file-author">
                          <Link to="#">Richard Miles</Link>
                        </span>{" "}
                        <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <Link
                            to=""
                            className="dropdown-toggle btn btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="material-icons">more_horiz</i>
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="">
                              Download
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#share_files">
                              Share
                            </Link>
                            <Link className="dropdown-item" to="">
                              Delete
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-task">
              <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#all_tasks"
                    data-bs-toggle="tab"
                    aria-expanded="true">
                    All Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#pending_tasks"
                    data-bs-toggle="tab"
                    aria-expanded="false">
                    Pending Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#completed_tasks"
                    data-bs-toggle="tab"
                    aria-expanded="false">
                    Completed Tasks
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane show active" id="all_tasks">
                  <div className="task-wrapper">
                    <div className="task-list-container">
                      <div className="task-list-body">
                        <ul id="task-list">
                          <li className="task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span
                                className="task-label"
                                contentEditable="true"
                                suppressContentEditableWarning={true}>
                                Patient appointment booking
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span
                                className="task-label"
                                contentEditable="true"
                                suppressContentEditableWarning={true}>
                                Appointment booking with payment gateway
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="completed task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span className="task-label">
                                Doctor available module
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span
                                className="task-label"
                                contentEditable="true"
                                suppressContentEditableWarning={true}>
                                Patient and Doctor video conferencing
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span
                                className="task-label"
                                contentEditable="true"
                                suppressContentEditableWarning={true}>
                                Private chat module
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                          <li className="task">
                            <div className="task-container">
                              <span className="task-action-btn task-check">
                                <span
                                  className="action-circle large complete-btn"
                                  title="Mark Complete">
                                  <i className="material-icons">check</i>
                                </span>
                              </span>
                              <span
                                className="task-label"
                                contentEditable="true"
                                suppressContentEditableWarning={true}>
                                Patient Profile add
                              </span>
                              <span className="task-action-btn task-btn-right">
                                <span
                                  className="action-circle large"
                                  title="Assign">
                                  <i className="material-icons">person_add</i>
                                </span>
                                <span
                                  className="action-circle large delete-btn"
                                  title="Delete Task">
                                  <i className="material-icons">delete</i>
                                </span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="task-list-footer">
                        <div className="new-task-wrapper">
                          <textarea
                            id="new-task"
                            placeholder="Enter new task here. . ."
                            defaultValue={""}
                          />
                          <span className="error-message hidden">
                            You need to enter a task first
                          </span>
                          <span className="add-new-task-btn btn" id="add-task">
                            Add Task
                          </span>
                          <span className="btn" id="close-task-panel">
                            Close
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="pending_tasks" />
                <div className="tab-pane" id="completed_tasks" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title m-b-15">Project details</h6>
                <table className="table table-striped table-border">
                  <tbody>
                    <tr>
                      <td>Cost:</td>
                      <td className="text-end">$1200</td>
                    </tr>
                    <tr>
                      <td>Total Hours:</td>
                      <td className="text-end">100 Hours</td>
                    </tr>
                    <tr>
                      <td>Created:</td>
                      <td className="text-end">25 Feb, 2019</td>
                    </tr>
                    <tr>
                      <td>Deadline:</td>
                      <td className="text-end">12 Jun, 2019</td>
                    </tr>
                    <tr>
                      <td>Priority:</td>
                      <td className="text-end">
                        <div className="btn-group">
                          <Link
                            to="#"
                            className="badge badge-danger dropdown-toggle"
                            data-bs-toggle="dropdown">
                            Highest{" "}
                          </Link>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#">
                              <i className="far fa-dot-circle text-danger" />{" "}
                              Highest priority
                            </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="far fa-dot-circle text-info" /> High
                              priority
                            </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="far fa-dot-circle text-primary" />{" "}
                              Normal priority
                            </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="far fa-dot-circle text-success" />{" "}
                              Low priority
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Created by:</td>
                      <td className="text-end">
                        <Link to="/app/profile/employee-profile">
                          Barry Cuda
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td className="text-end">Working</td>
                    </tr>
                  </tbody>
                </table>
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
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">
                  Assigned Leader{" "}
                  <button
                    type="button"
                    className="float-end btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#assign_leader">
                    <i className="fa fa-plus" /> Add
                  </button>
                </h6>
                <ul className="list-box">
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_11} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Wilmer Deluna</span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_01} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Lesley Grauer</span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">
                  Assigned users
                  <button
                    type="button"
                    className="float-end btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#assign_user">
                    <i className="fa fa-plus" /> Add
                  </button>
                </h6>
                <ul className="list-box">
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_02} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <div className="clearfix" />
                          <span className="message-content">Web Designer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_09} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles</span>
                          <div className="clearfix" />
                          <span className="message-content">Web Developer</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Assign Leader Modal */}

      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Assign</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Assign Leader Modal */}
      {/* Assign User Modal */}

      <div id="assign_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign the user to this project</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <button className="btn btn-primary">Search</button>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_09} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_10} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <img alt="" src={Avatar_16} />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Assign</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign User Modal */}
      {/* Edit Project Modal */}
      <Editproject />
      {/* /Edit Project Modal */}
      <Offcanvas />
    </div>
  );
};

export default ProjectView;
