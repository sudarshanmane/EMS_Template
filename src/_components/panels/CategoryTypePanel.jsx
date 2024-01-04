/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import {
  itemRender,
} from "../../MainPage/paginationfunction";
import "antd/dist/antd.min.css";
import Offcanvas from "../../Entryfile/offcanvance";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryPanelAction,
  addCategoryAction,
  deleteCategorypanelAction,
  updateCategorypanle,
  fetchCategory,
  createCategoryItem,
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";

const CategoryTypePanel = () => {
  const fetchurl = URLS.FETCH_CATEGORY_URL;
  const [url, setUrl] = useState(URLS.GET_CATEGORY_PANEL_URL);
  const dispatch = useDispatch();
  const [allCategoryType, setAllCategoryType] = useState([]);
  const [focused, setFocused] = useState(false);
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [viewCategoryData, setViewCategoryData] = useState(null);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });
  const [submittedValues, setSubmittedValues] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const {
    register: createregister,
    handleSubmit: handleCreate,
  } = useForm({});

  const { handleSubmit: handleDelete } = useForm({});

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  const onCreate = async (values) => {
    await dispatch(createCategoryItem(values));
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
    setIsAddFormVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(addCategoryAction(values));
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditFormData(record);
    setValue("category_name", record.category_name);
    setValue("override_general_policy", record.override_general_policy);
    setValue("expense_amount_limit", record.expense_amount_limit);
    setValue("receipt_require_limit", record.receipt_require_limit);
    setValue("auto_approve_limit", record.auto_approve_limit);
    setValue("accounting_code", record.accounting_code);
  };

  const onUpdate = (values) => {
    dispatch(updateCategorypanle({ id: editFormData.id, payload: values }));
    setIsEditFormVisible(false);
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
      const allCategoryType = categoryselector?.map((element) => {
        let dataString = [];

        if (element) {
          element?.sub_item?.map((data) => {
            dataString.push(data.item_name);
            element.data1 = dataString;
          });
        } else {
          element.data1 = [];
        }

        return {
          id: element.id,
          category_name: element.category_name,
          override_general_policy: element.override_general_policy,
          expense_amount_limit: element.expense_amount_limit,
          receipt_require_limit: element.receipt_require_limit,
          auto_approve_limit: element.auto_approve_limit,
          accounting_code: element.accounting_code,
          sub_item: element?.data1 ? element?.data1 : [],
        };
      });
      setAllCategoryType(allCategoryType);
    }
  }, [categoryselector]);

  const categorySelector = useSelector((state) => state.fetchCategorySuccess);

  const createCategoryItemSelector = useSelector(
    (state) => state.createCategoryItemSuccess
  );

  useEffect(() => {
    if (createCategoryItemSelector && submittedValues) {
      dispatch(createVendor(submittedValues));
      setSubmittedValues(null);
      setIsAddFormVisible(false);
    }
  }, [createCategoryItemSelector, submittedValues]);
  
  const addCategorylSelector = useSelector((state) => state.categoryresult);

  useEffect(() => {
    if (addCategorylSelector) {
      dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [addCategorylSelector]);

  const updateCategorylSelector = useSelector(
    (state) => state.updatecategortyResult
  );

  useEffect(() => {
    if (updateCategorylSelector) {
      dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updateCategorylSelector]);

  const deleteCategorylSelector = useSelector(
    (state) => state.deletecategoryResult
  );

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
      render: (text, record, index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },
    },
    {
      title: "Category Name",
      dataIndex: "category_name",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Expense Amount",
      dataIndex: "expense_amount_limit",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Receipt Require Limit",
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
      title: "Items",
      dataIndex: "sub_item",
      render: (subItems) => {
        console.log(subItems, "subItems");
        return subItems.map((item) => {
          return <div>{item ? item : "-"}</div>;
        });
      },
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "New"
                  ? "far fa-dot-circle text-purple"
                  : text === "Pending"
                  ? "far fa-dot-circle text-info"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-purple" /> New
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Pending
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#approve_leave"
            >
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Declined
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
              onClick={() => onEdit(record)}
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
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Category</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"  
                  data-bs-target="#add_category_item"
                >
                  <i className="fa fa-plus" /> Add Category Item
                </Link>
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_expense"
                >
                  <i className="fa fa-plus" /> Add Category
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
                  <h4 className="card-title mb-0">Categories</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allCategoryType.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: (current, pageSize) => {
                          setTablePagination({
                            ...tablePagination,
                            pageSize,
                            current,
                          });
                        },
                        onChange: (current) => {
                          setTablePagination({ ...tablePagination, current });
                        },
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allCategoryType}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
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
      
        {/* category item modal  */}
        <div
          id="add_category_item"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Expense Category Item</h5>
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
                <form onSubmit={handleCreate(onCreate)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="col-form-label">
                          Default Category
                        </label>

                        <select
                          className="form-control"
                          {...createregister("category")}
                        >
                          <option value="">Select </option>
                          {categorySelector &&
                            categorySelector?.map((data) => {
                              return (
                                <option value={data.id}>
                                  {data.category_name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                      <div className="input-block">
                        <label>Accounting Code</label>
                        <input
                          className="form-control"
                          type="text"
                          {...createregister("acc_code")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Category Item Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...createregister("item_name")}
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
        {/* modal end   */}
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
                <h5 className="modal-title">Update Expense Category</h5>
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Category Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("category_name")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Accounting Code</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("accounting_code")}
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
                          {...updateregister("expense_amount_limit")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Receipt require limit</label>
                        <input
                          placeholder="$50"
                          className="form-control"
                          type="number"
                          {...updateregister("receipt_require_limit")}
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
                          {...updateregister("auto_approve_limit")}
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
                          {...updateregister("override_general_policy")}
                        />{" "}
                        Override general policy
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
          id="delete_expense"
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
        {/* Delete Expense Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default CategoryTypePanel;
