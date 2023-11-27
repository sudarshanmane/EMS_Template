/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "antd/dist/antd.min.css";
import Offcanvas from "../../../Entryfile/offcanvance";

const GoalTracking = () => {
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
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Event Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2019",
      enddate: "10 May 2019",
    },
    {
      id: 2,
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Invoice Goal",
      progress: 100,
      subject: "Test Goal",
      startdate: "7 May 2019",
      enddate: "10 May 2019",
    },
    {
      id: 3,
      description: "Lorem ipsum dollar",
      status: "Active",
      type: "Project Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2019",
      enddate: "10 May 2019",
    },
    {
      id: 4,
      description: "Lorem ipsum dollar",
      status: "Inactive",
      type: "Employee Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2019",
      enddate: "10 May 2019",
    },
    {
      id: 5,
      description: "Lorem ipsum dollar",
      status: "Inactive",
      type: "Invoice  Goal",
      progress: 73,
      subject: "Test Goal",
      startdate: "7 May 2019",
      enddate: "10 May 2019",
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
      title: "Goal Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      sorter: (a, b) => a.subject.length - b.subject.length,
    },
    {
      title: "Target Achievement",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Start Date",
      dataIndex: "startdate",
      sorter: (a, b) => a.startdate.length - b.startdate.length,
    },
    {
      title: "End Date",
      dataIndex: "enddate",
      sorter: (a, b) => a.enddate.length - b.enddate.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
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
      title: "Progress",
      dataIndex: "progress",
      render: (text) => (
        <span>
          <p className="mb-1">Completed {text}%</p>
          <div className="progress" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-primary progress-sm"
              style={{ width: "73%", height: "10px" }}
            />
          </div>
        </span>
      ),
      sorter: (a, b) => a.progress.length - b.progress.length,
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
              data-bs-target="#edit_goal">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_goal">
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
          <title>Goal - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Goal Tracking</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Goal Tracking</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_goal">
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
        {/* Add Goal Modal */}
        <div id="add_goal" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Goal Tracking</h5>
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
                        <label className="col-form-label">Goal Type</label>
                        <select className="select">
                          <option>Invoice Goal</option>
                          <option>Event Goal</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Subject</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">
                          Target Achievement
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          Start Date <span className="text-danger">*</span>
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
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          End Date <span className="text-danger">*</span>
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
                      <div className="input-block">
                        <label>
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={""}
                        />
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
        {/* /Add Goal Modal */}
        {/* Edit Goal Modal */}
        <div id="edit_goal" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Goal Tracking</h5>
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
                        <label className="col-form-label">Goal Type</label>
                        <select className="select">
                          <option>Invoice Goal</option>
                          <option>Event Goal</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Subject</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Test Goal"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">
                          Target Achievement
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Lorem ipsum dollar"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          Start Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate3}
                            onChange={handleDateChange3}
                            className="form-control floating datetimepicker"
                            type="date"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label>
                          End Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate4}
                            onChange={handleDateChange4}
                            className="form-control floating datetimepicker"
                            type="date"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="input-block">
                        <label htmlFor="customRange">Progress</label>
                        <input
                          type="range"
                          className="form-control-range custom-range"
                          id="customRange"
                        />
                        <div className="mt-2" id="result">
                          Progress Value: <b />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label>
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={"Lorem ipsum dollar"}
                        />
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
        {/* /Edit Goal Modal */}
        {/* Delete Goal Modal */}
        <div className="modal custom-modal fade" id="delete_goal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Goal Tracking List</h3>
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
        {/* /Delete Goal Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default GoalTracking;
