import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { User } from "../../../Entryfile/imagepath.jsx";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import Header from "../../../initialpage/Sidebar/header";
import Sidebar from "../../../initialpage/Sidebar/sidebar";
import Offcanvas from "../../../Entryfile/offcanvance/index.jsx";
import "../../index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.js";
import InvoiceTable from "./Table/InvoiceTable.jsx";
import PaymentTable from "./Table/PaymentTable.jsx";
import ClientTable from "./Table/ClientTable.jsx";
import RecentTable from "./Table/RecentTable.jsx";

const barchartdata = [
  { y: "2006", "Total Income": 100, "Total Outcome": 90 },
  { y: "2007", "Total Income": 75, "Total Outcome": 65 },
  { y: "2008", "Total Income": 50, "Total Outcome": 40 },
  { y: "2009", "Total Income": 75, "Total Outcome": 65 },
  { y: "2010", "Total Income": 50, "Total Outcome": 40 },
  { y: "2011", "Total Income": 75, "Total Outcome": 65 },
  { y: "2012", "Total Income": 100, "Total Outcome": 90 },
];
const linechartdata = [
  { y: "2006", "Total Sales": 50, "Total Revenue": 90 },
  { y: "2007", "Total Sales": 75, "Total Revenue": 65 },
  { y: "2008", "Total Sales": 50, "Total Revenue": 40 },
  { y: "2009", "Total Sales": 75, "Total Revenue": 65 },
  { y: "2010", "Total Sales": 50, "Total Revenue": 40 },
  { y: "2011", "Total Sales": 75, "Total Revenue": 65 },
  { y: "2012", "Total Sales": 100, "Total Revenue": 50 },
];
const AdminDashboard = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let firstload = localStorage.getItem("firstload");
    if (firstload === "false") {
      setTimeout(function () {
        window.location.reload(1);
        localStorage.removeItem("firstload");
      }, 1000);
    }
  });

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-cubes" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>112</h3>
                      <span>Projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-usd" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>44</h3>
                      <span>Clients</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa-regular fa-gem" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>37</h3>
                      <span>Tasks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-user" />
                    </span>
                    <div className="dash-widget-info">
                      <h3>218</h3>
                      <span>Employees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">Total Revenue</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart
                            data={barchartdata}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 5,
                              bottom: 5,
                            }}>
                            <CartesianGrid />
                            <XAxis dataKey="y" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Total Income" fill="#ff9b44" />
                            <Bar dataKey="Total Outcome" fill="#fc6075" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">Sales Overview</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart
                            data={linechartdata}
                            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <CartesianGrid />
                            <XAxis dataKey="y" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="Total Sales"
                              stroke="#ff9b44"
                              fill="#00c5fb"
                              strokeWidth={3}
                              dot={{ r: 3 }}
                              activeDot={{ r: 7 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="Total Revenue"
                              stroke="#fc6075"
                              fill="#0253cc"
                              strokeWidth={3}
                              dot={{ r: 3 }}
                              activeDot={{ r: 7 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-group m-b-30">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">New Employees</span>
                        </div>
                        <div>
                          <span className="text-success">+10%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">10</h3>
                      <div className="progress mb-2" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">Overall Employees 218</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Earnings</span>
                        </div>
                        <div>
                          <span className="text-success">+12.5%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$1,42,300</h3>
                      <div className="progress mb-2" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        Previous Month{" "}
                        <span className="text-muted">$1,15,852</span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Expenses</span>
                        </div>
                        <div>
                          <span className="text-danger">-2.8%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$8,500</h3>
                      <div className="progress mb-2" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        Previous Month{" "}
                        <span className="text-muted">$7,500</span>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Profit</span>
                        </div>
                        <div>
                          <span className="text-danger">-75%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">$1,12,000</h3>
                      <div className="progress mb-2" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mb-0">
                        Previous Month{" "}
                        <span className="text-muted">$1,42,000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Statistics Widget */}
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
                <div className="card flex-fill dash-statistics">
                  <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <div className="stats-list">
                      <div className="stats-info">
                        <p>
                          Today Leave{" "}
                          <strong>
                            4 <small>/ 65</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "31%" }}
                            aria-valuenow={31}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          Pending Invoice{" "}
                          <strong>
                            15 <small>/ 92</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "31%" }}
                            aria-valuenow={31}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          Completed Projects{" "}
                          <strong>
                            85 <small>/ 112</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={62}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          Open Tickets{" "}
                          <strong>
                            190 <small>/ 212</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={62}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>
                          Closed Tickets{" "}
                          <strong>
                            22 <small>/ 212</small>
                          </strong>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "22%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">Task Statistics</h4>
                    <div className="statistics">
                      <div className="row">
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>Total Tasks</p>
                            <h3>385</h3>
                          </div>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box mb-4">
                            <p>Overdue Tasks</p>
                            <h3>19</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress mb-4">
                      <div
                        className="progress-bar bg-purple"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}>
                        30%
                      </div>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "22%" }}
                        aria-valuenow={18}
                        aria-valuemin={0}
                        aria-valuemax={100}>
                        22%
                      </div>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "24%" }}
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}>
                        24%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "26%" }}
                        aria-valuenow={14}
                        aria-valuemin={0}
                        aria-valuemax={100}>
                        21%
                      </div>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow={14}
                        aria-valuemin={0}
                        aria-valuemax={100}>
                        10%
                      </div>
                    </div>
                    <div>
                      <p>
                        <i className="far fa-dot-circle text-purple me-2" />
                        Completed Tasks <span className="float-end">166</span>
                      </p>
                      <p>
                        <i className="far fa-dot-circle text-warning me-2" />
                        Inprogress Tasks <span className="float-end">115</span>
                      </p>
                      <p>
                        <i className="far fa-dot-circle text-success me-2" />
                        On Hold Tasks <span className="float-end">31</span>
                      </p>
                      <p>
                        <i className="far fa-dot-circle text-danger me-2" />
                        Pending Tasks <span className="float-end">47</span>
                      </p>
                      <p className="mb-0">
                        <i className="far fa-dot-circle text-info me-2" />
                        Review Tasks <span className="float-end">5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h4 className="card-title">
                      Today Absent{" "}
                      <span className="badge bg-inverse-danger ms-2">5</span>
                    </h4>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <Link
                          to="/app/profile/employee-profile"
                          className="avatar">
                          <img alt="" src={User} />
                        </Link>
                        <div className="media-body">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-danger">
                            Pending
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="leave-info-box">
                      <div className="media d-flex align-items-center">
                        <Link
                          to="/app/profile/employee-profile"
                          className="avatar">
                          <img alt="" src={User} />
                        </Link>
                        <div className="media-body">
                          <div className="text-sm my-0">Martin Lewis</div>
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-6">
                          <h6 className="mb-0">4 Sep 2019</h6>
                          <span className="text-sm text-muted">Leave Date</span>
                        </div>
                        <div className="col-6 text-end">
                          <span className="badge bg-inverse-success">
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="load-more text-center">
                      <Link className="text-dark" to="#">
                        Load More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Statistics Widget */}
            <div className="row">
              <InvoiceTable />
              <PaymentTable />
            </div>
            <div className="row">
              <ClientTable />
              <RecentTable />
            </div>
          </div>
          {/* /Page Content */}
        </div>
      </div>
      <Offcanvas />
    </>
  );
};

export default withRouter(AdminDashboard);
