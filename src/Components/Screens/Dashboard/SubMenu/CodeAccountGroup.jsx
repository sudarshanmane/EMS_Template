import { Radio } from 'antd';
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal,Select } from "antd";
// import { getUser } from "../../utils/sessionStorage";
// import { useNavigate } from "react-router-dom";
// import { URLS } from "../../globals/urls";
// const { Option } = Select; 

const CodeAccountGroup = () => {
  
   
  return (
    <div>
      
      <div className="add_user_form_container">
      <div className="add_user_form custom-form">
        <div className="expense_report_header" >
          <h2>Add Accounting Code Group</h2>
        </div><br />
        <Form layout="vertical" name="complex-form">
          <Row gutter={[16, 24]}>
          <Col className="gutter-row label-static" lg={6} xs={24}>
              <Form.Item
                name="Accounting_code_group "
                label="Accounting Code Group Name"
                
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
              Add Accounting Code Group
            </Button>

            <Button
            size="large"
            htmlType="reset"
            type=""
            style={{
              textAlign: "end",
              marginTop: "15px",
            }}
            // onClick={selectedAction}
          >
            Clear Entries
          </Button>
            
          </div>
        </Form>
      </div>
    </div>

      
    </div>
  )
}

export default CodeAccountGroup
