import { Radio } from 'antd';
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal,Select, DatePicker } from "antd";
// import { getUser } from "../../utils/sessionStorage";
// import { useNavigate } from "react-router-dom";
// import { URLS } from "../../globals/urls";
// const { Option } = Select; 

const AccountPeriodAdd = () => {
  
   
  return (
    <div>
      
      <div className="add_user_form_container">
      <div className="add_user_form custom-form">
        <div className="expense_report_header" >
          <h2>Add Accounting Code Group</h2>
        </div>
        <Form layout="vertical" name="complex-form" >
          <Row gutter={[16, 24]}>
          <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="Start_date"
                label="Start Date"
                className="label-static"
              >
                <DatePicker size="large" style={{ width: "100%" }}></DatePicker>
              </Form.Item>
            </Col>
            <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="end_date"
                label="End Date"
                className="label-static"
              >
                <DatePicker size="large" style={{ width: "100%" }}></DatePicker>
              </Form.Item>
            </Col>
          <Col className="gutter-row" lg={6} xs={24}>
              <Form.Item
                name="Account_period_name "
                label="Accounting Period Name"
                className="label-static"
                rules={[
                  {
                    required: true,
                    message: "Please enter a Category name",
                  },
                ]}
              >
                  <Input size="large" />
              </Form.Item>
            </Col>
            </Row>
          <div style={{ textAlign: "end" }}>
            <Button
              size="large"
              htmlType="submit"
              type="primary"
              style={{
                textAlign: "end",
              }}
            >
           Submit
            </Button>
            
          </div>
        </Form>
      </div>
    </div>

      
    </div>
  )
}

export default AccountPeriodAdd
