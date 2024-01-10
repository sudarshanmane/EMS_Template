/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import { format } from "date-fns";
import "antd/dist/antd.min.css";
import {
  getApprovedReportList,
  deleteReportAction,
  addReport,
  updateReportAction,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import Offcanvas from "../../Entryfile/offcanvance";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { Controller, useForm } from "react-hook-form";

const ExpenseApprovals = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);
  const [allReportList, setAllReportList] = useState([]);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [viewReportData, setViewReportData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const navigate = useNavigate();
  const url = URLS.GET_APPROVED_REPORT_LIST_URL;

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const onSubmit = (values) => {
    dispatch(addReport(values));
  };

  const viewReportApproved = (record) => {
    setViewReportData(record);
    setIsAddFormVisible(false);
    navigate("/home/viewReportApproved", { state: record });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const { register: approveregister, handleSubmit: handleApprove } = useForm(
    {}
  );

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  function getPageDetails(url) {
    dispatch(getApprovedReportList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchReportData(url) {
    dispatch(getApprovedReportList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchReportData(url);
  }, []);

  const reportPanelSelector = useSelector(
    (state) => state.getapprovedreportlist
  );

  useEffect(() => {
    if (reportPanelSelector) {
      const allReportList = reportPanelSelector.map((element) => {
        return {
          id: element.id,
          report_number: element.report_number,
          description: element.description,
          start_date: element.start_date,
          end_date: element.end_date,
          status: element.status,
        };
      });
      setAllReportList(allReportList);
    }
  }, [reportPanelSelector]);

  const addreportPanelSelector = useSelector((state) => state.addreportresult);

  useEffect(() => {
    if (addreportPanelSelector) {
      dispatch(getApprovedReportList({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [addreportPanelSelector]);

  const columns = [
    {
      title: "Report No",
      dataIndex: "report_number",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => <span> {text}</span>,
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
    },
    {
      title: "Action",
      render: (record) =>{
        return <div className="dropdown dropdown-action text-end">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              to={`/home/viewReportApproved/${record.id}`}
              className="dropdown-item"
              onClick={() => viewReportApproved(record)}
            >
              <i className="fa fa-eye m-r-5" /> View
            </Link>
          </div>
        </div>}
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
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active"> Reports </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto"></div>
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
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate1}
                    onChange={handleDateChange1}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">Date</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate2}
                    onChange={handleDateChange2}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">Date</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense Approval Reports</h4>
                </div>
                <div className="card-body">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Expense Modal */}

        {/* /Add Expense Modal */}

        {/* Edit Expense Modal */}

        {/* /Edit Expense Modal */}
        {/* Delete Category Modal */}

        {/* Delete Expense Modal */}
      </div>

      {/* /Page Content */}

      <Offcanvas />
    </>
  );
};

export default ExpenseApprovals;
