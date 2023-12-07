import { Radio, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Accountingcodesubmit,
  getaccountingcodePanelAction,
  updateAccountingcodepanelAction,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../Entryfile/offcanvance";

const AddAccountCode = ({ initialData, setIsAddFormVisible, isAddForm }) => {
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
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Accounting code</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Reference Id</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Accounting Code Group
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Description</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Default For</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Parent Account Codes
              </label>
              <div className="col-lg-9">
                <Input size="large" />
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
              <label className="col-lg-3 col-form-label">Enabled</label>
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

export default AddAccountCode;
