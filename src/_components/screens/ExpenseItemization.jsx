import { Radio, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  EXpenseItemizationsubmit,
  getItemListonItemization,
  getPanelItemization,
  updateexpenseitemizationpanel,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";

const ExpenseItemizationField = ({
  initialData,
  setIsAddFormVisible,
  isAddForm,
}) => {
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

  const getitemeselector = useSelector((state) => state.getitemlistresult);

  useEffect(() => {
    dispatch(getItemListonItemization({}));
  }, []);

  useEffect(() => {
    if (getitemeselector) {
      const getexpenseItem = getitemeselector.map((element) => {
        return { label: element.item_name, value: element.id };
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
          URL: URLS.UPDATE_EXPENSEITEMIZATION_PANEL_URL + initialData.id + "/",
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


  return (
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Expense Item</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Multiple Itemization Type
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
                Itemized field Name
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Max Reimbursable Amt
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Default Amount</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Field Order</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
           
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Required</label>
              <div className="col-lg-9">
                <Radio.Group defaultValue={"True"}>
                  <Radio value={"True"}>Yes</Radio>
                  <Radio value={"False"}>No</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Reimbursable</label>
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

export default ExpenseItemizationField;
