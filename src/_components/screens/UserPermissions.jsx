import { Button, Checkbox, Divider, Form, Input, Select, Space } from "antd";
import React, { useState } from "react";

const UserPermissions = () => {
  const [handleUserValue, sethandleUserValue] = useState(
    "Select User/Group Permissions"
  );

  const [handleGroupsValue, sethandleGroupsValue] = useState(
    "Select User/Group Permissions"
  );

  const onchange = (e) => {
    console.log(e.target.value);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const handleUser = (e) => {
    sethandleUserValue(e);
  };

  const handleGroup = (e) => {
    sethandleGroupsValue(e);
  };

  return (
    <div className="user-permissions-container">
      <Divider orientation="left">Manage User/Group Permissions</Divider>
      <div className="input-container">
        <Space>
          <p>Filter</p>
          <Input onChange={onchange}></Input>
        </Space>
      </div>
      <div className="form-container">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 1200,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="User/Group Permissions"
            name="userGroup"
            rules={[
              {
                required: true,
                message: "Please select User/groups",
              },
            ]}
          >
            <Select
              defaultValue={handleUserValue}
              onChange={handleUser}
              style={{ width: 300 }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Permission Group"
            name="permissionGroup"
            rules={[
              {
                required: true,
                message: "Please select permission/groups",
              },
            ]}
          >
            <Select
              defaultValue={handleGroupsValue}
              style={{ width: 300 }}
              onChange={handleGroup}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Space>
              <Button type="primary" htmlType="submit">
                View Profile
              </Button>
              <Button type="primary" htmlType="submit">
                Save Permissions
              </Button>
              c
              <Button type="primary" htmlType="submit">
                Clear All
              </Button>
              <Button type="primary" htmlType="submit">
                Retrieve Permissions
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>  

      {handleGroupsValue !== "Select User/Group Permissions" &&
        handleGroupsValue !== "Select Permissions" && (
          <div className="permissions-container">
            <Divider></Divider>
            <Checkbox></Checkbox>
          </div>
        )}
    </div>
  );
};

export default UserPermissions;
