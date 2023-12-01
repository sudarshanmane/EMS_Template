import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Button, Form, Input, Row, Col, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { applyCardAction } from "../../../../store/Actions/Actions";

function Card() {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  const propss = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = addressList.slice();
      newFileList.splice(index, 1);
      setAddressList(newFileList);
    },
    beforeUpload: (file) => {
      setAddressList([...fileList, file]);
      return false;
    },
    addressList,
  };

  const selector = useSelector((state) => state.applyCardResult);

  const onFinish = (values) => {
    dispatch(applyCardAction(values));
  };
  return (
    <div className="add_user_form_container">
      <div className="add_user_form custom-form">
        <div className="expense_report_header">
          <h2>Apply For Card </h2> <br />
        </div>
        <Form layout="vertical" name="complex-form" onFinish={onFinish}>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item
                name="fullname"
                label="Full Name As Per ID Proof"
                rules={[
                  {
                    required: true,
                    message: "This Field Is required",
                  },
                ]}
                style={{ marginLeft: "10px" }}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item
                name="email"
                label="Email"
                style={{ marginLeft: "10px" }}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item
                label="Phone Number"
                name="mobile"
                rules={[
                  {
                    pattern: /^\d{10}$/, // Regex pattern for 10 digits
                    message: "Please enter a valid 10-digit number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item label="Fathers Name" name="father">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item label="Address" name="address">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item label="State" name="state">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item label="City" name="city">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={8}>
              <Form.Item label="Pincode" name="pincode">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item
                name="occup"
                label="Occupation Type"
                rules={[
                  {
                    required: true,
                    message: "This Field Is required",
                  },
                ]}
              >
                <Select
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="No Advance"
                  options={[
                    {
                      value: 1,
                      label: "Farmer",
                    },
                    {
                      value: 2,
                      label: "Service",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item
                name="pan_no"
                label="Pan No"
                rules={[
                  {
                    required: true,
                    message: "This Field Is required",
                  },
                  {
                    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                    message: "Please enter a valid PAN number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item
                name="aadhar_no"
                label="Aadhar No"
                rules={[
                  {
                    required: true,
                    pattern: /^\d{12}$/, // Regex pattern for 10 digits
                    message: "Please enter a valid 12-digit number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item name="pan_card" label="Pan Card">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                {/* <Button
                  type="primary"
                  onClick={handleUpload}
                  disabled={fileList.length === 0}
                  loading={uploading}
                  style={{
                    marginTop: 16,
                  }}
                >
                  {uploading ? "Uploading" : "Start Upload"}
                </Button> */}
              </Form.Item>
            </Col>
            <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item name="aadhar_card" label="Aadhar Card">
                <Upload {...propss}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                {/* <Button
                  type="primary"
                  onClick={handleUpload}
                  disabled={fileList.length === 0}
                  loading={uploading}
                  style={{
                    marginTop: 16,
                  }}
                >
                  {uploading ? "Uploading" : "Start Upload"}
                </Button> */}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={3} style={{ display: "flex", justifyContent: "end" }}>
              <Button
                size="large"
                htmlType="submit"
                type="primary"
                style={{
                  textAlign: "end",
                  marginTop: "15px",
                }}
              >
                Submit
              </Button>
              <Button
                size="large"
                htmlType="reset"
                type=""
                style={{
                  textAlign: "end",
                  marginTop: "15px",
                }}
              >
                Clear Entries
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Card;
