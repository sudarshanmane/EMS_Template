/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import Offcanvas from "../../Entryfile/offcanvance";
import AddAsset from "../../_components/modelbox/AddAsset";

const Assets = () => {
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  const data = [
    {
      id: 1,
      assetuser: "Bernardo Galaviz",
      assetname: "Dell Laptop",
      assetid: "AST-0001",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 2,
      assetuser: "Catherine Manseau",
      assetname: "Canon Portable Printer",
      assetid: "AST-0002",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 3,
      assetuser: "Jeffery Lalor",
      assetname: "Dell Laptop",
      assetid: "AST-0003",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 4,
      assetuser: "Jeffrey Warden",
      assetname: "Seagate Harddisk",
      assetid: "AST-0004",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "300",
      status: "Pending",
    },
    {
      id: 5,
      assetuser: "John Due",
      assetname: "Canon Portable Printer",
      assetid: "AST-0005",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "300",
      status: "Approved",
    },
    {
      id: 6,
      assetuser: "John Smith",
      assetname: "Seagate Harddisk",
      assetid: "AST-0006",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "300",
      status: "Approved",
    },
    {
      id: 7,
      assetuser: "Lesley Grauer",
      assetname: "Dell Laptop",
      assetid: "AST-0007",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "300",
      status: "Approved",
    },
    {
      id: 8,
      assetuser: "Loren Gatlin",
      assetname: "Seagate Harddisk",
      assetid: "AST-0008",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "2500",
      status: "Approved",
    },
    {
      id: 9,
      assetuser: "Mike Litorus",
      assetname: "Canon Portable Printere",
      assetid: "AST-0009",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 10,
      assetuser: "Richard Miles",
      assetname: "Dell Laptop",
      assetid: "AST-00010",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 11,
      assetuser: "Tarah Shropshire",
      assetname: "Seagate Harddisk",
      assetid: "AST-00011",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 12,
      assetuser: "Wilmer Deluna",
      assetname: "Canon Portable Printer",
      assetid: "AST-00012",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2013",
      amount: "2500",
      status: "Returned",
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
      title: "Asset User",
      dataIndex: "assetuser",
      sorter: (a, b) => a.assetuser.length - b.assetuser.length,
    },
    {
      title: "Asset Name",
      dataIndex: "assetname",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.assetname.length - b.assetname.length,
    },
    {
      title: "Asset Id",
      dataIndex: "assetid",
      sorter: (a, b) => a.assetid.length - b.assetid.length,
    },
    {
      title: "Purchase Date",
      dataIndex: "purchasedate",
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },

    {
      title: "Warranty",
      dataIndex: "warranty",
      sorter: (a, b) => a.warranty.length - b.warranty.length,
    },

    {
      title: "Warranty End",
      dataIndex: "warrantyend",
      sorter: (a, b) => a.warrantyend.length - b.warrantyend.length,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
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
                text === "Pending"
                  ? "far fa-dot-circle text-danger"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-info"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Returned
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
              data-bs-target="#edit_asset">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_asset">
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
          <title>Assets - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Assets</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Assets</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_asset">
                  <i className="fa fa-plus" /> Add Asset
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div
                className={
                  focused
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }>
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option value> -- Select -- </option>
                  <option value={0}> Pending </option>
                  <option value={1}> Approved </option>
                  <option value={2}> Returned </option>
                </select>
                <label className="focus-label">Status</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="input-block form-focus select-focus">
                    <div>
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
                <div className="col-md-6 col-sm-6">
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
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
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
                  // onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Asset Modal */}
        <AddAsset />
        {/* /Add Asset Modal */}
        {/* Edit Asset Modal */}
        <div id="edit_asset" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
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
                      <div className="input-block">
                        <label>Asset Name</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Dell Laptop"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Asset Id</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="#AST-0001"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Purchase Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate3}
                            onChange={handleDateChange3}
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Purchase From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Manufacturer</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Model</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Serial Number</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Supplier</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Condition</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Warranty</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="In Months"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Value</label>
                        <input
                          placeholder="$1800"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Asset User</label>
                        <select className="select">
                          <option>John Doe</option>
                          <option>Richard Miles</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Status</label>
                        <select className="select">
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Deployed</option>
                          <option>Damaged</option>
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
        {/* /Delete Asset Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Assets;
