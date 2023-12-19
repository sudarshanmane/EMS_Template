import { Form, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import { Link } from "react-router-dom";
import {
  addCompanyPolicy,
  deleteCompanyPolicy,
  getCompanyPolicy,
  updateCompanyPolicy,
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CompanyPolicies = () => {
    const [url, setUrl] = useState(URLS.GET_COMPANY_POLICY_URL);

  const dispatch = useDispatch();
  const [allCompanyPolicies, setAllCompanyPolicies] = useState([]);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [focused, setFocused] = useState(false);
  const [allMileage, setAllMileage] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editMileageData, setEditMileageData] = useState(null);
  const [deleteMileageData, setDeleteMileageData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

 

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

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
    dispatch(getCompanyPolicy({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchCompanyData(url) {
    dispatch(getCompanyPolicy({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchCompanyData(url);
  }, []);

  const companyselector = useSelector((state) => state.getcompanypolicy);

  useEffect(() => {
    if (companyselector) {
      const allCompanyPolicies = companyselector.map((element) => {
        return {
                 id: element.id,
                 expense_amt_limit: element.expense_amt_limit,
                 receipt_require_lmt: element.receipt_require_lmt,
        };
      });
      setAllCompanyPolicies(allCompanyPolicies);
    }
  }, [companyselector]);

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
      title: "Expense Amount Limit ",
      dataIndex: "expense_amt_limit",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Require limit",
      dataIndex: "receipt_require_lmt",
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
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Company Policies</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">General Policies </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_mileage"
                >
                  <i className="fa fa-plus" /> Add Policy
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
        

          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: allCompanyPolicies.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={allCompanyPolicies}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Add Expense Modal */}
        <div id="add_mileage" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Policy</h5>
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
                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          // {...register("override_general_policy")}
                        />{" "}
                        Expense Amount Limit Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number" 
                           {...register("expense_amt_limit")}
                           />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          // {...register("override_general_policy")}
                        />{" "}
                        Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number"
                           {...register("receipt_require_lmt")}
                            />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("make_description_mandotary")}
                          />{" "}
                          Make Description Mandatory
                        </label>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("allow_uncategorized_expe_to_be_part_of_expense_report")}
                          />{" "}
                          Allow Uncategorized Expenses To Be The Part Of Expense
                          Report
                        </label>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        data-bs-dismiss="modal"
                      >
                        Save
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
                <h5 className="modal-title">Update Policy</h5>
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
                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          // {...register("override_general_policy")}
                        />{" "}
                        Expense Amount Limit Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number" 
                           {...register("expense_amt_limit")}
                           />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          // {...register("override_general_policy")}
                        />{" "}
                        Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number"
                           {...register("receipt_require_lmt")}
                            />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("make_description_mandotary")}
                          />{" "}
                          Make Description Mandatory
                        </label>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("allow_uncategorized_expe_to_be_part_of_expense_report")}
                          />{" "}
                          Allow Uncategorized Expenses To Be The Part Of Expense
                          Report
                        </label>
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
    </>
  );
};

export default CompanyPolicies;
