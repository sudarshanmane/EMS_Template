import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert, Layout, message } from "antd";
import { changePassword } from "../../store/Action/Actions";

const { Content } = Layout;

const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [oldPasswordErrorHandled, setOldPasswordErrorHandled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const changePasswordSelector = useSelector((state) => state.changepassword);

  const onFinish = async (values) => {
    try {
      const response = await dispatch(changePassword(JSON.stringify(values)));

      if (response && response.error) {
        if (
          response.error.includes("old_password") &&
          !oldPasswordErrorHandled
        ) {
          form.setFields([
            {
              name: "old_password",
              errors: [
                "Your old password was entered incorrectly. Please enter it again.",
              ],
            },
          ]);
          setOldPasswordErrorHandled(true);
          setErrorMessage("Your old password was entered incorrectly.");
        } else if (response.error.includes("new_password2")) {
          form.setFields([
            {
              name: "new_password2",
              errors: ["Passwords do not match"],
            },
          ]);
        } else if (response.error.includes("new_password1")) {
          form.setFields([
            {
              name: "new_password1",
              errors: ["Password must be at least 8 characters"],
            },
          ]);
        } else if (response.error.includes("password_too_similar")) {
          form.setFields([
            {
              name: "new_password1",
              errors: ["Password is too similar to the username"],
            },
          ]);
        }
        setErrorMessage(
          "Password update failed. Please check the form for errors."
        );
      } else {
        setOldPasswordErrorHandled(false);
        setErrorMessage(null);
        message.success("Password Updated Successfully!");
        setPasswordUpdated(true);
        form.resetFields();
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        console.error("Error updating password:", error);
        setErrorMessage("Password update failed. Please try again later.");
      }
    }
  };

  const usernameValidation = async (_, value) => {
    const username = form.getFieldValue("username");

    if (
      value &&
      username &&
      value.toLowerCase().includes(username.toLowerCase())
    ) {
      throw new Error("Password is too similar to the username");
    }
  };

  return (
    <Content>
      {/* <div>
        <h1>Change Password</h1>
        {errorMessage && (
          <Alert message={errorMessage} type="error" showIcon style={{ marginBottom: 16 }} />
        )}
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="Old Password"
            name="old_password"
            rules={[
              {
                required: true,
                message: "Please enter your old password",
              },
            ]}
          >
            <Input type="password" style={{ width: "30%" }} />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="new_password1"
            rules={[
              {
                required: true,
                message: "Please enter a new password",
              },
              {
                min: 8,
                message: "Password must be at least 8 characters",
              },
              {
                validator: usernameValidation,
              },
            ]}
          >
            <Input type="password" style={{ width: "30%" }} />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="new_password2"
            dependencies={["new_password1"]}
            rules={[
              {
                required: true,
                message: "Please confirm your new password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password1") === value) {
                    setPasswordsMatch(true);
                    return Promise.resolve();
                  }
                  setPasswordsMatch(false);
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input type="password" style={{ width: "30%" }} />
          </Form.Item>
          {!passwordUpdated && !passwordsMatch && (
            <Form.Item>
              <Alert
                message="Passwords do not match"
                type="error"
                showIcon
                style={{ width: "30%" }}
              />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </div> */}
      <div className="row">
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title mb-0">Change Password Form</h4>
              {errorMessage && (
                <Alert
                  message={errorMessage}
                  type="error"
                  showIcon
                  style={{ marginBottom: 16 }}
                />
              )}
            </div>
            <div className="card-body">
              <form action="#" form={form} onFinish={onFinish}>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Old Password
                  </label>
                  <div className="col-lg-9">
                    {/* <input type="password" className="form-control" /> */}
                    <input
                      type="password"
                      className="form-control"
                      name="old_password"
                      required
                      aria-describedby="oldPasswordHelpBlock"
                    />
                    <small
                      id="oldPasswordHelpBlock"
                      className="form-text text-muted"
                    >
                      Please enter your old password.
                    </small>
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    New Password
                  </label>
                  <div className="col-lg-9">
                    {/* <input type="password" className="form-control" /> */}
                    <input
                      type="password"
                      className="form-control"
                      name="new_password1"
                      required
                      minLength="8"
                      pattern=".{8,}"
                      // onChange={handlePasswordChange}
                      aria-describedby="newPasswordHelpBlock" 
                      validator={usernameValidation} 
                    />
                    <small
                      id="newPasswordHelpBlock"
                      className="form-text text-muted"
                    >
                      Please enter a new password (at least 8 characters).
                    </small>
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Confirm Password
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="password"
                      className="form-control"
                      name="new_password2"
                      dependencies={["new_password1"]}
                      required
                      // onChange={handleConfirmPasswordChange}
                      aria-describedby="confirmPasswordHelpBlock"
                    />
                    <small
                      id="confirmPasswordHelpBlock"
                      className="form-text text-muted"
                    >
                      Please confirm your new password.
                    </small>
                    {!passwordUpdated && !passwordsMatch && (
                      <small className="form-text text-danger">
                        Passwords do not match.
                      </small>
                    )}
                  </div>
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-primary">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default ChangePasswordForm;
