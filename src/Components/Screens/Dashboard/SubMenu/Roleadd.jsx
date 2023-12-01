import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Segmented,
    Select,
    Space,
    Spin,
    Table,
    message,
  } from "antd";
  import React, { useEffect, useRef, useState } from "react";
  import { useOutletContext } from "react-router-dom";
  import {
    CreateRoleAction,
    deleteRoleAction,
    getRoleListAction,
    getUserRolePermissions,
    setDeleteRoleSuccessFalse,
    setStoreFeildFalse,
    setUpdateRoleSuccessFalse,
    updateRoleAction,
  } from "../../../../store/Actions/Actions";
  import { URLS } from "../../../../Globals/URLS";
  import { useSelector } from "react-redux";
  import { APP_CONSTANTS } from "../../../../Globals/AppConstants";
  import { DeleteOutlined } from "@ant-design/icons";
  
  const roleActions = APP_CONSTANTS.ROLE_ACTIONS;
  
  function RoleChekbox({ data }) {
    const { id } = data;
  
    return (
      <Form.Item valuePropName="checked" name={id}>
        <Checkbox></Checkbox>
      </Form.Item>
    );
  }
  
  function RolePermissionsTable({ selected_role_action }) {
    const { dispatch } = useOutletContext();
    const [selectedValue, setSelectedValiue] = useState(true);
  
    const columns = [
      { dataIndex: 0, title: "Name" },
      { dataIndex: 1, title: "Add" },
      { dataIndex: 2, title: "Create" },
      { dataIndex: 3, title: "Update" },
      { dataIndex: 4, title: "Delete" },
      { dataIndex: 5, title: "Can Approve" },
      // { dataIndex: 6, title: "Can Reject" },
    ];
  
    const [options, setOptions] = useState([]);
  
    const roleListResponseSelector = useSelector(
      (state) => state.roleListResponse
    );
  
    useEffect(() => {
      if (roleListResponseSelector) {
        let optionss = roleListResponseSelector.map((element) => {
          return { label: element.role_name, value: element.id };
        });
        setOptions(optionss);
      }
    }, [roleListResponseSelector]);
  
    const formRef = useRef();
    const [form] = Form.useForm();
  
    useEffect(() => {
      form.resetFields();
    }, [selected_role_action, form]);
  
    const onFinish = (values) => {
      let selectedKeys = [];
      let ids = Object.keys(values);
  
      Object.values(values).forEach((element, index) => {
        if (element === true) {
          selectedKeys.push(ids[index]);
        }
      });
  
      if (selected_role_action === roleActions[0])
        dispatch(
          CreateRoleAction({
            role_name: values.role_name,
            role_permission: selectedKeys,
          })
        );
      else
        dispatch(
          updateRoleAction({
            payload: { role_permission: selectedKeys },
            role_id: values.role_name,
          })
        );
    };
  
    const [tableDetails, setTableDetails] = useState([]);
    const selector = useSelector(
      (state) => state.addRolePermissionHeadersAndList
    );
  
    useEffect(() => {
      if (selector && selector.tableHeaders && selector.permissionList) {
        let valuess = selector.permissionList.map((element) => {
          let permissions = Object.keys(element.content_type.permissions);
          return {
            0: element.content_type.model,
            1: <RoleChekbox data={{ id: permissions[0] }}></RoleChekbox>,
            2: <RoleChekbox data={{ id: permissions[1] }}></RoleChekbox>,
            3: <RoleChekbox data={{ id: permissions[2] }}></RoleChekbox>,
            4: <RoleChekbox data={{ id: permissions[3] }}></RoleChekbox>,
            5: permissions[4] ? (
              <RoleChekbox data={{ id: permissions[4] }}></RoleChekbox>
            ) : (
              ""
            ),
            6: permissions[5] ? (
              <RoleChekbox data={{ id: permissions[5] }}></RoleChekbox>
            ) : (
              ""
            ),
          };
        });
  
        setTableDetails(valuess);
      }
    }, [selector]);
  
    const updateRoleSuccessSelector = useSelector(
      (state) => state.updateRoleSuccess
    );
  
    useEffect(() => {
      if (updateRoleSuccessSelector) {
        form.resetFields();
        message.success("Permissions Updated Successfully!");
        setSelectedValiue(!selectedValue);
        dispatch(setUpdateRoleSuccessFalse());
        dispatch(getRoleListAction());
      }
    }, [updateRoleSuccessSelector]);
  
    const handleReset = () => {
      form.resetFields();
    };
  
    const createRoleResponseSelector = useSelector((state) => {
      return state.createRoleResponse;
    });
  
    useEffect(() => {
      if (createRoleResponseSelector) {
        message.success("Role Created Successfully!");
        dispatch(setStoreFeildFalse());
        form.resetFields();
      }
    }, [createRoleResponseSelector]);
  
    const handleChange = (val) => {
      let selectedElement = roleListResponseSelector.find(
        (element) => element.id === val
      );
  
      let array = selectedElement.role_permission;
      const obj = {};
  
      for (const value of array) {
        obj[value] = true;
      }
      obj["role_name"] = val;
      form.resetFields();
      form.setFieldsValue(obj);
    };
  
    return (
      <Form onFinish={onFinish} form={form} ref={formRef}>
        {selected_role_action === roleActions[0] && (
          <Row>
            <Col span={5}>
              <Form.Item
                name="role_name"
                rules={[
                  {
                    message: "Please Enter Role Name!",
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Enter Role Name"></Input>
              </Form.Item>
            </Col>
          </Row>
        )}
        {selected_role_action === roleActions[1] && (
          <Form.Item name={"role_name"}>
            <Select
              showSearch
              style={{ width: "30%" }}
              placeholder="Select Role"
              onChange={handleChange}
              options={options}
            />
          </Form.Item>
        )}
  
        <Table
          columns={columns}
          dataSource={tableDetails}
          pagination={false}
          scroll={{ x: 1400, y: 400 }}
        ></Table>
  
        <Space
          style={{ display: "flex", justifyContent: "end", marginTop: "15px" }}
        >
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleReset}>Clear Entries</Button>
          </Form.Item>
        </Space>
      </Form>
    );
  }
  
  function DeleteRole() {
    const [deleteRoleDeta, setDeleteRoleDeta] = useState([]);
    const { dispatch } = useOutletContext();
  
    function deleteRoleHandler() {
      dispatch(getRoleListAction());
    }
  
    useEffect(() => {
      deleteRoleHandler();
    }, []);
  
    function roleDeleteHandler(id) {
      dispatch(deleteRoleAction({ id: id }));
    }
  
    const roleListResponseSelector = useSelector(
      (state) => state.roleListResponse
    );
  
    const deleteRoleSuccessSelector = useSelector(
      (state) => state.deleteRoleSuccess
    );
  
    useEffect(() => {
      if (deleteRoleSuccessSelector) {
        message.success("Role Deleted Successfully!");
        deleteRoleHandler();
        dispatch(setDeleteRoleSuccessFalse());
      }
    }, [deleteRoleSuccessSelector]);
  
    useEffect(() => {
      if (roleListResponseSelector) {
        const deleteTableDetails = roleListResponseSelector.map(
          (element, index) => {
            return {
              sr: index + 1,
              role_name: element.role_name,
              deleteRole: (
                <Button
                  size="small"
                  onClick={() => roleDeleteHandler(element.id)}
                >
                  <DeleteOutlined></DeleteOutlined>
                </Button>
              ),
            };
          }
        );
  
        setDeleteRoleDeta(deleteTableDetails);
      }
    }, [roleListResponseSelector]);
  
    const columns = [
      {
        title: "Sr.",
        dataIndex: "sr",
      },
      {
        title: "Role Name",
        dataIndex: "role_name",
      },
      {
        title: "Delete",
        dataIndex: "deleteRole",
      },
    ];
  
    return (
      <div>
        <Table
          columns={columns}
          dataSource={deleteRoleDeta}
          pagination={false}
          scroll={{ x: 1400, y: 400 }}
        ></Table>
      </div>
    );
  }
  
  const Roleadd = () => {
    const { dispatch } = useOutletContext();
    const roleActions = APP_CONSTANTS.ROLE_ACTIONS;
    const [selected_role_action, setSelected_role_action] = useState(
      roleActions[0]
    );
  
    useEffect(() => {
      dispatch(
        getUserRolePermissions({
          headersURL: URLS.GET_USER_PERMISSIONS_ADD_ROLE_URL,
          permissionsURL: URLS.GET_USER_PERMISSIONS_LIST_ADD_ROLE,
        })
      );
    }, []);
  
    const handleChange = (value) => {
      setSelected_role_action(value);
      if (value === roleActions[1]) dispatch(getRoleListAction());
    };
  
    const loadingSelector = useSelector((state) => state.loding);
  
    return (
      <div>
        <Spin spinning={loadingSelector}>
          <Space direction="vertical" style={{ display: "flex" }}>
            <Segmented onChange={handleChange} block options={roleActions} />
            {(selected_role_action === roleActions[0] ||
              selected_role_action === roleActions[1]) && (
              <RolePermissionsTable
                selected_role_action={selected_role_action}
              ></RolePermissionsTable>
            )}
            {selected_role_action === roleActions[2] && <DeleteRole></DeleteRole>}
          </Space>
        </Spin>
      </div>
    );
  };
  export default Roleadd;
  