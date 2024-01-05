import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";


export default function educationform({ nextcall, userId }) {
  const dispatch = useDispatch();

 
  const edu_type = useSelector(
    (state) => state.educationtype?.educationtypeData
  );

  const [selectedFile, setSelectedFile] = useState(null);

  const [formDates, setFormDates] = useState([]);

  const handleJoiningDateChange = (date, index) => {
    const updatedDates = [...formDates];
    updatedDates[index] = { ...updatedDates[index], joiningDate: date };
    setFormDates(updatedDates);
  };

  const handlePassoutDateChange = (date, index) => {
    const updatedDates = [...formDates];
    updatedDates[index] = { ...updatedDates[index], passoutDate: date };
    setFormDates(updatedDates);
  };

  const onFinish = (values) => {
    console.log("rohit", values?.users);

    values?.users?.forEach((user, index) => {
      console.log("individual data", user);
      const formData = new FormData();

      // Append fields to formData
      formData.append("marksheet", selectedFile);
      formData.append("in_year", formatDate(formDates[index]?.joiningDate));
      formData.append(
        "passout_year",
        formatDate(formDates[index]?.passoutDate)
      );
      formData.append("user_id", userId);

      // Add other fields as needed
      formData.append("education_type", user.education_type || "");
      formData.append("university", user.university || "");
      formData.append("education_name", user.education_name || "");
      formData.append("specialization", user.specialization || "");
      formData.append("percentage", user.percentage || "");
      formData.append("college_name", user.college_name || "");

    
      console.log("end form submit");
    });
  };

  const formatDate = (date) => {
    if (!date) return null;

    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  };

 
  console.log("id", userId);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Educational Information</h4>
            </div>{" "}
            <div className="card-body">
              <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                encType="multipart/form-data"
                // style={{
                //   maxWidth: 600,
                // }}
                autoComplete="off"
              >
                <Form.List name="users" initialValue={[{}]}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(
                        ({ key, name, fieldKey, ...restField }, index) => (
                          <div
                            key={key}
                            style={{
                              marginBottom: 10,
                            }}
                            align="baseline"
                          >
                            {/* {console.log("key", key)}{" "} */}
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Select Education{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "education_type"]}
                                          fieldKey={[
                                            fieldKey,
                                            "education_type",
                                          ]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please select education type",
                                            },
                                          ]}
                                        >
                                          <select className="form-control">
                                            <option value="">
                                              {" "}
                                              Select Education{" "}
                                            </option>
                                            {edu_type?.map((data) => {
                                              return (
                                                <option value={data?.id}>
                                                  {data?.education_type}
                                                </option>
                                              );
                                            })}
                                          </select>
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        University Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "university"]}
                                          fieldKey={[fieldKey, "university"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter university name",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Degree Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "education_name"]}
                                          fieldKey={[
                                            fieldKey,
                                            "education_name",
                                          ]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter Degree name",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Specialization{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "specialization"]}
                                          fieldKey={[
                                            fieldKey,
                                            "specialization",
                                          ]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter specialization",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Percentage{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "percentage"]}
                                          fieldKey={[fieldKey, "percentage"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter percentage",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="number"
                                            className="form-control"
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Upload Marksheet{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        {/* <input
                                          type="file"
                                          className="form-control"
                                          onChange={(e) =>
                                            setSelectedFile(e.target.files[0])
                                          }
                                        /> */}
                                        <Form.Item
                                          {...restField}
                                          name={[name, "marksheet"]}
                                          fieldKey={[fieldKey, "marksheet"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please upload your marksheet",
                                            },
                                            // {
                                            //   validator: (_, value) => {
                                            //     // Add custom validation if needed
                                            //     const allowedFileTypes = [
                                            //       "image/jpeg",
                                            //       "image/png",
                                            //       "application/pdf",
                                            //     ];
                                            //     if (
                                            //       value &&
                                            //       value[0] &&
                                            //       allowedFileTypes.includes(
                                            //         value[0].type
                                            //       )
                                            //     ) {
                                            //       return Promise.resolve();
                                            //     }
                                            //     return Promise.reject(
                                            //       "Invalid file type. Please upload a valid image or PDF."
                                            //     );
                                            //   },
                                            // },
                                          ]}
                                        >
                                          <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                              setSelectedFile(e.target.files[0])
                                            }
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        College Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "college_name"]}
                                          fieldKey={[fieldKey, "college_name"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter college name!",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Joining Date{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "in_year"]}
                                          fieldKey={[fieldKey, "in_year"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please select Joining date",
                                            },
                                          ]}
                                        >
                                          {/* <DatePicker
                                            selected={selectedJoiningDate}
                                            onChange={handleJoiningDateChange}
                                            className="form-control datetimepicker"
                                            type="date"
                                            format="yyyy-MM-dd"
                                          /> */}
                                           <div className="date-picker-container">
                              <span
                                className="calendar-icon"
                                onClick={() =>
                                  console.log("Calendar icon clicked")
                                }
                              >
                                <i class="fa-regular fa-calendar"></i>
                              </span>
                                          <DatePicker
                                            selected={
                                              formDates[index]?.joiningDate
                                            }
                                            onChange={(date) =>
                                              handleJoiningDateChange(
                                                date,
                                                index
                                              )
                                            }
                                            className="form-control datetimepicker"
                                            type="date"
                                            format="yyyy-MM-dd"
                                          />
                                          </div>
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Passout Date{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "passout_year"]}
                                          fieldKey={[fieldKey, "passout_year"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please select passout date",
                                            },
                                          ]}
                                        >
                                          {/* <DatePicker
                                            selected={selectedPassoutDate}
                                            onChange={handlePassoutDateChange}
                                            className="form-control datetimepicker"
                                            type="date"
                                            format="yyyy-MM-dd"
                                          /> */}
                                           <div className="date-picker-container">
                              <span
                                className="calendar-icon"
                                onClick={() =>
                                  console.log("Calendar icon clicked")
                                }
                              >
                                <i class="fa-regular fa-calendar"></i>
                              </span>
                                          <DatePicker
                                            selected={
                                              formDates[index]?.passoutDate
                                            }
                                            onChange={(date) =>
                                              handlePassoutDateChange(
                                                date,
                                                index
                                              )
                                            }
                                            className="form-control datetimepicker"
                                            type="date"
                                            format="yyyy-MM-dd"
                                          />
                                          </div>
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6"></div>
                                </div>
                              </div>
                            </div>
                            {index > 0 && (
                              <Button
                                type="dashed"
                                onClick={() => {
                                  remove(name);
                                }}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        )
                      )}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          //   block
                          // className="fa-solid fa-plus"
                          // icon={<PlusOutlined />}
                        >
                          Add Education
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item>
                  <Button
                    style={{ float: "right" }}
                    type="primary"
                    // htmltype="submit"
                    // onClick={handleNextFunction}
                  >
                    {/* <Button type="primary" htmlType="submit"> */}
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
