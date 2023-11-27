/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
} from "../../../Entryfile/imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "antd/dist/antd.min.css";
import Offcanvas from "../../../Entryfile/offcanvance";

const TrainingList = () => {
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
      trainingtype: "Node Training",
      image: Avatar_02,
      name: "John Doe",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2019 - 10 May 2019",
      status: "Active",
      cost: "400",
    },
    {
      id: 2,
      trainingtype: "Git Training",
      image: Avatar_05,
      name: "Richard Miles",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2019 - 10 May 2019",
      status: "Active",
      cost: "400",
    },
    {
      id: 3,
      trainingtype: "Swift Training",
      image: Avatar_11,
      name: "John Smith",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2019 - 10 May 2019",
      status: "Active",
      cost: "400",
    },
    {
      id: 4,
      trainingtype: "Html Training",
      image: Avatar_10,
      name: "Mike Litorus",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2019 - 10 May 2019",
      status: "Inactive",
      cost: "400",
    },
    {
      id: 5,
      trainingtype: "Laravel Training",
      image: Avatar_09,
      name: "Wilmer Deluna",
      description: "Lorem ipsum dollar",
      timeduration: "7 May 2019 - 10 May 2019",
      status: "Inactive",
      cost: "800",
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
      title: "Traning Type",
      dataIndex: "trainingtype",
      sorter: (a, b) => a.trainingtype.length - b.trainingtype.length,
    },
    {
      title: "Trainer",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/employee-profile">
            {text} <span>{record.name}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee",
      dataIndex: "employee",
      render: () => (
        <ul className="team-members">
          <li>
            <Link to="#" title="Bernardo Galaviz" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_10} />
            </Link>
          </li>
          <li>
            <Link to="#" title="Richard Miles" data-bs-toggle="tooltip">
              <img alt="" src={Avatar_09} />
            </Link>
          </li>
          <li className="dropdown avatar-dropdown">
            <Link
              to="#"
              className="all-users dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              +15
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="avatar-group">
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_02} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_09} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_10} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_05} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_11} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_12} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_13} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_01} />
                </Link>
                <Link className="avatar avatar-xs" to="#">
                  <img alt="" src={Avatar_16} />
                </Link>
              </div>
              <div className="avatar-pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ),
      sorter: (a, b) => a.employee.length - b.employee.length,
    },
    {
      title: "Time Duration",
      dataIndex: "timeduration",
      sorter: (a, b) => a.timeduration.length - b.timeduration.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.cost.length - b.cost.length,
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
              data-bs-target="#edit_training">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_training">
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
          <title>Training - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Training</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Training</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_training">
                  <i className="fa fa-plus" /> Add New{" "}
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
        {/* Add Training List Modal */}
        <div
          id="add_training"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Training</h5>
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
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Training Type</label>
                        <select className="select">
                          <option>Node Training</option>
                          <option>Swift Training</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Trainer</label>
                        <select className="select">
                          <option>Mike Litorus </option>
                          <option>John Doe</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Employees</label>
                        <select className="select">
                          <option>Bernardo Galaviz</option>
                          <option>Jeffrey Warden</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">
                          Training Cost <span className="text-danger">*</span>
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
                        </div>
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
        {/* /Add Training List Modal */}
        {/* Edit Training List Modal */}
        <div
          id="edit_training"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Training List</h5>
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
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Training Type</label>
                        <select className="select">
                          <option>Node Training</option>
                          <option>Swift Training</option>
                          <option>Git Training</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Trainer</label>
                        <select className="select">
                          <option>Mike Litorus </option>
                          <option>John Doe</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">Employees</label>
                        <select className="select">
                          <option>Bernardo Galaviz</option>
                          <option>Jeffrey Warden</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-block">
                        <label className="col-form-label">
                          Training Cost <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="$400"
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
                        </div>
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
                          defaultValue={"Lorem ipsum ismap"}
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
        {/* /Edit Training List Modal */}
        {/* Delete Training List Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_training"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Training List</h3>
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
        {/* /Delete Training List Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default TrainingList;
