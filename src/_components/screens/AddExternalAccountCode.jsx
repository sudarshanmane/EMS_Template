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
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Table</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Account Type</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Account Code</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
              Describe
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
              Reference Id
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
              Account Code Group
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
              ParentRef1

              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
           

            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
              Enabled
              </label>
              <div className="col-lg-9">
                <Radio.Group defaultValue={"True"}>
                  <Radio value={"True"}>Yes</Radio>
                  <Radio value={"False"}>No</Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="text-end">
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
              <Button type="" size="large" htmlType="reset">
                Clear Entries
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExternalAccountCode;
