import React, { useEffect, useState } from "react";
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
  createTravel,
} from "../../store/Action/Actions";

import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";

const TravelRequestPannel = () => {
  const [url, setUrl] = useState(URLS.GET_TRAVEL_URL);
  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [allTravel, setAllTravel] = useState([]);
  const [deleteTravelData, setDeleteTravelData] = useState(null);
  const [editTravelData, setEditTravelData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

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

  const updatetravelSelector = useSelector((state) => state.updateTravelResult);
  useEffect(() => {
    if (updatetravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatetravelSelector]);

  const createTravelSelector = useSelector(
    (state) => state.createTravelSuccess
  );

  useEffect(() => {
    if (createTravelSelector && submittedValues) {
      const createdTravel = createTravelSelector;
      if (createdTravel) {
        dispatch(getTravel({ payload: {}, URL: url }));
        setSubmittedValues(null);
      }
    }
  }, [createTravelSelector, submittedValues]);

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditTravelData(record);
    setValue("title", record.title);
    setValue("travel_purpose", record.travel_purpose);
    setValue("from_date", record.from_date);
    setValue("to_date", record.to_date);
    setValue("estimated_budget", record.estimated_budget);
  };

  const onUpdate = (values) => {
    dispatch(updateTravel({ id: editTravelData.id, payload: values }));
    setIsEditFormVisible(false);
  };
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
      const allTravel = getTravelSelector.map((element) => {
        return {
          id: element.id,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
        };
      });
      setAllTravel(allTravel);
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

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "",
      key: "",
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
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
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
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_travel"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>

            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_travel"
              onClick={() => {
                DeleteTravel(record);
              }}
            >
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
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Travel Request</li>
                </ul>
                <div className="col-auto float-end ms-auto">
                  <Link
                    to="#"
                    className="btn add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_travel"
                  >
                    <i className="fa fa-plus" /> Add Travels
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
          {/* /Search Filter */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <lable className="card-title mb-0">Travel Request</lable>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allTravel.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allTravel}
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
                        <label>Employee Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register(" ")}
                        />
                      </div>
                    </div>
                  </div>

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

        {/* Edit Expense Modal */}

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
                        <label>Employee Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister(" ")}
                        />
                      </div>
                    </div>
                  </div>

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

        {/* Delete Category Modal */}

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
      </div>
    </>
  );
};

export default TravelRequestPannel;
