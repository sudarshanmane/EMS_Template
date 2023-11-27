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
import {
  delete_icon,
  edit_icon,
  img1,
  keyboard,
  laptop,
  mouse,
} from "../../Entryfile/imagepath";

const AssetsCategory = () => {
  const data = [
    {
      id: 1,
      image: laptop,
      categoryname: "Laptop",
      createdon: "12/12/2022 at 11.23am",
    },
    {
      id: 2,
      image: laptop,
      categoryname: "Laptop",
      createdon: "12/12/2022 at 11.23am",
    },
    {
      id: 3,
      image: keyboard,
      categoryname: "Dell Keyboard",
      createdon: "12/12/2022 at 11.23am",
    },
    {
      id: 4,
      image: mouse,
      categoryname: "Logitech Mouse",
      createdon: "12/12/2022 at 11.23am",
    },
    {
      id: 5,
      image: laptop,
      categoryname: "Laptop",
      createdon: "12/12/2022 at 11.23am",
    },
    {
      id: 6,
      image: laptop,
      categoryname: "Laptop",
      createdon: "12/12/2022 at 11.23am",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Category Name",
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
      title: "Created On",
      dataIndex: "createdon",
      sorter: (a, b) => a.createdon.length - b.createdon.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="table-actions d-flex">
          <Link
            className="delete-table me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-asset"
            to="#">
            <img src={edit_icon} alt="Edit Icon" />
          </Link>
          <Link
            className="delete-table confirm-text"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_estimate">
            <img src={delete_icon} alt="Delete Icon" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="main-wrapper">
      {" "}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Category</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Category</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <ul className="split-head">
                  <li>
                    <Link
                      to="#"
                      className="btn add-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#add_asset">
                      <i className="fa-solid fa-plus" /> Add Category
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive table-newdatatable">
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
        {/* Edit Asset Modal */}
        <div id="edit_asset" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Asset</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Asset Name</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Dell Laptop"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Asset Id</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="#AST-0001"
                          readOnly=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Purchase Date</label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Purchase From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Manufacturer</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Model</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Serial Number</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Supplier</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Condition</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Warranty</label>
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
                      <div className="input-block mb-3">
                        <label className="col-form-label">Value</label>
                        <input
                          placeholder="$1800"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Asset User</label>
                        <select className="select">
                          <option>John Doe</option>
                          <option>Richard Miles</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Description</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-3">
                        <label className="col-form-label">Status</label>
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
        {/* /Delete Asset Modal */}
      </div>
      {/* /Page Wrapper */}
      <div>
        {/* add modal */}
        <div id="add_asset" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">Add Category</h5>
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Upload Category Icon</label>
                        <div className="d-flex align-items-center flex-wrap">
                          <div className="cat-upload me-3">
                            <i className="fas fa-plus" />
                            <input className="upload" type="file" />
                          </div>
                          <div className="cat-upload-view me-2">
                            <img src={img1} alt="img" />
                            <Link to="#" className="img-close">
                              <i className="fas fa-times" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section mt-2">
                    <button className="btn btn-primary submit-btns w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* add modal */}
        {/* edit modal */}
        <div id="edit-asset" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">Edit Category</h5>
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="laptop"
                        />
                      </div>
                      <div className="form-group">
                        <label>Upload Category Icon</label>
                        <div className="d-flex align-items-center flex-wrap">
                          <div className="cat-upload me-3">
                            <i className="fas fa-plus" />
                            <input className="upload" type="file" />
                          </div>
                          <div className="cat-upload-view me-2">
                            <img src={img1} alt="img" />
                            <Link to="#" className="img-close">
                              <i className="fas fa-times" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section mt-2">
                    <button className="btn btn-primary submit-btns w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* edit modal */}
        {/* Delete Estimate Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_estimate"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Category</h3>
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
        {/* /Delete Estimate Modal */}
      </div>
    </div>
  );
};

export default AssetsCategory;
