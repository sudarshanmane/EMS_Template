import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Offcanvas from "../../../Entryfile/offcanvance";
import { Applogo, headerlogo } from "../../../Entryfile/imagepath";
import { Link } from "react-router-dom";
import { changePassword } from "../../../store/Action/Actions";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
  } = useForm({});

const dispatch = useDispatch();
  const onChange = (values) => {
    dispatch(changePassword(values));
  };

  const changePasswordSelector = useSelector((state) => state.changepassword);

  useEffect(() => {
    if (changePasswordSelector) {
      reset();
    }
  }, [changePasswordSelector]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Change Password - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div class="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            {/* Account Logo */}
            <div className="account-logo">
              <Link to="/admin-dashboard">
                <img
                  src={headerlogo}
                  alt="Dreamguy's Technologies"
                  style={{ marginTop: "30px" , width: "300px"}}
                />
              </Link>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Change Password</h3>
                <form onSubmit={handleSubmit(onChange)}>
                  <div className="input-block">
                    <label>Old password</label>
                    <input type="password" className="form-control"  {...register("old_password")}/>
                  </div>
                  <div className="input-block">
                    <label>New password</label>
                    <input type="password" className="form-control"  {...register("new_password")}/>
                  </div>
                  <div className="input-block">
                    <label>Confirm password</label>
                    <input type="password" className="form-control"  {...register("confirm_password")} />
                  </div>
                  <div className="submit-section mb-4">
                    <button className="btn btn-primary submit-btn">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <Offcanvas />
    </div>
  );
};

export default ChangePassword;
