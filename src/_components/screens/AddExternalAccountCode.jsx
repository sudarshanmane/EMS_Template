import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Radio, Row, Col, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addExternalAccountCodeAction,
  getAccountingCodeAction,
  getExternalAccountCodePanelAction,
  updateExternalAccountCodeAction,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";

const AddExternalAccountCode = ({
  initialData,
  setIsAddFormVisible,
  isAddForm,
}) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState(URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL);

  // to reset add form values
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

  //To fetch Account Code

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
        updateExternalAccountCodeAction({
          URL: URLS.EXTERNAL_ACCOUNT_CODE_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addExternalAccountCodeAction(values));
    }
    dispatch(getExternalAccountCodePanelAction({ payload: {}, URL: url }));
  };
  const [isFormVisible, setFormVisible] = useState(true);

  const externalAccountCodeselector = useSelector(
    (state) => state.externalAccountCodeResult
  );

  useEffect(() => {
    if (externalAccountCodeselector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [externalAccountCodeselector]);

  const updateExternalAccountResultSelector = useSelector(
    (state) => state.updateExternalAccountCodeResult
  );

  useEffect(() => {
    if (updateExternalAccountResultSelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updateExternalAccountResultSelector]);


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
            <Col className="gutter-row" xs={10}>
              <Form.Item>
                <Form.Item name="table" label="Table">
                  <Select
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Segmentslevel01"
                    options={accountingCode}
                  />
                </Form.Item>
              </Form.Item>
            </Col>

            <Col className="gutter-row" xs={10}>
              <Form.Item>
                <Form.Item
                  name="account_code"
                  label="Account Code"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Form.Item>
            </Col>

            <Col className="gutter-row" xs={10}>
              <Form.Item>
                <Form.Item name="describe" label="Describe" rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input size="large" />
                </Form.Item>
              </Form.Item>
            </Col>

            <Col className="gutter-row" xs={10}>
            <Form.Item>
              <Form.Item name="reference_id" label="Reference Id">
                <Input size="large" />
              </Form.Item> </Form.Item>
            </Col>
            <Col className="gutter-row" xs={10}>
            <Form.Item><Form.Item name="account_code_group" label="Account Code Group" rules={[
                    {
                      required: true,
                    },
                  ]}>
                <Input size="large" />
              </Form.Item> </Form.Item>
            </Col>
            <Col className="gutter-row" xs={10}>
            <Form.Item><Form.Item name="account_type" label="Account Type" rules={[
                    {
                      required: true,
                    },
                  ]}>
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
              </Form.Item> </Form.Item>
            </Col>

            <Col className="gutter-row" xs={10}>
            <Form.Item><Form.Item name="parent_ref1" label="ParentRef1">
                <Input.TextArea rows={8} mode="multiple" allowClear />
              </Form.Item></Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
            <Form.Item><Form.Item
                name="enabled"
                label="Enabled"
                className="label-static"
              >
                <Radio.Group defaultValue={"True"}>
                  <Radio value={"True"}>Yes</Radio>
                  <Radio value={"False"}>No</Radio>
                </Radio.Group>
              </Form.Item></Form.Item>
            </Col>

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

export default AddExternalAccountCode;
