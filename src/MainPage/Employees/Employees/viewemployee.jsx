import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Offcanvas from "../../../../src/Entryfile/offcanvance";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../../Globals/URLS";
import { getAllStaff } from "../../../store/Action/Actions";
import { User } from "../../../Entryfile/imagepath";
import ProfilePage from "../../Pages/Profile/profilepage";
import Usersetting from "../../Pages/Profile/usersetting";
import AttendaceUser from "../../Pages/Profile/attendaceuser";
import LeavesList from "../../Pages/Profile/leavelist";

const ViewEmployee = () => {
  const dispatch = useDispatch();
  const url = URLS.GET_STAFF_LIST_URL;
  const baseurl = URLS.BASE_URL_EXPORT;
  const [user, setUser] = useState([]);
  
  const params = useParams();
  const { id } = params;
  // const { id } = useParams();

  const [activeTab, setActiveTab] = useState("emp_profile");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = `#${tabId}`;
  };
  

  const userSelector = useSelector((state) => state.getstafflist);

  useEffect(() => {
    if (userSelector) {
      const userData = userSelector.data.find(
        (element) => element.id === parseInt(id, 10)
      );

      if (userData) {
        setUser({
          id: userData.id,
          profile_image: userData.profile_image,
          full_name: userData.full_name,
          user_role: userData.user_role,
          emp_id: userData.emp_id,
          email: userData.email,
          mobile_no: userData.mobile_no,
          branch_name: userData.branch_name,
          designation: userData.designation,
        });
      }
    }
  }, [userSelector]);

  useEffect(() => {
    dispatch(getAllStaff({ id }));
  }, [id]);

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }

    const queryParams = new URLSearchParams(window.location.search);
    const openUserSettingTab = queryParams.get("openUserSettingTab");

    if (openUserSettingTab) {
      handleTabChange("user_setting");
    }
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Client Profile - HRMS admin Template</title>
          <meta name="description" content="Reactify Blank Page" />
        </Helmet>

        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        {/* <Link to="#"> */}
                        {user?.profile_image != null ? (
                          <img alt="" src={`${baseurl}${user.profile_image}`} />
                        ) : (
                          <img alt="img" src={User} />
                        )}

                        {/* </Link> */}
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">
                              {user?.full_name}
                            </h3>
                            <small className="text-muted">
                              {user?.full_name || "NA"}
                            </small>
                            <div className="staff-id">
                              Employee ID : {user?.emp_id || "NA"}
                            </div>

                            <div className="staff-msg">
                              <Link
                                onClick={() =>
                                  localStorage.setItem("minheight", "true")
                                }
                                className="btn btn-custom"
                                to="/conversation/chat"
                              >
                                Send Message
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                {user?.mobile_no || "NA"}
                              </div>
                            </li>
                            <li>
                              <div className="title">Email:</div>
                              <div className="text">{user?.email || "NA"}</div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">
                                {user?.date_of_birth || "NA"}
                              </div>
                            </li>

                            <li>
                              <div className="title">Address:</div>
                              <div className="text">
                                {user?.permanent_address || "NA"}
                              </div>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card tab-box">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    {/* <Link
                      to="#emp_profile"
                      data-bs-toggle="tab"
                      // className="nav-link active"
                      onClick={() => handleTabChange("emp_profile")}
                      className={`nav-link ${
                        activeTab === "emp_profile" ? "active" : ""
                      }`}
                    >
                      Profile
                    </Link> */}
                    <Link
                      data-bs-toggle="tab"
                      onClick={() => handleTabChange("emp_profile")}
                      className={`nav-link ${
                        activeTab === "emp_profile" ? "active" : ""
                      }`}
                    >
                      Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#user_setting"
                      data-bs-toggle="tab"
                      // className="nav-link"
                      onClick={() => handleTabChange("user_setting")}
                      className={`nav-link ${
                        activeTab === "user_setting" ? "active" : ""
                      }`}
                    >
                      User Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#emp_attendance"
                      data-bs-toggle="tab"
                      // className="nav-link"
                      onClick={() => handleTabChange("emp_attendance")}
                      className={`nav-link ${
                        activeTab === "emp_attendance" ? "active" : ""
                      }`}
                    >
                      Attendance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#emp_leave"
                      data-bs-toggle="tab"
                      // className="nav-link"
                      onClick={() => handleTabChange("emp_leave")}
                      className={`nav-link ${
                        activeTab === "emp_leave" ? "active" : ""
                      }`}
                    >
                      Leave
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              id="emp_profile"
              className="pro-overview tab-pane fade show active"
            >
              <ProfilePage userId={id} />
            </div>

            <div className="tab-pane fade" id="user_setting">
              <Usersetting userId={id} />
            </div>

            <div className="tab-pane fade" id="emp_attendance">
              <AttendaceUser userId={id} />
            </div>

            <div className="tab-pane fade" id="emp_leave">
              <LeavesList userId={id} />
            </div>
          </div>
          <div
            id="family_info_modal"
            className="modal custom-modal fade"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title"> Family Informations</h5>
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
                  <form>
                    <div className="form-scroll">
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">
                            Family Member{" "}
                            <Link to="#" className="delete-icon">
                              <i className="fa fa-trash" />
                            </Link>
                          </h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Name <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Relationship{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Date of birth{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Phone <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">
                            Education Informations{" "}
                            <Link to="#" className="delete-icon">
                              <i className="fa fa-trash" />
                            </Link>
                          </h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Name <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Relationship{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Date of birth{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block">
                                <label>
                                  Phone <span className="text-danger">*</span>
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                          <div className="add-more">
                            <Link to="#">
                              <i className="fa fa-plus-circle" /> Add More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default ViewEmployee;
