import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../store/Actions/Actions";
import { setUser } from "../../../utils/sessionStorage";
import Login from "./Login";
import { AppImages } from "../../../Globals/AppImages.js";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";


const Register = () => {
  const dispatch = useDispatch();
  const [loginOption, setLoginOption] = useState(false);
  const navigate  = useNavigate(); 

  const onFinish = async (values) => {
    // message.success("Successfully Registered!"); 
    alert("Registration Successfull")
    await dispatch(userRegister(values));
    navigate("/login");
  };
  
  const selector = useSelector((state) => state.registerDatails);

  useEffect(() => {
    if (selector) {
      setUser(selector);
     
    }
  }, [selector]);

  return (
    <div className="login-wrap">
        <Navbar></Navbar>
      <div className="login-form-container">
        <img
          className="login-logo"
          src={AppImages.metaImage}
          alt=""
          style={{ width: "100%", maxWidth: "250px", marginBottom: "25px" }}
        ></img>

        <div className="form-container">
          {loginOption ? (
            <div className="login-form">
              <Login />
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
                      <h3>Register Organization</h3>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-wrap login">
                <Form.Item
                  name="company_name"
                  label="Company Name"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This filed is required",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    autoComplete="off"
                    className="eems-ant-input-border"
                  />
                </Form.Item>

                <Form.Item
                  name="address_1"
                  label="Address Line-1"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This filed is required",
                    },
                  ]}
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    size="large"
                  />
                </Form.Item>

                <Form.Item name="address_2" label="Address Line-2">
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="City"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This filed is required",
                    },
                  ]}
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="state"
                  label="State"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This filed is required",
                    },
                  ]}
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="country"
                  label="Country"
                  className="label-static"
                >
                  <Input
                    size="large"
                    autoComplete="off"
                    className="eems-ant-input-border"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="country_code"
                  label="Country Code "
                  className="label-static"
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="mobile_number"
                  label="Mobile Number"
                  className="label-static"
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="postal_code"
                  label="Postal Code "
                  className="label-static"
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item name="email" label="Email" className="label-static">
                  <Input
                    size="large"
                    autoComplete="off"
                    className="eems-ant-input-border"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="username"
                  label="Username"
                  className="label-static"
                >
                  <Input
                    autoComplete="off"
                    className="eems-ant-input-border"
                    placeholder=" Enter Username"
                    rules={[
                      {
                        required: true,
                        message: "This filed is required",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item label="Password">
                  <Form.Item name="password" noStyle>
                    <Input.Password
                      autoComplete="off"
                      className="eems-ant-input-border"
                      placeholder="password"
                      rules={[
                        {
                          required: true,
                          message: "This filed is required",
                        },
                      ]}
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                </Form.Item>

                <Form.Item
                  style={{ BottomBorder: "none", marginBottom: "5px" }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="form-button"
                  >
                    Register
                  </Button>
                  <div>
                    <p className="new-user text">
                      Already a User? <a href="/login">Login Here</a>
                    </p>
                  </div>
                </Form.Item>
              </div>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
