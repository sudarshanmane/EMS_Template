/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Avatar_03, Avatar_04 } from "../../../Entryfile/imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Offcanvas from "../../../Entryfile/offcanvance";

const LeaveReport = () => {
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const data = [
    {
      id: 1,
      image: Avatar_03,
      name: "John Doe",
      number: "#0001",
      date: "20 Dec 2020",
      department: "Design",
      leavetype: "Sick Leave",
      noofdays: "05",
      remainingleave: "08",
      totalleaves: "20",
      totalleavetaken: "12",
      leavecarryforward: "08",
    },
    {
      id: 2,
      image: Avatar_04,
      name: "Richard Miles",
      number: "#0001",
      date: "20 Dec 2020",
      department: "Android Developer",
      leavetype: "Emergency Leave",
      noofdays: "01",
      remainingleave: "09",
      totalleaves: "20",
      totalleavetaken: "17",
      leavecarryforward: "03",
    },
  ];
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const columns = [
    {
      title: "Employee",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/employee-profile">
            {text} <span>{record.number}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },

    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Leave Type",
      dataIndex: "leavetype",
      render: (text) => (
        <button
          className={`btn btn-outline-${
            text === "Emergency Leave" ? "danger" : "info"
          } btn-sm`}
        >
          {text}
        </button>
      ),
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },
    {
      title: "No.of Days",
      dataIndex: "noofdays",
      render: (text) => <span className="btn btn-danger btn-sm">{text}</span>,
      sorter: (a, b) => a.noofdays.length - b.noofdays.length,
    },
    {
      title: "Remaining Leave",
      dataIndex: "remainingleave",
      render: (text) => (
        <span className="btn btn-warning btn-sm">
          <b>{text}</b>
        </span>
      ),
      sorter: (a, b) => a.remainingleave.length - b.remainingleave.length,
    },
    {
      title: "Total Leaves",
      dataIndex: "totalleaves",
      render: (text) => (
        <span className="btn btn-success btn-sm">
          <b>{text}</b>
        </span>
      ),
      sorter: (a, b) => a.totalleaves.length - b.totalleaves.length,
    },
    {
      title: "Total Leave Taken",
      dataIndex: "totalleavetaken",
      sorter: (a, b) => a.totalleavetaken.length - b.totalleavetaken.length,
    },
    {
      title: "Leave Carry Forward",
      dataIndex: "leavecarryforward",
      sorter: (a, b) => a.leavecarryforward.length - b.leavecarryforward.length,
    },
  ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Leave Report - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Leave Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Leave Report</li>
                </ul>
              </div>
              <div className="col-auto">
                <Link to="#" className="btn btn-primary">
                  PDF
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row mb-4">
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focused
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }
              >
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <label className="focus-label">Employee</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option>Select Department</option>
                  <option>Designing</option>
                  <option>Development</option>
                  <option>Finance</option>
                  <option>Hr &amp; Finance</option>
                </select>
                <label className="focus-label">Department</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate1}
                    onChange={handleDateChange1}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">From</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate2}
                    onChange={handleDateChange2}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.id}
                  //  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
      <Offcanvas />
    </>
  );
};

export default LeaveReport;
