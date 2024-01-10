import {
  Form,
  Select,
  Button,
  DatePicker,
  InputNumber,
  Checkbox,
  Input,
} from "antd";
import React, { useState, useEffect } from "react";
import {
  getCategoryListBulkExpense,
  getTotalForDistance,
  postMileage,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";

const AddExpense = () => {
  const [form] = Form.useForm();

  function getFullDate(vals) {
    let dateObject = new Date(vals);
    let month = (dateObject.getMonth() + 1).toString();
    let finalMonth = month.length == 1 ? `0${month}` : month;

    return (
      dateObject.getFullYear() + "-" + finalMonth + "-" + dateObject.getDate()
    );
  }

  const dispatch = useDispatch();
  const [categoryList1, setCategoryList1] = useState([]);

  function onFinish(values) {
    values.date = getFullDate(values.date);
    let formData = new FormData();
    for (const el in values) {
      if (el != "expense_bill") formData.append(el, values[el]);
      else formData.append("expense_bill", categoryList1[0]);
    }

    dispatch(postMileage(formData));
  }

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    dispatch(getCategoryListBulkExpense());
  }, []);

  const addBulkExpenseCategoryListSelector = useSelector(
    (state) => state.addBulkExpenseCategoryList
  );

  const distanceTraveled = useSelector(
    (state) => state.mileageDistanceTraveled
  );

  useEffect(() => {
    if (addBulkExpenseCategoryListSelector) {
      let finalData = addBulkExpenseCategoryListSelector.map((element) => {
        return { label: element.category_name, value: element.id };
      });
      setCategoryList(finalData);
    }
  }, [addBulkExpenseCategoryListSelector]);

  useEffect(() => {
    if (distanceTraveled) {
      let value = distanceTraveled?.data?.calculatedAmount
        ? distanceTraveled?.data?.calculatedAmount
        : 0;

      form.setFieldsValue({ amount: value });
    }
  }, [distanceTraveled]);

  function getTotalForDistanceTraveled(e) {
    let id = setInterval(() => {
      clearInterval(id);
      parseFloat(e) &&
        dispatch(getTotalForDistance({ distance: parseFloat(e) }));
    }, 700);
  }

  const validateInput = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (Number(value) && value === 0) {
        reject("Amount is required!");
      } else {
        resolve();
      }
    });
  };

  const postMileageResult = useSelector((state) => state.postMileageResult);

  useEffect(() => {
    if (postMileageResult) {
      form.resetFields();
    }
  }, [postMileageResult]);

  return (
    <div className="col-6">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          <Form.Item
            name={"category"}
            label="Category"
            rules={[
              {
                required: true,
                message: "Category is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Select Category"
              options={categoryList}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name={"paid_by"}
            label="Paid By"
            rules={[
              {
                required: true,
                message: "Paid By is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Paid By"
              options={[
                { label: "Company", value: "Company" },
                { label: "Employee", value: "Employee" },
              ]}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name={"date"}
            label="Expense Date"
            rules={[
              {
                required: true,
                message: "Expense Date required!",
              },
            ]}
          >
            <DatePicker size="large" />
          </Form.Item>
          <Form.Item
            name={"claim_reimbursement"}
            label={"Claim Reimbursement"}
            valuePropName="checked"
          >
            <Checkbox></Checkbox>
          </Form.Item>

          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              {
                required: true,
                message: "Amount is required!",
              },
              {
                validator: validateInput,
              },
            ]}
          >
            <InputNumber
              size="large"
              placeholder="Amount"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item name="desc" label="Description">
            <Input
              size="large"
              placeholder="Description"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name={"expense_bill"}
            label="Expense Bill"
            rules={[
              {
                required: true,
                message: "Expense Bill is required!",
              },
            ]}
          >
            <input
              type="file"
              id="attachment"
              onChange={(e) => {
                setCategoryList1([e.target.files[0]]);
              }}
              className="form-control"
            />
          </Form.Item>
          <Form.Item className="flex-end">
            <div className="d-flex justify-content-end">
              <Button
                style={{ borderRadius: "7px" }}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddExpense;
