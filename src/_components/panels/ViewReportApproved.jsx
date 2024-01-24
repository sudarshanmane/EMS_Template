import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addreimbursementRecord,
  getReportDetails,
  rejectExpense,
  rejectReportByAccount,
} from "../../store/Action/Actions";
import { Controller, useForm } from "react-hook-form";
import { Modal, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { URLS } from "../../Globals/URLS";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const ViewReportApproved = () => {
  const [rejectReportData, setRejectReportAccountData] = useState(null);
  const [rejectExpenseData, setRejectExpenseData] = useState(null);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [allExpenses, setAllExpenses] = useState([]);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const url = URLS.VIEW_REPORT_URL;

  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const DefaultUnit_drop = [
    { value: "cash", label: "Cash" },
    { value: "online", label: "Online" },
  ];

  const {
    register: registerReportAccount,
    handleSubmit: handleRejectReportByAccount,
    setValue: ReportAccountSetValue,
    formState: { errors },
  } = useForm({});

  const {
    register: registerExpense,
    handleSubmit: handleRejectExpense,
    setValue: ExpenseSetValue,
  } = useForm({});

  const {
    register: registerReimbursRecord,
    handleSubmit: handleReimbursRecord,
    setValue,
    control,
  } = useForm({});

  const naviagte = useNavigate();


  const onReimbursRecord = (values) => {
    values["report"] = id;
    values["reimbursed_amount"] = reportDetailsSelector.reimbursable_amount;
    values["paid_to"] = reportDetailsSelector?.submitter?.id;

    dispatch(addreimbursementRecord( values ));
    document.querySelector("#closeModal").click();
    naviagte("/home/ExpenseApprovals");
  };

  // const reimburseSelector = useSelector(
  //   (state) => state.addreimbursmentresult
  // );
  // useEffect(() => {
  //   if (reimburseSelector) {
  //     alert(reimburseSelector.Status)
  //   }
  // }, [reimburseSelector]);


  const onRejectExpense = (values) => {
    dispatch(rejectExpense({ id: id, payload: values }));
  };

  const RejectExpense = (record) => {
    setIsRejectFormVisible(true);
    setRejectExpenseData(record);
    ExpenseSetValue("remark", record.remark);
  };

  const onRejectReportByAccount = (values) => {
    dispatch(rejectReportByAccount({ id: id, payload: values }));
    naviagte("/home/ExpenseApprovals");
  };

  const RejectReport = (remark) => {
    setIsRejectFormVisible(true);
    setRejectReportAccountData();
    ReportAccountSetValue("remark", remark);
  };

  const reportDetailsSelector = useSelector((state) => state.reportDetails);

  useEffect(() => {
    if (reportDetailsSelector) {
      const allExpenses = reportDetailsSelector?.expenses?.map((element) => ({
        id: element?.id && element?.id,
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


  useEffect(() => {
    if (id) {
      dispatch(getReportDetails({ id }));
    }
  }, [id]);

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
    // {
    //   title: "Action",
    //   render: (record) => (
    //     <div className="dropdown dropdown-action text-end">
    //       <Link
    //         to="#"
    //         className="action-icon dropdown-toggle"
    //         data-bs-toggle="dropdown"
    //         aria-expanded="false"
    //       >
    //         <i className="material-icons">more_vert</i>
    //       </Link>
    //       <div className="dropdown-menu dropdown-menu-right">
    //         <Link
    //           className="dropdown-item"
    //           to="#"
    //           data-bs-toggle="modal"
    //           data-bs-target="#approveExpense"
    //           onClick={() => onApproveExpense()}
    //         >
    //           <i className="fa fa-check m-r-5" /> Approve
    //         </Link>
    //         <Link
    //           className="dropdown-item"
    //           to="#"
    //           data-bs-toggle="modal"
    //           data-bs-target="#rejectExpense"
    //           onClick={() => {
    //             RejectExpense(record);
    //           }}
    //         >
    //           <i className="fa fa-times m-r-5" /> Rejectttttt
    //         </Link>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
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
                              {reportDetailsSelector?.report_number}
                            </p>
                            <p>
                              Description:- &nbsp;
                              {reportDetailsSelector?.description}
                            </p>
                            <p>
                              Start Date:- &nbsp;
                              {reportDetailsSelector?.start_date}
                            </p>
                            <p>
                              End Date:- &nbsp;
                              {reportDetailsSelector?.end_date}
                            </p>
                            <p>
                              Employee :- &nbsp;
                              {`${reportDetailsSelector?.submitter?.id} - ${reportDetailsSelector?.submitter?.first_name} ${reportDetailsSelector?.submitter?.last_name}`}
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
                    >
                      <i className="fa fa-right" /> Record Reimbursment
                    </Link>
                  </div>
                  <div className="col-auto float-end ms-auto">
                    <Link
                      to="#"
                      className="btn add-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#rejectReportByAccount"
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
                            {...registerReimbursRecord("reimbursed_amount")}
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
                            value={
                              reportDetailsSelector?.submitter?.id +
                              "-" +
                              reportDetailsSelector?.submitter?.first_name +
                              " " +
                              reportDetailsSelector?.submitter?.last_name
                            }
                            className="form-control"
                            readOnly
                            {...registerReimbursRecord("paid_to")}
                          />
                        </div>
                      </div>
                      <div className="input-block row">
                        <label className="col-lg-3 col-form-label">
                          <h4>Reimburse On</h4>
                        </label>
                        <div className="col-lg-9">
                          <Controller
                            control={control}
                            name="reimbursed_on"
                            render={({ field }) => (
                              <DatePicker
                                selected={
                                  field.value ? new Date(field.value) : null
                                }
                                onChange={(date) => {
                                  const formattedDate = formatDate(date);
                                  field.onChange(formattedDate);
                                  setValue("reimbursed_on", formattedDate);
                                }}
                                dateFormat="yyyy-MM-dd"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className="input-block row">
                        <label className="col-lg-3 col-form-label">
                          <h4> Paid Through</h4>
                        </label>
                        <div className="col-lg-9">
                          <div className="input-block">
                            <label>Default Unit</label>
                            <select
                              className="form-control"
                              {...registerReimbursRecord("paid_through")}
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
                      </div>
                      <div className="input-block row">
                        <label className="col-lg-3 col-form-label">
                          <h4>Note</h4>
                        </label>
                        <div className="col-lg-9">
                          <textarea
                            rows={4}
                            cols={5}
                            className="form-control"
                            placeholder="Enter message"
                            defaultValue={""}
                            {...registerReimbursRecord("notes")}
                          />
                        </div>
                      </div>

                      <div className="text-end">
                        <button type="submit" className="btn btn-success">
                          <h4>Record Reimbursment</h4>
                        </button>
                        <button
                          id="closeModal"
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

        {/* {/ {/ Reject Report By Account Modal /}  /} */}
        <div
          id="rejectReportByAccount"
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
                <form
                  onSubmit={handleRejectReportByAccount(
                    onRejectReportByAccount
                  )}
                >
                  <div className="row">
                    <div className="col-md-16">
                      <div className="input-block">
                        <label>Remark</label>
                        <input
                          className="form-control"
                          type="text"
                          {...registerReportAccount("remark")}
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
        {/* {/ {/ Reject Report By Account Modal /} /} */}

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
        {/* {/ {/ /Reject Expense Modal /} /} */}

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
    
  );
};

export default ViewReportApproved;
