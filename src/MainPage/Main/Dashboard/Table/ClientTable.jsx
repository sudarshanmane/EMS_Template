import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Avatar_06,
  Avatar_07,
  Avatar_14,
  Avatar_19,
} from "../../../../Entryfile/imagepath";

const ClientTable = () => {
  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Clients</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table custom-table mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar">
                        <img alt="" src={Avatar_19} />
                      </Link>
                      <Link to="/app/profile/client-profile">
                        Barry Cuda <span>CEO</span>
                      </Link>
                    </h2>
                  </td>
                  <td>barrycuda@example.com</td>
                  <td>
                    <div className="dropdown action-label">
                      <Link
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-dot-circle text-success" /> Active
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" />{" "}
                          Active
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Inactive
                        </Link>
                      </div>
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
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar">
                        <img alt="" src={Avatar_19} />
                      </Link>
                      <Link to="/app/profile/client-profile">
                        Tressa Wexler <span>Manager</span>
                      </Link>
                    </h2>
                  </td>
                  <td>tressawexler@example.com</td>
                  <td>
                    <div className="dropdown action-label">
                      <Link
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-dot-circle text-danger" /> Inactive
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" />{" "}
                          Active
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Inactive
                        </Link>
                      </div>
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
                    <h2 className="table-avatar">
                      <Link to="/app/profile/client-profile" className="avatar">
                        <img alt="" src={Avatar_07} />
                      </Link>
                      <Link to="/app/profile/client-profile">
                        Ruby Bartlett <span>CEO</span>
                      </Link>
                    </h2>
                  </td>
                  <td>rubybartlett@example.com</td>
                  <td>
                    <div className="dropdown action-label">
                      <Link
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-dot-circle text-danger" /> Inactive
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" />{" "}
                          Active
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Inactive
                        </Link>
                      </div>
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
                    <h2 className="table-avatar">
                      <Link to="/app/profile/client-profile" className="avatar">
                        <img alt="" src={Avatar_06} />
                      </Link>
                      <Link to="/app/profile/client-profile">
                        {" "}
                        Misty Tison <span>CEO</span>
                      </Link>
                    </h2>
                  </td>
                  <td>mistytison@example.com</td>
                  <td>
                    <div className="dropdown action-label">
                      <Link
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-dot-circle text-success" /> Active
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" />{" "}
                          Active
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Inactive
                        </Link>
                      </div>
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
                    <h2 className="table-avatar">
                      <Link to="/app/profile/client-profile" className="avatar">
                        <img alt="" src={Avatar_14} />
                      </Link>
                      <Link to="/app/profile/client-profile">
                        {" "}
                        Daniel Deacon <span>CEO</span>
                      </Link>
                    </h2>
                  </td>
                  <td>danieldeacon@example.com</td>
                  <td>
                    <div className="dropdown action-label">
                      <Link
                        className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-dot-circle text-danger" /> Inactive
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-success" />{" "}
                          Active
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="far fa-dot-circle text-danger" />{" "}
                          Inactive
                        </Link>
                      </div>
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
          <Link to="/app/employees/clients">View all clients</Link>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
