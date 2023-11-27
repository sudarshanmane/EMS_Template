/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Avatar_02 } from "../../Entryfile/imagepath";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import Offcanvas from "../../Entryfile/offcanvance";

const Termination = () => {
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
      department: "Web Development",
      reason: "Lorem ipsum dollar",
      noticedate: "09 Jan 2019",
      terminationtype: "Misconduct",
      terminationdate: "09 Jan 2019",
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
      title: "Terminated Employee",
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
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Termination Type",
      dataIndex: "terminationtype",
      sorter: (a, b) => a.terminationtype.length - b.terminationtype.length,
    },
    {
      title: "Termination Date",
      dataIndex: "terminationdate",
      sorter: (a, b) => a.terminationdate.length - b.terminationdate.length,
    },

    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.length - b.reason.length,
    },

    {
      title: "Notice Date",
      dataIndex: "noticedate",
      sorter: (a, b) => a.noticedate.length - b.noticedate.length,
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
              data-bs-target="#edit_termination">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_termination">
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
          <title>Termination - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Termination</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Termination</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_termination">
                  <i className="fa fa-plus" /> Add Termination
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
        {/* Add Termination Modal */}
        <div
          id="add_termination"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Termination</h5>
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
                      Terminated Employee <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="input-block">
                    <label>
                      Termination Type <span className="text-danger">*</span>
                    </label>
                    <div className="add-group-btn">
                      <select className="select">
                        <option>Misconduct</option>
                        <option>Others</option>
                      </select>
                      <Link className="btn btn-primary" to="#">
                        <i className="fa fa-plus" /> Add
                      </Link>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Termination Date <span className="text-danger">*</span>
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
                  <div className="input-block">
                    <label>
                      Reason <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Notice Date <span className="text-danger">*</span>
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
        {/* /Add Termination Modal */}
        {/* Edit Termination Modal */}
        <div
          id="edit_termination"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Termination</h5>
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
                      Terminated Employee <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Termination Type <span className="text-danger">*</span>
                    </label>
                    <div className="add-group-btn">
                      <select className="select">
                        <option>Misconduct</option>
                        <option>Others</option>
                      </select>
                      <Link className="btn btn-primary" to="#">
                        <i className="fa fa-plus" /> Add
                      </Link>
                    </div>
                  </div>
                  <div className="input-block">
                    <label>
                      Termination Date <span className="text-danger">*</span>
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
                  <div className="input-block">
                    <label>
                      Reason <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-block">
                    <label>
                      Notice Date <span className="text-danger">*</span>
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
        {/* /Edit Termination Modal */}
        {/* Delete Termination Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_termination"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Termination</h3>
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
        {/* /Delete Termination Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Termination;
