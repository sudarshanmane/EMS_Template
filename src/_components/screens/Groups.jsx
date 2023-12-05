import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Select } from "antd";
import "./AllCss.scss";

// import { addGroup, getAllPermissions, getAllUsers } from "../../APIs/UsersAPI";

const Groups = () => {
  const [allPermissions, setAllPermissions] = useState([]);
  const [allMembers, setAllMembers] = useState([]);

  // useEffect(() => {
  //   getAllPermissions().then((result) => {
  //     console.log("Result: ", result);
  //     setAllPermissions(result);
  //   });
  // }, []);

  // useEffect(() => {
  //   getAllUsers().then((result) => {
  //     console.log("Values: ", result);
  //     setAllMembers(result);
  //   });
  // }, []);

  // console.log("all Members: ", allPermissions);

  // const onFinish = async (values) => {
  //   console.log("Received values of form: ", values);
  //   addGroup(values);
  // };

  return (
    <div>
      <div className="expense_report_header" style={{ marginBottom: "30px" }}>
        <h3>Add Group</h3>
      </div>
      <Form layout="vertical" name="complex-form">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" xs={10}>
            <Form.Item name="name" label="Group Name">
              <Input
                size="large"
                rules={[
                  {
                    required: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={10}>
            <Form.Item name="group_description" label="Group Description">
              <Input
                size="large"
                rules={[
                  {
                    required: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={10}>
            <Form.Item name="group_email" label="Group Email">
              <Input
                size="large"
                rules={[
                  {
                    required: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={10}>
            <Form.Item name="permissions" label="Group Permissions">
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                options={allPermissions.map((element) => ({
                  value: element.id,
                  label: element.name,
                }))}
              />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={10}>
            <Form.Item name="add_member" label="Add Members">
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                options={allMembers.map((element) => ({
                  value: element.id,
                  label: `${element.first_name} ${element.last_name}`,
                }))}
              />
            </Form.Item>
          </Col>

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
                style={{
                  textAlign: "end",
                  marginTop: "15px",
                }}
                htmlType="reset"
              >
                Clear Entries
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </div>
  );
};

export default Groups;
