import { useDispatch } from "react-redux";
import { Form, Input, Button, Row, Col, Layout, message } from "antd";
import { updateProfileuser } from "../../../../store/Actions/Actions";

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
      <div>
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
      </div>
    </Content>
  );
};

export default ProfileForm;
