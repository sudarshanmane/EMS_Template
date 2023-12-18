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
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Expense Type</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Vendor</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Quantity</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Amount</label>
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
              <label className="col-lg-3 col-form-label">Cost Formula</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Quantity Formula
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Mileage</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Itinerary Item Type
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Accounts Coding Type
              </label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Require Date Range
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
                Require From City
              </label>
              <div className="col-lg-9">
                <Radio.Group defaultValue={"True"}>
                  <Radio value={"True"}>Yes</Radio>
                  <Radio value={"False"}>No</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Require To City</label>
              <div className="col-lg-9">
                <Radio.Group defaultValue={"True"}>
                  <Radio value={"True"}>Yes</Radio>
                  <Radio value={"False"}>No</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Require Vendor Entry
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
                Allow Amount Edit
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
                Allow Quantity Edit
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

export default Expensetypes;
