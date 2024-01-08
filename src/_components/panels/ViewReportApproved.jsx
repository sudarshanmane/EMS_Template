import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getReportDetails,
  reimbursementRecord,
  rejectExpense,
  rejectReport,
} from "../../store/Action/Actions";
import { useForm } from "react-hook-form";
import { Modal, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { URLS } from "../../Globals/URLS";
import DatePicker from "react-datepicker";


const ViewReportApproved = () => {
  const [rejectReportData, setRejectReportData] = useState(null);
  const [rejectExpenseData, setRejectExpenseData] = useState(null);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);


  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = URLS.VIEW_REPORT_URL;
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const getValuesUrl = URLS.APPROVE_REPORT_URL;
  const {
    register: registerReport,
    handleSubmit: handleRejectReport,
    handleSubmit: handleReimbursRecord,
    setValue: ReportSetValue,
    formState: { errors },
  } = useForm({});

  const {
    register: registerExpense,
    handleSubmit: handleRejectExpense,
    setValue: ExpenseSetValue,
    formState,
  } = useForm({});

  const onReimbursRecord = () => {
    dispatch()
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectionChange = (event) => {
    const selectedOptionValue = event.target.value;
    setSelectedValue(selectedOptionValue);
  };

  const onRejectReport = (values) => {
    dispatch(rejectReport({ id: id, payload: values }));
  };

  const RejectReport = (remark) => {
    setIsRejectFormVisible(true);
    setRejectReportData();
    ReportSetValue("remark", remark);
  };

  const onRejectExpense = (values) => {
    dispatch(rejectExpense({ id: id, payload: values }));
  };

  const RejectExpense = (record) => {
    setIsRejectFormVisible(true);
    setRejectExpenseData(record);
    ExpenseSetValue("remark", record.remark);
  };


  const reportDetailsSelector = useSelector((state) => state.reportDetails);
  useEffect(() => {
    if (reportDetailsSelector) {
      const allExpenses = reportDetailsSelector?.expenses?.map((element) => ({
        id: element.id,
        expense_date: element.expense_date,
        expense_bill: element.expense_bill,
        category: element.category,
        amount: element.amount,
        submitter: element.submitter,
        status: element.status,
        reimbursable_amount: element.reimbursable_amount,
        approver: element.approver,
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

  const onSubmit = async (values) => {
    await dispatch(addMileage(values));
    dispatch(reimbursementRecord({ payload: {}, URL: url }));
    setIsAddFormVisible(false);
  };

  function getPageDetails(url) {
    dispatch(reimbursementRecord({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);
  
  function fetchReimburseData(url) {
    dispatch(reimbursementRecord({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchReimburseData(url);
  }, []);

  const getReimbursementSelector = useSelector((state) => state.reimbursementRecordSuccess);

  useEffect(() => {
    if (getReimbursementSelector) {
      dispatch(reimbursementRecord({ payload: {}, URL: url }));
      setIsAddFormVisible(false);
    }
  }, [getReimbursementSelector]);

  
  const handleViewReceipt = (record) => {
    setSelectedReceiptUrl(record || "");
    setModalVisible(true);
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
      title: "Date",
      dataIndex: "expense_date",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Receipt",
      dataIndex: "expense_bill",
      render: (text, record) => (
        <Space>
          <EyeOutlined
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleViewReceipt(record.expense_bill)}
          />
        </Space>
      ),
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
              onClick={() => onApproveExpense()}
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
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div>
            <Link className="btn add-btn" to="/home/ExpenseApprovals">
              <i className="fa fa-right" /> Back
            </Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Report</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          {reportDetailsSelector && (
                            <>
                              <p>
                                Report No:- &nbsp;
                                {reportDetailsSelector.report_number}
                              </p>
                              <p>
                                Description:- &nbsp;
                                {reportDetailsSelector.description}
                              </p>
                              <p>
                                Start Date:- &nbsp;
                                {reportDetailsSelector.start_date}
                              </p>
                              <p>
                                End Date:- &nbsp;
                                {reportDetailsSelector.end_date}
                              </p>
                              <p>
                                Employee :- &nbsp;
                                {`${reportDetailsSelector?.submitter.id} - ${reportDetailsSelector?.submitter.first_name} ${reportDetailsSelector?.submitter.last_name}`}
                              </p>
                              <p>
                                Status:- &nbsp;
                                {reportDetailsSelector.status}
                              </p>
                              <p>
                                Reimbursable Amount:- &nbsp;
                                {reportDetailsSelector.reimbursable_amount}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-auto float-start ms-auto">
                      <Link
                        className="btn add-btn"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#reimbursement-record"
                        onClick={() => onReimbursRecord()}
                      >
                        <i className="fa fa-right" /> Record Reimbursment
                      </Link>
                    </div>
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* {/ {/ view Receipt Modal /}  /} */}
          <Modal
            title="Receipt"
            open={modalVisible}
            onCancel={() => {
              setModalVisible(false);
              setSelectedReceiptUrl("");
            }}
          >
            {selectedReceiptUrl && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={"http://192.168.1.219:8001" + selectedReceiptUrl}
                  alt="Receipt"
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                  onError={() => console.error("Error loading image")}
                />
              </div>
            )}
          </Modal>

          {/* {/ {/ Reject Report Modal /}  /} */}
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
          {/* {/ {/ /Reject Modal /} /} */}

          {/* {/ {/ Reimbursment Record Modal  /}  /} */}
          <div
            id="reimbursement-record"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Record</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleReimbursRecord(onReimbursRecord)}>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Reimbursement Amount</h4>
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              value={
                                reportDetailsSelector?.reimbursable_amount || ""
                              }
                              className="form-control"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Paid To</h4>
                          </label>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              value={`${reportDetailsSelector?.submitter.id} - ${reportDetailsSelector?.submitter.first_name} ${reportDetailsSelector?.submitter.last_name}`}
                              className="form-control"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Reimburse On</h4>
                          </label>
                          {/* <div className="input-block form-focus select-focus"> */}
                          <div className="col-lg-9">
                            <DatePicker
                              selected={selectedDate2}
                              onChange={handleDateChange2}
                              className="form-control floating datetimepicker"
                              type="date"
                            />
                          </div>

                          {/* </div> */}
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4> Paid Through</h4>
                          </label>
                          <div className="col-lg-9">
                            <select
                              className="form-control"
                              value={selectedValue}
                              onChange={handleSelectionChange}
                            >
                              <option value="">Cash</option>
                              <option value="">Online</option>
                              {/* Other options */}
                            </select>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Notes</h4>
                          </label>
                          <div className="col-lg-9">
                            <textarea
                              rows={4}
                              cols={5}
                              className="form-control"
                              placeholder="Enter message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4> Ref#</h4>
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="text-end">
                          <button type="submit" className="btn btn-success">
                            <h4>Record Reimbursment</h4>
                          </button>
                          <button
                            type="button"
                            className="btn  btn-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <h4>Cancel</h4>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {/ {/ /Reimbursment Record Modal /} /} */}

          {/* {/ {/ Reject Expense Modal /}  /} */}
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
          {/* {/ {/ /Reject Modal /} /} */}

          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">All Expenses</h4>
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
        </div>
      </div>
    </>
  );
};

export default ViewReportApproved;
