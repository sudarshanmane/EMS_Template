import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Col,
  Select,
  message,
} from "antd";

import "./AllCss.scss";
import {
  addUserAction,
  addUserPanelAction,
  getManagerListAction,
  getRoleAction,
  updateUserAction,
} from "../../../../store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../../../Globals/URLS";

const Users = ({ initialData, setIsAddFormVisible, isAddForm }) => {
  // let formattedDate;

  const dispatch = useDispatch();
  const [url, setUrl] = useState(URLS.GET_MANAGER_LIST_URL);
  const [role, setRole] = useState([]);
  const [managerList, setManagerList] = useState([]);
  const [generateRandomPassword, setGenerateRandomPassword] = useState(false);
  const [isFormVisible, setFormVisible] = useState(true);
  const [form] = Form.useForm();
  //add form functionality reset
  useEffect(() => {
    form.resetFields();
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (!isAddForm) {
      console.log("isAddFormisAddFormisAddForm", isAddForm);
      form.resetFields();
    }
  }, [isAddForm]);
  useEffect(() => {}, []);

  //fetching API for Role

  const roleSelector = useSelector((state) => state.getRoleResult);
  useEffect(() => {
    dispatch(getRoleAction({}));
  }, []);

  useEffect(() => {
    if (roleSelector) {
      const roleResult = roleSelector.map((element) => {
        return { label: element.role_name, value: element.id };
      });
      setRole(roleResult);
    }
  }, [roleSelector]);

  //fetching API for Manager

  const managerListSelector = useSelector(
    (state) => state.getManagerListResult
  );

  useEffect(() => {
    dispatch(getManagerListAction({}));
  }, []);

  useEffect(() => {
    if (managerListSelector) {
      console.log(managerListSelector);
      const ManagerResult = managerListSelector.results.map((element) => {
        return { label: element.username, value: element.id };
      });
      setManagerList(ManagerResult);
    }
  }, [managerListSelector]);

  //fetching API for AddUser

  const formInitialData = useMemo(() => initialData, [initialData]);

  const onFinish = (values) => {
    const datee = values.account_expire_on;
    const formattedDate = datee.$y + "-" + (datee.$M + 1) + "-" + datee.$D;
    values.account_expire_on = formattedDate;

    if (initialData && initialData.id) {
      setFormVisible(false);
      dispatch(
        updateUserAction({
          URL: URLS.UPDATE_USER + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addUserAction(values));
    }
    dispatch(addUserPanelAction({ payload: {}, URL: url }));
  };

  const addUserSelector = useSelector((state) => state.addUserResult);

  useEffect(() => {
    if (addUserSelector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [addUserSelector]);

  const userPanelSelector = useSelector((state) => state.updateUserResult);
  useEffect(() => {
    if (userPanelSelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [userPanelSelector]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleGenerateRandomPasswordChange = (e) => {
    setGenerateRandomPassword(e.target.value === "True");
  };

  // const generateRandomAlphanumericPassword = () => {
  //   const charset =
  //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   let password = "";
  //   for (let i = 0; i < 8; i++) {
  //     const randomIndex = Math.floor(Math.random() * charset.length);
  //     password += charset[randomIndex];
  //   }
  //   return password;
  // };

  return (
    <div className="add_user_form_container">
      {
        <div className="add_user_form custom-form">
          <Form
            layout="vertical"
            name="complex-form"
            onFinish={onFinish}
            form={form}
          >
            <Row gutter={[16, 24]}>
              <Col lg={6} xs={24}>
                <Row>
                  <Col className="gutter-row label-static" lg={6} xs={8}>
                    <Select
                      size="large"
                      defaultValue="Mr"
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        marginRight: "10px",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Mr",
                          label: "Mr",
                        },
                        {
                          value: "Mrs",
                          label: "Mrs",
                        },
                      ]}
                    />
                  </Col>
                  <Col className="gutter-row label-static" lg={18} xs={16}>
                    <Form.Item
                      name="first_name"
                      label="First Name"
                      rules={[
                        {
                          required: true,
                          message: "This is required",
                        },
                      ]}
                      style={{ marginLeft: "10px" }}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="last_name"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "This is required",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item label="Email">
                  <Form.Item name="email" noStyle>
                    <Input placeholder="Email" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item label="NT Domain login">
                  <Form.Item name="nt_domain_login" noStyle>
                    <Input placeholder="Input NT Domain Login" maxLength={10} />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={3} xs={24}>
                <Form.Item name="role" label="Role">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={role}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={3} xs={24}>
                <Form.Item label="Reporting Manager" name="manager">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={managerList}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item name="accounting_code" label="Accounting Code">
                    <Input />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="display_name"
                    label="Display Name"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Input placeholder="Input Display Name" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Input placeholder="Input Login Name" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Password"
                      type={generateRandomPassword ? "text" : "password"}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    label="Password Verification"
                    name="password_verifications"
                    type="password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The new password that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input
                      type={generateRandomPassword ? "text" : "password"}
                      placeholder="re-enter password"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="generate_ran_password"
                  label="Generate Random Password"
                >
                  <Radio.Group
                    defaultValue={"False"}
                    onChange={handleGenerateRandomPasswordChange}
                    value={generateRandomPassword ? "True" : "False"}
                  >
                    <Radio value="True">Yes</Radio>
                    <Radio value="False">No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="email_login_info_to_user"
                  label="Email Login Information to User"
                  className="label-static"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item name="emailPassword" label="Email Password">
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="require_new_password_on_first_login"
                  label="Require New Password to First Login"
                  className="label-static"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="is_manager"
                  label="Is Manager"
                  className="label-static"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="is_account_manager"
                  label="Is Account Manager"
                  className="label-static"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="account_expire_on"
                  label="Account Expires On"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <DatePicker format="DD-MM-YYYY" />
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    label="Allowed No. of Uses"
                    name="allowed_no_of_user"
                    rules={[
                      {
                        pattern: /^\d+$/, // Regex pattern for integers
                        message: "Please enter a valid integer",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item label="Phone">
                  <Form.Item
                    name="mobile_number"
                    rules={[
                      {
                        pattern: /^\d{10}$/, // Regex pattern for 10 digits
                        message: "Please enter a valid 10-digit number",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="fax_no"
                    label="Fax No."
                    rules={[
                      {
                        pattern: /^\d+$/, // Regex pattern for integers
                        message: "Please enter a valid integer",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="spending_categories"
                    label="Spending Categories"
                    type="number"
                    rules={[
                      {
                        pattern: /^\d+$/, // Regex pattern for integers
                        message: "Please enter a valid integer",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item name="spend_limit" label="Spending Limits">
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="receiving_tolerance"
                    label="Receiving Tolerance"
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="bill_to_location"
                    label="Bill To Location"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    label="ship to Location"
                    name="ship_to_location"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Input placeholder="Input Ship to Loction" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item name="expense_location" label="Expense Location">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="related_vedor_portal_vendor"
                  label="Related Vendor Portal Vendor"
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="notify_via"
                  label="Notify via"
                  defaultValue="Internal Messaging"
                >
                  <Select
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Internal Messaging"
                    options={[
                      {
                        value: "internal",
                        label: "Internal Messaging",
                      },
                      {
                        value: "email",
                        label: "Email",
                      },
                      {
                        value: "both",
                        label: "Both",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="language"
                  label="Language"
                  initialValues={{
                    language: "English(United States)",
                  }}
                >
                  <Input size="large" defaultValue="English(United States)" />
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="exclude_user_from_rule_escalations"
                  label="Exclude User from Rule Escalations"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="exclude_user_from_password_expiration"
                  label="Exclude User from Password Escalations"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="allow_access_to_manager"
                  label="Allow Access To Manager"
                >
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={6} style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  size="large"
                  htmlType="submit"
                  type="primary"
                  style={{
                    textAlign: "end",
                    marginTop: "15px",
                  }}
                >
                  Submit
                </Button>

                <Button
                  size="large"
                  style={{
                    textAlign: "end",
                    marginTop: "15px",
                  }}
                  htmlType="reset"
                >
                  Clear Entries
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      }
    </div>
  );
};

export default Users;
