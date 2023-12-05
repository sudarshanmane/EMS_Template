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
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import { useDispatch, useSelector } from "react-redux";
import { getItemListonItemization, updateexpensepanel } from "../../store/Action/Actions";
import { addExpense } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import { useNavigate } from "react-router-dom";

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
        expense_date: new Date(initialData.expense_date), // Use Date object
      });
    }
  }, [form, initialData]);

  const onFinish = (values) => {
    // const dateValue = values.expense_date;
    // const date = dateValue.$y + "-" + eval(dateValue.$M +1)  + "-" + dateValue.$D
    // console.log(date);
    //   console.log("formattedDateformattedDateformattedDateformattedDate",dateValue);
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
    <div className="add_user_form_container">
      {isFormVisible && (
        <div className="add_user_form custom-form">
          <Row gutter={20}>
            <Col flex="1 1 200px">
              <Form
                layout="vertical"
                name="complex-form"
                onFinish={onFinish}
                encType="multipart/form-data"
              >
                <Row gutter={[16, 24]}>
                  <Col lg={6} xs={24}>
                    <Form.Item name="expense_name" label="Expense Name">
                      <Select
                        mode=""
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        options={expenseItemname}
                      />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" lg={6} xs={24}>
                    <Form.Item
                      name="description"
                      label="Description"
                      className="label-static"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="Enter your description here"
                      />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row label-static" lg={12} xs={24}>
                    <Form.Item
                      name="total_amt"
                      label="Total Amount"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <Input type="number" size="large" />
                    </Form.Item>
                  </Col>

                  <Col className="gutter-row label-static" lg={12} xs={24}>
                    <Form.Item name="paid_by" label="Paid By">
                      <Select
                        mode=""
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        options={[
                          {
                            value: "Company",
                            label: "Company",
                          },
                          {
                            value: "Employee",
                            label: "Employee(To Reimburse)",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row label-static" lg={12} xs={24}>
                    <Form.Item
                      name="expense_date"
                      label="Expense Date"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <DatePicker style={{ width: "100%" }} size="large" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row label-static" lg={24} xs={24}>
                    <div className="uploaded-documents">
                      <Form.Item
                        name="attachment"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        label="Attachments"
                        rules={[
                          {
                            required: true,
                            message: "Please upload at least one file.",
                          },
                        ]}
                      >
                        <Dragger
                          {...props}
                          onChange={uploadingProgress}
                          listType="picture-card"
                        >
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                        </Dragger>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col className="gutter-row" lg={6} xs={24}></Col>
                </Row>

                <div style={{ textAlign: "end" }}>
                  <Button
                    size="large"
                    htmlType="submit"
                    type="primary"
                    style={{
                      textAlign: "end",
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
                </div>
              </Form>
            </Col>
            <Col flex="0 1 500px">
              {selectedFile && (
                <div className="selected-file">
                  <p>Selected Document:</p>

                  {selectedFile.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected Document"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <p>{selectedFile.name}</p>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Addexpense;
