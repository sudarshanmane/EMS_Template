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
  const [url, setUrl] = useState(URLS.GET_TRAVEL_URL);
  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [allTravels] = useState([]);
  const [allTravelList, setAllTravel] = useState([]);
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
      return allTravelList.filter((report) => report.status === "Approved");
    } else if (selectedOption === "rejected") {
      return allTravelList.filter((report) => report.status === "Rejected");
    } 
  }, [selectedOption, allTravelList]);

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

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const onSubmit = async (values) => {
    await dispatch(createTravel(values));
    setSubmittedValues(values);
    setIsAddFormVisible(false);
  };

  const createTravelSelector = useSelector(
    (state) => state.createTravelSuccess
  );

  useEffect(() => {
    if (createTravelSelector && submittedValues) {
      const createdTravel = createTravelSelector;
      if (createdTravel) {
        dispatch(getTravel({ payload: {}, URL: url }));
        reset();
        setSubmittedValues(null);
      }
    }
  }, [createTravelSelector, submittedValues]);

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

  function getPageDetails(url) {
    dispatch(getTravel({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchPageDetials(url) {
    dispatch(getTravel({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchPageDetials(url);
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
    console.log("record", record.id);
    dispatch(submitTravelRequest({ id: record.id, payload: record }));
  };

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
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Travel Purpose",
      dataIndex: "travel_purpose",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "From_Date",
      dataIndex: "from_date",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },  
    {
      title: "To_Date",
      dataIndex: "to_date",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Estimated_Budget",
      dataIndex: "estimated_budget",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",  // Add this line to provide a unique key for the column
      sorter: (a, b) => a.status.length - b.status.length,
    },
    

    {
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
            <i className="fa fa-pencil" />
          </Link>

          <Link
            className="btn btn-danger btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_travel"
            onClick={() => {
              DeleteTravel(record);
            }}
          >
            <i className="fa fa-trash" />
          </Link>

          <button
            className="btn btn-info btn-sm m-r-5"
            onClick={() => {
              onSubmitTravelRequest(record);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </button>
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
                  <li className="breadcrumb-item active">Travel Request</li>
                </ul>
              </div>
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
                          total: allTravelList ? allTravelList.length : 0,
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
                          total: allTravelList ? allTravelList.length : 0,
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
    </>
  );
};

export default TravelRequest;
