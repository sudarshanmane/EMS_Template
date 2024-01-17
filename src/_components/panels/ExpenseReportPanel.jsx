import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import { format } from "date-fns";
import "antd/dist/antd.min.css";
import {
  getReportList,
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

const ExpenseReport = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);
  const [allReportList, setAllReportList] = useState([]);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [viewReportData, setViewReportData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editReportData, setEditReportData] = useState(null);
  const [deleteReportData, setDeleteReportData] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const navigate = useNavigate();
  const url = URLS.GET_REPORT_LIST_URL;
  const [selectedOption, setSelectedOption] = useState("allReports");
  const filteredReportList = useMemo(() => {
    if (selectedOption === "allReports") {
      return allReportList;
    } else if (selectedOption === "approved") {
      return allReportList.filter((report) => report.status === "Approved");
    } else if (selectedOption === "rejected") {
      return allReportList.filter((report) => report.status === "Rejected");
    } else if (selectedOption === "reimbursed") {
      return allReportList.filter((report) => report.status === "Reimbursed");
    }
  }, [selectedOption, allReportList]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const { handleSubmit: handleDelete } = useForm({});

  const onSubmit = (values) => {
    dispatch(addReport(values));
  };

  const viewReport = (record) => {
    setViewReportData(record);
    setIsAddFormVisible(false);
    navigate("/home/viewReport", { state: record });
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditReportData(record);
    setValue("description", record.description);
    setValue("start_date", record.start_date);
    setValue("end_date", record.end_date);
  };

  const onUpdate = (values) => {
    dispatch(updateReportAction({ id: editReportData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  const onDelete = () => {
    const deletedReportId = deleteReportData.id;
    dispatch(deleteReportAction({ id: deletedReportId }));
    setIsDeleteConfirmationVisible(false);
    setAllReportList((prevItems) =>
      prevItems.filter((item) => item.id !== deletedReportId)
    );
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({});

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

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
      dispatch(getReportList({ payload: {}, URL: url }));
      reset();
    }
    setIsAddFormVisible(false);
  }, [addreportPanelSelector]);

  const updatereportPanelSelector = useSelector(
    (state) => state.updateReportResult
  );

  useEffect(() => {
    if (updatereportPanelSelector) {
      dispatch(getReportList({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatereportPanelSelector]);

  const deleteReportlSelector = useSelector(
    (state) => state.deleteReportSuccess
  );

  useEffect(() => {
    if (deleteReportlSelector) {
      dispatch(getReportList({ payload: {}, URL: url }));
    }
  }, [deleteReportlSelector]);

  const deleteReport = (record) => {
    setDeleteReportData(record);
  };

  const columns = [
    {
      title: "Report No",
      dataIndex: "report_number",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => <span> {text}</span>,
      // render: (text) => <strong>{text}</strong>,
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
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to={`/home/viewReport/${record.id}`}
            className="btn btn-primary btn-sm m-r-5"
            onClick={() => viewReport(record)}
          >
            <i className="fa fa-eye m-r-5" />
          </Link>
          <Link
            className="btn btn-success btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit_report"
            onClick={() => onEdit(record)}
          >
            <i className="fa fa-pencil m-r-5" />
          </Link>
          <Link
            className="btn btn-danger btn-sm"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_report"
            onClick={() => {
              deleteReport(record);
            }}
          >
            <i className="fa fa-trash m-r-5" />
          </Link>
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
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active"> Reports </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_report"
                >
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
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          selectedOption === "allReports" && "active"
                        }`}
                        onClick={() => setSelectedOption("allReports")}
                      >
                        Drafted Reports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          selectedOption === "approved" && "active"
                        }`}
                        onClick={() => setSelectedOption("approved")}
                      >
                        Approved
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          selectedOption === "rejected" && "active"
                        }`}
                        onClick={() => setSelectedOption("rejected")}
                      >
                        Rejected
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          selectedOption === "reimbursed" && "active"
                        }`}
                        onClick={() => setSelectedOption("reimbursed")}
                      >
                        Reimbursed
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${
                        selectedOption === "allReports" && "show active"
                      }`}
                      id="allReports"
                    >
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
                        dataSource={filteredReportList}
                        rowKey={(record) => record.id}
                      />
                    </div>
                    <div
                      className={`tab-pane fade ${
                        selectedOption === "approved" && "show active"
                      }`}
                      id="approved"
                    >
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
                        dataSource={filteredReportList}
                        rowKey={(record) => record.id}
                      />
                    </div>
                    <div
                      className={`tab-pane fade ${
                        selectedOption === "rejected" && "show active"
                      }`}
                      id="rejected"
                    >
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
                        dataSource={filteredReportList}
                        rowKey={(record) => record.id}
                      />
                    </div>
                    <div
                      className={`tab-pane fade ${
                        selectedOption === "reimbursed" && "show active"
                      }`}
                      id="reimbursed"
                    >
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
                        dataSource={filteredReportList}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Expense Modal */}
          <div
            id="add_report"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-md"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Expense Report</h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block">
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>Description</label>
                          <input
                            className="form-control"
                            type="text"
                            {...register("description")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="input-block">
                      <label className="col-form-label" id="start_date">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="start_date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("start_date", formattedDate);
                              }}
                              dateFormat="yyyy-MM-dd"
                              className="form-control"
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.start_date?.message}
                        </div>
                      </div>
                    </div>

                    <div className="input-block">
                      <label className="col-form-label" id="end_date">
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="end_date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("end_date", formattedDate);
                              }}
                              dateFormat="yyyy-MM-dd"
                              className="form-control"
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.end_date?.message}
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Expense Modal */}

          {/* Edit Expense Modal */}
          <div
            id="edit_report"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-md"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Expense Report</h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleUpdate(onUpdate)}>
                    <div className="input-block">
                      <div className="col-md-12">
                        <div className="input-block">
                          <label>Description</label>
                          <input
                            className="form-control"
                            type="text"
                            {...updateregister("description")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="input-block ">
                      <label className="col-form-label " id="start_date">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="start_date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("start_date", formattedDate);
                              }}
                              dateFormat="yyyy-MM-dd"
                              className="form-control"
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.start_date?.message}
                        </div>
                      </div>
                    </div>

                    <div className="input-block ">
                      <label className="col-form-label " id="end_date">
                        End Date <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="end_date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("end_date", formattedDate);
                              }}
                              dateFormat="yyyy-MM-dd"
                              className="form-control"
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.end_date?.message}
                        </div>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        data-bs-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Edit Expense Modal */}
          {/* Delete Category Modal */}
          <div
            className="modal custom-modal fade"
            id="delete_report"
            role="dialog"
          >
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
                          to=""
                          className="btn btn-primary continue-btn"
                          onClick={handleDelete(onDelete)}
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </Link>
                      </div>
                      <div className="col-6">
                        <Link
                          to=""
                          data-bs-dismiss="modal"
                          className="btn btn-primary cancel-btn"
                        >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Delete Expense Modal */}
          {/* /Page Content */}
        </div>
      </div>

      <Offcanvas />
    </>
  );
};

export default ExpenseReport;
