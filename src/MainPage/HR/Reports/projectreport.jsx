/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  Avatar_19,
  Avatar_29,
} from "../../../Entryfile/imagepath";
import Offcanvas from "../../../Entryfile/offcanvance";

const ProjectReport = () => {
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
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Project Reports - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Project Reports</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Project Reports</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Content Starts */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <select className="form-control floating select">
                    <option>Name1</option>
                    <option>Name2</option>
                  </select>
                </div>
                <label className="focus-label">Project Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <select className="form-control floating select">
                    <option>Active</option>
                    <option>Pending</option>
                  </select>
                </div>
                <label className="focus-label">Status</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Title</th>
                      <th>Client Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/app/projects/projects-view">
                          Hospital Administration
                        </Link>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_19} />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Global Technologies
                          </Link>
                        </h2>
                      </td>
                      <td>9 Jan 2021</td>
                      <td>10 Apr 2021</td>
                      <td>
                        <div className="dropdown action-label">
                          <Link
                            to="#"
                            className="btn btn-white btn-sm btn-rounded">
                            <i className="far fa-dot-circle text-success" />{" "}
                            Active{" "}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <ul className="team-members">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="John Doe">
                              <img src={Avatar_02} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="Richard Miles">
                              <img src={Avatar_09} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="John Smith">
                              <img src={Avatar_10} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="Mike Litorus">
                              <img src={Avatar_05} />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="all-users">
                              +15
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/app/projects/projects-view">
                          Office Management
                        </Link>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_29} />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Delta Infotech
                          </Link>
                        </h2>
                      </td>
                      <td>10 Dec 2021</td>
                      <td>2 May 2021</td>
                      <td>
                        <div className="action-label">
                          <Link
                            to="#"
                            className="btn btn-white btn-sm btn-rounded">
                            <i className="far fa-dot-circle text-success" />{" "}
                            Active{" "}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <ul className="team-members text-nowrap">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="John Doe">
                              <img src={Avatar_02} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="Richard Miles">
                              <img src={Avatar_09} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="John Smith">
                              <img src={Avatar_10} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="tooltip"
                              data-original-title="Mike Litorus">
                              <img src={Avatar_05} />
                            </Link>
                          </li>
                          <li className="dropdown avatar-dropdown">
                            <Link
                              to="#"
                              className="all-users dropdown-toggle"
                              aria-expanded="false">
                              +15
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <div className="avatar-group">
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_02} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_09} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_10} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_05} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_11} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_12} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_13} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_01} />
                                </Link>
                                <Link className="avatar avatar-xs" to="#">
                                  <img src={Avatar_16} />
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
      <Offcanvas />
    </>
  );
};

export default ProjectReport;
