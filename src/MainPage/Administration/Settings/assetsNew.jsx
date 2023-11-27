import "antd/dist/antd.css";
import React, { useState } from "react";
import {
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  delete_icon,
  edit_icon,
  keyboard,
  laptop,
  mouse,
} from "../../../Entryfile/imagepath";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AssetsNew = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const EndDateChange = (date) => {
    setEndDate(date);
  };
  const data = [
    {
      id: 1,
      image: laptop,
      categoryname: "Laptop",
      assetid: "AST-001",
      category: "Laptop",
      department: "UI",
      profileimg: Avatar_05,
      name: "John Paul Raj",
      mailid: "john@dreamguystech.com",
      status: "Assigned",
    },
    {
      id: 2,
      image: laptop,
      categoryname: "Laptop",
      assetid: "AST-002",
      category: "Computer",
      department: "PHP",
      profileimg: Avatar_02,
      name: "Vinod Selvaraj",
      mailid: "vinod@dreamguystech.com",
      status: "Assigned",
    },
    {
      id: 3,
      image: keyboard,
      categoryname: "Dell Keyboard",
      assetid: "AST-003",
      category: "Keyboard",
      department: "SEO",
      profileimg: Avatar_03,
      name: "Harika",
      mailid: "harika@dreamguystech.com",
      status: "Assigned",
    },
    {
      id: 4,
      image: mouse,
      categoryname: "Logitech Mouse",
      assetid: "AST-004",
      category: "Mouse",
      department: "Android",
      profileimg: Avatar_04,
      name: "Mythili",
      mailid: "mythili@dreamguystech.com",
      status: "Assigned",
    },
    {
      id: 5,
      image: laptop,
      categoryname: "Laptop",
      assetid: "AST-005",
      category: "Computer",
      department: "UI",
      profileimg: Avatar_05,
      name: "John Paul Raj",
      mailid: "john@dremguystech.com",
      status: "Assigned",
    },
    {
      id: 6,
      image: laptop,
      categoryname: "Laptop",
      assetid: "AST-006",
      category: "Computer",
      department: "PHP",
      profileimg: Avatar_02,
      name: "Vinod Selvaraj",
      mailid: "vinod@dreamguystech.com",
      status: "Assigned",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Name",
      dataIndex: "categoryname",
      render: (text, record) => (
        <Link to="/app/administrator/assets-details" className="table-imgname">
          <img src={record.image} className="me-2" alt="Laptop Image" />
          <span>{text}</span>
        </Link>
      ),
      sorter: (a, b) => a.categoryname.length - b.categoryname.length,
    },
    {
      title: "Asset ID",
      dataIndex: "assetid",
      sorter: (a, b) => a.assetid.length - b.assetid.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Alloctaed to",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.profileimg} />
          </Link>
          <Link to="/app/profile/employee-profile">
            {text} <span>{record.mailid}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Status",
      dataIndex: "status",

      render: (text) => (
        <div className="dropdown">
          <Link
            to=""
            className="btn btn-white btn-sm btn-rounded text-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {text}{" "}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              Pending
            </Link>
            <Link className="dropdown-item" to="#">
              Approved
            </Link>
            <Link className="dropdown-item" to="#">
              Returned
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="table-actions d-flex">
          <Link
            className="delete-table me-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#editnew_asset">
            <img src={edit_icon} alt="Edit Icon" />
          </Link>
          <Link
            className="delete-table confirm-text"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_asset">
            <img src={delete_icon} alt="Delete Icon" />
          </Link>
        </div>
      ),
    },
  ];

  const [category, setCategory] = useState([
    { id: 1, text: "Category 1" },
    { id: 2, text: "Category 2" },
  ]);
  return (
    <div className="main-wrapper">
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Assets</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Assets</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <ul className="split-head">
                  <li>
                    <div className="bookingrange btn-white ">
                      {/* <i className="far fa-calendar-alt me-2" />
                      <span>November 22, 2022 - November 28, 2022</span>
                      <i className="fas fa-chevron-down ms-2" /> */}

                      <DateRangePicker
                        initialSettings={{
                          endDate: new Date("2020-08-11T12:30:00.000Z"),
                          ranges: {
                            "Last 30 Days": [
                              new Date("2020-07-12T04:57:17.076Z"),
                              new Date("2020-08-10T04:57:17.076Z"),
                            ],
                            "Last 7 Days": [
                              new Date("2020-08-04T04:57:17.076Z"),
                              new Date("2020-08-10T04:57:17.076Z"),
                            ],
                            "Last Month": [
                              new Date("2020-06-30T18:30:00.000Z"),
                              new Date("2020-07-31T18:29:59.999Z"),
                            ],
                            "This Month": [
                              new Date("2020-07-31T18:30:00.000Z"),
                              new Date("2020-08-31T18:29:59.999Z"),
                            ],
                            Today: [
                              new Date("2020-08-10T04:57:17.076Z"),
                              new Date("2020-08-10T04:57:17.076Z"),
                            ],
                            Yesterday: [
                              new Date("2020-08-09T04:57:17.076Z"),
                              new Date("2020-08-09T04:57:17.076Z"),
                            ],
                          },
                          startDate: new Date("2020-08-10T04:30:00.000Z"),
                          timePicker: false,
                        }}>
                        <input
                          className="form-control col-4 input-range "
                          type="text"
                          custom="input-range"
                          style={{
                            width: 280,
                            position: "relative",
                          }}
                        />
                      </DateRangePicker>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="btn btn-whiteline">
                      <i className="fa fa-download me-2" aria-hidden="true" />
                      CSV
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-whiteline">
                      <i className="fa fa-filter me-2" aria-hidden="true" />
                      Filters
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn add-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#add_asset">
                      <i className="fa fa-plus" /> Add New Asset
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row">
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Total Assets</h6>
                <h4>20</h4>
              </div>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Allocated</h6>
                <h4>10</h4>
              </div>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Damaged</h6>
                <h4>2</h4>
              </div>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Repaired</h6>
                <h4>1</h4>
              </div>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Not Using</h6>
                <h4>7</h4>
              </div>
            </div>
            <div className="col-lg-2 d-flex">
              <div className="total-widget flex-fill">
                <h6>Lost Items</h6>
                <h4>2</h4>
              </div>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive table-newdatatable">
                <Table
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  className="table-striped"
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}

        {/* Add Asset Modal */}
        <div id="add_asset" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">Add New Asset</h5>
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
                      <div className="form-group">
                        <label>Asset Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Asset Id</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="AST-235"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group selectnew">
                        <label>Category</label>
                        <Select2
                          data={category}
                          options={{
                            placeholder: "Category 1",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Warranty</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            className="form-control datetimepicker"
                            type="date"
                            placeholderText="Start Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={endDate}
                            onChange={EndDateChange}
                            className="form-control datetimepicker"
                            type="date"
                            placeholderText="End Date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Type</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Brand</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Model</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Serial Number</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Vendor</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cost</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Asset Pictures</label>
                        <div className="file-upload-popup">
                          <input type="text" className="form-control" />
                          <div className="file-upload-popupcontent">
                            <input type="file" />
                            <span>Browse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btns">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Add Asset Modal */}

        {/* Edit Asset Modal */}
        <div
          id="editnew_asset"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">Edit Asset</h5>
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
                      <div className="form-group">
                        <label>Asset Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Asset Id</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="AST-235"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group selectnew">
                        <label>Category</label>
                        <Select2
                          data={category}
                          options={{
                            placeholder: "Category 1",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Warranty</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            className="form-control datetimepicker"
                            type="date"
                            placeholderText="Start Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>&nbsp;</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={endDate}
                            onChange={EndDateChange}
                            className="form-control datetimepicker"
                            type="date"
                            placeholderText="End Date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Type</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Brand</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Model</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Serial Number</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Vendor</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cost</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Asset Pictures</label>
                        <div className="file-upload-popup">
                          <input type="text" className="form-control" />
                          <div className="file-upload-popupcontent">
                            <input type="file" />
                            <span>Browse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btns">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Asset Modal */}
        {/* Delete Asset Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_asset"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Asset</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="#" className="btn btn-primary continue-btn">
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Asset Modal */}
      </div>
      {/* /Page Wrapper */}
    </div>
  );
};

export default AssetsNew;
