/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Avatar_04, Avatar_03, PlaceHolder } from "../../Entryfile/imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import {
  itemRender,
  onShowSizeChange,
} from "../../MainPage/paginationfunction";
import "antd/dist/antd.min.css";
import Offcanvas from "../../Entryfile/offcanvance";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryPanelAction,
  addCategoryAction,
  deleteCategorypanelAction,
} from "../../store/Action/Actions";
import { Controller, useForm } from "react-hook-form";

const CategoryTypePanel = () => {
  const [url, setUrl] = useState(URLS.GET_CATEGORY_PANEL_URL);
  const dispatch = useDispatch();
  const [allCategoryType, setAllCategoryType] = useState([]);
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [viewCategoryData, setViewCategoryData] = useState(null);
  const [editCategoryData, setEditCategoryData] = useState(null);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const {
    register: DeleteRegister,
    handleSubmit: handleDelete,
    control,
    reset,
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(addCategoryAction(values));
  };

  function getPageDetails(url) {
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  useEffect(() => {
    fetchcategorydata(url);
  }, []);

  function fetchcategorydata(url) {
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
  }

  const categoryselector = useSelector((state) => state.panelCategoryResult);

  useEffect(() => {
    if (categoryselector) {
      const allCategoryType = categoryselector.map((element) => {
        return {
          id: element.id,
          category_name: element.category_name,
          override_general_policy: element.override_general_policy,
          expense_amount_limit: element.expense_amount_limit,
          receipt_require_limit: element.receipt_require_limit,
          auto_approve_limit: element.auto_approve_limit,
          accounting_code: element.accounting_code,
        };
      });
      setAllCategoryType(allCategoryType);
    }
  }, [categoryselector]);

  const addCategorylSelector = useSelector((state) => state.categoryresult);

  useEffect(() => {
    if (addCategorylSelector) {
      dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [addCategorylSelector]);

  const deleteCategorylSelector = useSelector((state) => state.deletecategoryResult);

  useEffect(() => {
    if (deleteCategorylSelector) {
      dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
    }
  }, [deleteCategorylSelector]);

  const deleteCategory = (record) => {
    setDeleteCategoryData(record);
  };

  const onDelete = () => {
    const deletedCategoryId = deleteCategoryData.id;
    dispatch(deleteCategorypanelAction({ id: deletedCategoryId }));
    setIsDeleteConfirmationVisible(false);
    setAllCategoryList((prevItems) =>
      prevItems.filter((item) => item.id !== deletedCategoryId)
    );
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const handleDateChange3 = (date) => {
    setSelectedDate3(date);
  };
  const handleDateChange4 = (date) => {
    setSelectedDate4(date);
  };

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.item.length - b.item.length,
    },
    {
      title: "Category Name",
      dataIndex: "category_name",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Override Policy",
      dataIndex: "override_general_policy",
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },

    {
      title: "Expense Amount",
      dataIndex: "expense_amount_limit",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Require Limit",
      dataIndex: "receipt_require_limit",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.paidby.length - b.paidby.length,
    },
    {
      title: "Approve Limit",
      dataIndex: "auto_approve_limit",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Accounting Code",
      dataIndex: "accounting_code",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
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
              data-bs-target="#edit_expense"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_expense"
              onClick={() => {
                deleteCategory(record);
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
        <Helmet>
          <title>Expenses - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Expense Category</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Category</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_expense"
                >
                  <i className="fa fa-plus" /> Add Expense Category
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
                <label className="focus-label">Item Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option> -- Select -- </option>
                  <option>Loren Gatlin</option>
                  <option>Tarah Shropshire</option>
                </select>
                <label className="focus-label">Purchased By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block form-focus select-focus">
                <select className="select floating">
                  <option> -- Select -- </option>
                  <option> Cash </option>
                  <option> Cheque </option>
                </select>
                <label className="focus-label">Paid By</label>
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
                <label className="focus-label">From</label>
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
                <label className="focus-label">To</label>
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
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: allCategoryType.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={allCategoryType}
                  rowKey={(record) => record.id}
                  // onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Expense Modal */}
        <div id="add_expense" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Expense Category</h5>
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Category Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("category_name")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Accounting Code</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("accounting_code")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Expense amount limit</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...register("expense_amount_limit")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Receipt require limit</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...register("receipt_require_limit")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Auto approve limit</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...register("auto_approve_limit")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="checkbox">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          {...register("override_general_policy")}
                        />{" "}
                        Override general policy
                      </label>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
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
          id="edit_expense"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Expense</h5>
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
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Item Name</label>
                        <input
                          className="form-control"
                          defaultValue="Dell Laptop"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Purchase From</label>
                        <input
                          className="form-control"
                          defaultValue="Amazon"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Purchase Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={selectedDate4}
                            onChange={handleDateChange4}
                            className="form-control floating datetimepicker"
                            type="date"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Purchased By </label>
                        <select className="select">
                          <option>Daniel Porter</option>
                          <option>Roger Dixon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Amount</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          defaultValue="$10000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Paid By</label>
                        <select className="select">
                          <option>Cash</option>
                          <option>Cheque</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Status</label>
                        <select className="select">
                          <option>Pending</option>
                          <option>Approved</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Attachments</label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="attach-files">
                    <ul>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <Link to="#" className="fa fa-close file-remove" />
                      </li>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <Link to="#" className="fa fa-close file-remove" />
                      </li>
                    </ul>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Expense Modal */}
        {/* Delete Expense Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_expense"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Expense</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to=""
                        className="btn btn-primary continue-btn"
                        onClick={handleDelete(onDelete)}
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
      </div>
      <Offcanvas />
    </>
  );
};

export default CategoryTypePanel;
