
import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReport, updateReportAction } from "../../store/Action/Actions";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Offcanvas from "../../Entryfile/offcanvance";
import { URLS } from "../../Globals/URLS";

const AddReport = ({ initialData }) => {

  const url = URLS.GET_REPORT_LIST_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isAddForm = !initialData;

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData, form]);

  const onFinish = (values) => {
    if (isAddForm) {
      dispatch(addReport(values));
    } else {
      dispatch(updateReportAction({ id: initialData.id, payload: values }));     
    }
    navigate("/home/Reports");
  };
  

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>
            {initialData ? "Edit Report" : "Add Report"} - HRMS Admin Template
          </title>
          <meta name="description" content="Report form" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">
                  {initialData ? "Edit Report" : "Add Report"}
                </h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Report Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
         
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">
                    {isAddForm ? "Add Report" : "Edit Report"}
                  </h4>
                </div>
                <div className="card-body">
                  <Form
                    form={form}
                    onFinish={(values) => onFinish(values, form)}
                  >
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        Description
                      </label>
                      <div className="col-lg-9">
                        <Form.Item
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: "Please enter a description!",
                            },
                          ]}
                        >
                          <Input.TextArea rows={4} placeholder="Type here" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        Start Date
                      </label>
                      <div className="col-lg-9">
                        <Form.Item
                          name="start_date"
                          rules={[
                            {
                              required: true,
                              message: "Please select the start date!",
                            },
                          ]}
                        >
                          <Input type="date" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        End Date
                      </label>
                      <div className="col-lg-9">
                        <Form.Item
                          name="end_date"
                          rules={[
                            {
                              required: true,
                              message: "Please select the end date!",
                            },
                          ]}
                        >
                          <Input type="date" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="text-end">
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          {isAddForm ? "Submit" : "Update"}
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas />
    </>
  );
};

export default AddReport;
