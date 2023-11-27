import React from "react";
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
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";

const AssetsReports = () => {
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
          <Link className="delete-table me-2" to="#">
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
                <h3 className="page-title">Reports</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="admin-dashboard.html">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Reports</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row filter-row mb-4">
            <div className="col-sm-6 col-md-3 col-xxl-3">
              <div className="form-group">
                <div className="cals-icon">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search by asset name"
                  />
                  <span className="icon-text">
                    <i className="fas fa-laptop" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xxl-3">
              <div className="form-group">
                <div className="cals-icon">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search by allocated name"
                  />
                  <span className="icon-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xxl-2">
              <div className="form-group ">
                <div className="cals-icon">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Asset ID"
                  />
                  <span className="icon-text">
                    <i className="fas fa-folder-open" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xxl-2">
              <div className="form-group">
                <div className="cal-icon">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Category"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-3 col-xxl-2"
              style={{ marginTop: 15 }}>
              <Link to="#" className="btn btn-primary w-100 text-capitalize">
                <i className="file-text " /> Generate Report
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive table-newdatatable"></div>

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
        {/* /Page Content */}
        {/* Delete Asset Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_asset"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Report</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="#"
                        className="btn btn-primary continue-btn"
                        data-bs-dismiss="modal">
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
    </div>
  );
};

export default AssetsReports;
