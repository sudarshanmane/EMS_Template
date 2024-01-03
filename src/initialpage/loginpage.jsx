/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../Entryfile/features/users.jsx";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { setUser } from "../utils/sessionStorage.js";

const Loginpage = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    // dispatch(login(data));
    setUser(data);
    navigate("/");
  };

  const dispatch = useDispatch();

  const [eye, seteye] = useState(true);

  const onEyeClick = () => {
    seteye(!eye);
  };

  return (
    <div className="account-page">
      <div className="main-wrapper">
        <Helmet>
          <title>Login - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="account-content">
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <Link to="/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </Link>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block">
                      <label>Email Address</label>
                      <input
                        type="text"
                        {...register("email")}
                        className="form-control"
                        placeholder="Enter your email address"
                        defaultValue="admin@dreamguystech.com"
                      />
                      <small>{errors.email?.message}</small>
                    </div>
                    <div className="input-block">
                      <div className="row">
                        <div className="col">
                          <label>Password</label>
                        </div>
                        <div className="col-auto">
                          <Link className="text-muted" to="/forgotpassword">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <input
                          type={eye ? "password" : "text"}
                          className="form-control"
                          placeholder="Enter your password"
                          {...register("password")}
                          defaultValue={123456}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: "5%",
                            top: "30%",
                          }}
                          onClick={onEyeClick}
                          className={`toggles-password fa toggle-password ${
                            eye ? "fa-eye-slash" : "fa-eye"
                          } `}
                        />
                      </div>
                      <small>{errors.password?.message}</small>
                    </div>
                    <div className="input-block text-center">
                      <button
                        className="btn btn-primary account-btn"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <Link to="/register">Register</Link>
                    </p>
                  </div>
                </div>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
