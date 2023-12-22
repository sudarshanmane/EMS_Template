import { Form, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import { Link } from "react-router-dom";

import {
  addMileage,
  deleteMileage,
  getMileage,
  updateMileage,
  fetchCategory,
} from "../../store/Action/Actions";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Mileage = () => {
  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [focused, setFocused] = useState(false);
  const [allMileage, setAllMileage] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editMileageData, setEditMileageData] = useState(null);
  const [deleteMileageData, setDeleteMileageData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const url = URLS.GET_MILEAGE_URL;
  const fetchurl = URLS.FETCH_CATEGORY_URL;

  const DefaultUnit_drop = [
    { value: "Km", label: "Km" },
    { value: "Mile", label: "Mile" },
  ];

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

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

  const onSubmit = (values) => {
    dispatch(addMileage(values));
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditMileageData(record);
    setValue("default_unit", record.default_unit);
    setValue("date", record.date);
    setValue("rate", record.rate);
    setValue("default_category", record.default_category);
  };

  const onUpdate = (values) => {
    dispatch(updateMileage({ id: editMileageData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  function getPageDetails(url) {
    dispatch(getMileage({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchMileageData(url) {
    dispatch(getMileage({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchMileageData(url);
  }, []);

  function fetchPageDetails(fetchurl) {
    dispatch(fetchCategory({ payload: {}, URL: fetchurl }));
  }

  useEffect(() => {
    fetchPageDetails(fetchurl);
  }, []);

  function fetchCategoryData(fetchurl) {
    dispatch(fetchCategory({ payload: {}, URL: fetchurl }));
  }

  useEffect(() => {
    fetchCategoryData(fetchurl);
  }, []);

  const mileageSelector = useSelector((state) => state.getMileageSuccess);

  useEffect(() => {
    if (mileageSelector) {
      const allMileage = mileageSelector.map((element) => {
        return {
          id: element.id,
          date: element.date,
          rate: element.rate,
          default_category: element.default_category,
          default_unit: element.default_unit,
        };
      });
      setAllMileage(allMileage);
    }
  }, [mileageSelector]);

  const categorySelector = useSelector((state) => state.fetchCategorySuccess);

  const addMileageSelector = useSelector((state) => state.addMileageresult);

  useEffect(() => {
    if (addMileageSelector) {
      dispatch(getMileage({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [addMileageSelector]);

  const updatemilageSelector = useSelector(
    (state) => state.updateMileageResult
  );

  useEffect(() => {
    if (updatemilageSelector) {
      dispatch(getMileage({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatemilageSelector]);

  const deleteMileageSelector = useSelector(
    (state) => state.deleteMileageSuccess
  );

  useEffect(() => {
    if (deleteMileageSelector) {
      dispatch(getMileage({ payload: {}, URL: url }));
    }
  }, [deleteMileageSelector]);

  const DeleteMileage = (record) => {
    setDeleteMileageData(record);
  };

  const onDelete = () => {
    const deletedMileageId = deleteMileageData.id;
    dispatch(deleteMileage({ id: deletedMileageId }));
    setIsDeleteConfirmationVisible(false);
    setAllMileage((prevItems) =>
      prevItems.filter((item) => item.id !== deletedMileageId)
    );
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Start Date",
      dataIndex: "date",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Mileage Rate",
      dataIndex: "rate",
      sorter: (a, b) => a.end_date.length - b.end_date.length,
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
              data-bs-target="#edit_mileage"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_mileage"
              onClick={() => {
                DeleteMileage(record);
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
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Mileage Report</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_mileage"
                >
                  <i className="fa fa-plus" /> Add Mileage
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
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
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* /Search Filter */}

          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Company Policies</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allMileage.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allMileage}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Expense Modal */}
        <div id="add_mileage" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Mileage</h5>
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
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label>Default Unit</label>
                        <select
                          className="form-control"
                          {...register("default_unit")}
                        >
                          <option value="">Select </option>
                          {DefaultUnit_drop?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">
                          Default Category
                        </label>

                        <select
                          className="form-control"
                          {...register("default_category")}
                        >
                          <option value="">Select </option>
                          {categorySelector?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.category_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Mileage Rate</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...register("rate")}
                        />
                      </div>
                    </div>

                    <div className="input-block">
                      <label className="col-form-label" id="date">
                        Start Date
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("date", formattedDate);
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
          id="edit_mileage"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Mileage</h5>
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
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label>Default Unit</label>
                        <select
                          className="form-control"
                          {...updateregister("default_unit")}
                        >
                          <option value="">Select </option>
                          {DefaultUnit_drop?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-block">
                        <label className="col-form-label">
                          Default Category
                        </label>
                        <select
                          className="form-control"
                          {...updateregister("default_category")}
                        >
                          <option value="">Select </option>
                          {categorySelector?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.category_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Mileage Rate</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...updateregister("rate")}
                        />
                      </div>
                    </div>

                    <div className="input-block">
                      <label className="col-form-label col-lg-6" id="date">
                        Start Date
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) => {
                                const formattedDate = formatDate(date);
                                field.onChange(formattedDate);
                                setValue("date", formattedDate);
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
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Update
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
          id="delete_mileage"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Mileage</h3>
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

export default Mileage;
