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
import { Modal, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { URLS } from "../../Globals/URLS";

const ViewReportApproved = () => {
  const [rejectReportData, setRejectReportData] = useState(null);
  const [rejectExpenseData, setRejectExpenseData] = useState(null);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const url = URLS.VIEW_REPORT_URL;
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });

  const {
    register: registerReport,
    handleSubmit: handleRejectReport,
    setValue: ReportSetValue,
    formState: { errors },
  } = useForm({});

  const {
    register: registerExpense,
    handleSubmit: handleRejectExpense,
    setValue: ExpenseSetValue,
    formState,
  } = useForm({});

  const onApproveReport = () => {
    dispatch(approveReport({ id: id }));
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
    dispatch(approveExpense({ id: id }));
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
            <Link className="btn add-btn" to="/home/Reports">
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
                        </div>
                      </div>
                    </div>

                    <div className="col-auto float-start ms-auto">
                      <Link
                        to="#"
                        className="btn add-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#approveReport"
                        onClick={() => onApproveReport()}
                      >
                        <i className="fa fa-right" /> Reimbursment Record
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