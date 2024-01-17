import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  getUserAttendanceAction,
  getUserAttendanceDynamicAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

const AttendaceUser = ({ isClass = true, userId }) => {
  const simpleurl = URLS.GET_USER_ATTENDANCE_URL;
  const dynamicurl = URLS.GET_USER_ATTENDANCE_DYNAMIC_URL;
  const baseurl = URLS.BASE_URL_EXPORT;
  const dispatch = useDispatch();
  const userRoles = useSelector((state) => state.getstafflist);
  const getDetail = useSelector((state) => state.getuserattendance);
  const isLoader = useSelector((state) => state.getuserattendancedynamic);

  
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });
 
  useEffect(() => {
    if (userId === undefined) {
      dispatch(getUserAttendanceAction({ payload: {}, URL: simpleurl }));
    } else {
      dispatch(getUserAttendanceDynamicAction({ payload: {}, URL: dynamicurl }));
    }
  }, []);

  function formatTime(hours, minutes, seconds) {
    const padZero = (value) => (value < 10 ? `0${value}` : `${value}`);
    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

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
      title: "Attendance",
      dataIndex: "attendance",

      render: (text) => (text ? "Marked" : "Not Marked"),
    },
    {
      title: "FaceMatch",
      dataIndex: "sign_in_image",

      render: (text) => (text ? "Marked" : "Not Marked"),
    },
    {
      title: "In Time",
      dataIndex: "sign_in_time",
      render: (text) => (
        <div className="dt-tm">
          {text ? (
            <div>
              <p>Date: {moment(text).format("DD/MM/YYYY")}</p>
              <p>Time: {moment(text).format("HH:MM:SS")}</p>
            </div>
          ) : (
            <p>-</p>
          )}
        </div>
      ),
    },
    {
      title: "Out Time",
      dataIndex: "sign_out_time",
      render: (text) => (
        <div className="dt-tm">
          {text ? (
            <div>
              <p>Date: {moment(text).format("DD/MM/YYYY")}</p>
              <p>Time: {moment(text).format("HH:MM:SS")}</p>
            </div>
          ) : (
            <p>--:--:--</p>
          )}
        </div>
      ),
    },
    {
      title: "Sign In Image",
      dataIndex: "sign_in_image",

      render: (text) => {
        console.log("texyt",text)
        return (
          <div className="attendance-img">
            {text ? (
              <img
                data-bs-toggle="modal"
                data-bs-target="#image_pop_up"
                src={text ? baseurl + text : ""}
                alt={text ? text : ""}
                style={{ cursor: "pointer" }}
              ></img>
            ) : (
              <>
                {" "}
                <img src={p_img} alt="Default" style={{ cursor: "pointer" }} />
              </>
            )}

            <div>
              <div
                className="modal custom-modal fade"
                id="image_pop_up"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <img
                        src={text ? baseurl + text : ""}
                        alt={text ? text : ""}
                        style={{ width: "100%", cursor: "pointer" }}
                      />
                      <Link
                        style={{ marginTop: "20px" }}
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
        );
      },
    },
    {
      title: "Sign Out Image",
      dataIndex: "sign_out_image",

      render: (text) => {
        return (
          <div className="attendance-img">
            {text ? (
              <img
                data-bs-toggle="modal"
                data-bs-target="#image_pop_up"
                src={text ? baseurl + text : ""}
                alt={text ? text : ""}
                style={{ cursor: "pointer" }}
              ></img>
            ) : (
              <>
                <img src={p_img} alt="Default" style={{ cursor: "pointer" }} />
              </>
            )}

            <div>
              <div
                className="modal custom-modal fade"
                id="image_pop_up"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <img
                        src={text ? baseurl + text : ""}
                        alt={text ? text : ""}
                        style={{ width: "100%", cursor: "pointer" }}
                      />
                      <Link
                        style={{ marginTop: "20px" }}
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
        );
      },
    },
    {
      title: "Sign In Location",
      dataIndex: "sign_in_location",

      render: (text) => {
        const coordinatesignIn = Math.abs(text?.coordinates[0])
          ?.toString()
          .substring(0, 6);
        const coordinatesignOut = Math.abs(text?.coordinates[1])
          ?.toString()
          .substring(0, 6);
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{text?.coordinates ? coordinatesignIn : "No Location"}</div>
            <div>{text?.coordinates ? coordinatesignOut : ""}</div>
            <div style={{ width: "80px", marginTop: "10px" }}>
              {text?.coordinates[0] && text?.coordinates[1] && (
                <MapView
                  lat={text?.coordinates[0] && text?.coordinates[0]}
                  long={text?.coordinates[1] && text?.coordinates[1]}
                />
              )}
            </div>
          </div>
        );
      },
    },
    {
      title: "Sign Out Location",
      dataIndex: "sign_out_location",
      render: (text) => {
        const coordinatesignIn = Math.abs(text?.coordinates[0])
          ?.toString()
          .substring(0, 6);
        const coordinatesignOut = Math.abs(text?.coordinates[1])
          ?.toString()
          .substring(0, 6);
        return (
          <>
            <div
              style={{
                display: "flex",
              }}
            >
              <div className="d-flex">
                <div>
                  {text?.coordinates ? coordinatesignIn : "No Location"}{" "}
                </div>
                <div>{text?.coordinates ? coordinatesignOut : ""} </div>
              </div>
            </div>
            <div style={{ width: "80px", marginTop: "10px" }}>
              <div style={{ width: "80px", marginTop: "10px" }}>
                {text?.coordinates[0] && text?.coordinates[1] && (
                  <MapView
                    lat={text?.coordinates[0] && text?.coordinates[0]}
                    long={text?.coordinates[1] && text?.coordinates[1]}
                  />
                )}
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: "Hours",
      dataIndex: "total_hours",
      render: (text) =>
        text
          ? formatTime(text?.hours, text?.minutes, text?.seconds)
          : "--:--:--",
    },
    {
      title: "Over Time",
      dataIndex: "over_time",
      render: (text) =>
        text
          ? formatTime(text?.hours, text?.minutes, text?.seconds)
          : "--:--:--",
    },
  ];

  return (
    <>
      <div className="main-wrapper">
        <div className={isClass ? "page-wrapper" : ""}>
          <Helmet>
            <title>Attendance</title>
            <meta name="description" content="Login page" />
          </Helmet>

          <div className={isClass ? "content container-fluid" : ""}>
            <div className={isClass ? "page-header" : ""}>
              <div className="row align-items-center">
                {isClass ? (
                  <div className="col">
                    <h3 className="page-title">Attendance</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/app/main/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Attendance</li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                {userRoles?.data?.outstation?.outstation?.includes("View") && (
                  <div>
                    {!isLoader ? (
                      <>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <Table
                                className="table-striped"
                                pagination={{
                                  total: getDetail?.length,
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
                                dataSource={getDetail ?? getDetail}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Loader />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendaceUser;
