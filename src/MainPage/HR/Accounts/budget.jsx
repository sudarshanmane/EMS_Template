import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../Entryfile/offcanvance";

const Budget = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  const handleDateChange4 = (date) => {
    setSelectedDate4(date);
  };
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Budgets - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Budgets</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Accounts</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_categories">
                  <i className="fa fa-plus" /> Add Budgets
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
                      <th>Budget No</th>
                      <th>Budget Title</th>
                      <th>Budget Type</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Total Revenue</th>
                      <th>Total Expenses</th>
                      <th>Tax Amount</th>
                      <th>Budget Amount</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tender</td>
                      <td>Project</td>
                      <td>01 Jan 2021</td>
                      <td>31 Dec 2021</td>
                      <td>2500000</td>
                      <td>1500000</td>
                      <td>10</td>
                      <td>999990</td>
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
                              data-bs-target="#edit_categories">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete">
                              <i className="fa fa-trash m-r-5" /> Delete
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Project</td>
                      <td>Project</td>
                      <td>01 Feb 2021</td>
                      <td>30 Apr 2021</td>
                      <td>100000</td>
                      <td>50000</td>
                      <td>1000</td>
                      <td>49000</td>
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
                              data-bs-target="#edit_categories">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete">
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
        {/* Add Modal */}
        <div
          className="modal custom-modal fade"
          id="add_categories"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Budget</h5>
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
                    <label>Budget Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="budget_title"
                      placeholder="Budgets Title"
                    />
                  </div>
                  <label>Choose Budget Respect Type</label>
                  <div className="input-block">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input BudgetType"
                        type="radio"
                        name="budget_type"
                        id="project2"
                        defaultValue="project"
                      />
                      <label className="form-check-label" htmlFor="project2">
                        Project
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input BudgetType"
                        type="radio"
                        name="budget_type"
                        id="category1"
                        defaultValue="category"
                      />
                      <label className="form-check-label" htmlFor="category1">
                        Category
                      </label>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Start Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate1}
                        onChange={handleDateChange1}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate2}
                        onChange={handleDateChange2}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Expected Revenues</label>
                  </div>
                  <div className="AllRevenuesClass">
                    <div className="row AlLRevenues">
                      <div className="col-sm-6">
                        <div className="input-block">
                          <label>
                            Revenue Title <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control RevenuETitle"
                            defaultValue
                            placeholder="Revenue Title"
                            name="revenue_title[]"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="input-block">
                          <label>
                            Revenue Amount{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="revenue_amount[]"
                            placeholder="Amount"
                            defaultValue
                            className="form-control RevenuEAmount"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="add-more">
                          <Link
                            to="#"
                            className="add_more_revenue"
                            title="Add Revenue"
                            style={{ cursor: "pointer" }}>
                            <i className="fa fa-plus-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Overall Revenues <span className="text-danger">(A)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="overall_revenues"
                      id="overall_revenues1"
                      placeholder="Overall Revenues"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>Expected Expenses</label>
                  </div>
                  <div className="AllExpensesClass">
                    <div className="row AlLExpenses">
                      <div className="col-sm-6">
                        <div className="input-block">
                          <label>
                            Expenses Title{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control EXpensesTItle"
                            defaultValue
                            placeholder="Expenses Title"
                            name="expenses_title[]"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="input-block">
                          <label>
                            Expenses Amount{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="expenses_amount[]"
                            placeholder="Amount"
                            defaultValue
                            className="form-control EXpensesAmount"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="add-more">
                          <Link
                            to="#"
                            className="add_more_expenses"
                            title="Add Expenses"
                            style={{ cursor: "pointer" }}>
                            <i className="fa fa-plus-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Overall Expense <span className="text-danger">(B)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="overall_expenses"
                      id="overall_expenses1"
                      placeholder="Overall Expenses"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Expected Profit{" "}
                      <span className="text-danger">( C = A - B )</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="expected_profit"
                      id="expected_profit1"
                      placeholder="Expected Profit"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Tax <span className="text-danger">(D)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="tax_amount"
                      id="tax_amount1"
                      placeholder="Tax Amount"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Budget Amount{" "}
                      <span className="text-danger">( E = C - D )</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="budget_amount"
                      id="budget_amount1"
                      placeholder="Budget Amount"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className=" submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Modal */}
        {/* Edit Modal */}
        <div
          className="modal custom-modal fade"
          id="edit_categories"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Budget</h5>
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
                    <label>Budget Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="budget_title"
                      placeholder="Budgets Title"
                    />
                  </div>
                  <label>Choose Budget Respect Type</label>
                  <div className="input-block">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input BudgetType"
                        type="radio"
                        name="budget_type"
                        id="project1"
                        defaultValue="project"
                      />
                      <label className="form-check-label" htmlFor="project1">
                        Project
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input BudgetType"
                        type="radio"
                        name="budget_type"
                        id="category"
                        defaultValue="category"
                      />
                      <label className="form-check-label" htmlFor="category">
                        Category
                      </label>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Start Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate3}
                        onChange={handleDateChange3}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate4}
                        onChange={handleDateChange4}
                        className="form-control floating datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>Expected Revenues</label>
                  </div>
                  <div className="AllRevenuesClass">
                    <div className="row AlLRevenues">
                      <div className="col-sm-6">
                        <div className="input-block">
                          <label>
                            Revenue Title <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control RevenuETitle"
                            defaultValue
                            placeholder="Revenue Title"
                            name="revenue_title[]"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="input-block">
                          <label>
                            Revenue Amount{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="revenue_amount[]"
                            placeholder="Amount"
                            defaultValue
                            className="form-control RevenuEAmount"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="add-more">
                          <Link
                            to="#"
                            className="add_more_revenue"
                            title="Add Revenue"
                            style={{ cursor: "pointer" }}>
                            <i className="fa fa-plus-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Overall Revenues <span className="text-danger">(A)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="overall_revenues"
                      id="overall_revenues"
                      placeholder="Overall Revenues"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>Expected Expenses</label>
                  </div>
                  <div className="AllExpensesClass">
                    <div className="row AlLExpenses">
                      <div className="col-sm-6">
                        <div className="input-block">
                          <label>
                            Expenses Title{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control EXpensesTItle"
                            defaultValue
                            placeholder="Expenses Title"
                            name="expenses_title[]"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="input-block">
                          <label>
                            Expenses Amount{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="expenses_amount[]"
                            placeholder="Amount"
                            defaultValue
                            className="form-control EXpensesAmount"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-1">
                        <div className="add-more">
                          <Link
                            to="#"
                            className="add_more_expenses"
                            title="Add Expenses"
                            style={{ cursor: "pointer" }}>
                            <i className="fa fa-plus-circle" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Overall Expense <span className="text-danger">(B)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="overall_expenses"
                      id="overall_expenses"
                      placeholder="Overall Expenses"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Expected Profit{" "}
                      <span className="text-danger">( C = A - B )</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="expected_profit"
                      id="expected_profit"
                      placeholder="Expected Profit"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Tax <span className="text-danger">(D)</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="tax_amount"
                      id="tax_amount"
                      placeholder="Tax Amount"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Budget Amount{" "}
                      <span className="text-danger">( E = C - D )</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="budget_amount"
                      id="budget_amount"
                      placeholder="Budget Amount"
                      readOnly
                      style={{ cursor: "not-allowed" }}
                    />
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
        {/* /Edit Modal */}
        {/* Delete Holiday Modal */}
        <div className="modal custom-modal fade" id="delete" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete </h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link to="#" className="btn btn-primary continue-btn">
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="#"
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
        {/* /Delete Holiday Modal */}
      </div>
      {/* /Page Wrapper */}
      <Offcanvas />
    </>
  );
};

export default Budget;
