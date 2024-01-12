import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import "./styles.css";
import { Helmet } from "react-helmet";
import {
  addEducationAction,
  getEducationList,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";
import { useForm } from "react-hook-form";

export default function EducationPost({ nextcall, userId }) {
  const getEducationListurl = URLS.GET_EDUCATION_LIST_URL;
  const id = userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formDates, setFormDates] = useState([]);
  const {
    register,
    control,
    formState: { errors },
  } = useForm({});
 
  const edu_submit_id = useSelector((state) => state.education?.newData?.id);


  const educationListSelector = useSelector((state) => state.geteducationlist);
  function fetchPageDetails(getEducationListurl) {
    dispatch(getEducationList({ payload: {}, URL: getEducationListurl }));
  }

  useEffect(() => {
    fetchPageDetails(getEducationListurl);
  }, []);

  function fetchEducationListData(getEducationListurl) {
    dispatch(getEducationList({ payload: {}, URL: getEducationListurl }));
  }

  useEffect(() => {
    fetchEducationListData(getEducationListurl);
  }, []);

  const handleJoiningDateChange = (date, index) => {
    const updatedDates = [...formDates];
    updatedDates[index] = { ...updatedDates[index], joiningDate: date };

    // Set passoutDate to null when joiningDate is changed
    updatedDates[index] = { ...updatedDates[index], passoutDate: null };

    setFormDates(updatedDates);
  };

  const handlePassoutDateChange = (date, index) => {
    const updatedDates = [...formDates];
    updatedDates[index] = { ...updatedDates[index], passoutDate: date };
    const inYear = formDates[index]?.joiningDate;
    if (date && inYear && date < inYear) {
    }
    setFormDates(updatedDates);
  };

  const handleFileChange = (file, index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles[index] = file;
    setSelectedFiles(updatedFiles);
  };

  const onFinish = (values) => {
    values?.users?.forEach((user, index) => {
      const formData = new FormData();
      formData.append("marksheet", selectedFiles[index]);
      formData.append("in_year", formatDate(formDates[index]?.joiningDate));
      formData.append(
        "passout_year",
        formatDate(formDates[index]?.passoutDate)
      );
      formData.append("user_id", id);
      formData.append("education_type", user.education_type || "");
      formData.append("university", user.university || "");
      formData.append("education_name", user.education_name || "");
      formData.append("specialization", user.specialization || "");
      formData.append("percentage", user.percentage || "");
      formData.append("college_name", user.college_name || "");
      dispatch(addEducationAction(formData));
    });
  };

  const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (edu_submit_id) {
      const link = `/app/profile/employee-profile${id}`;
      navigate(link);
    }
  }, [edu_submit_id]);

  const edu_info = useSelector((state) => state.educationinfo?.newData?.id);

  useEffect(() => {
    if (edu_info) {
      nextcall();
    }
  }, [edu_info]);

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Employee Profile - HRMS admin Template</title>
          <meta name="description" content="Reactify Blank Page" />
        </Helmet>

        <div className="content container-fluid no-scrollbar">
          <div className="row">
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
                                <div className="card">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="input-block row">
                                          <label className="col-form-label col-md-3">
                                            Select Education{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>

                                          <div className="col-md-9">
                                            <select
                                              className="form-control"
                                              {...register("education_type")}
                                            >
                                              <option value="">
                                                Select Education
                                              </option>
                                              {educationListSelector?.map(
                                                (data) => {
                                                  return (
                                                    <option value={data.id}>
                                                      {data.education_type}
                                                    </option>
                                                  );
                                                }
                                              )}
                                            </select>
                                            <div className="text-danger">
                                              {errors.education?.message}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="input-block row">
                                          <label className="col-form-label col-md-3">
                                            University Name{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-9">
                                            <Form.Item
                                              {...restField}
                                              name={[name, "university"]}
                                              fieldKey={[
                                                fieldKey,
                                                "university",
                                              ]}
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
                                            <span className="text-danger">
                                              *
                                            </span>
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
                                            <span className="text-danger">
                                              *
                                            </span>
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
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-9">
                                            <Form.Item
                                              {...restField}
                                              name={[name, "percentage"]}
                                              fieldKey={[
                                                fieldKey,
                                                "percentage",
                                              ]}
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
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-9">
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
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <div className="input-block row">
                                          <label className="col-form-label col-md-3">
                                            College Name{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-9">
                                            <Form.Item
                                              {...restField}
                                              name={[name, "college_name"]}
                                              fieldKey={[
                                                fieldKey,
                                                "college_name",
                                              ]}
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
                                            <span className="text-danger">
                                              *
                                            </span>
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
                                              <DatePicker
                                                selected={
                                                  formDates[index]?.joiningDate
                                                }
                                                onChange={(date) => {
                                                  handleJoiningDateChange(
                                                    date,
                                                    index
                                                  );
                                                }}
                                                className="form-control datetimepicker"
                                                type="date"
                                                format="yyyy-MM-dd"
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
                                            Passout Date{" "}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-md-9">
                                            <Form.Item
                                              {...restField}
                                              name={[name, "passout_year"]}
                                              fieldKey={[
                                                fieldKey,
                                                "passout_year",
                                              ]}
                                              rules={[
                                                {
                                                  required: true,
                                                  message:
                                                    "Please select passout date",
                                                },
                                              ]}
                                            >
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
                                                minDate={
                                                  new Date(
                                                    formDates[
                                                      index
                                                    ]?.joiningDate
                                                  )
                                                }
                                                className="form-control datetimepicker"
                                                type="date"
                                                format="yyyy-MM-dd"
                                              />
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
                            <Button type="dashed" onClick={() => add()}>
                              Add Education
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                    <Form.Item>
                      <Button style={{ float: "right" }} type="primary">
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
