import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Getexpensetypelist,
  addCategoryAction,
  getCategoryPanelAction,
  updateCategorypanle,
} from "../../../../store/Actions/Actions";
import { URLS } from "../../../../Globals/URLS";

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
      console.log("isAddFormisAddFormisAddForm", isAddForm);
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
            <Col className=" gutter-row label-static" lg={6} xs={24}>
              <Form.Item name="parent_catergory" label="Parent Catergory">
                <Select
                  // mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select Parenttype"
                  options={allExpenseType}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="category_name"
                label="Category name"
                className="label-static"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item
                name="accounting_code"
                label="Account code"
                className="label-static"
                rules={[
                  {
                    message: "This field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="commodity_reference"
                label="Commodity reference"
                className="label-static"
                rules={[
                  {
                    message: "This field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="default_off_catolog_item_type"
                label="Default Off Catolog Item Type"
                className="label-static"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
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
                      value: 0,
                      label: "Manager",
                    },
                    {
                      value: 1,
                      label: "Employee",
                    },
                    {
                      value: 2,
                      label: "Finance Manager",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="inventory_asset_receiving_unit"
                label="Inventory Asset Receiving Unit"
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
                      label: "Manager",
                    },
                    {
                      value: 1,
                      label: "Employee",
                    },
                    {
                      value: 2,
                      label: "Finance Manager",
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name=" enable_off_catalog_item_creation_notification"
                label="Enableo Off Catalog Item Creation Notification "
                className="label-static"
                rules={[
                  {
                    // required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input defaultValue={"N/A"} value={"N/A"} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="auto_receive_during_invoice"
                label="Auto Receive During Invoice "
                className="label-static"
                rules={[
                  {
                 
                    message: "This field is required",
                  },
                ]}
              >
                <Input defaultValue={"N/A"} value={"N/A"} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name=" hide_on_off_catalog_item_order_request"
                label="Hide On Off Catalog Item Order Request "
                className="label-static"
                rules={[
                  {
                  
                    message: "This field is required",
                  },
                ]}
              >
                <Input defaultValue={"N/A"} value={"N/A"} />
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
  );
};

export default Addcategory;
