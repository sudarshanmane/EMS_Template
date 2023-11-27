/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Offcanvas from "../../../Entryfile/offcanvance";

const Invoicecreate = () => {
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
    <div className="page-wrapper">
      <Helmet>
        <title>Create Invoice - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Create Invoice</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Create Invoice</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>
                      Client <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Please Select</option>
                      <option>Barry Cuda</option>
                      <option>Tressa Wexler</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>
                      Project <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Project</option>
                      <option>Office Management</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>Email</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>Tax</label>
                    <select className="select">
                      <option>Select Tax</option>
                      <option>VAT</option>
                      <option>GST</option>
                      <option>No Tax</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>Client Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>Billing Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>
                      Invoice date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate1}
                        onChange={handleDateChange1}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="input-block">
                    <label>
                      Due Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate2}
                        onChange={handleDateChange2}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <thead>
                        <tr>
                          <th style={{ width: "20px" }}>#</th>
                          <th className="col-sm-2">Item</th>
                          <th className="col-md-6">Description</th>
                          <th style={{ width: "100px" }}>Unit Cost</th>
                          <th style={{ width: "80px" }}>Qty</th>
                          <th>Amount</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "100px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              readOnly
                              style={{ width: "120px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <Link
                              to="#"
                              className="text-success font-18"
                              title="Add">
                              <i className="fa fa-plus" />
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "100px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              readOnly
                              style={{ width: "120px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <Link
                              to="#"
                              className="text-danger font-18"
                              title="Remove">
                              <i className="fa fa-trash" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <tbody>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td className="text-end">Total</td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}>
                            0
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} className="text-end">
                            Tax
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}>
                            <input
                              className="form-control text-end"
                              defaultValue={0}
                              readOnly
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} className="text-end">
                            Discount %
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}>
                            <input
                              className="form-control text-end"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={5}
                            style={{ textAlign: "right", fontWeight: "bold" }}>
                            Grand Total
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              fontWeight: "bold",
                              fontSize: "16px",
                              width: "230px",
                            }}>
                            $ 0.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Other Information</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn m-r-10">
                  Save &amp; Send
                </button>
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Offcanvas />
    </div>
  );
};

export default Invoicecreate;
