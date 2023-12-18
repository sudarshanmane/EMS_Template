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
import {
  addUserAction,
  addUserPanelAction,
  getManagerListAction,
  getRoleAction,
  updateUserAction,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../Entryfile/offcanvance";

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

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Horizontal Form - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Add User</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">User Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">User Form</h4>
                </div>
                <div className="card-body">
                  <form action="#" onFinish={onFinish}>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="expense_name"
                          >
                            Role
                          </label>
                          <div className="col-lg-9">
                            <select className="form-control" id="expenseName">
                              <option value="" disabled>
                                Select Role
                              </option>
                              <option value="expense1">role 1</option>
                              <option value="expense2">role 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="expense_name"
                          >
                            Reporting Manager
                          </label>
                          <div className="col-lg-9">
                            <select className="form-control" id="expenseName">
                              <option value="" disabled>
                                Reporting Manager
                              </option>
                              <option value="expense1">role 1</option>
                              <option value="expense2">role 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="expense_name"
                          >
                            Notify via
                          </label>
                          <div className="col-lg-9">
                            <select className="form-control" id="expenseName">
                              <option value="" disabled>
                                Notify via
                              </option>
                              <option value="expense1">role 1</option>
                              <option value="expense2">role 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Email
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            NT Domain login
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Accounting Code
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Username
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Password Verification
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Generate Random Password
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Email Login Information to User
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Email Password
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Require New Password to First Login
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Is Manager
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Allowed No. of Uses
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Phone
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Fax No.
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Spending Categories
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Spending Limits
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Receiving Tolerance
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Bill To Location
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            ship to Location
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Expense Location
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                            Related Vendor Portal Vendor
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Is Account Manager
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Exclude User from Rule Escalations
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Exclude User from Password Escalations
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            Allow Access To Manager
                          </label>
                          <div className="col-lg-9">
                            <Radio.Group defaultValue={"True"}>
                              <Radio value={"True"}>Yes</Radio>
                              <Radio value={"False"}>No</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="expenseDate"
                              >
                                Account Expires On
                              </label>
                              <div className="col-lg-9">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="expenseDate"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
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

export default Users;
