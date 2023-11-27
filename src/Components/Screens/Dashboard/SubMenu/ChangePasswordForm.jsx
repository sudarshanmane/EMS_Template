
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Alert, Layout, message } from "antd";
import { changePassword } from "../../../../store/Actions/Actions";



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

      if (response.error.includes("old_password") && !oldPasswordErrorHandled) {
        form.setFields([
          {
            name: "old_password",
            errors: ["Your old password was entered incorrectly. Please enter it again."],
          },
        ]);
        setOldPasswordErrorHandled(true);
       setErrorMessage("Your old password was entered incorrectly.");
      }
       else if (response.error.includes("new_password2")) {
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
      setErrorMessage("Password update failed. Please check the form for errors.");
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

    if (value && username && value.toLowerCase().includes(username.toLowerCase())) {
      throw new Error("Password is too similar to the username");
    }
  };

  return (
    <Content>
      <div>
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
      </div>
    </Content>
  );
};

export default ChangePasswordForm;
