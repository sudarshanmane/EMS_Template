import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Row,
  Col,
  Upload,
  Select,
  Checkbox,
} from "antd";
import { AlignCenterOutlined, InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getItemListonItemization,
  updateexpensepanel,
} from "../../store/Action/Actions";
import { addExpense } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../Entryfile/offcanvance";
import AddExpenseBulk from "./AddExpenseBulk";

const Addexpense = ({ initialData }) => {
  const [file, setFile] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [expenseItemname, setExpenseItemname] = useState([]);
  const [isFormVisible, setFormVisible] = useState(true);
  const [showInvoiceView, setShowInvoiceView] = useState(true);
  const navigate = useNavigate();
  const [url, setUrl] = useState(URLS.GET_EXPENSE_PANEL_URL);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const getitemeselector = useSelector((state) => state.getitemlistresult);

  useEffect(() => {
    dispatch(getItemListonItemization({}));
  }, []);

  useEffect(() => {
    if (getitemeselector) {
      const expenseItemname = getitemeselector.map((element) => {
        return { label: element.item_name, value: element.id };
      });
      setExpenseItemname(expenseItemname);
    }
  }, [getitemeselector]);

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        expense_name: initialData.expense_name,
        description: initialData.description,
        total_amt: initialData.total_amt,
        paid_by: initialData.paid_by,
        expense_date: new Date(initialData.expense_date),
      });
    }
  }, [form, initialData]);

  const onFinish = (values) => {
    const dateValue = new Date(values.expense_date);
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}T00:00:00Z`;

    values["attachment"] = "";

    const formData = new FormData();
    file.forEach((element) => {
      formData.append("attachment", element);
    });

    formData.append("description", values.description);
    formData.append("expense_name", values.expense_name);
    formData.append("paid_by", values.paid_by);
    formData.append("total_amt", values.total_amt);
    formData.append("expense_date", formattedDate);

    if (initialData && initialData.id) {
      dispatch(
        updateexpensepanel({
          URL: URLS.UPDATE_EXPENSE_PANEL_URL + initialData.id + "/",
          method: "PUT",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addExpense(formData));
      navigate("/home/expensepanel");
    }
  };

  const selector = useSelector((state) => state.addexpenseresult);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const props = {
    name: "file",
    multiple: true,
    accept: ".png, .jpeg, .pdf",
  };

  const uploadingProgress = ({ file, fileList }) => {
    if (file.status !== "uploading") {
      let formDataList = [];
      for (let i = 0; i < fileList.length; i++) {
        formDataList.push(fileList[i].originFileObj);
      }
      setFile(formDataList);
      if (fileList.length > 0) {
        setSelectedFile(fileList[0].originFileObj);
      }
    }
  };

  const toggleView = () => {
    setShowInvoiceView(!showInvoiceView);
  };

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>EEMS</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Add Expense</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Form</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="expense-tab"
                        data-bs-toggle="tab"
                        href="#expense"
                      >
                        Add Expense
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="attachment-tab"
                        data-bs-toggle="tab"
                        href="#mileage"
                      >
                        Add Mileage Expense
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="bulk_expense-tab"
                        data-bs-toggle="tab"
                        href="#bulk_expense"
                      >
                        Add Bulk Expense
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <form action="#" onSubmit={onFinish}>
                    <div className="tab-content">
                      {/* {/ Tab 1: Expense Details /} */}
                      <div className="tab-pane fade show active" id="expense">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                name="expense_name"
                              >
                                Expense Name
                              </label>
                              <div className="col-lg-9">
                                <select
                                  className="form-control"
                                  id="expenseName"
                                >
                                  <option value="" disabled>
                                    Select Expense Name
                                  </option>
                                  <option value="expense1">Expense 1</option>
                                  <option value="expense2">Expense 2</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                name="description"
                              >
                                Description
                              </label>
                              <div className="col-lg-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Paid By
                              </label>
                              <div className="col-lg-9">
                                <select className="form-control" id="paidBy">
                                  <option value="" disabled>
                                    Select Paid By
                                  </option>
                                  <option value="person1">Person 1</option>
                                  <option value="person2">Person 2</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="expenseDate"
                              >
                                Expense Date
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
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="attachment"
                              >
                                Attachment
                              </label>
                              <div className="col-lg-9">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="attachment"
                                  valuePropName="fileList"
                                  getValueFromEvent={normFile}
                                  required
                                />
                                <small className="form-text text-muted">
                                  Select PDF or image file.
                                </small>
                              </div>
                              <div className="text-end mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* {/ Tab 2: Attachment /} */}
                      <div className="tab-pane fade" id="mileage">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="expenseDate"
                              >
                                Date
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
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Paid By
                              </label>
                              <div className="col-lg-9">
                                <select className="form-control" id="paidBy">
                                  <option value="" disabled>
                                    Select Paid By
                                  </option>
                                  <option value="person1">Person 1</option>
                                  <option value="person2">Person 2</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Calculate Distance using
                              </label>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Distance travelled
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Odometer reading
                                </label>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Distance
                              </label>
                              <div className="input-group mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <span
                                  className="input-group-text"
                                  id="basic-addon2"
                                >
                                  Mile(s)
                                </span>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Amount
                              </label>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  INR
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  aria-describedby="basic-addon1"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Tax
                              </label>
                              <div className="col-lg-9">
                                <select className="form-control" id="paidBy">
                                  <option value="" disabled>
                                    Tax
                                  </option>
                                  <option value="person1"></option>
                                  <option value="person1">5%</option>
                                  <option value="person2">12%</option>
                                </select>
                              </div>
                            </div>
                            <div className="input-block row">
                              <label
                                className="col-lg-3 col-form-label"
                                htmlFor="paidBy"
                              >
                                Claim reimbursement
                              </label>
                              <div class="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Default checkbox
                                </label>
                              </div>
                            </div>
                            <div className="text-end mt-3">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="tab-pane fade" id="bulk_expense">
                    <AddExpenseBulk></AddExpenseBulk>
                  </div>
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
export default Addexpense;
