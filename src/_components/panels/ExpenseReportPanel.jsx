/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table, Space, Button, Modal } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { getReportList, deleteReportAction, updateReportAction } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import Offcanvas from "../../Entryfile/offcanvance";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import AddReport from "../screens/AddReport";

const ExpenseReport = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [allReportList, setAllReportList] = useState([]);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [viewReportData, setViewReportData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editReportData, setEditReportData] = useState(null);
  const [deleteReportData, setDeleteReportData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const url = URLS.GET_REPORT_LIST_URL;

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleView = (record) => {
    setViewReportData(record);
    setIsAddFormVisible(false);
  };

  const handleEdit = (record) => {
    setEditReportData(record);
    setIsAddFormVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteReportData(record);
    setIsDeleteConfirmationVisible(true);
  };
  
  const handleDeleteConfirmation = () => {
      const deletedReportId = deleteReportData.id;
      dispatch(deleteReportAction({ id: deletedReportId }));
      setIsDeleteConfirmationVisible(false);
      setAllReportList((prevItems) =>
        prevItems.filter((item) => item.id !== deletedReportId)
      );   
  };
  
  function getPageDetails(url) {
    dispatch(getReportList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchReportData(url) {
    dispatch(getReportList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchReportData(url);
  }, []);

  const reportPanelSelector = useSelector((state) => state.getreportlist);

  useEffect(() => {
    if (reportPanelSelector) {
      const allReportList = reportPanelSelector.map((element,index) => {
        return {
          id: index+1,
          description: element.description,
          start_date: element.start_date,
          end_date: element.end_date,
        };
      });
      setAllReportList(allReportList);
    }
  }, [reportPanelSelector]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.end_date.length - b.end_date.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            aria-expanded="false"
          >
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
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Space size="small">
          <Button
            type="success"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
    checkStrictly: true,
  };
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
                <h3 className="page-title">Expense Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Expense Report</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link to="/home/addreport" className="btn add-btn">
                  <i className="fa fa-plus" /> Add Report
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div
                className={
                  focused
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }
              >
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <label className="focus-label">Search</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
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
            <div className="col-sm-6 col-md-3">
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
            <div className="col-sm-6 col-md-3">
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
                    total: allReportList ? allReportList.length : 0,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={allReportList}
                  rowKey={(record) => record.id}
                />
                <Modal
                  title={
                    editReportData
                      ? "Update Report Details"
                      : "Add Report Details"
                  }
                  open={isAddFormVisible}
                  onCancel={() => setIsAddFormVisible(false)}
                  onOk={() => setIsAddFormVisible(false)}
                  width={1000}
                  footer={null}
                >
                  <AddReport
                    initialData={editReportData || null}
                    setIsAddFormVisible={setIsAddFormVisible}
                    url={url}
                    isAddForm={editReportData}
                  />
                </Modal>
                <Modal
                  title="Confirm Delete"
                  open={isDeleteConfirmationVisible}
                  onOk={handleDeleteConfirmation}
                  onCancel={() => setIsDeleteConfirmationVisible(false)}
                >
                  Are you sure you want to delete this item?
                </Modal>
                <Modal
                  title={
                    viewReportData ? "View Report" : "Update Report Details"
                  }
                  open={viewReportData}
                  onCancel={() => {
                    setIsAddFormVisible(false);
                    setViewReportData(null);
                  }}
                  footer={null}
                >
                  {viewReportData ? (
                    <div>
                      <p>Sr.No: {viewReportData.id}</p>
                      <p>Description: {viewReportData.description}</p>
                      <p>Start Date: {viewReportData.start_date}</p>
                      <p>End Date: {viewReportData.end_date}</p>
                    </div>
                  ) : (
                    <AddReport
                      initialData={editReportData || null}
                      url={url}
                      setIsAddFormVisible={setIsAddFormVisible}
                      isAddForm={editReportData}
                    />
                  )}
                </Modal>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};

export default ExpenseReport;
