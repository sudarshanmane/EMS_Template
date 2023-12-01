import { Radio, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Accountingcodesubmit,
  getaccountingcodePanelAction,
  updateAccountingcodepanelAction,
} from "../../../../store/Actions/Actions";
import { URLS } from "../../../../Globals/URLS";

const AddAccountCode = ({ initialData,setIsAddFormVisible, isAddForm }) => {
  const dispatch = useDispatch();

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


  const formInitialData = useMemo(() => initialData, [initialData]);
  const [isFormVisible, setFormVisible] = useState(true);
  const [url, setNewUrl] = useState(URLS.GET_ACCOUNTINGCODE_PANEL_URL);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      dispatch(
        updateAccountingcodepanelAction({
          URL: URLS.UPDATE_ACCOUNTING_CODE_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(Accountingcodesubmit(values));
    }
      dispatch(getaccountingcodePanelAction({ payload: {}, URL: url }));
    
  };
  const selector = useSelector((state) => state.accountiongcodesubmitresult);
  console.log(selector);
  useEffect(() => {
    if (selector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [selector]);
  const updateaccountingcodeselector = useSelector(
    (state) => state.updateAccountingResult
  );

  useEffect(() => {
    if (updateaccountingcodeselector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updateaccountingcodeselector]);

  return (
    <div>
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
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="accounting_code"
                  label="Accounting code"
                  className="label-static"
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item
                  name="account_type"
                  label="Account Type"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!"
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
                    options={[
                      {
                        value: 1,
                        label: "Global",
                      },
                      {
                        value: 2,
                        label: "Location",
                      },
                      {
                        value: 3,
                        label: "Group",
                      },
                      {
                        value: 4,
                        label: "User",
                      },
                      {
                        value: 5,
                        label: "Default Code",
                      },
                      {
                        value: 6,
                        label: "Use Tax",
                      },
                      {
                        value: 7,
                        label: "Freight",
                      },
                      {
                        value: 8,
                        label: "Custom 1-3",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="reference_id"
                  label="Reference Id"
                  className="label-static"
                  rules={[
                      {
                        required:true,
                        message: "This field is required!"
                      },
                    ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="accounting_code_group"
                  label="Accounting Code Group"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!"
                    },
                  ]}
                >
                  <Input size="large" />
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
                      message: "Please enter a description",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="default_for"
                  label="Default For"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!"
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" lg={6} xs={24}>
                <Form.Item
                  name="parent_account_codes"
                  label="Parent Account Codes"
                  className="label-static"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!"
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Enter your description here"
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row label-static" lg={6} xs={24}>
                <Form.Item name="enabled" label="Enabled">
                  <Radio.Group defaultValue={"True"}>
                    <Radio value={"True"}>Yes</Radio>
                    <Radio value={"False"}>No</Radio>
                  </Radio.Group>
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

export default AddAccountCode;
