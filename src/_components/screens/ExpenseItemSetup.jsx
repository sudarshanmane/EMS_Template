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
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Accounting Code</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Item Category</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Expense Type</label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Select Arroval Option
              </label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Item Name</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Item Description
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Max Allowed Amount
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Custom Field 1 Label
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Custom Field 2 Label
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Custom Field 3 Label
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Merchant Category Code(MCC)
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>

            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Expense Advance Type
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

export default ExpenseItemSetup;
