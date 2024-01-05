import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addcertificateData } from "../../store/certificate";

export default function certification({ nextcall, userId }) {
  const dispatch = useDispatch();

  // const token = useSelector((state) => state.userSlice.token);
  // const certificate_submit_id = useSelector(
  //   (state) => state.certificate?.newData?.id
  // );
  
  const [selectedDate, setSelectedDate] = useState(null);

  //date foramt
  const formatDate = (date) => {
    if (!date) return null;

    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // console.log("selectedDate", selectedDate);

  // submit data
  const onFinish = (values) => {
    console.log("Received values of form:", values?.users);
    const formData = new FormData();

    formData.append("user_id", userId);
    formData.append("course_name", values?.users.course_name);

    // Format the certification_date
    formData.append("certification_date", formatDate(selectedDate));

    // Append the certification document as a file
    if (values?.users.certification) {
      formData.append(
        "certification",
        values?.users.certification[0]?.originFileObj
      );
    }

    console.log("form data on submit", formData);

    // dispatch(addcertificateData(token, formData));
  };

  // useEffect(() => {
  //   if (certificate_submit_id) {
  //     nextcall();
  //   }
  // }, [certificate_submit_id]);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Certification Information</h4>
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
                            {console.log("key", key)}{" "}
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="card">
                                  <div className="card-body">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-sm-6">
                                          <div className="input-block row">
                                            <label className="col-form-label col-md-3">
                                              Course Name{" "}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div className="col-md-9">
                                              <Form.Item
                                                {...restField}
                                                name={[name, "course_name"]}
                                                fieldKey={[
                                                  fieldKey,
                                                  "course_name",
                                                ]}
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please enter course name",
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
                                              Certification documents{" "}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div className="col-md-9">
                                              <Form.Item
                                                {...restField}
                                                name={[name, "certification"]}
                                                fieldKey={[
                                                  fieldKey,
                                                  "certification",
                                                ]}
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please add certification documents",
                                                  },
                                                ]}
                                              >
                                                <input
                                                  type="file"
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
                                              Certification Date{" "}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div className="col-md-9">
                                              <Form.Item
                                                {...restField}
                                                name={[
                                                  name,
                                                  "certification_date",
                                                ]}
                                                fieldKey={[
                                                  fieldKey,
                                                  "certification_date",
                                                ]}
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Please select certification date",
                                                  },
                                                ]}
                                              >
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
                                                  selected={selectedDate}
                                                  onChange={(date) =>
                                                    handleDateChange(date)
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
                                    </form>
                                  </div>
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
                        <Button type="dashed" onClick={() => add()}>
                          Add Certification
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <Form.Item>
                  <Button type="submit" style={{ float: "right" }}>
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
