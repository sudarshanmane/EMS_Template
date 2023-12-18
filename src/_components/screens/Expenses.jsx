import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

const Expenses = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (

    <div className="page-wrapper">
     <div className="content container-fluid">
    <div className="input-block row">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Expenses</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Expenses Report</li>
            </ul>
            <h5 className="breadcrumb-item active">Base Currency</h5>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <label>
        <input
          class="form-check-input"
          type="checkbox"
          value="True"
          // {...register("override_general_policy")}
        />{" "}
        Enable automated currency conversion
      </label>

      <div className="input-block mb-0 row">
        <label>
          <input
            class="form-check-input"
            type="checkbox"
            value="True"
            // {...register("override_general_policy")}
          />{" "}
          Make expense reimbursable by default
        </label>
        <div className="col-md-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$USD</span>
            </div>
            <input
              className="form-control"
              type="number"
              //  {...register("expense_amount_limit")}
            />
          </div>
        </div>
      </div>

      <label>
          <input
            class="form-check-input"
            type="checkbox"
            value="True"
            // {...register("override_general_policy")}
          />{" "}
            Expense expiry period?
        </label>

      <div className="card">
        <div className="card-header">
          <h4 className="card-title mb-0">Notification</h4>
        </div>
        <div className="card-body">
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}

          <br></br>
          <br></br>
          <div className="col-md-10">
            <div className="checkbox">
              <label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="True"
                  // {...register("override_general_policy")}
                />{" "}
                Warn user when an expense created by them nears its expiry date
              </label>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-10">
            <div className="checkbox">
              <label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="True"
                  // {...register("override_general_policy")}
                />{" "}
                Send reminder for unreported expenses
              </label>
            </div>
          </div>

          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle me-1"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Monthly
            </button>
            <div className="dropdown-menu">
              {months.map((month, index) => (
                <a
                  key={index}
                  className="dropdown-item"
                  href="#"
                  onClick={() => alert(month)}
                >
                  {month}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-md-3">
          <div className="table-responsive">
            <h3>Expenese Fields Customization</h3>
            <table className="table table-striped custom-table">
              <thead>
                <tr>
                  <th>ENABLE</th>
                  <th className="text-center">FIELD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Merchant</td>
                  <td className="text-center">
                    <input type="checkbox" defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="text-center">
                    <input type="checkbox" defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Reference#</td>
                  <td className="text-center">
                    <input type="checkbox" defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td>Is Billable</td>
                  <td className="text-center">
                    <input type="checkbox" defaultChecked />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          {/* </form> */}
        </div>
      </div>
    </div>

    </div>
    </div>
  );
};

export default Expenses;
