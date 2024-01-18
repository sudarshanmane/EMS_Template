import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { URLS } from "../../../Globals/URLS";
import {
  getDynamicLeaveListAction,
  getDynamicSelfLeaveAction,
  getLeaveListAction,
  getSelfLeaveAction,
  updateSelfLeaveAction,
} from "../../../store/Action/Actions";

const LeavesList = ({ isClass = true, userId }) => {
  const id =userId;
  const dispatch = useDispatch();
  const baseurl = URLS.BASE_URL_EXPORT;
  const leaveurl = URLS.GET_LEAVES_LIST_URL;
  const leavedynamicurl = URLS.GET_DYNAMIC_LEAVES_LIST_URL;
  const selfurl = URLS.GET_SELF_LEAVES_LIST_URL;
  const selfdynamicurl = URLS.GET_DYNAMIC_SELF_LEAVES_LIST_URL;

  const [updateSelfLeaveData, setEditMileageData] = useState(null);
  const userRoles = useSelector((state) => state.getstafflist);
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });
  const [getOutstation, setGetOutstation] = useState([]);
  const [getDetail, setGetData] = useState();
  const [modalDetails, setModalDeatils] = useState({
    title: "",
    subTitle: "",
    buttonName: "",
    cancel_id: "",
  });
  const [notes, setNotes] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (userId === undefined) {
      dispatch(getLeaveListAction({ payload: {}, URL: leaveurl }));
      dispatch(getSelfLeaveAction({ payload: {}, URL: selfurl }));
    } else {
      dispatch(
        getDynamicLeaveListAction({ payload: {id}, URL: leavedynamicurl })
      );
      dispatch(getDynamicSelfLeaveAction({ payload: {id}, URL: selfdynamicurl }));
    }
  }, []);

  useEffect(() => {
    setGetOutstation(getDetail);
  }, [getDetail]);

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const handleCancel = () => {
    const details = {
      status: "Cancelled",
      cancelled_reason: notes,
    };
    dispatch(
      updateSelfLeaveAction({ id: updateSelfLeaveData.id, payload: values })
    );
    setTimeout(() => {
      setIsModal(false);
      setGetData([]);
      dispatch(getLeaveListAction({ payload: {}, URL: dynamicurl }));
    }, 200);
    setNotes("");
  };

  const handleFileDownload = (item) => {
    if (item) {
      fetch(baseurl + item, { method: "GET" })
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = item || "downloaded_file";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
          console.error("Error occurred during file download:", error);
        });
    }
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
      title: "Type",
      dataIndex: "leavetype",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "From Date",
      dataIndex: "start_date",
      render: (text) => (
        <div>{text ? moment(text).format("DD/MM/YYYY") : "-"}</div>
      ),
    },
    {
      title: "To Date",
      dataIndex: "end_date",
      render: (text) => (
        <div>{text ? moment(text).format("DD/MM/YYYY") : "-"}</div>
      ),
    },
    {
      title: "Reason",
      dataIndex: "cancelled_reason",
      render: (text) => {
        return (
          <>
            {text ? (
              <div
                title={text}
                style={{
                  maxWidth: "250px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {text}
              </div>
            ) : (
              <>-</>
            )}
          </>
        );
      },
    },
    {
      title: "Approval",
      dataIndex: "approval_name",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Feedback",
      dataIndex: "comment",
      render: (text) => {
        return (
          <>
            {text ? (
              <div
                title={text}
                style={{
                  maxWidth: "250px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {text}
              </div>
            ) : (
              <>-</>
            )}
          </>
        );
      },
    },
    {
      title: isClass ? "Action" : "",
      render: (text) => {
        return (
          <>
            {isClass ? (
              <div className="d-flex flex-column">
                <div
                  className="dropdown dropdown-action text-start"
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  {text.status === "Pending" &&
                  userRoles?.data?.outstation?.outstation?.includes(
                    "Create"
                  ) ? (
                    <div
                      onClick={() => {
                        setModalDeatils({
                          title: "Cancel Leave",
                          subTitle: "Are you sure want to cancel leave?",
                          buttonName: "Cancel",
                          cancel_id: (text?.id).toString(),
                        }),
                          setIsModal(true);
                      }}
                      style={{ width: "40px" }}
                      className="btn btn-outline-primary"
                      title="Cancel"
                    >
                      <i className="fa fa-times m-r-5" />
                    </div>
                  ) : (
                    <div
                      style={{ width: "100%", height: "100%", width: "40px" }}
                    />
                  )}
                  {text?.document ? (
                    <button
                      title="Download"
                      onClick={() =>
                        handleFileDownload(text?.document ?? text?.document)
                      }
                      className="btn btn-outline-primary"
                      style={{ width: "40px" }}
                    >
                      <i className="fa fa-download m-r-5" />
                    </button>
                  ) : (
                    <div
                      style={{ width: "100%", height: "100%", width: "40px" }}
                    />
                  )}
                  {isModal && (
                    <div>
                      <CustomModal
                        isModal={isModal}
                        setIsModal={setIsModal}
                        modalDetails={modalDetails}
                        notes={notes}
                        setNotes={setNotes}
                        handleCancel={handleCancel}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="main-wrapper">
        <div className={isClass ? "page-wrapper" : ""}>
          <Helmet>
            <title>LeavesList</title>
            <meta name="description" content="Login page" />
          </Helmet>

          <div className={isClass ? "content container-fluid" : ""}>
            <div className={isClass ? "page-header" : ""}>
              <div className="row align-items-center">
                {isClass ? (
                  <div className="col">
                    <h3 className="page-title">Leaves</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/app/main/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Leaves</li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                {isClass ? (
                  <div className="col-auto float-end ms-auto">
                    {userRoles?.data?.outstation?.outstation?.includes(
                      "Create"
                    ) ? (
                      <Link
                        to="/app/employees/leaveform"
                        className="btn add-btn"
                      >
                        <i className="fa fa-plus" /> Apply
                      </Link>
                    ) : null}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <div
                className="leave-type"
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}
              >
                {leaveDetails.map(
                  (item, index) =>
                    index !== 0 && <CardCustom key={index} details={item} />
                )}
              </div>
            </div>

            {userRoles?.data?.outstation?.outstation?.includes("View") && (
              <div>
                <>
                  <div className="card">
                    <div className="card-body">
                      {!isLoader ? (
                        <>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <Table
                                  className="table-striped"
                                  pagination={{
                                    total: getOutstation?.length,
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
                                      setTablePagination({
                                        ...tablePagination,
                                        current,
                                      });
                                    },
                                    itemRender: itemRender,
                                  }}
                                  style={{ overflowX: "auto" }}
                                  columns={columns}
                                  dataSource={getOutstation ?? getOutstation}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Loader />
                      )}
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeavesList;
