import { Form } from "antd";
import { useDispatch } from "react-redux";
import { addReport } from "../../store/Action/Actions";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Offcanvas from "../../Entryfile/offcanvance";
import React from "react";

const AddReport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addReport(values));
    navigate("/home/Reports");
  };

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Horizontal Form - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Add Report</h3>
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
                  <h4 className="card-title mb-0">Report Form</h4>
                </div>
                <div className="card-body">
                  <Form form={form} onFinish={onFinish}>
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
                          <textarea
                            rows={4}
                            cols={5}
                            className="form-control"
                            placeholder="type here"
                            value={form.getFieldValue("description")}
                            onChange={(e) =>
                              form.setFieldsValue({
                                description: e.target.value,
                              })
                            }
                          />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="input-block row">
                      <label
                        className="col-lg-3 col-form-label"
                        htmlFor="start_date"
                      >
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
                          <input
                            type="date"
                            className="form-control"
                            id="start_date"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label
                        className="col-lg-3 col-form-label"
                        htmlFor="endDate"
                      >
                        End Date
                      </label>
                      <div className="col-lg-9">
                        <Form.Item
                          name="end_date"
                          rules={[
                            {
                              required: true,
                              message: "Please select the start date!",
                            },
                          ]}
                        >
                          <input
                            type="date"
                            className="form-control"
                            id="end_date"
                          />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="text-end">
                      <Form.Item>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
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
