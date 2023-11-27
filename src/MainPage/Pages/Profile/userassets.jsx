/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
  icon01,
  icon02,
  icon03,
  icon05,
  img1,
  img2,
  img3,
  img4,
  key,
} from "../../../Entryfile/imagepath";
import { keyboard } from "../../../Entryfile/imagepath";
import Offcanvas from "../../../Entryfile/offcanvance";

const UserAssets = () => {
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
          <title>Employee Profile - HRMS admin Template</title>
          <meta name="description" content="Reactify Blank Page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <Link to="#">
                          <img alt="" src={Avatar_02} />
                        </Link>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                            <h6 className="text-muted">UI/UX Design Team</h6>
                            <small className="text-muted">Web Designer</small>
                            <div className="staff-id">
                              Employee ID : FT-0001
                            </div>
                            <div className="small doj text-muted">
                              Date of Join : 1st Jan 2013
                            </div>
                            <div className="staff-msg">
                              <Link
                                onClick={() =>
                                  localStorage.setItem("minheight", "true")
                                }
                                className="btn btn-custom"
                                to="/conversation/chat">
                                Send Message
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                <Link to="#">9876543210</Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Email:</div>
                              <div className="text">
                                <Link to="#">johndoe@example.com</Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">24th July</div>
                            </li>
                            <li>
                              <div className="title">Address:</div>
                              <div className="text">
                                1861 Bayonne Ave, Manchester Township, NJ, 08759
                              </div>
                            </li>
                            <li>
                              <div className="title">Gender:</div>
                              <div className="text">Male</div>
                            </li>
                            <li>
                              <div className="title">Reports to:</div>
                              <div className="text">
                                <div className="avatar-box">
                                  <div className="avatar avatar-xs">
                                    <img src={Avatar_16} alt="" />
                                  </div>
                                </div>
                                <Link to="/app/profile/employee-profile">
                                  Jeffery Lalor
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-edit">
                      <Link
                        data-bs-target="#profile_info"
                        data-bs-toggle="modal"
                        className="edit-icon"
                        to="#">
                        <i className="fa fa-pencil" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <Link
                      to="#emp_profile"
                      data-bs-toggle="tab"
                      className="nav-link">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#emp_projects"
                      data-bs-toggle="tab"
                      className="nav-link">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#bank_statutory"
                      data-bs-toggle="tab"
                      className="nav-link">
                      Bank &amp; Statutory{" "}
                      <small className="text-danger">(Admin Only)</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#user_assets"
                      data-bs-toggle="tab"
                      className="nav-link active">
                      Assets
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {/* Profile Info Tab */}
            <div id="emp_profile" className="pro-overview tab-pane fade show">
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Personal Informations{" "}
                        <Link
                          to="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#personal_info_modal">
                          <i className="fa fa-pencil" />
                        </Link>
                      </h3>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Passport No.</div>
                          <div className="text">9876543210</div>
                        </li>
                        <li>
                          <div className="title">Passport Exp Date.</div>
                          <div className="text">9876543210</div>
                        </li>
                        <li>
                          <div className="title">Tel</div>
                          <div className="text">
                            <Link to="#">9876543210</Link>
                          </div>
                        </li>
                        <li>
                          <div className="title">Nationality</div>
                          <div className="text">Indian</div>
                        </li>
                        <li>
                          <div className="title">Religion</div>
                          <div className="text">Christian</div>
                        </li>
                        <li>
                          <div className="title">Marital status</div>
                          <div className="text">Married</div>
                        </li>
                        <li>
                          <div className="title">Employment of spouse</div>
                          <div className="text">No</div>
                        </li>
                        <li>
                          <div className="title">No. of children</div>
                          <div className="text">2</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Emergency Contact{" "}
                        <Link
                          to="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#emergency_contact_modal">
                          <i className="fa fa-pencil" />
                        </Link>
                      </h3>
                      <h5 className="section-title">Primary</h5>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Name</div>
                          <div className="text">John Doe</div>
                        </li>
                        <li>
                          <div className="title">Relationship</div>
                          <div className="text">Father</div>
                        </li>
                        <li>
                          <div className="title">Phone </div>
                          <div className="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                      <hr />
                      <h5 className="section-title">Secondary</h5>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Name</div>
                          <div className="text">Karen Wills</div>
                        </li>
                        <li>
                          <div className="title">Relationship</div>
                          <div className="text">Brother</div>
                        </li>
                        <li>
                          <div className="title">Phone </div>
                          <div className="text">9876543210, 9876543210</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">Bank information</h3>
                      <ul className="personal-info">
                        <li>
                          <div className="title">Bank name</div>
                          <div className="text">ICICI Bank</div>
                        </li>
                        <li>
                          <div className="title">Bank account No.</div>
                          <div className="text">159843014641</div>
                        </li>
                        <li>
                          <div className="title">IFSC Code</div>
                          <div className="text">ICI24504</div>
                        </li>
                        <li>
                          <div className="title">PAN No</div>
                          <div className="text">TC000Y56</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Family Informations{" "}
                        <Link
                          to="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#family_info_modal">
                          <i className="fa fa-pencil" />
                        </Link>
                      </h3>
                      <div className="table-responsive">
                        <table className="table table-nowrap">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Leo</td>
                              <td>Brother</td>
                              <td>Feb 16th, 2019</td>
                              <td>9876543210</td>
                              <td className="text-end">
                                <div className="dropdown dropdown-action">
                                  <Link
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    className="action-icon dropdown-toggle"
                                    to="#">
                                    <i className="material-icons">more_vert</i>
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <Link to="#" className="dropdown-item">
                                      <i className="fa fa-pencil m-r-5" /> Edit
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <i className="fa fa-trash m-r-5" /> Delete
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations{" "}
                        <Link
                          to="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#education_info">
                          <i className="fa fa-pencil" />
                        </Link>
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <Link to="/" className="name">
                                  International College of Arts and Science (UG)
                                </Link>
                                <div>Bsc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <Link to="/" className="name">
                                  International College of Arts and Science (PG)
                                </Link>
                                <div>Msc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Experience{" "}
                        <Link
                          to="#"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#experience_info">
                          <i className="fa fa-pencil" />
                        </Link>
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <Link to="/" className="name">
                                  Web Designer at Zen Corporation
                                </Link>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <Link to="/" className="name">
                                  Web Designer at Ron-tech
                                </Link>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <Link to="/" className="name">
                                  Web Designer at Dalt Technology
                                </Link>
                                <span className="time">
                                  Jan 2013 - Present (5 years 2 months)
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Profile Info Tab */}
            {/* Projects Tab */}
            <div className="tab-pane fade" id="emp_projects">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <Link
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          to="#">
                          <i className="material-icons">more_vert</i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </Link>
                          <Link
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
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
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
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
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              title="John Doe">
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
                          <li>
                            <Link to="#" className="all-users">
                              +15
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          style={{ width: "40%" }}
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          className="progress-bar bg-success"
                          data-original-title="40%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <Link
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          to="#">
                          <i className="material-icons">more_vert</i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </Link>
                          <Link
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
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
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
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
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              title="John Doe">
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
                          <li>
                            <Link to="#" className="all-users">
                              +15
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          style={{ width: "40%" }}
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          className="progress-bar bg-success"
                          data-original-title="40%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <Link
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          to="#">
                          <i className="material-icons">more_vert</i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </Link>
                          <Link
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
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
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
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
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              title="John Doe">
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
                          <li>
                            <Link to="#" className="all-users">
                              +15
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          style={{ width: "40%" }}
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          className="progress-bar bg-success"
                          data-original-title="40%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown profile-action">
                        <Link
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          className="action-icon dropdown-toggle"
                          to="#">
                          <i className="material-icons">more_vert</i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            data-bs-target="#edit_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </Link>
                          <Link
                            data-bs-target="#delete_project"
                            data-bs-toggle="modal"
                            to="#"
                            className="dropdown-item">
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
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
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
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              title="John Doe">
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
                          <li>
                            <Link to="#" className="all-users">
                              +15
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-end">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          style={{ width: "40%" }}
                          data-bs-toggle="tooltip"
                          role="progressbar"
                          className="progress-bar bg-success"
                          data-original-title="40%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Projects Tab */}
            {/* Bank Statutory Tab */}
            <div className="tab-pane fade" id="bank_statutory">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"> Basic Salary Information</h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Salary basis <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select salary basis type</option>
                            <option>Hourly</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Salary amount{" "}
                            <small className="text-muted">per month</small>
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">$</span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type your salary amount"
                              defaultValue={0.0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">Payment type</label>
                          <select className="select">
                            <option>Select payment type</option>
                            <option>Bank transfer</option>
                            <option>Check</option>
                            <option>Cash</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title"> PF Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            PF contribution
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            PF No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            defaultValue="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            defaultValue="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title"> ESI Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            ESI contribution
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            ESI No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Employee ESI rate
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">
                            Additional rate{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="input-block">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            defaultValue="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="user_assets"
              className="pro-overview tab-pane fade show active">
              <div className="user_asset">
                <div className="assign-head">
                  <div className="assign-content">
                    <img src={keyboard} alt="img" />
                    <h6>Dell Keyboard</h6>
                  </div>
                  <div className="assign-content">
                    <Link
                      to="#"
                      className="btn btn-assign"
                      data-bs-toggle="modal"
                      data-bs-target="#raise-issue">
                      <i className="fas fa-hand-paper" /> Raise Issue
                    </Link>
                  </div>
                </div>
                <div className="card asset-box">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5>Asset Info</h5>
                        <div className="asset-info">
                          <div className="asset-info-img">
                            <img src={key} alt />
                          </div>
                          <div className="asset-info-det">
                            <h6>Wired Keyboard</h6>
                            <p>SE5214 - 2022 2022 2022 </p>
                            <ul>
                              <li>
                                Type <span>Keybaord</span>
                              </li>
                              <li>
                                Serial Number <span>3647952145678</span>
                              </li>
                              <li>
                                Brand <span>Dell</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="assets-image">
                          <h5>Asset Images</h5>
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
                      <div className="col-lg-5">
                        <div className="asset-history">
                          <h5>Asset Images</h5>
                          <ul>
                            <li>
                              <div className="aset-img">
                                <img src={icon01} alt="img" />
                              </div>
                              <div className="asset-inf">
                                <h6>Vendor</h6>
                                <p>Compusoft Systems Ltd.,</p>
                              </div>
                            </li>
                            <li>
                              <div className="aset-img">
                                <img src={icon03} alt="img" />
                              </div>
                              <div className="asset-inf">
                                <h6>Category</h6>
                                <p>Computer</p>
                              </div>
                            </li>
                            <li>
                              <div className="aset-img">
                                <img src={icon05} alt="img" />
                              </div>
                              <div className="asset-inf">
                                <h6>Cost</h6>
                                <p>₹ 1,200</p>
                              </div>
                            </li>
                            <li>
                              <div className="aset-img">
                                <img src={icon05} alt="img" />
                              </div>
                              <div className="asset-inf">
                                <h6>Location</h6>
                                <p>
                                  123 Street, Vivekanandhar Road, Coimbatore -
                                  32
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="aset-img">
                                <img src={icon02} alt="img" />
                              </div>
                              <div className="asset-inf">
                                <h6>Warranty</h6>
                                <p>From 11-12-2022 - To 11-12-2022</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /Bank Statutory Tab */}
          </div>
        </div>
        {/* /Page Content */}
        {/* Profile Modal */}
        <div
          id="profile_info"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile Information</h5>
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
                    <div className="col-md-12">
                      <div className="profile-img-wrap edit-img">
                        <img
                          className="inline-block"
                          src={Avatar_02}
                          alt="user"
                        />
                        <div className="fileupload btn">
                          <span className="btn-text">edit</span>
                          <input className="upload" type="file" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="John"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Doe"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>Birth Date</label>
                            <div>
                              <input
                                className="form-control datetimepicker"
                                type="date"
                                defaultValue="05/06/1985"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>Gender</label>
                            <select className="select form-control">
                              <option value="male selected">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="4487 Snowbird Lane"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="New York"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="United States"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Pin Code</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={10523}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="631-889-3206"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Department <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Reports To <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>-</option>
                          <option>Wilmer Deluna</option>
                          <option>Lesley Grauer</option>
                          <option>Jeffery Lalor</option>
                        </select>
                      </div>
                    </div>
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
        {/* /Profile Modal */}
        {/* Personal Info Modal */}
        <div
          id="personal_info_modal"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Personal Information</h5>
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Passport No</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Passport Expiry Date</label>
                        <div>
                          <input
                            className="form-control datetimepicker"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Tel</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Nationality <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Religion</label>
                        <div>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Marital status <span className="text-danger">*</span>
                        </label>
                        <select className="select form-control">
                          <option>-</option>
                          <option>Single</option>
                          <option>Married</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Employment of spouse</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>No. of children </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
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
        {/* /Personal Info Modal */}
        {/* Family Info Modal */}
        <div
          id="family_info_modal"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Family Informations</h5>
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
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Family Member{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Relationship{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Phone <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Relationship{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Date of birth{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label>
                                Phone <span className="text-danger">*</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <Link to="#">
                            <i className="fa fa-plus-circle" /> Add More
                          </Link>
                        </div>
                      </div>
                    </div>
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
        {/* /Family Info Modal */}
        {/* Emergency Contact Modal */}
        <div
          id="emergency_contact_modal"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Personal Information</h5>
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
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Primary Contact</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>Phone 2</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Primary Contact</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>Phone 2</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
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
        {/* /Emergency Contact Modal */}
        {/* Education Modal */}
        <div
          id="education_info"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> Education Informations</h5>
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
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Oxford University"
                                className="form-control floating"
                              />
                              <label className="focus-label">Institution</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Subject</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <div>
                                <input
                                  type="date"
                                  defaultValue="01/06/2002"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Starting Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <div>
                                <input
                                  type="date"
                                  defaultValue="31/05/2006"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Complete Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="BE Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Degree</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Grade A"
                                className="form-control floating"
                              />
                              <label className="focus-label">Grade</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Education Informations{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Oxford University"
                                className="form-control floating"
                              />
                              <label className="focus-label">Institution</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Subject</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <div>
                                <input
                                  type="date"
                                  defaultValue="01/06/2002"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Starting Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <div>
                                <input
                                  type="date"
                                  defaultValue="31/05/2006"
                                  className="form-control floating datetimepicker"
                                />
                              </div>
                              <label className="focus-label">
                                Complete Date
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="BE Computer Science"
                                className="form-control floating"
                              />
                              <label className="focus-label">Degree</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus focused">
                              <input
                                type="text"
                                defaultValue="Grade A"
                                className="form-control floating"
                              />
                              <label className="focus-label">Grade</label>
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <Link to="#">
                            <i className="fa fa-plus-circle" /> Add More
                          </Link>
                        </div>
                      </div>
                    </div>
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
        {/* /Education Modal */}
        {/* Experience Modal */}
        <div
          id="experience_info"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Experience Informations</h5>
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
                  <div className="form-scroll">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Experience Informations{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="Digital Devlopment Inc"
                              />
                              <label className="focus-label">
                                Company Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="United States"
                              />
                              <label className="focus-label">Location</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="Web Developer"
                              />
                              <label className="focus-label">
                                Job Position
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <div>
                                <input
                                  type="date"
                                  className="form-control floating datetimepicker"
                                  defaultValue="01/07/2007"
                                />
                              </div>
                              <label className="focus-label">Period From</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <div>
                                <input
                                  type="date"
                                  className="form-control floating datetimepicker"
                                  defaultValue="08/06/2018"
                                />
                              </div>
                              <label className="focus-label">Period To</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">
                          Experience Informations{" "}
                          <Link to="#" className="delete-icon">
                            <i className="fa fa-trash" />
                          </Link>
                        </h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="Digital Devlopment Inc"
                              />
                              <label className="focus-label">
                                Company Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="United States"
                              />
                              <label className="focus-label">Location</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <input
                                type="text"
                                className="form-control floating"
                                defaultValue="Web Developer"
                              />
                              <label className="focus-label">
                                Job Position
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <div>
                                <input
                                  type="date"
                                  className="form-control floating datetimepicker"
                                  defaultValue="01/07/2007"
                                />
                              </div>
                              <label className="focus-label">Period From</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block form-focus">
                              <div>
                                <input
                                  type="date"
                                  className="form-control floating datetimepicker"
                                  defaultValue="08/06/2018"
                                />
                              </div>
                              <label className="focus-label">Period To</label>
                            </div>
                          </div>
                        </div>
                        <div className="add-more">
                          <Link to="#">
                            <i className="fa fa-plus-circle" /> Add More
                          </Link>
                        </div>
                      </div>
                    </div>
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
        {/* /Experience Modal */}

        <div id="raise-issue" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Raise Issue</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  arialabel="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Description</label>
                        <textarea rows={4} className="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section mt-0">
                    <button className="btn btn-primary submit-btn w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default UserAssets;
