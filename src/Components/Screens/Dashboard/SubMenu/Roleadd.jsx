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
          RO
          {/* <Segmented onChange={handleChange} block options={roleActions} />
          {(selected_role_action === roleActions[0] ||
            selected_role_action === roleActions[1]) && (
            // <RolePermissionsTable
            //   selected_role_action={selected_role_action}
            // ></RolePermissionsTable>
          )} */}
          {selected_role_action === roleActions[2] && <DeleteRole></DeleteRole>}
        </Space>
      </Spin>
    </div>
  );
};
export default Roleadd;
