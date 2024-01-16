import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Avatar_21 } from "../../../Entryfile/imagepath";
import { URLS } from "../../../Globals/URLS";
import { getCurrentUser } from "../../../store/Action/Actions";

export default function SelfProfileHead() {
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState([]);
  const url = URLS.GET_CURRENT_USER_URL;
 
  function getPageDetails(url) {
    dispatch(getCurrentUser({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchUserData(url) {
    dispatch(getCurrentUser({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchUserData(url);
  }, []);

  const userSelector = useSelector((state) => state.getcurrentuser);

  useEffect(() => {
    if (userSelector && Array.isArray(userSelector)) {
      const userRole = userSelector.map((element) => {
        return {
          profile_image: element.profile_image,
          emp_id: element.emp_id,
          first_name: element.first_name,
          last_name: element.last_name,
          user_role: element.user_role,
          mobile_no: element.mobile_no,
          email: element.email,
          date_of_birth: element.date_of_birth,
          permanent_address: element.permanent_address,
        };
      });
      setUserRole(userRole);
    }
  }, [userSelector]);
  


  return (
    <>
      {" "}
      <div className="card mb-0">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-view">
                <div className="profile-img-wrap">
                  <div className="profile-img">
                    {/* <Link to="#"> */}
                    {userRole?.profile_image != null ? (
                      <img alt="img" src={userRole?.profile_image} />
                    ) : (
                      <img alt="img" src={Avatar_21} />
                    )}
                    {/* </Link> */}
                  </div>
                </div>
                <div className="profile-basic">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile-info-left">
                        <h3 className="user-name m-t-0 mb-0">
                          {userRole?.first_name + " " + userRole?.last_name}
                        </h3>
                        <small className="text-muted">
                          {userRole?.user_role?.user_role || "NA"}
                        </small>
                        <div className="staff-id">
                          Employee ID : {userRole?.emp_id || "NA"}
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
                            {userRole?.mobile_no || "NA"}
                          </div>
                        </li>
                        <li>
                          <div className="title">Email:</div>
                          <div className="text">{userRole?.email || "NA"}</div>
                        </li>
                        <li>
                          <div className="title">Birthday:</div>
                          <div className="text">
                            {userRole?.date_of_birth || "NA"}
                          </div>
                        </li>

                        <li>
                          <div className="title">Address:</div>
                          <div className="text">
                            {userRole?.permanent_address || "NA"}
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
    </>
  );
}
