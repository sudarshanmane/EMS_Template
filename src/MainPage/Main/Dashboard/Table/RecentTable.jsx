import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RecentTable = () => {
  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Recent Projects</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table custom-table mb-0">
              <thead>
                <tr>
                  <th>Project Name </th>
                  <th>Progress</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h2>
                      <Link to="/app/projects/projects-view">
                        Office Management
                      </Link>
                    </h2>
                    <small className="block text-ellipsis">
                      <span>1</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span>9</span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </td>
                  <td>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="65%"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>
                      <Link to="/app/projects/projects-view">
                        Project Management
                      </Link>
                    </h2>
                    <small className="block text-ellipsis">
                      <span>2</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span>5</span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </td>
                  <td>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="15%"
                        style={{ width: "15%" }}
                      />
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>
                      <Link to="/app/projects/projects-view">
                        Video Calling App
                      </Link>
                    </h2>
                    <small className="block text-ellipsis">
                      <span>3</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span>3</span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </td>
                  <td>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="49%"
                        style={{ width: "49%" }}
                      />
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>
                      <Link to="/app/projects/projects-view">
                        Hospital Administration
                      </Link>
                    </h2>
                    <small className="block text-ellipsis">
                      <span>12</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span>4</span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </td>
                  <td>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="88%"
                        style={{ width: "88%" }}
                      />
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-trash m-r-5" /> Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>
                      <Link to="/app/projects/projects-view">
                        Digital Marketplace
                      </Link>
                    </h2>
                    <small className="block text-ellipsis">
                      <span>7</span>{" "}
                      <span className="text-muted">open tasks, </span>
                      <span>14</span>{" "}
                      <span className="text-muted">tasks completed</span>
                    </small>
                  </td>
                  <td>
                    <div className="progress progress-xs progress-striped">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-bs-toggle="tooltip"
                        title="100%"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="dropdown dropdown-action">
                      <Link
                        to="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="material-icons">more_vert</i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </Link>
                        <Link className="dropdown-item" to="#">
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
        <div className="card-footer">
          <Link to="/app/projects/project_dashboard">View all projects</Link>
        </div>
      </div>
    </div>
  );
};

export default RecentTable;
