import { Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import { Link } from "react-router-dom";
import {
  addExpensePolicy,
  deleteExpensePolicy,
  getExpensePolicy,
  updateExpensePolicy,
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

const ExpensePolicies = () => {
  const url = URLS.GET_EXPENSE_POLICY_URL;

  const dispatch = useDispatch();
  const [allExpensePolicies, setAllExpensePolicies] = useState([]);
  const [focused, setFocused] = useState(false);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editExpensePolicyData, setEditExpensePolicyData] = useState(null);
  const [deleteExpenseData, setDeleteExpenseData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  const ExpiryPeriod_drop = [
    { value: " ", label: " " },
    { value: " ", label: " " },
  ];

  const { handleSubmit: handleDelete } = useForm({});

  const onSubmit = (values) => {
    dispatch(addExpensePolicy(values));
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditExpensePolicyData(record);
    setValue("expense_amt_limit", record.expense_amt_limit);
    setValue("receipt_require_limit", record.receipt_require_limit);
    setValue("cash_limit", record.cash_limit);
    setValue("card_limit", record.card_limit);
  };

  const onUpdate = (values) => {
    dispatch(
      updateExpensePolicy({ id: editExpensePolicyData.id, payload: values })
    );
    setIsEditFormVisible(false);
  };

  function getPageDetails(url) {
    dispatch(getExpensePolicy({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExpensePolicyData(url) {
    dispatch(getExpensePolicy({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchExpensePolicyData(url);
  }, []);

  const expenseselector = useSelector((state) => state.getexpensepolicy);

  useEffect(() => {
    if (expenseselector) {
      const allExpensePolicies = expenseselector.map((element) => {
        return {
          id: element.id,
          expense_amt_limit: element.expense_amt_limit,
          receipt_require_limit: element.receipt_require_limit,
          cash_limit: element.cash_limit,
          card_limit: element.card_limit,
        };
      });
      setAllExpensePolicies(allExpensePolicies);
    }
  }, [expenseselector]);

  const addExpenseSelector = useSelector((state) => state.addexpenseresult);

  useEffect(() => {
    if (addExpenseSelector) {
      dispatch(getExpensePolicy({ payload: {}, URL: url }));
      reset();
    }
    setIsAddFormVisible(false);
  }, [addExpenseSelector]);

  const updateExpenseSelector = useSelector(
    (state) => state.updateExpensepolicyResult
  );

  useEffect(() => {
    if (updateExpenseSelector) {
      dispatch(getExpensePolicy({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updateExpenseSelector]);

  const deleteExpenseSelector = useSelector(
    (state) => state.deleteExpensepolicySuccess
  );

  useEffect(() => {
    if (deleteExpenseSelector) {
      dispatch(getExpensePolicy({ payload: {}, URL: url }));
    }
  }, [deleteExpenseSelector]);

  const DeleteExpense = (record) => {
    setDeleteExpenseData(record);
  };

  const onDelete = () => {
    const deletedExpenseId = deleteExpenseData.id;
    dispatch(deleteExpensePolicy({ id: deletedExpenseId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpensePolicies((prevItems) =>
      prevItems.filter((item) => item.id !== deletedExpenseId)
    );
  };
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
      title: "Expense Amount Limit ",
      dataIndex: "expense_amt_limit",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Receipt Required limit",
      dataIndex: "receipt_require_limit",
      sorter: (a, b) => a.end_date.length - b.end_date.length,
    },
    {
      title: "Cash Limit ",
      dataIndex: "cash_limit",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Card limit",
      dataIndex: "card_limit",
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
              data-bs-target="#edit_company"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_company"
              onClick={() => {
                DeleteExpense(record);
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
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* {/ Page Header /} */}
        <div className="page-header">
          <div className="row">
            <div className="col">
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
                data-bs-target="#add_company"
              >
                <i className="fa fa-plus" /> Add Expense Policy
              </Link>
            </div>
          </div>
        </div>
        {/* {/ /Page Header /} */}

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
          <div className="col-lg-12">
            <div className="card mb-0">
              <div className="card-header">
                <h4 className="card-title mb-0">Expense Policies</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    pagination={{
                      total: allExpensePolicies.length,
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
                    dataSource={allExpensePolicies}
                    rowKey={(record) => record.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {/ Add Expense Modal /} */}
      <div id="add_company" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Expense Policy</h5>
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
                  <label> Expense Amount Limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...register("expense_amt_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Receipt Required limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...register("receipt_require_limit")}
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Cash limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...register("cash_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Card limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...register("card_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="col-lg-10">
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

                <div className="col-md-10">
                  <div className="checkbox">
                    <label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="True"
                        {...register(
                          "allow_uncategorized_expe_to_be_part_of_expense_report"
                        )}
                      />{" "}
                      Allow Uncategorized Expenses To Be The Part Of Expense
                      Report
                    </label>
                  </div>
                </div>

                <br></br>

                <div className="col-lg-10">
                  <div className="checkbox">
                    <label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="True"
                        {...register("make_expense_reimbursable_by_default")}
                      />{" "}
                      Make Expense Reimbursable By Default
                    </label>
                  </div>
                </div>

                <br></br>

                <div className="col-lg-10">
                  <div className="input-block">
                    <label>Expense Expiry period </label>
                    <select
                      className="form-control"
                      {...register("expense_expiry_period")}
                    >
                      <option value="">Select </option>
                      {ExpiryPeriod_drop?.map((data) => {
                        return <option value={data.value}>{data.label}</option>;
                      })}
                    </select>
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
      {/* {/Add Expense Modal /}
        {/ Edit Expense Modal /} */}
      <div id="edit_company" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
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
              <form onSubmit={handleUpdate(onUpdate)}>
                <div className="input-block">
                  <label> Expense Amount Limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...updateregister("expense_amt_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Receipt Required limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...updateregister("receipt_require_limit")}
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Cash limit</label>
                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...updateregister("cash_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="input-block">
                  <label> Card limit</label>

                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$USD</span>
                      </div>
                      <input
                        className="form-control"
                        type="number"
                        {...updateregister("card_limit")}
                      />
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>

                <div className="col-lg-10">
                  <div className="checkbox">
                    <label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="True"
                        {...updateregister("make_description_mandotary")}
                      />{" "}
                      Make Description Mandatory
                    </label>
                  </div>
                </div>

                <br></br>

                <div className="col-md-10">
                  <div className="checkbox">
                    <label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="True"
                        {...updateregister(
                          "allow_uncategorized_expe_to_be_part_of_expense_report"
                        )}
                      />{" "}
                      Allow Uncategorized Expenses To Be The Part Of Expense
                      Report
                    </label>
                  </div>
                </div>

                <br></br>

                <div className="col-lg-10">
                  <div className="checkbox">
                    <label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="True"
                        {...updateregister(
                          "make_expense_reimbursable_by_default"
                        )}
                      />{" "}
                      Make Expense Reimbursable By Default
                    </label>
                  </div>
                </div>

                <br></br>

                <div className="col-lg-10">
                  <div className="input-block">
                    <label>Expense Expiry period </label>
                    <select
                      className="form-control"
                      {...updateregister("expense_expiry_period")}
                    >
                      <option value="">Select </option>
                      {ExpiryPeriod_drop?.map((data) => {
                        return <option value={data.value}>{data.label}</option>;
                      })}
                    </select>
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
      {/* {/ /Edit Expense Modal /}
        {/ Delete Category Modal /} */}
      <div
        className="modal custom-modal fade"
        id="delete_company"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Policy</h3>
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
  );
};

export default ExpensePolicies;
