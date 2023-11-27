/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { emailrgx } from "../constant";

const schema = yup
  .object({
    email: yup
      .string()
      .matches(emailrgx, "Email is required")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .min(6)
      .max(6)
      .required("Password is required")
      .trim(),

    repeatPassword: yup
      .string()
      .required("Confirm Password is required")
      .trim(),
  })
  .required();

const Registrationpage = (props) => {
  const [eye, seteye] = useState(true);

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.password != "123456") {
      setError("password", {
        message: "password is mismatch",
      });
    } else {
      clearErrors("password");
      props.history.push("login");
    }
  };
  const onEyeClick = () => {
    seteye(!eye);
  };
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <Helmet>
          <title>Register - HRMS Admin Template</title>
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
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block">
                      <label>Email</label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control  ${
                              errors?.email ? "error-input" : ""
                            }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                        )}
                        defaultValue="admin@dreamguys.co.in"
                      />

                      <small>{errors?.email?.message}</small>
                    </div>
                    <div className="input-block">
                      <label>Password</label>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <div
                            className="pass-group"
                            style={{ position: "relative" }}>
                            <input
                              type={eye ? "password" : "text"}
                              className={`form-control  ${
                                errors?.password ? "error-input" : ""
                              }`}
                              value={value}
                              onChange={onChange}
                              autoComplete="false"
                            />
                            <span
                              style={{
                                position: "absolute",
                                right: "5%",
                                top: "30%",
                              }}
                              onClick={onEyeClick}
                              className={`fa toggle-password" ${
                                eye ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </div>
                        )}
                        defaultValue="123456"
                      />

                      <small>{errors?.password?.message}</small>
                    </div>
                    <div className="input-block">
                      <label>Repeat Password</label>
                      <Controller
                        name="repeatPassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            className={`form-control  ${
                              errors?.repeatPassword ? "error-input" : ""
                            }`}
                            type="text"
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                        )}
                        defaultValue=""
                      />
                      <small>{errors?.repeatPassword?.message}</small>
                    </div>
                    <div className="input-block text-center">
                      <button
                        className="btn btn-primary account-btn"
                        type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="account-footer">
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
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

export default Registrationpage;
