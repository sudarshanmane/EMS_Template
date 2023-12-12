
import React from "react";
import { Layout, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { aboutUs } from "../../../../store/Actions/Actions";

const { Content } = Layout;

function AboutUs() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const aboutUsselector = useSelector((state) => state.aboutus);

  const onFinish = (values) => {
    dispatch(aboutUs(values));

    message.success("Successfully updated!", 5); 
   
    form.resetFields();
  };

  return (
    <Content>
      <div>
        <h1>Update About</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="pagetitle" label="Page Title">
            <Input placeholder="Enter the title" />
          </Form.Item>
          <Form.Item name="description" label="Page Description">
            <Input.TextArea rows={5} placeholder="Enter the page description" />
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

export default AboutUs;
