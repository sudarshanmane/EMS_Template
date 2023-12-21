import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { getCard } from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import "react-datepicker/dist/react-datepicker.css";
import { rejectCard } from "../../store/Action/Actions";
import { useForm } from "react-hook-form";


const CardApproval = () => {
  const [allCards, setAllCards] = useState([]);

  const [url, setUrl] = useState(URLS.GET_CARD_URL);
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [isRejectFormVisible, setIsRejectFormVisible] = useState(false);
  const [rejectCardData, setRejectCardData] = useState(null);

  
  const {
    register,
    handleSubmit: handleReject,
    setValue,
    formState: { errors },
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(rejectCard({ id: rejectCardData.id, payload: values }));

  };

  const onReject = (record) => {
    setIsRejectFormVisible(true);
    setRejectCardData(record);
    setValue("remark", record.remark);
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function getPageDetails(url) {
    dispatch(getCard({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchcard(url) {
    dispatch(getCard({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchcard(url);
  }, []);

  const cardSelector = useSelector((state) => state.getCardSuccess);
  useEffect(() => {
    if (cardSelector) {
      const allCards = cardSelector.map((element) => ({
        id: element.id,
        full_name: element.full_name,
        mobile_no: element.mobile_no,
        email: element.email,
        aadhar_no: element.aadhar_no,
        pan_no: element.pan_no,
        status: element.status,
      }));

      setAllCards(allCards);
    }
  }, [cardSelector]);

  const rejectCardSelector = useSelector((state) => state.rejectCardSuccess);
  useEffect(() => {
    if (rejectCardSelector) {
      dispatch(rejectCard({ payload: {}, URL: url }));
    }
    setIsRejectFormVisible(false);
  }, [rejectCardSelector]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "full_name",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Email Id ",
      dataIndex: "email",
      sorter: (a, b) => a.paidby.length - b.paidby.length,
    },
    {
      title: "Mobile No",
      dataIndex: "mobile_no",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Adhar No ",
      dataIndex: "aadhar_no",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Pan No ",
      dataIndex: "pan_no",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Status",
      dataIndex: "status",
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
              data-bs-target="#approve-card"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-check m-r-5" /> Approve
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#reject-card"
              onClick={() => {
               onReject(record);
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
      <Offcanvas />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Approvals</li>
                </ul>
              </div>
            </div>
          </div>
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
              <Link
                to="#"
                className="btn btn-success btn-block w-100"
                // value={searchTerm}
                // onChange={(e) => handleSearch(e.target.value)}
                // ref={inputSearchRef}
              >
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* Search Filter */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Card Approvals</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      dataSource={allCards}
                      pagination={{
                        total: allCards.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
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
        {/* Add Expense Modal */}
        <div id="reject-card" className="modal custom-modal fade" role="dialog">
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
                <form onSubmit={handleReject(onSubmit)}>
                  <div className="row">
                    <div className="col-md-16">
                      <div className="input-block">
                        <label>Remark</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("remark")}
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
        {/* /Add Expense Modal */}
      </div>
    </>
  );
};

export default CardApproval;
