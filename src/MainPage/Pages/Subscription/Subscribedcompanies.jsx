import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_06,
  Avatar_07,
  Avatar_14,
  Avatar_18,
  Avatar_19,
  Avatar_28,
  Avatar_29,
} from "../../../Entryfile/imagepath";
import Offcanvas from "../../../Entryfile/offcanvance";

const SubscribedCompany = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Subscription - HRMS admin Template</title>
          <meta name="description" content="Reactify Blank Page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Subscribed Companies</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Subscriptions</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Joining</h6>
                <h4>
                  12 <span>This Month</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Renewal</h6>
                <h4>
                  3 <span>This Month</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Renewal</h6>
                <h4>
                  0 <span>Next Month</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Total Companies</h6>
                <h4>312</h4>
              </div>
            </div>
          </div>
          {/* Company List */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-hover custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Client</th>
                      <th>Plan</th>
                      <th>Users</th>
                      <th>Plan Duration</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Amount</th>
                      <th>Plan Status</th>
                      <th>Update Plan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_19} alt="" />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Global Technologies
                          </Link>
                        </h2>
                      </td>
                      <td>Free Trial</td>
                      <td>30</td>
                      <td>6 Months</td>
                      <td>15 Feb 2019</td>
                      <td>14 Jul 2019</td>
                      <td>$200</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_1"
                            className="check"
                          />
                          <label
                            htmlFor="company_status_1"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_29} alt="" />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Delta Infotech
                          </Link>
                        </h2>
                      </td>
                      <td>Premium</td>
                      <td>50</td>
                      <td>1 Year</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>$200</td>
                      <td>
                        <span className="badge bg-inverse-danger">Expired</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_2"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_2"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img alt="" src={Avatar_07} />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Cream Inc
                          </Link>
                        </h2>
                      </td>
                      <td>Professional</td>
                      <td>10</td>
                      <td>1 Month</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>Free</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_3"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_3"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img alt="" src={Avatar_06} />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Wellware Company
                          </Link>
                        </h2>
                      </td>
                      <td>Enterprise</td>
                      <td>10</td>
                      <td>1 Month</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>Free</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_4"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_4"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_14} alt="" />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Mustang Technologies
                          </Link>
                        </h2>
                      </td>
                      <td>Free Trial</td>
                      <td>10</td>
                      <td>1 Year</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>Free</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_5"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_5"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_18} alt="" />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            International Software Inc
                          </Link>
                        </h2>
                      </td>
                      <td>Enterprise</td>
                      <td>10</td>
                      <td>1 Month</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>Free</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_6"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_6"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/app/profile/client-profile"
                            className="avatar">
                            <img src={Avatar_28} alt="" />
                          </Link>
                          <Link to="/app/profile/client-profile">
                            Mercury Software Inc
                          </Link>
                        </h2>
                      </td>
                      <td>Professional</td>
                      <td>10</td>
                      <td>1 Year</td>
                      <td>15 Feb 2019</td>
                      <td>14 Feb 2020</td>
                      <td>Free</td>
                      <td>
                        <span className="badge bg-inverse-success">Active</span>
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary btn-sm"
                          to=""
                          data-bs-toggle="modal"
                          data-bs-target="#upgrade_plan">
                          Change Plan
                        </Link>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="company_status_7"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="company_status_7"
                            className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Company List */}
          {/* Upgrade Plan Modal */}

          <div
            id="upgrade_plan"
            className="modal custom-modal fade"
            role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Upgrade Plan</h5>
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
                          <label>Plan Name</label>
                          <input
                            type="text"
                            placeholder="Free Trial"
                            className="form-control"
                            defaultValue="Free Trial"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label>Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$500"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label>Plan Type</label>
                          <br />
                          <select
                            className="select"
                            style={{
                              width: 210,
                              height: 40,
                              borderRadius: "5px",
                              borderColor: "#D7D5D1",
                            }}>
                            <option> Monthly </option>
                            <option> Yearly </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label>No of Users</label>
                          <br />
                          <select
                            className="select"
                            style={{
                              height: 40,
                              width: 212,
                              borderRadius: "5px",
                              borderColor: "#D7D5D1",
                            }}>
                            <option> 5 Users </option>
                            <option> 50 Users </option>
                            <option> Unlimited </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label>No of Projects</label>
                          <br />
                          <select
                            className="select"
                            style={{
                              width: 210,
                              height: 40,
                              borderRadius: "5px",
                              borderColor: "#D7D5D1",
                            }}>
                            <option> 5 Projects </option>
                            <option> 50 Projects </option>
                            <option> Unlimited </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label>No of Storage Space</label>
                          <select
                            className="select"
                            style={{
                              height: 40,
                              width: 212,
                              borderRadius: "5px",
                              borderColor: "#D7D5D1",
                            }}>
                            <option> 5 GB </option>
                            <option> 100 GB </option>
                            <option> 500 GB </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <label>Plan Description</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        cols={30}
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-block">
                      <label className="d-block">Status</label>
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="upgrade_plan_status"
                          className="check"
                        />
                        <label
                          htmlFor="upgrade_plan_status"
                          className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </div>
                    <div className="m-t-20 text-center">
                      <button className="btn btn-primary submit-btn">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Upgrade Plan Modal */}
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};
export default SubscribedCompany;
