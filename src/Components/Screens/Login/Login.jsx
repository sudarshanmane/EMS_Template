import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import "./login.scss";
import { AppImages } from "../../../Globals/AppImages.js";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/Actions/Actions";
import { getUser, setUser } from "../../../utils/sessionStorage";
import Register from "./Register.jsx";
import Navbar from "./Navbar.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const [registrationOption, setRegistrationOption] = useState(false);

  const onFinish = (values) => {
    dispatch(userLogin(values));
  };

  const selector = useSelector((state) => state.loginDatails);

  useEffect(() => {
    if (selector) {
      setUser(selector);
      window.location.href = "/";
    }
  }, [selector]);

  const userDetails = getUser();

  if (userDetails) {
    window.location.href = "/";
  }

  return (
    <>
      <div className="login-wrap">
        <Navbar></Navbar>

        <div className="login-form-container">
          <img
            className="login-logo"
            src={AppImages.metaImage}
            alt=""
            style={{ width: "100%", maxWidth: "500px", marginBottom: "25px" }}
          ></img>

          <div className="form-container">
            {registrationOption ? (
              <div className="registration-form">
                <Register />
              </div>
            ) : (
              <Form
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <div className="top-wrap">
                  <Row>
                    <Col span={16}>
                      <div className="auth-wrap">
                        <h3>Welcome to Metamind Expense!</h3>
                        <p>Sign in to continue</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="form-wrap login">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      autoComplete="off"
                      className="eems-ant-input-border"
                      prefix={<MailOutlined />}
                      placeholder="Email address"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      autoComplete="off"
                      className="eems-ant-input-border"
                      prefix={<LockOutlined />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ BottomBorder: "none", marginBottom: "5px" }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="form-button"
                    >
                      Submit
                    </Button>

                    <div>
                      <p className="forgot-button text">forgot password ?</p>
                      <p className="new-user text">
                        Not a User? <a href="/register">Register Here</a>
                      </p>
                    </div>
                  </Form.Item>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
