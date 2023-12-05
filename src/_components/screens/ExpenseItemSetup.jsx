import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Radio, Row, Col, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Getexpensetypelist,
  addCategoryAction,
  addExpenseItemSetup,
  getAccountingCodeAction,
  getExpenseItemSetupPanelAction,
  updateExpenseItemSetup,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";

const ExpenseItemSetup = ({ initialData, setIsAddFormVisible, isAddForm }) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(URLS.GET_EXPENSE_ITEM_SETUP_PANEL_URL);

  console.log(initialData);

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (!isAddForm) {
      form.resetFields();
    }
  }, [isAddForm]);

  useEffect(() => {}, []);

  const [allExpenseType, setAllExpenseType] = useState([]);
  const [accountingCode, setAccountingCode] = useState([]);
  const [isFormVisible, setFormVisible] = useState(true);

  const getparenttypeselector = useSelector(
    (state) => state.getexpenselistresult
  );

  useEffect(() => {
    dispatch(Getexpensetypelist({}));
  }, []);

  useEffect(() => {
    if (getparenttypeselector) {
      const allExpenseType = getparenttypeselector.map((element) => {
        return { label: element.expense_type_name, value: element.id };
      });
      setAllExpenseType(allExpenseType);
    }
  }, [getparenttypeselector]);

  const accountingCodeSelector = useSelector(
    (state) => state.accountingCodeResult
  );

  useEffect(() => {
    dispatch(getAccountingCodeAction({}));
  }, []);

  useEffect(() => {
    if (accountingCodeSelector) {
      const accountCodeList = accountingCodeSelector.map((element) => {
        return { label: element.accounting_code, value: element.id };
      });
      setAccountingCode(accountCodeList);
    }
  }, [accountingCodeSelector]);

  const [category, setCategory] = useState([]);

  const Categoryselector = useSelector((state) => state.categoryresult);
  console.log("category selector is: ", Categoryselector);

  useEffect(() => {
    dispatch(addCategoryAction({}));
  }, []);

  useEffect(() => {
    if (Categoryselector) {
      const categoryList = Categoryselector.map((element) => {
        return { label: element.category_name, value: element.id };
      });
      setCategory(categoryList);
    }
  }, [Categoryselector]);

  const formInitialData = useMemo(() => initialData, [initialData]);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      setFormVisible(false);
      dispatch(
        updateExpenseItemSetup({
          URL: URLS.UPDATE_EXPENSE_ITEM_SETUP_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addExpenseItemSetup(values));
    }
    dispatch(getExpenseItemSetupPanelAction({ payload: {}, URL: url }));
  };

  const expenseItemSetupResultSelector = useSelector(
    (state) => state.expenseItemsetupResult
  );

  useEffect(() => {
    if (expenseItemSetupResultSelector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [expenseItemSetupResultSelector]);

  const updateExpenseItemSetupSelector = useSelector(
    (state) => state.updateExpenseItemSetupResult
  );

  useEffect(() => {
    if (updateExpenseItemSetupSelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updateExpenseItemSetupSelector]);

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
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item
                    name="item_name"
                    label="Item Name"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                    style={{ marginLeft: "10px" }}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="item_description"
                    label="Item Description"
                    style={{ marginLeft: "10px" }}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item label="Accounting Code" name="account_code">
                    <Select
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select Accounting Codes"
                      options={accountingCode}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="account_coding_type"
                    label="Accounts Coding Type"
                  >
                    <Select
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder=""
                      options={[
                        {
                          value: 11,
                          label: "11",
                        },
                        {
                          value: 12,
                          label: "12",
                        },
                        {
                          value: 13,
                          label: "13",
                        },
                      ]}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item
                    name="item_category"
                    label="Item Category"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "This Field Is required",
                    //   },
                    // ]}
                  >
                    <Select
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select Accounting Codes"
                      options={category}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="expense_type"
                    label="Expense Type"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Select
                      style={{
                        width: "100%",
                      }}
                      options={allExpenseType}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item
                    name="max_allowed_amount"
                    label="Max Allowed Amount"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                    style={{ marginLeft: "10px" }}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item
                    name="select_approval_option"
                    label="Select Arroval Option"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder=""
                      options={[
                        {
                          value: 1,
                          label: "Decline",
                        },
                        {
                          value: 2,
                          label: "Route to Manager",
                        },
                        {
                          value: 3,
                          label: "Reimburse",
                        },
                      ]}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item
                  name="require_receipt_above"
                  label="Require Receipt Above"
                  rules={[
                    {
                      required: true,
                      message: "This Field Is required",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item name="reimbursable" label="Reimbursable">
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="require_description"
                  label="Require Description"
                >
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="require_vendor_selection"
                  label="Require Vendor Selection"
                >
                  <Radio.Group defaultValue={"False"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="expense_adnance_type"
                    label="Expense Advance Type"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Select
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="No Advance"
                      options={[
                        {
                          value: 1,
                          label: "No Advance",
                        },
                        {
                          value: 2,
                          label: "Advance Only",
                        },
                      ]}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item
                    name="custom_field_1_label"
                    label="Custom Field 1 Label"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="custom_field_2_label"
                    label="Custom Field 2 Label"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>{" "}
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="custom_field_3_label"
                    label="Custom Field 3 Label"
                    rules={[
                      {
                        required: true,
                        message: "This Field Is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item
                  name="merchant_category_code"
                  label="Merchant Category Code(MCC)"
                  rules={[
                    {
                      required: true,
                      message: "This Field Is required",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={3} style={{ display: "flex", justifyContent: "end" }}>
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
                  htmlType="reset"
                  type=""
                  style={{
                    textAlign: "end",
                    marginTop: "15px",
                  }}
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

export default ExpenseItemSetup;
