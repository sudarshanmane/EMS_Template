import { useDispatch } from "react-redux";
import { Form, Input, Button, Row, Col, Layout, message } from "antd";
import { updateProfileuser } from "../../store/Action/Actions";
import React from "react";

const { Content } = Layout;

const ProfileForm = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const isEmailDuplicate = await checkDuplicateEmail(values.email);
      const isMobileDuplicate = await checkDuplicateMobile(values.mobile);

      if (isEmailDuplicate) {
        message.error(
          "Email is already registered. Please use a different email."
        );
        return;
      }

      if (isMobileDuplicate) {
        message.error(
          "Mobile number is already registered. Please use a different number."
        );
        return;
      }

      await dispatch(updateProfileuser(values));

      form.resetFields();

      message.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const checkDuplicateEmail = async (email) => {
    // Replace this with actual backend API logic to check for duplicate email
    // Return true if the email already exists, otherwise return false
    return false;
  };

  const checkDuplicateMobile = async (mobile) => {
    // Replace this with actual backend API logic to check for duplicate mobile number
    // Return true if the mobile number already exists, otherwise return false
    return false;
  };

  return (
    <Content>
      {/* <div>
        <h1>Profile Update</h1>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 24]}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstname"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: "100%" }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastname"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: "100%" }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Form.Item
              label="Email"
              name="email"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ width: "50%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mobile No"
              name="mobile"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ width: "50%" }}
            >
              <Input />
            </Form.Item>
          </Row>
          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div> */}
      <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Update Profile Form</h4>
                </div>
                <div className="card-body">
                  <form action="#" onFinish={onFinish}>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        First Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control"  name="firstname" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        Last Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" name="lastname" />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        Email Address
                      </label>
                      <div className="col-lg-9">
                        <input type="email" className="form-control"  name="email"/>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                       Mobile
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control"  name="mobile" />
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                       Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
    </Content>
  );
};

export default ProfileForm;
