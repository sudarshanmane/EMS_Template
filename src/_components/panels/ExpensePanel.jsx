import React, { useEffect, useState, useContext ,useMemo} from "react";
import { Modal, Space, Table, } from "antd"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addReport,
  addSelectedReport,
  deleteExpenseAction,
  fetchReport,
  getExpenseList,
  getRejectedExpenseAction,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined, EyeOutlined } from "@ant-design/icons";
import { URLS } from "../../Globals/URLS";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";
import { ExpenseUpdatingContext } from "../screens/ContextForUpdatingRecord";

const ExpensePanel = () => {
  const url = URLS.GET_EXPENSE_LIST_URL;
  const fetchurl = URLS.FETCH_REPORT_URL;
  const rejectedUrl = URLS.GET_REJECTED_EXPENSE_URL;

  const dispatch = useDispatch();
  const [allExpenseList, setAllExpense] = useState([]);
  const [rejectedExpenseList, setAllRejectedExpense]= useState([]);
  const [editReportData, setEditReportData] = useState(null);
  const [deleteItemData, setDeleteExpenseData] = useState(null);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("allReports");
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const filteredExpenseList = useMemo(() => {
    if (selectedOption === "allReports") {
      return allExpenseList;
    } 
     else {
      return rejectedExpenseList;
    }
  }, [selectedOption, allExpenseList, rejectedExpenseList]);

  const { setRecord, record, setIsEditForm, isEditForm } = useContext(
    ExpenseUpdatingContext
  );

  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });

  const {
    handleSubmit: handleSelectReport,
    control: selectReportControl,
    setValue: selectReportSetValue,
  } = useForm({});

  const {
    reset,
    control,
    register: addreport,
    handleSubmit: handleAddReport,
    setValue,
    formState: { errors },
  } = useForm({});

  const { handleSubmit: handleDelete } = useForm({});

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleViewReceipt = (isPdf, record) => {
    setSelectedReceiptUrl({ expense_bill: record || "", isPdf });
    setModalVisible(true);
  };

  const onSelectReport = (data) => {
    dispatch(
      addSelectedReport({
        id: editReportData.id,
        report: data.selectedReportId,
      })
    );
  };

  const onAddReport = (data) => {
    dispatch(addReport(data));
    reset();
    setSelectedOption("allReports");
  };

  const onEdit = (record) => {
    setRecord(record);
    setIsEditForm(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (record && isEditForm) {
      navigate("/home/addexpense");
    }
  }, [record, isEditForm]);

  const DeleteExpense = (record) => {
    setDeleteExpenseData(record.id);
  };

  const onDelete = () => {
    dispatch(deleteExpenseAction({ id: deleteItemData }));
  };

  const expenseDeletedResultSelector = useSelector(
    (state) => state.expenseDeletedResult
  );

  useEffect(() => {
    if (expenseDeletedResultSelector) {
      dispatch(getExpenseList({ payload: {}, URL: url }));
      dispatch(getRejectedExpenseAction({payload:{}, URL:rejectedUrl}))
      // setDeleteExpenseData(null);
      dispatch({ type: 'RESET_DELETED_RESULT_SELECTOR' });
    }
  }, [expenseDeletedResultSelector]);

  const onAttach = (data) => {
    setEditReportData(data);
  };

  // function getPageDetails(url) {
  //   dispatch(getExpenseList({ payload: {}, URL: url }));
  // }

  // useEffect(() => {
  //   getPageDetails(url);
  // }, []);

  function fetchexpensepanel(url) {
    dispatch(getExpenseList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchexpensepanel(url);
  }, []);


  function fetchrejectedexpense(rejectedUrl) {
    dispatch(getRejectedExpenseAction({ payload: {}, URL: rejectedUrl }));
  }

  useEffect(() => {
    fetchrejectedexpense(rejectedUrl);
  }, []);

  // function fetchPageDetails(fetchurl) {
  //   dispatch(fetchReport({ payload: {}, URL: fetchurl }));
  // }

  // useEffect(() => {
  //   fetchPageDetails(fetchurl);
  // }, []);

  function fetchReportData(fetchurl) {
    dispatch(fetchReport({ payload: {}, URL: fetchurl }));
  }

  useEffect(() => {
    fetchReportData(fetchurl);
  }, []);

  const reportSelector = useSelector((state) => state.fetchReportSuccess);

  const addreportresultSelector = useSelector((state) => state.addreportresult);
  useEffect(() => {
    if (addreportresultSelector) {
      dispatch(fetchReport({ payload: {}, URL: fetchurl }));
    }
  }, [addreportresultSelector]);


  const addSelectedReportSelector = useSelector(
    (state) => state.addSelectedReportSuccess
  );

  useEffect(() => {
    if (addSelectedReportSelector) {
      dispatch(getExpenseList({ payload: {}, URL: url }));
    }
  }, [addSelectedReportSelector]);
  ``
  const rejectedExpenseSelector =useSelector((state)=> state.getrejectedexpenselist);

  useEffect(()=>{
    if(rejectedExpenseSelector){
      //  const rejectedExpenseList = rejectedExpenseSelector.map((element) => {
      //   return {
      //     id: element?.id,
      //     desc: element?.desc,
      //     amount: element.amount,
      //     paid_by: element.paid_by,
      //     expense_date: element.expense_date,
      //     attachment: element.expense_bill,
      //     approved_amt: element.approved_amt,
      //     submit: element.submit,
      //     approved_by: element.approved_by,
      //   };
      // });
      setAllRejectedExpense(rejectedExpenseSelector);
    }
  },[rejectedExpenseSelector]);

  const expensePanelSelector = useSelector((state) => state.getexpenselist);

  useEffect(() => {
    if (expensePanelSelector) {
      // const allExpenseList = expensePanelSelector.map((element) => {
      //   return {
      //     id: element?.id,
      //     desc: element?.desc,
      //     amount: element.amount,
      //     paid_by: element.paid_by,
      //     expense_date: element.expense_date,
      //     attachment: element.expense_bill,
      //     approved_amt: element.approved_amt,
      //     submit: element.submit,
      //     approved_by: element.approved_by,
      //   };
      // });
      setAllExpense(expensePanelSelector);
    }
  }, [expensePanelSelector]);

  // const updateExpensepanelResultSelector = useSelector(
  //   (state) => state.updateexpenseResult
  // );

  // useEffect(() => {
  //   if (updateExpensepanelResultSelector) {
  //     dispatch(getExpenseList({ payload: {}, URL: url }));
  //   }
  // }, [updateExpensepanelResultSelector]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      render: (text, record, index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },

      sorter: (a, b) => a.id.length - b.id.length,
      width: "10%",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Paid By",
      dataIndex: "paid_by",
      key: "paid_by",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Expense Date",
      dataIndex: "expense_date",
      key: "expense_date",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      render: (text, record) => {
        let recordType = record?.expense_bill?.split(".");
        let isPdf = false;
        if (recordType?.includes("pdf")) isPdf = true;
        return (
          <Space>
            <EyeOutlined
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => handleViewReceipt(isPdf, record?.expense_bill)}
            />
          </Space>
        );
      },
    },
    {
      title: "Attach To Report ",
      dataIndex: "submit",
      key: "submit",
      render: (text, data) => (
        <Link
          className="btn btn-secondary btn-sm m-r-5"
          key={"data.id"}
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#attachReport"
          onClick={() => onAttach(data)}
        >
          {<SendOutlined />}
        </Link>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            className="btn btn-success btn-sm m-r-5"
            to="#"
            onClick={() => onEdit(record)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
          <Link
            className="btn btn-danger btn-sm"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_expense"
            onClick={() => {
              DeleteExpense(record);
            }}
          >
            <i className="fa-regular fa-trash-can " />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Expense List</li>
              </ul>
            </div>
            {selectedOption !== "rejected" && (
            <div className="col-auto float-end ms-auto">
              <Link to="/home/addexpense" className="btn add-btn">
                <i className="fa fa-plus" /> Add Expense
              </Link>
            </div>
            )}
          </div>
        </div>
        <div className="row filter-row">
        {/* <div className="col-sm-6 col-md-3 col-lg-3 col-xl-4 col-12">
          </div> */}
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
                      All Expense
                    </a>
                  </li>
        
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        selectedOption === "rejected" && "active"
                      }`}
                      onClick={() => setSelectedOption("rejected")}
                    >
                      Rejected Expense
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
                      total: allExpenseList ? allExpenseList.length : 0,
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
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={allExpenseList}
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
                        total: rejectedExpenseList.length,
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
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={rejectedExpenseList}
                      rowKey={(record) => record.id}
                    />
                  </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id="attachReport" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title">Attach Report</h5> */}
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    key={"allReport"}
                    className={`nav-link ${
                      selectedOption === "allReports" && "active"
                    }`}
                    onClick={() => setSelectedOption("allReports")}
                  >
                    Select Report
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    key={"addReport"}
                    className={`nav-link ${
                      selectedOption === "addReports" && "active"
                    }`}
                    onClick={() => setSelectedOption("addReports")}
                  >
                    Add New Report
                  </a>
                </li>
              </ul>

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
              {selectedOption === "allReports" && (
                <div className="tab-pane fade show active" id="allReports">
                  <form onSubmit={handleSelectReport(onSelectReport)}>
                    {/* Form for selecting a report */}
                    <div className="input-block">
                      <div className="col-sm-12">
                        <div className="input-block">
                          <label>Select Report</label>

                          <select
                            className="form-control"
                            {...selectReportControl}
                            onChange={(e) => {
                              const selectedId = e.target.value;
                              selectReportSetValue(
                                "selectedReportId",
                                selectedId
                              );
                            }}
                          >
                            <option value="">Select </option>
                            {reportSelector?.map((data) => (
                              <option value={data.id} key={data.id}>
                                {data.description}
                              </option>
                            ))}
                          </select>
                        </div>
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
              )}

              {selectedOption === "addReports" && (
                <div className="tab-pane fade show active" id="addReports">
                  <form onSubmit={handleAddReport(onAddReport)}>
                    {/* Form for adding a report */}
                    <div className="input-block">
                      <div className="col-sm-12">
                        <div className="input-block">
                          <label>Description</label>
                          <input
                            className="form-control"
                            type="text"
                            {...addreport("description")}
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
                        // data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* {/ view Receipt Modal /}  */}
      <Modal
        title="Receipt"
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setSelectedReceiptUrl("");
        }}
        footer=""
      >
        {selectedReceiptUrl.expense_bill && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!selectedReceiptUrl.isPdf ? (
              <img
                src={
                  "http://192.168.1.219:8001" + selectedReceiptUrl.expense_bill
                }
                alt="Receipt"
                style={{ maxWidth: "100%", maxHeight: "80vh" }}
                onError={() => console.error("Error loading image")}
              />
            ) : (
              selectedReceiptUrl.isPdf && (
                <a
                  target="_blank"
                  href={
                    "http://192.168.1.219:8001" +
                    selectedReceiptUrl.expense_bill
                  }
                >
                  Click to see expense bill.
                </a>
              )
            )}
          </div>
        )}
      </Modal>

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

export default ExpensePanel;
