/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_06,
  Avatar_07,
  Avatar_08,
  Avatar_09,
  Avatar_10,
} from "../../../Entryfile/imagepath";

import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Offcanvas from "../../../Entryfile/offcanvance";

const Timesheet = () => {
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
      role: "Web Designer",
      date: "1 Jan 2013",
      projects: "Video Calling App",
      assignedhours: "20",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Android Developer",
      date: "1 Jan 2013",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "Jeffery Lalor ",
      role: "Team Leader",
      date: "1 Jan 2013",
      projects: "Ware house developement",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: Avatar_04,
      name: "Jeffrey Warden",
      role: "Web Developer ",
      date: "1 Jan 2013",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image: Avatar_05,
      name: "John Doe",
      role: "Web Designer",
      date: "1 Jan 2013",
      projects: "Office Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image: Avatar_06,
      name: "John Smith ",
      role: "Android Developer",
      date: "1 Jan 2013",
      projects: "Video Calling App",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      image: Avatar_07,
      name: " Lesley Grauer",
      role: "Team Leader",
      date: "1 Jan 2013",
      projects: "Hospital Administration",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image: Avatar_08,
      name: " Loren Gatlin ",
      role: "Android Developer",
      date: "1 Jan 2013",
      projects: "Office Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image: Avatar_09,
      name: " Mike Litorus",
      role: "Android DeveloperIOS Developer",
      date: "1 Jan 2013",
      projects: "Hospital Administration",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 10,
      image: Avatar_10,
      name: "Richard Miles",
      role: "Web Developer",
      date: "1 Jan 2013",
      projects: "Project Management",
      assignedhours: "10",
      hours: "12",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            {text} <span>{record.role}</span>
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
      title: "Projects",
      dataIndex: "projects",
      sorter: (a, b) => a.projects.length - b.projects.length,
    },

    {
      title: "Assigned Hours",
      dataIndex: "assignedhours",
      sorter: (a, b) => a.assignedhours.length - b.assignedhours.length,
    },

    {
      title: "Hours",
      dataIndex: "hours",
      sorter: (a, b) => a.hours.length - b.hours.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => (
        <span className="d-none d-sm-table-cell col-md-4">{text}</span>
      ),
      sorter: (a, b) => a.description.length - b.description.length,
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
              data-bs-target="#edit_todaywork">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_workdetail">
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
          <title>Timesheet - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Timesheet</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Timesheet</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_todaywork">
                  <i className="fa fa-plus" /> Add Today Work
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
                  // onChange={console.log("change")}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Today Work Modal */}
        <div
          id="add_todaywork"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Today Work details</h5>
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
                    <div className="input-block col-sm-6">
                      <label>
                        Project <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Office Management</option>
                        <option>Project Management</option>
                        <option>Video Calling App</option>
                        <option>Hospital Administration</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-block col-sm-4">
                      <label>
                        Deadline <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control"
                          placeholder="5 May 2019"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="input-block col-sm-4">
                      <label>
                        Total Hours <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={100}
                        readOnly
                      />
                    </div>
                    <div className="input-block col-sm-4">
                      <label>
                        Remaining Hours <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={60}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-block col-sm-6">
                      <label>
                        Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control datetimepicker"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="input-block col-sm-6">
                      <label>
                        Hours <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="form-control"
                      defaultValue={""}
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
        {/* /Add Today Work Modal */}
        {/* Edit Today Work Modal */}
        <div
          id="edit_todaywork"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Work Details</h5>
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
                    <div className="input-block col-sm-6">
                      <label>
                        Project <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Office Management</option>
                        <option>Project Management</option>
                        <option>Video Calling App</option>
                        <option>Hospital Administration</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-block col-sm-4">
                      <label>
                        Deadline <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control"
                          placeholder="5 May 2019"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="input-block col-sm-4">
                      <label>
                        Total Hours <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={100}
                        readOnly
                      />
                    </div>
                    <div className="input-block col-sm-4">
                      <label>
                        Remaining Hours <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={60}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-block col-sm-6">
                      <label>
                        Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate2}
                          onChange={handleDateChange2}
                          className="form-control datetimepicker"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="input-block col-sm-6">
                      <label>
                        Hours <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={9}
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="form-control"
                      defaultValue={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Today Work Modal */}
        {/* Delete Today Work Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_workdetail"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Work Details</h3>
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
        {/* Delete Today Work Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Timesheet;
