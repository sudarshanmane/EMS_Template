import React, { useState } from "react";
import { Layout, Button, Table } from "antd";
// import ReportPanel from "../../../Panels/ReportPanel";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Table } from "antd";
import { Avatar_03, Avatar_04 } from "../../../src/Entryfile/imagepath";
import "antd/dist/antd.min.css";
import {itemRender,onShowSizeChange} from "../../MainPage/paginationfunction"
import Offcanvas from "../../../src/Entryfile/offcanvance";

const { Content } = Layout;

function Reports() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  const navigate = useNavigate();

  const handleSeeReport = () => {
    if (fromDate === null || toDate === null) {
      alert("please select the date");
    } else {
      navigate("/home/reportpanel");
    }
  };
  const data = [
    {
      id: 1,
      item: "Dell Laptop",
      purchasefrom: "Amazon",
      purchasedate: "5 Jan 2019",
      image: Avatar_03,
      name: "John Doe",
      amount: "1215",
      paidby: "Cash",
      status: "Active",
    },
    {
      id: 2,
      item: "Mac System",
      purchasefrom: "Amazon",
      purchasedate: "5 Jan 2019",
      image: Avatar_04,
      name: "Richard Miles",
      amount: "1215",
      paidby: "Cheque",
      status: "Active",
    },
  ];
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
      title: "Expense Category",
      dataIndex: "item",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.item.length - b.item.length,
    },
    {
      title: "Purchase From",
      dataIndex: "purchasefrom",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Expense Date",
      dataIndex: "expensedate",
      sorter: (a, b) => a.expensedate.length - b.expensedate.length,
    },
    {
      title: "Report Date",
      dataIndex: "reportdate",
      sorter: (a, b) => a.reportdate.length - b.reportdate.length,
    },
   
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Paid By",
      dataIndex: "paidby",
      sorter: (a, b) => a.paidby.length - b.paidby.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            aria-expanded="false">
            <i
              className={
                text === "Pending"
                  ? "far fa-dot-circle text-danger"
                  : "far fa-dot-circle text-success"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
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
          <title>Expense Report - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">See Reports</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Report</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option>Select buyer</option>
                  <option>Loren Gatlin</option>
                  <option>Tarah Shropshire</option>
                </select>
                <label className="focus-label">Purchased By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={fromDate}
                    onChange={handleFromDateChange}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">From</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={toDate}
                    onChange={handleToDateChange}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <Link to="#" className="btn btn-success btn-block w-100"  onClick={handleSeeReport}>
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
      </div>
      <Offcanvas />
    </>
  );

}

export default Reports;
