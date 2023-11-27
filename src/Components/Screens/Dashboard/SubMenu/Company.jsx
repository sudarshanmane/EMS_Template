import React, { useEffect } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateCompanyList } from "../../../../store/Actions/Actions";
import { getUser, setUser } from "../../../../utils/sessionStorage";
import { URLS } from "../../../../Globals/URLS";

const Company = ({ initialData }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData]);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      dispatch(
        updateCompanyList({
          URL: URLS.UPDATE_COMPANY_LIST_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(updateCompanyList(values));
    }
  };

  const selector = useSelector((state) => state.companyDetails);

  useEffect(() => {
    if (selector) {
      setUser(selector);
    }
  }, [selector]);

  const userDetails = getUser();

  return (
    <div className="add_user_form_container">
      <div className="add_user_form custom-form">
        <Form
          layout="vertical"
          name="complex-form"
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={[16, 24]}>
            <Col lg={6} xs={24}>
              <Row>
                <Col lg={18} xs={16}>
                  <Form.Item
                    name="company_name"
                    label="Company Name"
                    className="label-static"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                    style={{ marginLeft: "10px" }}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="address_1"
                label="Address Line-1"
                className="label-static"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item name="address_2" label="Address Line-2">
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="state"
                label="State"
                className="label-static"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="country"
                label="Country"
                className="label-static"
              >
                <Input
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="postal_code"
                label="Postal Code "
                className="label-static"
              >
                <Input
                  size="10"
                  type="number"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            {!initialData && (
              <>
                <Col>
                  <Form.Item
                    name="username"
                    label="Username"
                    className="label-static"
                  >
                    <Input
                      style={{
                        width: 400,
                      }}
                      placeholder=" Enter Username"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Password">
                    <Form.Item name="password" noStyle>
                      <Input.Password
                        style={{
                          width: 400,
                        }}
                        placeholder="password"
                        rules={[
                          {
                            required: true,
                            message: "This field is required",
                          },
                        ]}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
              </>
            )}
            <Col className="gutter-row" span={24}>
              <Form.Item label="" colon={false} style={{ textAlign: "end" }}>
                <Button
                  size="large"
                  htmlType="submit"
                  type="primary"
                  style={{
                    textAlign: "end",
                  }}
                >
                  Update
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default Company;
