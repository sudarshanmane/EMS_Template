import { Radio, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EXpenseItemizationsubmit, getItemListonItemization,getPanelItemization,updateexpenseitemizationpanel } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";


const ExpenseItemizationField = ({initialData, setIsAddFormVisible, isAddForm}) => {
  const [getexpenseItem, setExpenseItem] = useState([]);
  const [isFormVisible, setFormVisible] = useState(true);
  const dispatch = useDispatch();
  const [url, setUrl] = useState(URLS.GET_ITEMIZATION_PANEL_URL);
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

  const getitemeselector = useSelector(
    (state) => state.getitemlistresult 
  );

  useEffect(() => {
    dispatch(getItemListonItemization({}));
  }, []);
  

  useEffect(() => {
    if (getitemeselector) {

      const getexpenseItem = getitemeselector.map((element) => {
        return { label: element.item_name, value: element.id,};
      });
      setExpenseItem(getexpenseItem);
    }
  }, [getitemeselector]);

  const formInitialData = useMemo(() => initialData, [initialData]);

  const selector = useSelector((state) => state.itemizationresult);
   console.log(selector);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      dispatch(
        updateexpenseitemizationpanel({
          URL: URLS.UPDATE_EXPENSEITEMIZATION_PANEL_URL+ initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {

    dispatch(EXpenseItemizationsubmit(values));
    }
    dispatch(getPanelItemization({ payload: {}, URL: url }));
  };
  useEffect(() => {
    if (selector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [selector]);


  const updateExpenseItemizationSelector = useSelector(
    (state) => state.updateitemizationResult
  );
  useEffect(() => {
    if (updateExpenseItemizationSelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updateExpenseItemizationSelector]);

  // const validateIntegerValue = (_, value) => {
  //   if (!Number.isInteger(value)) {
  //     return Promise.reject("Please enter a valid integer");
  //   }

  //   return Promise.resolve();
  // };


  return (
    <div>
      <div className="add_user_form_container">
      {
        <div className="add_user_form custom-form">
          
          <Form layout="vertical" name="complex-form" onFinish={onFinish} form={form}>
            <Row gutter={[16, 24]}>
              <Col className="gutter-row label-static" lg={6} xs={8}>
                <Form.Item
                  name="expense_item"
                  label="Expense Item"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    },
                  ]}
                >
                  <Select
                    mode=""
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select"
                    options={getexpenseItem}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="itemized_field_name"
                  label="Itemized field Name"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item name="required" label="Required">
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
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
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="max_reimbursable_amount"
                  label="Max Reimbursable Amt"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: 'This field is required'
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="default_amount"
                  label="Default Amount"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      pattern: /^\d+$/,
                      message: "Please enter a valid integer",
                    },
                    // {
                    //   validator: validateIntegerValue, // Integer validation
                    // },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="field_order"
                  label="Field Order"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      pattern: /^\d+$/, // Regex pattern for integers
                      message: "Please enter a valid integer",
                      
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="multiple_itemization_type"
                  label="Multiple Itemization Type"
                  className="label-static"
                >
                  <Select
                    mode=""
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select"
                    options={[
                      {
                        value: 0,
                        label: "None",
                      },
                      {
                        value: 1,
                        label: "Date",
                      },
                     
                    ]}
                  />
                </Form.Item>
              </Col>
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
        </div>
          }
      </div>
      
    </div>
  );
};

export default ExpenseItemizationField;
