import React, { useContext } from "react";

import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Offcanvas from "../../Entryfile/offcanvance";
import AddExpenseBulk from "./AddExpenseBulk";
import AddMileage from "./AddExpense1";
import AddExpense from "./AddExpenseFirst";
import { ExpenseUpdatingContext } from "./ContextForUpdatingRecord";

const Addexpense = () => {
  const { setRecord, record } = useContext(ExpenseUpdatingContext);

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>EEMS</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <div onClick={() => setRecord(null)}>
                  <Link className="btn add-btn" to="/home/expensepanel">
                    <i className="fa fa-right" /> Back
                  </Link>
                </div>
                <h3 className="page-title">Add Expense</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Form</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="expense-tab"
                        data-bs-toggle="tab"
                        href="#expense"
                      >
                        Add Expense
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="attachment-tab"
                        data-bs-toggle="tab"
                        href="#mileage"
                      >
                        Add Mileage Expense
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="bulk_expense-tab"
                        data-bs-toggle="tab"
                        href="#bulk_expense"
                      >
                        Add Bulk Expense
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane show active fade" id="expense">
                      <AddExpense></AddExpense>
                    </div>
                    <div className="tab-pane fade" id="mileage">
                      <AddMileage></AddMileage>
                    </div>
                    <div className="tab-pane fade" id="bulk_expense">
                      <AddExpenseBulk></AddExpenseBulk>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default Addexpense;
