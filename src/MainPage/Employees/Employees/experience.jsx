import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperienceAction,
  getDesignationAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";
import { useForm } from "react-hook-form";

export default function experience({ nextcall, userId }) {
  const id = userId;
  const dispatch = useDispatch();
  const getDesignationListurl = URLS.GET_DESIGNATION_LIST_URL;
  const [selectedFile, setSelectedFile] = useState(null);
  const [salaryFile, setSalaryFile] = useState(null);

  const {
    register,
    control,
    formState: { errors },
  } = useForm({});

  const addPersonalInformationSelector = useSelector(
    (state) => state.addexperience
  );

  const designationListSelector = useSelector(
    (state) => state.getdesignation
  );

  function fetchPageDetails(getDesignationListurl) {
    dispatch(getDesignationAction({ payload: {}, URL: getDesignationListurl }));
  }

  useEffect(() => {
    fetchPageDetails(getDesignationListurl);
  }, []);

  function fetchDesignationListData(getDesignationListurl) {
    dispatch(getDesignationAction({ payload: {}, URL: getDesignationListurl }));
  }

  useEffect(() => {
    fetchDesignationListData(getDesignationListurl);
  }, []);

  const onFinish = (values) => {
    
    values?.users?.forEach((user, index) => {
      const formData = new FormData();

      formData.append("user_id", userId);
      formData.append("company_name", user.company_name);
      formData.append("designation", user.designation);
      formData.append("relieving_letter", selectedFile);
      formData.append("salary_slip", salaryFile);
      formData.append("comments", user.comments || "");
      formData.append("year_of_experience", user.year_of_experience || "");
      dispatch(addExperienceAction(formData));
    });
  };

  const exp_info = useSelector((state) => state.experienceinfo?.newData?.id);

  useEffect(() => {
    if (exp_info) {
      nextcall();
    }
  }, [exp_info]);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Experience Information</h4>
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
                            {/* {console.log("key", key)}{" "} */}
                            <div className="card">
                              <div className="card-body">
                                {" "}
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Company Name{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        {/* <input
                                          type="text"
                                          className="form-control"
                                        /> */}
                                        <Form.Item
                                          {...restField}
                                          name={[name, "company_name"]}
                                          fieldKey={[fieldKey, "company_name"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter company name",
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
                                  {/* <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Designation{" "}
                                        <span className="text-danger">*</span>
                                      </label>

                                      <div className="col-md-9">
                                        <select
                                          className="form-control"
                                          {...register("designation")}
                                        >
                                          <option value="">
                                            Select Designation
                                          </option>
                                          {designationListSelector?.map(
                                            (data) => {
                                              return (
                                                <option value={data.id}>
                                                  {data.designation}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                        <div className="text-danger">
                                          {errors.designation?.message}
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
                                   <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Designation{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        <Form.Item
                                          {...restField}
                                          name={[name, "designation"]}
                                          fieldKey={[fieldKey, "designation"]}
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
                                              Select Designation{" "}
                                            </option>
                                            {designationListSelector?.map((data) => {
                                              return (
                                                <option value={data?.id}>
                                                  {data?.designation}
                                                </option>
                                              );
                                            })}
                                          </select>
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Upload relieving letter{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        {/* <input
                                          type="file"
                                          className="form-control"
                                        /> */}
                                        <Form.Item
                                          {...restField}
                                          name={[name, "relieving_letter"]}
                                          fieldKey={[
                                            fieldKey,
                                            "relieving_letter",
                                          ]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please upload relieving letter",
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
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Upload salary slip{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        {/* <input
                                          type="file"
                                          className="form-control"
                                        /> */}
                                        <Form.Item
                                          {...restField}
                                          name={[name, "salary_slip"]}
                                          fieldKey={[fieldKey, "salary_slip"]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please upload salary slip",
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
                                              setSalaryFile(e.target.files[0])
                                            }
                                          />
                                        </Form.Item>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="input-block row">
                                    <label className="col-form-label col-md-2">
                                      Comments
                                    </label>
                                    <div className="col-md-10">
                                      {/* <input
                                        type="text"
                                        className="form-control"
                                      /> */}
                                      <Form.Item
                                        {...restField}
                                        name={[name, "comments"]}
                                        fieldKey={[fieldKey, "comments"]}
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please enter comments",
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
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input-block row">
                                      <label className="col-form-label col-md-3">
                                        Years of experience{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="col-md-9">
                                        {/* <input
                                          type="number"
                                          className="form-control"
                                        /> */}
                                        <Form.Item
                                          {...restField}
                                          name={[name, "year_of_experience"]}
                                          fieldKey={[
                                            fieldKey,
                                            "year_of_experience",
                                          ]}
                                          rules={[
                                            {
                                              required: true,
                                              message:
                                                "Please enter years of experience",
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
                                </div>
                              </div>
                            </div>
                            {index > 0 && (
                              <Button
                                type="dashed"
                                onClick={() => {
                                  remove(name);
                                }}
                                // className="fa-solid fa-minus"
                                // icon={<PlusOutlined />}
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
                          Add Experience
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                <Form.Item>
                  {/* <Button type="primary" htmlType="submit"> */}
                  <Button
                    type="submit"
                    style={{ float: "right" }}
                    // onClick={handleNextFunction}
                  >
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
