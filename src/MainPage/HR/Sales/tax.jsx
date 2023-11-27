/* eslint-disable no-undef */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../Entryfile/offcanvance";

const Taxes = () => {
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
          <title>Taxes - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Taxes</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Taxes</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_tax">
                  <i className="fa fa-plus" /> Add Tax
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tax Name </th>
                      <th>Tax Percentage (%) </th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>VAT</td>
                      <td>14%</td>
                      <td>
                        <div className="dropdown action-label">
                          <Link
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            to="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-dot-circle text-danger" />{" "}
                            Inactive
                          </Link>
                          <div className="dropdown-menu">
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_tax">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_tax">
                              <i className="fa fa-trash m-r-5" /> Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>GST</td>
                      <td>30%</td>
                      <td>
                        <div className="dropdown action-label">
                          <Link
                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            to="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-dot-circle text-success" />{" "}
                            Active
                          </Link>
                          <div className="dropdown-menu">
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
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_tax">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_tax">
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
        {/* /Page Content */}
        {/* Add Tax Modal */}
        <div id="add_tax" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Tax</h5>
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
                  <div className="input-block">
                    <label>
                      Tax Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block">
                    <label>
                      Tax Percentage (%) <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block">
                    <label>
                      Status <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Pending</option>
                      <option>Approved</option>
                    </select>
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
        {/* /Add Tax Modal */}
        {/* Edit Tax Modal */}
        <div id="edit_tax" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Tax</h5>
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
                  <div className="input-block">
                    <label>
                      Tax Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="VAT"
                      type="text"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Tax Percentage (%) <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="14%"
                      type="text"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Status <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Tax Modal */}
        {/* Delete Tax Modal */}
        <div className="modal custom-modal fade" id="delete_tax" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Tax</h3>
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
        {/* /Delete Tax Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Taxes;
