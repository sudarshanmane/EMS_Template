import React from "react";
import { Link } from "react-router-dom";
import {
    User,
    Avatar_02,
    Avatar_05,
    Avatar_09,
    Avatar_10,
    Avatar_16,
    Avatar_21,
    eye,
  } from "../../../Entryfile/imagepath";

export default function Projects() {
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="dropdown profile-action">
                <Link
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  className="action-icon dropdown-toggle"
                  to="#"
                >
                  {/* <i className="material-icons">more_vert</i> */}
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link
                    data-bs-target="#edit_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-pencil m-r-5" /> Edit
                  </Link>
                  <Link
                    data-bs-target="#delete_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-trash m-r-5" /> Delete
                  </Link>
                </div>
              </div>
              <h4 className="project-title">
                <Link to="/app/projects/projects-view">Office Management</Link>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">1</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">9</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img alt="img" src={Avatar_16} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                      <img alt="img" src={Avatar_02} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img alt="img" src={Avatar_09} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Smith">
                      <img alt="img" src={Avatar_10} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Mike Litorus">
                      <img alt="img" src={Avatar_05} />
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
                Progress <span className="text-success float-end">40%</span>
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
                  to="#"
                >
                  <i className="material-icons">more_vert</i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link
                    data-bs-target="#edit_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-pencil m-r-5" /> Edit
                  </Link>
                  <Link
                    data-bs-target="#delete_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-trash m-r-5" /> Delete
                  </Link>
                </div>
              </div>
              <h4 className="project-title">
                <Link to="/app/projects/projects-view">Project Management</Link>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">2</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">5</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img alt="img" src={Avatar_16} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                      <img alt="img" src={Avatar_02} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img alt="img" src={Avatar_09} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Smith">
                      <img alt="img" src={Avatar_10} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Mike Litorus">
                      <img alt="img" src={Avatar_05} />
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
                Progress <span className="text-success float-end">40%</span>
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
                  to="#"
                >
                  <i className="material-icons">more_vert</i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link
                    data-bs-target="#edit_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-pencil m-r-5" /> Edit
                  </Link>
                  <Link
                    data-bs-target="#delete_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-trash m-r-5" /> Delete
                  </Link>
                </div>
              </div>
              <h4 className="project-title">
                <Link to="/app/projects/projects-view">Video Calling App</Link>
              </h4>
              <small className="block text-ellipsis m-b-15">
                <span className="text-xs">3</span>{" "}
                <span className="text-muted">open tasks, </span>
                <span className="text-xs">3</span>{" "}
                <span className="text-muted">tasks completed</span>
              </small>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown printer took a galley of type and
                scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img alt="img" src={Avatar_16} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                      <img alt="img" src={Avatar_02} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img alt="img" src={Avatar_09} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Smith">
                      <img alt="img" src={Avatar_10} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Mike Litorus">
                      <img alt="img" src={Avatar_05} />
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
                Progress <span className="text-success float-end">40%</span>
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
                  to="#"
                >
                  <i className="material-icons">more_vert</i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link
                    data-bs-target="#edit_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
                    <i className="fa fa-pencil m-r-5" /> Edit
                  </Link>
                  <Link
                    data-bs-target="#delete_project"
                    data-bs-toggle="modal"
                    to="#"
                    className="dropdown-item"
                  >
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. When an unknown scrambled it...
              </p>
              <div className="pro-deadline m-b-15">
                <div className="sub-title">Deadline:</div>
                <div className="text-muted">17 Apr 2019</div>
              </div>
              <div className="project-members m-b-15">
                <div>Project Leader :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Jeffery Lalor">
                      <img alt="img" src={Avatar_16} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="project-members m-b-15">
                <div>Team :</div>
                <ul className="team-members">
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Doe">
                      <img alt="img" src={Avatar_02} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Richard Miles">
                      <img alt="img" src={Avatar_09} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="John Smith">
                      <img alt="img" src={Avatar_10} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tooltip" title="Mike Litorus">
                      <img alt="img" src={Avatar_05} />
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
                Progress <span className="text-success float-end">40%</span>
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
    </>
  );
}
