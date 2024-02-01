import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Getexpensetypelist,
  addCategoryAction,
  getCategoryPanelAction,
  updateCategorypanle,
} from "../../store/Action/Actions";
import {URLS} from "../../Globals/URLS";

const Addcategory = ({  initialData, setIsAddFormVisible, isAddForm }) => {
  const [allExpenseType, setAllExpenseType] = useState([]);
  const [isFormVisible, setFormVisible] = useState(true);

  const dispatch = useDispatch();

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
  
  const getparenttypeselector = useSelector(
    (state) => state.getexpenselistresult
  );

  useEffect(() => {
    dispatch(Getexpensetypelist({}));
  }, []);

 
  const formInitialData = useMemo(() => initialData, [initialData]);

  // useEffect(() => {
  //   form.setFieldsValue(initialData);
  // }, [formInitialData]);

  useEffect(() => {
    if (getparenttypeselector) {
      const allExpenseType = getparenttypeselector.map((element) => {
        return { label: element.expense_type_name, value: element.id };
      });
      setAllExpenseType(allExpenseType);
    }
  }, [getparenttypeselector]);


  const Categoryselector = useSelector((state) => state.categoryresult);

  const [url, setUrl] = useState(URLS.GET_CATEGORY_PANEL_URL);
  const onFinish = (values) => {
    if (initialData && initialData.id) {
      dispatch(
        updateCategorypanle({
          URL: URLS.UPDATE_CATEGORY_PANEL_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(addCategoryAction(values));
    
    }
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
  };
  useEffect(() => {
    if (Categoryselector) {
      form.resetFields();
      message.success("Expense Added Successfully!");
      setIsAddFormVisible(false);
    }
  }, [Categoryselector]);
  
  const updatecategorySelector = useSelector(
    (state) => state.updatecategortyResult
  );
  useEffect(() => {
    if (updatecategorySelector) {
      form.resetFields();
      message.success("Expense Updated Successfully!");
      setIsAddFormVisible(false);
    }
  }, [updatecategorySelector]);

  return (
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Parent Catergory
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
                Default Off Catolog Item Type
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
                Inventory Asset Receiving Unit
              </label>
              <div className="col-lg-9">
                <Select size="large" defaultValue="Option1">
                  <Option value="Option1">Option 1</Option>
                  <Option value="Option2">Option 2</Option>
                </Select>
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Category name</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Account code</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Commodity reference
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Enableo Off Catalog Item Creation Notification
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Auto Receive During Invoice
              </label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">
                Hide On Off Catalog Item Order Request
              </label>
              <div className="col-lg-9">
                <Input size="large" />
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

export default Addcategory;
