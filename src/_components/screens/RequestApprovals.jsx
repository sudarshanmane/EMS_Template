import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";

import {
  getTravelApproval,
  rejectTravelApprovals,
} from "../../store/Action/Actions";

import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { useForm } from "react-hook-form";

const RequestApprovals = () => {
  const [url, setUrl] = useState(URLS.GET_TRAVEL_REQUEST_APPROVALS_URL);
  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [allTravel, setAllTravel] = useState([]);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [rejectExpenseData, setRejectExpenseData] = useState(null);
  const { id } = useParams();

  const {
    register: registerTravelApprovals,
    handleSubmit: handleRejectTravelApprovals,
    setValue: ExpenseSetValue,
    formState,
  } = useForm({});

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function getPageDetails(url) {
    dispatch(getTravelApproval({ payload: {}, URL: url }));
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);
  function fetchPageDetials(url) {
    dispatch(getTravelApproval({ payload: {}, URL: url }));
  }
  useEffect(() => {
    fetchPageDetials(url);
  }, []);
  const getTravelSelector = useSelector(
    (state) => state.getTravelApprovalSuccess
  );
  useEffect(() => {
    if (getTravelSelector) {
      const allTravel = getTravelSelector.map((element) => {
        return {
          id: element.id,
          emp: element.emp,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
        };
      });
      setAllTravel(allTravel);
    }
  }, [getTravelSelector]);

  //   const approveReportSelector = useSelector(
  //     (state) => state.approveReportSuccess
  //   );
  //   useEffect(() => {
  //     if (approveReportSelector) {
  //       dispatch(approveReport({ payload: {}, URL: url }));
  //     }
  //   }, [approveReportSelector]);

  const rejectTravelApprovalSelector = useSelector(
    (state) => state.rejectTravelApprovalsSuccess
  );

  const onRejectTravelApprovals = (values) => {
    dispatch(rejectTravelApprovals({ id: id, payload: values }));
  };

  useEffect(() => {
    if (rejectTravelApprovalSelector) {
      dispatch(rejectTravelApprovals({ payload: {}, URL: url }));
    }
    setIsRejectFormVisible(false);
  }, [rejectTravelApprovalSelector]);

  const RejectTravelApprovals = (record) => {
    setIsRejectFormVisible(true);
    setRejectExpenseData(record);
    ExpenseSetValue("remark", record.remark);
  };

  const columns = [
    {
      title: "Employee",
      dataIndex: "emp",
      key: "emp",
      render: (emp) => (
        <span>
          {emp.id} - {emp.first_name} {emp.last_name}
        </span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Travel Purpose",
      dataIndex: "travel_purpose",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "From_Date",
      dataIndex: "from_date",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "To_Date",
      dataIndex: "to_date",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Estimated_Budget",
      dataIndex: "estimated_budget",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to={`/home/e/${record.id}`}
            className="btn btn-primary btn-sm m-r-5"
            onClick={() => e(record)}
          >
            <i className="fa fa-eye m-r-5" />
          </Link>

          <Link
            className="btn btn-success btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#approveExpense"
            onClick={() => onApproveExpense()}
          >
            <i class="fa fa-check" aria-hidden="true"></i>
          </Link>

          <Link
            className="btn btn-danger btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#rejectTravelApprovals"
            onClick={() => {
              RejectTravelApprovals(record);
            }}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Travel Request</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Search Filter */}
          <div className="row filter-row">
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
          {/* /Search Filter */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <lable className="card-title mb-0">Travel Request</lable>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allTravel.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allTravel}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {/ Reject Report Modal /}  */}
          <div
            id="rejectTravelApprovals"
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
                    onSubmit={handleRejectTravelApprovals(
                      onRejectTravelApprovals
                    )}
                  >
                    <div className="row">
                      <div className="col-md-16">
                        <div className="input-block">
                          <label>Remark</label>
                          <input
                            className="form-control"
                            type="text"
                            {...registerTravelApprovals("remark")}
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
      </div>
    </>
  );
};

export default RequestApprovals;
