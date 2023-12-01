
import React from "react";
import { Layout, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../../../store/Actions/Actions";

const { Content } = Layout;

function ContactUs() {
  const dispatch = useDispatch();
  const contactUsSelector = useSelector((state) => state.contactus);

  const [form] = Form.useForm(); 

  const onFinish = (values) => {
    dispatch(contactUs(values));

    message.success("Successfully updated!", 5); 

    form.resetFields();
  };

  return (
    <Content>
      <div>
        <h1>Update Contact</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="email" label="Email Address">
            <Input type="email" placeholder="Enter email address" />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile Number">
            <Input type="tel" placeholder="Enter mobile number" />
          </Form.Item>
          <Form.Item name="description" label="Address">
            <Input.TextArea rows={5} placeholder="Enter address" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
}

export default ContactUs;
