import React, { useEffect, useState, useMemo } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import {
  getApprove,
  getReject,
  getTravel,
  deleteTravel,
  updateTravel,
  submitTravelRequest,
  createTravel,
} from "../../store/Action/Actions";

import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { Helmet } from "react-helmet";

const TravelRequest = () => {
  const url = URLS.GET_TRAVEL_URL;
  const approveurl = URLS.GET_APPROVE_TRAVEL_REQUEST_APPROVALS_URL;
  const rejecturl = URLS.GET_REJECT_TRAVEL_REQUEST_APPROVALS_URL;

  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [allTravelList, setAllTravel] = useState([]);
  const [allApproveList, setAllApprove] = useState([]);
  const [allRejectedList, setAllRejected] = useState([]);
  const [deleteTravelData, setDeleteTravelData] = useState(null);
  const [editTravelData, setEditTravelData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const [selectedOption, setSelectedOption] = useState("allTravels");

  const filteredReportList = useMemo(() => {
    if (selectedOption === "allTravels") {
      return allTravelList;
    } else if (selectedOption === "approved") {
      return allApproveList;
    } else if (selectedOption === "rejected") {
      return allRejectedList;
    }
  }, [selectedOption, allTravelList, allApproveList, allRejectedList]);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
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

  const { handleSubmit: handleDelete } = useForm({});

  function fetchPageDetialsAproval(approveurl) {
    dispatch(getApprove({ payload: {}, URL: approveurl }));
  }

  useEffect(() => {
    fetchPageDetialsAproval(approveurl);
  }, []);

  const getApproveSelector = useSelector((state) => state.getApproveSuccess);

  useEffect(() => {
    if (getApproveSelector) {
      const allApproveList = getApproveSelector.map((element) => {
        return {
          id: element.id,
          emp: element.emp,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
          approved_budget: element.approved_budget, 
        };
      });
      setAllApprove(allApproveList);
    }
  }, [getApproveSelector]);

  function fetchPageDetialsReject(rejecturl) {
    dispatch(getReject({ payload: {}, URL: rejecturl }));
  }

  useEffect(() => {
    fetchPageDetialsReject(rejecturl);
  }, []);

  const getRejectSelector = useSelector((state) => state.getRejectSuccess);

  useEffect(() => {
    if (getRejectSelector) {
      const allRejectedList = getRejectSelector.map((element) => {
        return {
          id: element.id,
          emp: element.emp,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
          remark: element.remark,
        };
      });
      setAllRejected(allRejectedList);
    }
  }, [getRejectSelector]);

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const onSubmit = (values) => {
    dispatch(createTravel(values));
    setIsAddFormVisible(false);
  };

  const createTravelSelector = useSelector(
    (state) => state.createTravelSuccess
  );

  useEffect(() => {
    if (createTravelSelector) {
      const createdTravel = createTravelSelector;
      if (createdTravel) {
        dispatch(getTravel({ payload: {}, URL: url }));
        reset();
        setSubmittedValues(null);
      }
    }
  }, [createTravelSelector]);

  const onUpdate = (values) => {
    dispatch(updateTravel({ id: editTravelData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditTravelData(record);
    setValue("title", record.title);
    setValue("travel_purpose", record.travel_purpose);
    setValue("from_date", record.from_date);
    setValue("to_date", record.to_date);
    setValue("estimated_budget", record.estimated_budget);
  };

  const updatetravelSelector = useSelector((state) => state.updateTravelResult);
  useEffect(() => {
    if (updatetravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
      }
    setIsAddFormVisible(false);
  }, [updatetravelSelector]);

  
  const updateApprovalTravelSelector = useSelector((state) => state.updateTravelResult);
  useEffect(() => {
    if (updateApprovalTravelSelector) {
      dispatch(getApprove({ payload: {}, URL: approveurl }));    }
    setIsAddFormVisible(false);
  }, [updateApprovalTravelSelector]);

  const updateRejectedTravelSelector = useSelector((state) => state.updateTravelResult);
  useEffect(() => {
    if (updateRejectedTravelSelector) {
      dispatch(getReject({ payload: {}, URL: rejecturl }));    }
    setIsAddFormVisible(false);
  }, [updateRejectedTravelSelector]);

  function fetchPageDetialsGetTravel(url) {
    dispatch(getTravel({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchPageDetialsGetTravel(url);
  }, []);

  const getTravelSelector = useSelector((state) => state.getTravelSuccess);
  useEffect(() => {
    if (getTravelSelector) {
      const allTravelList = getTravelSelector.map((element) => {
        return {
          id: element.id,
          emp: element.emp,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
          status: element.status,
        };
      });
      setAllTravel(allTravelList);
    }
  }, [getTravelSelector]);

  const deleteTravelSelector = useSelector(
    (state) => state.deleteTravelSuccess
  );

  useEffect(() => {
    if (deleteTravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [deleteTravelSelector]);

  const DeleteTravel = (record) => {
    setDeleteTravelData(record);
  };

  const onDelete = () => {
    const deletedTravelId = deleteTravelData.id;
    dispatch(deleteTravel({ id: deletedTravelId }));
    setIsDeleteConfirmationVisible(false);
    setAllTravel((prevItems) =>
      prevItems.filter((item) => item.id !== deletedTravelId)
    );
  };

  const onSubmitTravelRequest = (record) => {
    dispatch(submitTravelRequest({ id: record.id, payload: record }));
  };

  const submitRequestSelector = useSelector((state)=>state.submitTravelRequestResult)

  useEffect(() => {
    if (submitRequestSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    }
  }, [submitRequestSelector]);

 
  const columns = [
    {
      title: "Employee",
      dataIndex: "emp",
      key: "emp",
      render: (emp) => (
        <span>
          {emp.id} - {emp.first_name} {emp.last_name}
        </span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Travel Purpose",
      dataIndex: "travel_purpose",
      key: "travel_purpose",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "From_Date",
      dataIndex: "from_date",
      key: "from_date",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "To_Date",
      dataIndex: "to_date",
      key: "to_date",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
  ];
  
  // Conditionally render Estimated Budget column for Travel Request and Approved tables
  if (selectedOption !== "rejected") {
    columns.push({
      title: "Estimated Budget",
      dataIndex: "estimated_budget",
      key: "estimated_budget",
      sorter: (a, b) => a.estimated_budget - b.estimated_budget,
    });
  }
  
  // Conditionally render Approved Budget column for the Approved table
  if (selectedOption === "approved") {
    columns.push({
      title: "Approved Budget",
      dataIndex: "approved_budget",
      key: "approved_budget",
      sorter: (a, b) => a.approved_budget - b.approved_budget,
    });
  } else if (selectedOption === "rejected") {
    // Conditionally render Remark column for the Rejected table
    columns.push({
      title: "Remark",
      dataIndex: "remark",
      key: "remark",
    });
  }
  
  // Add Action column for all tables
  columns.push({
    title: "Action",
    render: (record) => (
      <div className="dropdown dropdown-action text-end">
        <Link
          className="btn btn-success btn-sm m-r-5"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit_travel"
          onClick={() => onEdit(record)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
  
        {selectedOption !== "approved" && selectedOption !== "rejected" && (
          <>
            <Link
              className="btn btn-danger btn-sm m-r-5"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_travel"
              onClick={() => {
                DeleteTravel(record);
              }}
            >
              <i className="fa-regular fa-trash-can " />
            </Link>
  
            <button
              className="btn btn-info btn-sm m-r-5"
              onClick={() => {
                onSubmitTravelRequest(record);
              }}
              disabled={submittedValues && submittedValues.id === record.id}
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </>
        )}
      </div>
    ),
  });
  

  return (
    
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
                <li className="breadcrumb-item active">Travel Request</li>
              </ul>
            </div>

            {selectedOption !== "approved" && selectedOption !== "rejected" && (
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_travel"
                >
                  <i className="fa fa-plus" /> New Request
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Page Header */}

        {/* Search Filter */}
        <div className="row filter-row">
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
        {/* /Search Filter End */}

        <div className="row">
          <div className="col-sm-12">
            <div className="card mb-0">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedOption === "allTravels" && "active"
                      }`}
                      onClick={() => setSelectedOption("allTravels")}
                    >
                      Travel Request
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
                </ul>
              </div>

              <div className="card-body">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      selectedOption === "allTravels" && "show active"
                    }`}
                    id="allTravels"
                  >
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allTravelList.length,
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
                        total: allApproveList.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allApproveList}
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
                        total: allRejectedList.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allRejectedList}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Travel Request */}
        <div id="add_travel" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Travel Request</h5>
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
                        <label>Title</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("title")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Travel Purposes</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("travel_purpose")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="start_date">
                      From Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="from_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("from_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.from_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="to_date">
                      To Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="to_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("to_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.to_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Estimated Budget</label>
                        <input
                          className="form-control"
                          type="number"
                          {...register("estimated_budget")}
                        />
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

        {/* Add Travel Request */}

        {/* Edit Travel Modal */}

        <div id="edit_travel" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Travel Request</h5>
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
                        <label>Title</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("title")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Travel Purposes</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("travel_purpose")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="start_date">
                      From Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="from_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("from_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.from_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="to_date">
                      To Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="to_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("to_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.to_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Estimated Budget</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("estimated_budget")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      class="alert alert-success d-flex align-items-center"
                      role="alert"
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

        {/* Edit Travel Modal End */}

        {/* Delete Travel Modal */}

        <div
          className="modal custom-modal fade"
          id="delete_travel"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Travel</h3>
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
        {/* Delete Travel Modal End*/}
      </div>
    </div>
  );
};

export default TravelRequest;
