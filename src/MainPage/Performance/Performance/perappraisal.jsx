/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_13,
  Avatar_12,
  Avatar_11,
} from "../../../Entryfile/imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "antd/dist/antd.min.css";
import Offcanvas from "../../../Entryfile/offcanvance";

const PerformanceAppraisal = () => {
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
      image: Avatar_02,
      name: "John Doe",
      designation: "IOS Developer",
      department: "IOS",
      creatat: "1 Jan 2013",
      status: "Active",
    },
    {
      id: 2,
      image: Avatar_05,
      name: "Richard Miles",
      designation: "Web Designer",
      department: "Design",
      creatat: "18 Mar 2014",
      status: "Active",
    },
    {
      id: 3,
      image: Avatar_11,
      name: "John Smith",
      designation: "Android Developer",
      department: "Android",
      creatat: "1 Apr 2014",
      status: "Inactive",
    },
    {
      id: 4,
      image: Avatar_13,
      name: "Jeffrey Warden",
      designation: "Web Designer",
      department: "Design",
      creatat: "16 Jun 2013",
      status: "Active",
    },
    {
      id: 5,
      image: Avatar_12,
      name: "Bernardo Galaviz",
      designation: "Web Designer",
      department: "Design",
      creatat: "1 Jan 2013",
      status: "Active",
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
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Employee",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/employee-profile">
            {text} <span>{record.role}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      sorter: (a, b) => a.designation.length - b.designation.length,
    },

    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Appraisal Date",
      dataIndex: "creatat",
      sorter: (a, b) => a.creatat.length - b.creatat.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <i
              className={
                text === "Inactive"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Active
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Inactive
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action text-end">
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
              data-bs-target="#edit_appraisal">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_appraisal">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Performance Appraisal - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Performance Appraisal</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Performance</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_appraisal">
                  <i className="fa fa-plus" /> Add New
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
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
                  // onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Performance Appraisal Modal */}
        <div
          id="add_appraisal"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Give Performance Appraisal</h5>
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
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">Employee</label>
                        <select className="select">
                          <option>Select Employee</option>
                          <option>John Doe</option>
                          <option>Mike Litorus</option>
                        </select>
                      </div>
                      <div className="input-block">
                        <label>
                          Select Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate1}
                            onChange={handleDateChange1}
                            className="form-control floating datetimepicker"
                            type="date"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="tab-box">
                            <div className="row user-tabs">
                              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul className="nav nav-tabs nav-tabs-solid">
                                  <li className="nav-item">
                                    <Link
                                      to="#appr_technical"
                                      data-bs-toggle="tab"
                                      className="nav-link active">
                                      Technical
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      to="#appr_organizational"
                                      data-bs-toggle="tab"
                                      className="nav-link">
                                      Organizational
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="tab-content">
                            <div
                              id="appr_technical"
                              className="pro-overview tab-pane fade show active">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="bg-white">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th colSpan={5}>
                                            Technical Competencies
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colSpan={2}>Indicator</th>
                                          <th colSpan={2}>Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Customer Experience
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="customer_experience"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Marketing
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="marketing"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Management
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="management"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Administration
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="administration"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Presentation Skill
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="presentation_skill"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Quality Of Work
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="quality_of_work"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Efficiency
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="efficiency"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="appr_organizational">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="bg-white">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th colSpan={5}>
                                            Organizational Competencies
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colSpan={2}>Indicator</th>
                                          <th colSpan={2}>Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Integrity
                                          </td>
                                          <td colSpan={2}>Beginner</td>
                                          <td>
                                            <select
                                              name="integrity"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Professionalism
                                          </td>
                                          <td colSpan={2}>Beginner</td>
                                          <td>
                                            <select
                                              name="professionalism"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Team Work
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="team_work"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Critical Thinking
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="critical_thinking"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Conflict Management
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="conflict_management"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Attendance
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="attendance"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Ability To Meet Deadline
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="ability_to_meet_deadline"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">Status</label>
                        <select className="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
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
        {/* /Add Performance Appraisal Modal */}
        {/* Edit Performance Appraisal Modal */}
        <div
          id="edit_appraisal"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Performance Appraisal</h5>
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
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">Employee</label>
                        <select className="select">
                          <option>Select Employee</option>
                          <option>John Doe</option>
                          <option>Mike Litorus</option>
                        </select>
                      </div>
                      <div className="input-block">
                        <label>
                          Select Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate2}
                            onChange={handleDateChange2}
                            className="form-control floating datetimepicker"
                            type="date"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="tab-box">
                            <div className="row user-tabs">
                              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul className="nav nav-tabs nav-tabs-solid">
                                  <li className="nav-item">
                                    <Link
                                      to="#appr_technical1"
                                      data-bs-toggle="tab"
                                      className="nav-link active">
                                      Technical
                                    </Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link
                                      to="#appr_organizational1"
                                      data-bs-toggle="tab"
                                      className="nav-link">
                                      Organizational
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="tab-content">
                            <div
                              id="appr_technical1"
                              className="pro-overview tab-pane fade show active">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="bg-white">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th colSpan={5}>
                                            Technical Competencies
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colSpan={2}>Indicator</th>
                                          <th colSpan={2}>Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Customer Experience
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="customer_experience"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Marketing
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="marketing"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Management
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="management"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Administration
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="administration"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Presentation Skill
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="presentation_skill"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Quality Of Work
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="quality_of_work"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Efficiency
                                          </td>
                                          <td colSpan={2}>Expert / Leader</td>
                                          <td>
                                            <select
                                              name="efficiency"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                              <option value={4}>
                                                {" "}
                                                Expert / Leader
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="appr_organizational1">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="bg-white">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th colSpan={5}>
                                            Organizational Competencies
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th colSpan={2}>Indicator</th>
                                          <th colSpan={2}>Expected Value</th>
                                          <th>Set Value</th>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Integrity
                                          </td>
                                          <td colSpan={2}>Beginner</td>
                                          <td>
                                            <select
                                              name="integrity"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Professionalism
                                          </td>
                                          <td colSpan={2}>Beginner</td>
                                          <td>
                                            <select
                                              name="professionalism"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Team Work
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="team_work"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Critical Thinking
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="critical_thinking"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Conflict Management
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="conflict_management"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Attendance
                                          </td>
                                          <td colSpan={2}>Intermediate</td>
                                          <td>
                                            <select
                                              name="attendance"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td scope="row" colSpan={2}>
                                            Ability To Meet Deadline
                                          </td>
                                          <td colSpan={2}>Advanced</td>
                                          <td>
                                            <select
                                              name="ability_to_meet_deadline"
                                              className="form-control">
                                              <option value>None</option>
                                              <option value={1}>
                                                {" "}
                                                Beginner
                                              </option>
                                              <option value={2}>
                                                {" "}
                                                Intermediate
                                              </option>
                                              <option value={3}>
                                                {" "}
                                                Advanced
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">Status</label>
                        <select className="select">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Performance Appraisal Modal */}
        {/* Delete Performance Appraisal Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_appraisal"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Performance Appraisal List</h3>
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
        {/* /Delete Performance Appraisal Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default PerformanceAppraisal;
