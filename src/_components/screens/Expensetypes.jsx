import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  Row,
  Col,
  Select,
  message,
  InputNumber,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenseTypeSetup,
  getAccountingCodeAction,
  getExpenseTypePanelAction,
  updateExpenseTypeAction,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";

const Expensetypes = ({ initialData, setIsAddFormVisible, isAddForm }) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(URLS.EXPENSE_TYPE_PANEL_URL);

  const [form] = Form.useForm();

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
  const [accountingCode, setAccountingCode] = useState([]);

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

  const formInitialData = useMemo(() => initialData, [initialData]);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      setFormVisible(false);
      dispatch(
        updateExpenseTypeAction({
          URL: URLS.UPDATE_EXPENSE_TYPE + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addExpenseTypeSetup(values));
    }
    dispatch(getExpenseTypePanelAction({ payload: {}, URL: url }));
  };

  const [isFormVisible, setFormVisible] = useState(true);

  const expenseTypeSetupResultSelector = useSelector(
    (state) => state.expenseTypeSetupResult
  );

  useEffect(() => {
    if (expenseTypeSetupResultSelector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [expenseTypeSetupResultSelector]);

  const updateExpenseTypeResultSelector = useSelector(
    (state) => state.updateExpenseTypeResult
  );

  useEffect(() => {
    if (updateExpenseTypeResultSelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updateExpenseTypeResultSelector]);
  
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
                  <Form.Item name="expense_type_name" label="Expense Type">
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item
                    name="vendor_label"
                    label="Vendor"
                    style={{ marginLeft: "10px" }}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item name="quantity_label" label="Quantity">
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  <Form.Item name="amount_label" label="Amount">
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item>
                  {" "}
                  <Form.Item name="description_label" label="Description">
                    <Input size="large" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item
                    name="require_date_range"
                    label="Require Date Range"
                  >
                    <Radio.Group defaultValue={"True"}>
                      <Radio value={"True"}>Yes</Radio>
                      <Radio value={"False"}>No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item name="require_from_city" label="Require From City">
                    <Radio.Group defaultValue={"True"}>
                      <Radio value={"True"}>Yes</Radio>
                      <Radio value={"False"}>No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item>
                  <Form.Item name="require_to_city" label="Require To City">
                    <Radio.Group defaultValue={"True"}>
                      <Radio value={"True"}>Yes</Radio>
                      <Radio value={"False"}>No</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item>
                <Form.Item
                  name="require_vendor_entry"
                  label="Require Vendor Entry"
                >
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}><Form.Item>
                <Form.Item name="allow_amount_edit" label="Allow Amount Edit">
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item><Form.Item
                  name="allow_quantity_edit"
                  label="Allow Quantity Edit"
                >
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item><Form.Item
                  name="accounting_coding_type"
                  label="Accounts Coding Type"
                >
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={accountingCode}
                  />
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item><Form.Item name="cost_formula" label="Cost Formula" rules={[
                      {
                        required: true,
                        pattern: /^\d+$/, // Regex pattern for integers
                        message: "Please enter a valid integer",
                      },
                    ]}>
                  <Input
                    size="large"
                    
                  />
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item> <Form.Item name="quantity_formula" label="Quantity Formula" rules={[
                      {
                        required: true,
                        pattern: /^\d+$/, // Regex pattern for integers
                        message: "Please enter a valid integer",
                      },
                    ]}>
                  <Input size="large" />
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item> <Form.Item name="mileage" label="Mileage" rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}>
                  <Input size="large" />
                </Form.Item></Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item> <Form.Item
                  name="itinerary_item_type"
                  label="Itinerary Item Type"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    
                  />
                </Form.Item></Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={3} style={{ display: "flex" }}>
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

export default Expensetypes;
