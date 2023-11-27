/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Avatar_01, Avatar_02, Avatar_03 } from "../../../Entryfile/imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Offcanvas from "../../../Entryfile/offcanvance";

const Offerapproval = () => {
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
      jobtitle: "Web Designer",
      jobtype: "Temporary",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Requested",
    },
    {
      id: 2,
      image: Avatar_01,
      name: "Richard Miles",
      role: "Web Developer",
      jobtitle: "Web Developer",
      jobtype: "Contract",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Rejected",
    },
    {
      id: 3,
      image: Avatar_03,
      name: "John Smith",
      role: "Android Developer",
      jobtitle: "Android Developer",
      jobtype: "Salary",
      pay: "$25000",
      annualip: "15%",
      longtermip: "No",
      status: "Approved",
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
      title: "Name",
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
      title: "Job Title",
      dataIndex: "jobtitle",
      render: (text) => <Link to="/app/administrator/job-details">{text}</Link>,
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
    },
    {
      title: "Job Type",
      dataIndex: "jobtype",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Pay",
      dataIndex: "pay",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Annual IP",
      dataIndex: "annualip",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Long Term IP",
      dataIndex: "longtermip",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <label
          className={`badge bg-inverse-${
            text === "Requested"
              ? "warning"
              : text === "Rejected"
              ? "danger"
              : "success"
          }`}
          style={{ display: "inline-block", minWidth: 90 }}>
          {text}
        </label>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Actions",
      render: () => (
        <div className="dropdown dropdown-action text-center">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="fa fa-thumbs-o-up m-r-5" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fa fa-ban m-r-5" /> Rejected
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Offer Approvals - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-12">
                <h3 className="page-title">Offer Approvals</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">Jobs</li>
                  <li className="breadcrumb-item active">Offer Approvals</li>
                </ul>
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
                  //  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Edit Job Modal */}
        <div id="edit_job" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Job</h5>
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
                        <label>Job Title</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Web Developer"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Department</label>
                        <select className="select">
                          <option>-</option>
                          <option>Web Development</option>
                          <option>Application Development</option>
                          <option>IT Management</option>
                          <option>Accounts Management</option>
                          <option>Support Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Job Location</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="California"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>No of Vacancies</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={5}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Experience</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="2 Years"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Age</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Salary From</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="32k"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Salary To</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="38k"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Job Type</label>
                        <select className="select">
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Internship</option>
                          <option>Temporary</option>
                          <option>Remote</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Status</label>
                        <select className="select">
                          <option>Open</option>
                          <option>Closed</option>
                          <option>Cancelled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Expired Date</label>
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
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={""} />
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
        {/* /Edit Job Modal */}
        {/* Delete Job Modal */}
        <div className="modal custom-modal fade" id="delete_job" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete</h3>
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
        {/* /Delete Job Modal */}
      </div>
      {/* /Page Wrapper */}
      <Offcanvas />
    </>
  );
};

export default Offerapproval;
