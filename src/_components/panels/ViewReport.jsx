import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  approveExpense,
  approveReport,
  getReportDetails,
  rejectExpense,
  rejectReport,
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";
import { Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { URLS } from "../../Globals/URLS";

const ViewReportPage = () => {
  const [rejectReportData, setRejectReportData] = useState(null);
  const [rejectExpenseData, setRejectExpenseData] = useState(null);
  const [approveReportData, setApproveReportData] = useState(null);
  const [approveExpenseData, setApproveExpenseData] = useState(null);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [isApproveFormVisible, setIsApproveFormVisible] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const url = URLS.VIEW_REPORT_URL;
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });

  const {
    register: registerReport,
    handleSubmit: handleRejectReport,
    setValue: ReportSetValue,
    formState: { errors },
  } = useForm({});

  const { handleSubmit: handleApproveReport } = useForm({});

  const {
    register: registerExpense,
    handleSubmit: handleRejectExpense,
    setValue: ExpenseSetValue,
    formState,
  } = useForm({});

  const { handleSubmit: handleApproveExpense } = useForm({});

  const onApproveReport = () => {
    dispatch(approveReport({ id: approveReportData.id }));
  };

  const ApproveReport = (record) => {
    setIsApproveFormVisible(true);
    setApproveReportData(record);
  };

  const onRejectReport = (values) => {
    dispatch(rejectReport({ id: id, payload: values }));
  };

  const RejectReport = (remark) => {
    setIsRejectFormVisible(true);
    setRejectReportData();
    ReportSetValue("remark", remark);
  };


  const onApproveExpense = () => {
    dispatch(approveExpense({ id: approveExpenseData.id }));
  };

  const ApproveExpense = (record) => {
    setIsApproveFormVisible(true);
    setApproveExpenseData(record);
  };

  const onRejectExpense = (values) => {
    dispatch(rejectExpense({ id: id, payload: values }));
  };

  const RejectExpense = (record) => {
    setIsRejectFormVisible(true);
    setRejectExpenseData(record);
    ExpenseSetValue("remark", record.remark);
  };

  function getPageDetails(url) {
    dispatch(getReportDetails({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchreport(url) {
    dispatch(getReportDetails({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchreport(url);
  }, []);

  const reportDetailsSelector = useSelector((state) => state.reportDetails);
  useEffect(() => {
    if (reportDetailsSelector) {
      const allExpenses = reportDetailsSelector?.expenses?.map((element) => ({
        id: element.id,
        expense_date: element.expense_date,
        expense_bill: element.expense_bill,
        category: element.category,
        amount: element.amount,
      }));

      setAllExpenses(allExpenses);
    }
  }, [reportDetailsSelector]);

  const approveReportSelector = useSelector(
    (state) => state.approveReportSuccess
  );
  useEffect(() => {
    if (approveReportSelector) {
      dispatch(approveReport({ payload: {}, URL: url }));
    }
  }, [approveReportSelector]);

  const rejectReportSelector = useSelector(
    (state) => state.rejectReportSuccess
  );
  useEffect(() => {
    if (rejectReportSelector) {
      dispatch(rejectReport({ payload: {}, URL: url }));
    }
    setIsRejectFormVisible(false);
  }, [rejectReportSelector]);

  useEffect(() => {
    dispatch(getReportDetails({ id }));
  }, []);

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
      title: "Date",
      dataIndex: "expense_date",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Receipt",
      dataIndex: "expense_bill",
    },
    {
      title: "Category ",
      dataIndex: "category",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Amount  ",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
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
              data-bs-target="#approveExpense"
              onClick={() => ApproveExpense(record)}
            >
              <i className="fa fa-check m-r-5" /> Approve
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#rejectExpense"
              onClick={() => {
                RejectExpense(record);
              }}
            >
              <i className="fa fa-times m-r-5" /> Reject
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <h1>View Report</h1>
        {reportDetailsSelector && (
          <>
            <p>
              Report No:
              {reportDetailsSelector.report_number}
            </p>
            <p>
              Description:
              {reportDetailsSelector.description}
            </p>
            <p>
              Start Date:
              {reportDetailsSelector.start_date}
            </p>
            <p>
              End Date:
              {reportDetailsSelector.end_date}
            </p>
          </>
        )}
        <div className="col-auto float-end ms-auto">
          <Link
            to="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#rejectReport"
            onClick={() => {
              RejectReport();
            }}
          >
            <i className="fa fa-wrong" /> Reject
          </Link>
          <Link
            to="#"
            className="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#approveReport"
            onClick={() => ApproveReport(record)}
          >
            <i className="fa fa-right" /> Approve
          </Link>
        </div>
        {/* {/ Approve Modal /} */}
        <div
          id="approveReport"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Remark</h5>
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
                <form onSubmit={handleApproveReport(onApproveReport)}>
                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Approve
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* {Approve Modal } */}
        {/* {/ Reject Modal /}  */}
        <div
          id="rejectReport"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
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
                <form onSubmit={handleRejectReport(onRejectReport)}>
                  <div className="row">
                    <div className="col-md-16">
                      <div className="input-block">
                        <label>Remark</label>
                        <input
                          className="form-control"
                          type="text"
                          {...registerReport("remark")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Reject
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* {/ /Reject Modal /} */}
        {/* {/ Approve Expense Modal /} */}
        <div
          id="approveExpense"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Remark</h5>
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
                <form onSubmit={handleApproveExpense(onApproveExpense)}>
                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Approve
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* {Approve Modal } */}
        {/* {/ Reject Expense Modal /}  */}
        <div
          id="rejectExpense"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
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
                <form onSubmit={handleRejectExpense(onRejectExpense)}>
                  <div className="row">
                    <div className="col-md-16">
                      <div className="input-block">
                        <label>Remark</label>
                        <input
                          className="form-control"
                          type="text"
                          {...registerExpense("remark")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Reject
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* {/ /Reject Modal /} */}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-0">
            <div className="card-header">
              <h4 className="card-title mb-0">Expenses</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  dataSource={allExpenses}
                  pagination={{
                    total: allExpenses.length,
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
                  bordered
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewReportPage;
