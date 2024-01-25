import {
  Form,
  Select,
  Button,
  DatePicker,
  InputNumber,
  Input,
  Radio,
  Checkbox,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import {
  getCategoryListBulkExpense,
  getTotalForDistance,
  postMileage,
  setPostMileage,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";

const AddMileage = () => {
  function getFullDate(vals) {
    let dateObject = new Date(vals);
    let month = (dateObject.getMonth() + 1).toString();
    let finalMonth = month.length == 1 ? `0${month}` : month;
    let day =
      String(dateObject.getDate()).length == 1
        ? `0${dateObject.getDate()}`
        : dateObject.getDate();

    return dateObject.getFullYear() + "-" + finalMonth + "-" + day;
  }
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [selectedOption, setSelectedOption] = useState("Distance traveled");

  function onFinish(values) {
    values.expense_date = getFullDate(values.date);

    let formData = new FormData();
    for (const el in values) {
      if (el != "expense_bill") formData.append(el, values[el]);
    }
    formData.append("expense_bill", file);

    formData.append(
      "calculate_mileage",
      selectedOption === "Distance traveled" ? "distance" : "odometer"
    );
    dispatch(postMileage(formData));
  }

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

  const [odometerDistance, setOdometerDistance] = useState({
    start: 0,
    end: 0,
  });

  const handleRadioChange = (e) => {
    form.setFieldsValue({ amount: 0, start: 0, end: 0, distance: 0 });
    setSelectedOption(e.target.value);
  };

  function getTotalForDistanceTraveled(e) {
    let id = setInterval(() => {
      clearInterval(id);
      parseFloat(e) &&
        dispatch(getTotalForDistance({ distance: parseFloat(e) }));
    }, 700);
  }

  const mileageDistanceTraveledSelector = useSelector(
    (state) => state.mileageDistanceTraveled
  );

  useEffect(() => {
    if (mileageDistanceTraveledSelector) {
      let value = mileageDistanceTraveledSelector?.data?.calculatedAmount
        ? mileageDistanceTraveledSelector?.data?.calculatedAmount
        : 0;

      form.setFieldsValue({ amount: value });
    }
  }, [mileageDistanceTraveledSelector]);

  const [traveledDistance, setTraveledDistance] = useState(0);

  useEffect(() => {
    if (
      odometerDistance &&
      odometerDistance.start > 0 &&
      odometerDistance.end > 0
    ) {
      if (odometerDistance.start >= odometerDistance.end) {
        form.setFieldsValue({ amount: 0 });
        setTraveledDistance(0);
      } else {
        let id = setInterval(() => {
          clearInterval(id);
          let distance = odometerDistance.end - odometerDistance.start;
          setTraveledDistance(distance);
          parseFloat(distance) &&
            dispatch(getTotalForDistance({ distance: parseFloat(distance) }));
        }, 700);
      }
    }
  }, [odometerDistance]);

  const validateInput = (rule, value, callback) => {
    if (Number(value) && value == 0) {
      callback("Amount is required!");
    } else {
      callback();
    }
  };

  const postMileageResult = useSelector((state) => state.postMileageResult);

  useEffect(() => {
    if (postMileageResult) {
      form.resetFields();
      message.success("Expense Added Successfully");
      dispatch(setPostMileage());
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
            // gridTemplateColumns: "3fr 3fr 2fr 0.5fr ",
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

          <h4>Calculate Amount Using Distance</h4>
          <Form.Item>
            <Radio.Group onChange={handleRadioChange} value={selectedOption}>
              <Radio value={"Distance traveled"}>Distance traveled</Radio>
              <Radio value={"Odometer reading"}>Odometer reading</Radio>
            </Radio.Group>
          </Form.Item>

          {selectedOption === "Distance traveled" && (
            <Form.Item label="Distance">
              <InputNumber
                style={{ display: "flex", width: "100%" }}
                min={0}
                type="number"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onInput={getTotalForDistanceTraveled}
              />
            </Form.Item>
          )}

          <div>
            {selectedOption === "Odometer reading" && (
              <>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Form.Item label="Start Distance (Mile's)">
                    <InputNumber
                      addonBefore={"Start"}
                      type="number"
                      min={0}
                      size="large"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onInput={(e) =>
                        setOdometerDistance({
                          ...odometerDistance,
                          start: e,
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="End Distance (Mile's)">
                    <InputNumber
                      addonBefore={"End"}
                      size="large"
                      type="number"
                      min={0}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onInput={(e) =>
                        setOdometerDistance({
                          ...odometerDistance,
                          end: e,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <Form.Item style={{ marginTop: "-20px" }}>
                  Traveled Distance: {traveledDistance}
                </Form.Item>
              </>
            )}
          </div>
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
              disabled
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
                setFile(e.target.files[0]);
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

export default AddMileage;
