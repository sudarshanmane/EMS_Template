import { Form, Input,Table } from "antd";
import React, { useEffect, useState } from "react";
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
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";

const Mileage = () => {
  const dispatch = useDispatch();
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [focused, setFocused] = useState(false);
  const [allMileage, setAllMileage] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editMileageData, setEditMileageData] = useState(null);
  const [deleteMileageData, setDeleteMileageData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const url = URLS.GET_MILEAGE_URL;
  const DefaultUnit_drop = [
    { value: "Km", label: "Km" },
    { value: "Mile", label: "Mile" },
  ];

  const DefaultCategory_drop = [
    { value: "3", label: "Lunch" },
    { value: "28", label: "dinner" },
  ];

  const {
    register,
    handleSubmit,
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

  const addMileageSelector = useSelector((state) => state.addMileageresult);

  useEffect(() => {
    if (addMileageSelector) {
      dispatch(getReportList({ payload: {}, URL: url }));
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
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Mileage Rate",
      dataIndex: "rate",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
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
          <div className="input-block row">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Mileage</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Mileage Report</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* <label className="col-lg-3 col-form-label">Default Unit</label> */}
            {/* <div className="col-lg-9">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_male"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="gender_male">
                  Km
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_female"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="gender_female">
                  Mile
                </label>
              </div>
            </div> */}
          </div>

          {/* <div className="input-block row">
            <label className="col-lg-3 col-form-label">Default Category</label>
            <div className="col-lg-9">
              <select className="select">
                <option>Travel reimbursment</option>
                <option value={1}>A+</option>
                <option value={2}>O+</option>
                <option value={3}>B+</option>
                <option value={4}>AB+</option>
              </select>
            </div>
          </div> */}

          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                {/* <h2>Mileage rates</h2>
                <p>
                  Any mileage expense recorded on or after the start date will
                  have the corresponding mileage rate. You can create a default
                  rate (created without specifying a data), which will be
                  applocable for mileage expenses recorded before the initial
                  start date.
                </p> */}

                <div className="table-responsive">
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
                  {/* Add Expense Modal */}
                  <div
                    id="add_mileage"
                    className="modal custom-modal fade"
                    role="dialog"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered modal-lg"
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
                        
                            <div className="col-sm-10">
                              <div className="input-block">
                                <label className="col-form-label">
                                  Default Unit
                                </label>
                                <select
                                  className="select"
                                  {...register("default_unit")}
                                >
                                  <option value="">Select </option>
                                  {DefaultUnit_drop?.map((data) => {
                                    return (
                                      <option value={data.value}>
                                        {data.label}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-10">
                              <div className="input-block">
                                <label className="col-form-label">
                                  Default Category
                                </label>
                                <select
                                  className="select"
                                  {...register("default_category")}
                                >
                                  <option value="">Select </option>
                                  {DefaultCategory_drop?.map((data) => {
                                    return (
                                      <option value={data.value}>
                                        {data.label}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
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
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block ">
                                  <label className="">Start Date</label>

                                  <Form.Item
                                    name="date"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please select the start date!",
                                      },
                                    ]}
                                  >
                                    <Input type="date" {...register("date")} />
                                  </Form.Item>
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
                      className="modal-dialog modal-dialog-centered modal-lg"
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
                            <div className="row">
                              <label className="col-form-label col-md-2">
                                Default Unit
                              </label>
                              <div className="col-md-10">
                                <div className="radio">
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      {...updateregister("default_unit")}
                                    />{" "}
                                    KM
                                  </label>
                                </div>
                                <div className="radio">
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      {...updateregister("default_unit")}
                                    />
                                    Mile
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block">
                                  <label>Default Category</label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    {...updateregister("default_category")}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
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
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-block ">
                                  <label className="">Start Date</label>

                                  <Form.Item
                                    name="date"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please select the start date!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      type="date"
                                      {...updateregister("date")}
                                    />
                                  </Form.Item>
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
                            <h3>Delete Category</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mileage;
