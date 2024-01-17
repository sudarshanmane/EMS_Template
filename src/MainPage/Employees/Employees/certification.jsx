import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCertificationAction } from "../../../store/Action/Actions";

export default function certification({ nextcall, userId }) {
  const id = userId;
  const [selectedDates, setSelectedDates] = useState([null]);
  const [selectedFiles, setSelectedFiles] = useState([null]);

  const dispatch = useDispatch();

  const handleDateChange = (date, index) => {
    const newDates = [...selectedDates];
    newDates[index] = date;
    setSelectedDates(newDates);
  };

  const handleFileChange = (file, index) => {
    const newFiles = [...selectedFiles];
    newFiles[index] = file;
    setSelectedFiles(newFiles);
  };

  const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };



  const onFinish = (values) => {
    values?.users?.forEach((user, index) => {
      const formData = new FormData();
      formData.append("user_id", id);
      formData.append("certification", selectedFiles[index]);
      formData.append("course_name", user.course_name || "");
      formData.append("certification_date", formatDate(selectedDates[index]));
      dispatch(addCertificationAction(formData));
    });
  };

  const addcertificationSelector = useSelector(
    (state) => state.addcertification
  );

  useEffect(() => {
    if (addcertificationSelector) {
      nextcall();
    }
  }, [addcertificationSelector]);

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
                         
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="card">
                                  <div className="card-body">
                                    <form action="#">
                                      <div className="row">
                                        <div className="col-sm-6">
                                          <div className="input-block">
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
                                    <div className="input-block">
                                      <label className="col-form-label">
                                        Certifications
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div>
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
                                                "Please upload your certificates",
                                            },
                                          ]}
                                        >
                                          <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                              handleFileChange(
                                                e.target.files[0],
                                                index
                                              )
                                            }
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>

                                        <div className="col-sm-6">
                                          <div className="input-block">
                                            <label className="col-form-label">
                                              Certification Date{" "}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div>
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
                                                <DatePicker
                                                  selected={
                                                    selectedDates[index]
                                                  }
                                                  onChange={(date) =>
                                                    handleDateChange(
                                                      date,
                                                      index
                                                    )
                                                  }
                                                  className="form-control datetimepicker"
                                                  type="date"
                                                  format="yyyy-MM-dd"
                                                  placeholderText="dd-mm-yyyy"
                                                />
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
