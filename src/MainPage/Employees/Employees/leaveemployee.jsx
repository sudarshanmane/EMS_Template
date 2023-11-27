/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_03,
  Avatar_08,
  Avatar_15,
  Avatar_20,
  Avatar_25,
  Avatar_24,
} from "../../../Entryfile/imagepath";

import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Delete from "../../../_components/modelbox/Delete";
import Offcanvas from "../../../Entryfile/offcanvance";

const LeaveEmployee = () => {
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
  const data = [
    {
      id: 1,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      leavetype: "Medical Leave",
      from: "27 Feb 2019",
      to: "27 Feb 2019",
      noofdays: "1 day",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 2,
      image: Avatar_09,
      name: "Buster Wigton",
      role: "Web Developer",
      leavetype: "Hospitalisation",
      from: "15 Jan 2019",
      to: "25 Jan 2019",
      noofdays: "10 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "Catherine Manseau",
      role: "Web Developer",
      leavetype: "Maternity Leave",
      from: "5 Jan 2019",
      to: "15 Jan 2019",
      noofdays: "10 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 4,
      image: Avatar_05,
      name: "Domenic Houston",
      role: "Web Developer",
      leavetype: "Casual Leave",
      from: "10 Jan 2019",
      to: "11 Jan 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 5,
      image: Avatar_02,
      name: "John Doe",
      role: "Web Designer",
      leavetype: "Casual Leave",
      from: "9 Jan 2019",
      to: "10 Jan 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 6,
      image: Avatar_08,
      name: "John Smith",
      role: "Android Developer",
      leavetype: "LOP",
      from: "24 Feb 2019",
      to: "25 Feb 2019",
      noofdays: "2 days",
      reason: "Personnal",
      status: "Approved",
    },
    {
      id: 7,
      image: Avatar_10,
      name: "Melita Faucher",
      role: "Web Developer",
      leavetype: "Casual Leave",
      from: "13 Jan 2019",
      to: "14 Jan 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Declined",
    },
    {
      id: 8,
      image: Avatar_15,
      name: "Mike Litorus",
      role: "IOS Developer",
      leavetype: "Paternity Leave",
      from: "13 Feb 2019",
      to: "17 Feb 2019",
      noofdays: "5 days",
      reason: "Going to Hospital",
      status: "Declined",
    },
    {
      id: 9,
      image: Avatar_20,
      name: "Richard Miles",
      role: "Web Designer",
      leavetype: "Casual Leave",
      from: "8 Mar 2019",
      to: "9 Mar 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "New",
    },
    {
      id: 10,
      image: Avatar_25,
      name: "Richard Parker",
      role: "Web Developer",
      leavetype: "Casual Leave",
      from: "30 Jan 2019",
      to: "31 Jan 2019",
      noofdays: "2 days",
      reason: "Personnal",
      status: "New",
    },
    {
      id: 11,
      image: Avatar_10,
      name: "Rolland Webber",
      role: "Web Developer",
      leavetype: "Casual Leave",
      from: "7 Jan 2019",
      to: "8 Jan 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Declined",
    },
    {
      id: 12,
      image: Avatar_24,
      name: "Tarah Shropshire",
      role: "Web Developer",
      leavetype: "Paternity Leave",
      from: "10 Jan 2019",
      to: "10 Jan 2019",
      noofdays: "1 day",
      reason: "Going to Hospital",
      status: "New",
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
      title: "Leave Type",
      dataIndex: "leavetype",
      sorter: (a, b) => a.leavetype.length - b.leavetype.length,
    },

    {
      title: "From",
      dataIndex: "from",
      sorter: (a, b) => a.from.length - b.from.length,
    },
    {
      title: "To",
      dataIndex: "to",
      sorter: (a, b) => a.to.length - b.to.length,
    },

    {
      title: "No Of Days",
      dataIndex: "noofdays",
      sorter: (a, b) => a.noofdays.length - b.noofdays.length,
    },

    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.length - b.reason.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <i
              className={
                text === "New"
                  ? "far fa-dot-circle text-purple"
                  : text === "Pending"
                  ? "far fa-dot-circle text-info"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-purple" /> New
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Pending
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              >
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Declined
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Approved By",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/employee-profile">{text} </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
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
              data-bs-target="#edit_leave">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_approve">
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
          <title>Leaves - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Leaves</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Leaves</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_leave">
                  <i className="fa fa-plus" /> Add Leave
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Leave Statistics */}
          <div className="row">
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Annual Leave</h6>
                <h4>12</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Medical Leave</h6>
                <h4>3</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Other Leave</h6>
                <h4>4</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Remaining Leave</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>
          {/* /Leave Statistics */}
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
        {/* Add Leave Modal */}
        <div id="add_leave" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Leave</h5>
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
                      Leave Type <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Leave Type</option>
                      <option>Casual Leave 12 Days</option>
                      <option>Medical Leave</option>
                      <option>Loss of Pay</option>
                    </select>
                  </div>
                  <div className="input-block">
                    <label>
                      From <span className="text-danger">*</span>
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
                  <div className="input-block">
                    <label>
                      To <span className="text-danger">*</span>
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
                  <div className="input-block">
                    <label>
                      Number of days <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" readOnly type="text" />
                  </div>
                  <div className="input-block">
                    <label>
                      Remaining Leaves <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      readOnly
                      defaultValue={12}
                      type="text"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Leave Reason <span className="text-danger">*</span>
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
        {/* /Add Leave Modal */}
        {/* Edit Leave Modal */}
        <div id="edit_leave" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Leave</h5>
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
                      Leave Type <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Leave Type</option>
                      <option>Casual Leave 12 Days</option>
                    </select>
                  </div>
                  <div className="input-block">
                    <label>
                      From <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate3}
                        onChange={handleDateChange3}
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      To <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <DatePicker
                        selected={selectedDate4}
                        onChange={handleDateChange4}
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Number of days <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      defaultValue={2}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Remaining Leaves <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      readOnly
                      defaultValue={12}
                      type="text"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Leave Reason <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="form-control"
                      defaultValue={"Going to hospital"}
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
        {/* /Edit Leave Modal */}
        {/* Delete Leave Modal */}
        <Delete />
        {/* /Delete Leave Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default LeaveEmployee;
