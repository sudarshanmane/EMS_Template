import React, { useEffect, useState } from "react";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Checkbox,
  InputNumber,
  Tooltip,
  Select,
  message,
  DatePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addBulkExpenseReport,
  getCategoryListBulkExpense,
  setAddBulkExpenseReport,
} from "../../store/Action/Actions";

const AddExpenseBulk = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    dispatch(getCategoryListBulkExpense());
  }, []);

  const addBulkExpenseCategoryListSelector = useSelector(
    (state) => state.addBulkExpenseCategoryList
  );

  useEffect(() => {
    if (addBulkExpenseCategoryListSelector) {
      let finalData = addBulkExpenseCategoryListSelector.map((element) => {
        return { label: element.category_name, value: element.id };
      });
      setCategoryList(finalData);
    }
  }, [addBulkExpenseCategoryListSelector]);

  function getDate(vals) {
    let dateObject = new Date(vals);
    let month = (dateObject.getMonth() + 1).toString();
    let finalMonth = month.length === 1 ? `0${month}` : month;

    return (
      dateObject.getFullYear() + "-" + finalMonth + "-" + dateObject.getDate()
    );
  }

  const [selectedFiles, setSelectedFiles] = useState({});
  function onFinish(vals) {
    let firstObj = {};
    firstObj.desc = vals.desc;
    firstObj.amount = vals.amount;
    firstObj.claim_reimbursement = vals.claim_reimbursement;
    firstObj.expense_bill = vals.first_file;
    firstObj.expense_date = getDate(vals.expense_date);
    firstObj.category = vals.category;
    let formData = new FormData();

    formData.append(`expense_data`, getDate(vals.expense_date));
    formData.append(`desc`, vals.desc);
    formData.append(`category`, vals.category);
    formData.append(`amount`, vals.amount);
    formData.append(`claim_reimbursement`, vals.claim_reimbursement);
    formData.append(`expense_bill`, selectedFiles["first_file"]);

    let index = 1;
    dispatch(addBulkExpenseReport(formData));

    if (vals.users) {
      for (const el of vals.users) {
        formData = new FormData();
        formData.append(`expense_data`, getDate(el.expense_date));
        formData.append(`desc`, el.desc);
        formData.append(`category`, el.category);
        formData.append(`amount`, el.amount);
        formData.append(`claim_reimbursement`, el.claim_reimbursement);
        formData.append(`expense_bill`, selectedFiles[index]);
        dispatch(addBulkExpenseReport(formData));
        index++;
      }
    }
  }

  const addExpenseReportResultSelector = useSelector(
    (state) => state.addExpenseReportResult
  );

  message.config({
    top: 70,
  });

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  useEffect(() => {
    if (addExpenseReportResultSelector) {
      setCount((count) => count + 1);
      if (total === count) {
        message.success("Expense Added Successfully!");
        setCount((count) => 0);
        setTotal(0);
        form.resetFields();
        dispatch(setAddBulkExpenseReport());
      }
    }
  }, [addExpenseReportResultSelector]);

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            // gridTemplateColumns: "3fr 3fr 2fr 0.5fr ",
            gap: "15px",
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
            name={"desc"}
            label="Description"
            rules={[
              {
                required: true,
                message: "Description is required!",
              },
            ]}
          >
            <Input size="large" placeholder="Description" />
          </Form.Item>
          <Form.Item
            name={"amount"}
            label="Amount"
            rules={[
              {
                required: true,
                message: "Amount is required!",
              },
            ]}
          >
            <InputNumber
              size="large"
              placeholder="Amount"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name={"claim_reimbursement"}
            label="Claim Reimbursement"
            valuePropName="checked"
          >
            <Checkbox
              size="large"
              placeholder="Claim Reimbursement"
              valuePropName="checked"
            />
          </Form.Item>
          <Form.Item
            name={"expense_date"}
            label="Expense Date"
            rules={[
              {
                required: true,
                message: "Expense Date is required!",
              },
            ]}
          >
            <DatePicker size="large" placeholder="Select Date" />
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
                setSelectedFiles({
                  first_file: e.target.files[0],
                  ...selectedFiles,
                });
              }}
              className="form-control"
            />
          </Form.Item>
        </div>

        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {setTotal(fields.length)}
              {}
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    // gridTemplateColumns: "3fr 3fr 3fr 0.2fr",
                    gap: "15px",
                    width: "108%",
                    alignItems: "center",
                  }}
                >
                  <Form.Item
                    {...restField}
                    name={[name, "category"]}
                    label="Category"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Category is required!",
                    //   },
                    // ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select Category"
                      options={categoryList}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "desc"]}
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "Description is required!",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Description" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Amount"
                    name={[name, "amount"]}
                    rules={[
                      {
                        required: true,
                        message: "Amount is required!",
                      },
                    ]}
                  >
                    <InputNumber
                      style={{
                        width: "100%",
                      }}
                      size="large"
                      placeholder="Amount"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Claim Reimbursement"
                    name={[name, "claim_reimbursement"]}
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "expense_date"]}
                    label="Expense Date"
                    rules={[
                      {
                        required: true,
                        message: "Expense Date is required!",
                      },
                    ]}
                  >
                    <DatePicker size="large" placeholder="Select Date" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "expense_bill"]}
                    label="Expense Bill"
                    onChange={(e) => {
                      setSelectedFiles({
                        [key + 1]: e.target.files[0],
                        ...selectedFiles,
                      });
                    }}
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
                      className="form-control"
                    />
                  </Form.Item>

                  <Tooltip title="Remove">
                    <MinusCircleOutlined
                      style={{ height: "20px" }}
                      onClick={() => remove(name)}
                    />
                  </Tooltip>
                </div>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add More
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddExpenseBulk;
