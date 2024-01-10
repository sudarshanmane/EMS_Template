import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  message: null,
  userRole: null,
  userId: null,
  appAccess: null,
  permissionList: [],
  rolesWithPermissions: [],
  patchRolePermissionResult: false,
  createNewPermissionRoleResult: false,
  paramRole: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log("reducers", action.payload);
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.userRole = action.payload.user_role;
      state.userId = action.payload.user_id;
      state.appAccess = action.payload.app_access;
    },
    // login: (state, { payload }) => {
    //   state.loginvalue = payload;
    // },

    logout: (state, action) => {
      state.token = "";
      state.message = "";
      state.userRole = "";
      state.userId = "";
      state.appAccess = "";
    },
    // logout: (state) => {
    //   state.value = { email: "", password: "" };
    // },

    permssionList: (state, action) => {
      state.permissionList = action.payload;
    },

    roleAndPermissionsList: (state, action) => {
      state.rolesWithPermissions = action.payload;
    },

    patchRolePermissionResult: (state, action) => {
      state.patchRolePermissionResult = action.payload;
    },

    createNewPermissionRoleResult: (state, action) => {
      state.createNewPermissionRoleResult = action.payload;
    },

    setCreateNewPermissionRoleResult: (state, action) => {
      state.createNewPermissionRoleResult = false;
    },

    permissionsRole: (state, action) => {
      state.paramRole = action.payload;
    },
  },
});

export const getLoginData = (loginData) => async (dispatch) => {
  const bodyData = loginData;
  try {
    const res = await axios({
      method: "POST",
      url: `/users/api/v2/login_web/`,
      data: bodyData,
    });
    if(res.data){
      localStorage.setItem('user_id', (res?.data?.user_id).toString());
      dispatch(login(res.data));
    } else {
      console.log("In Login error", error);
    }
  } catch (error) {
    console.log("In Login error", error);
  }
};

export const getLogoutData = () => async (dispatch) => {
  dispatch(logout());
};

export const getUserRolePermissions = (token) => async (dispatch) => {
  try {
    const res = await axios.get(API_HOST + `/users/api/v1/custompermission/`, {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
    });
    dispatch(permssionList(res));
  } catch (error) {
    console.log(error);
  }
};

export const getUserRolesAndTheirPermissions = (token) => async (dispatch) => {
  try {
    const res = await axios.get(
      API_HOST + `/users/api/v1/userrolepermission/?all_user_role_data=True`,
      {
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(patchRolePermissionResult(false));
    dispatch(roleAndPermissionsList(res));
  } catch (error) {
    console.log(error);
  }
};

export const createNewPermissionRole =
  (rolePermissions, token) => async (dispatch) => {
    try {
      const res = await axios.post(
        API_HOST + `/users/api/v1/userrolepermission/?normal_data=True`,
        rolePermissions.payload,
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(createNewPermissionRoleResult(res));
    } catch (error) {
      console.log(error);
    }
  };

export const getNewPermissionRole = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v2/userrolepermissionlist`,
      headers: localHeader,
    });
    dispatch(permissionsRole(res.data));
  } catch (error) {
    console.log("In userroleList error", error);
  }
};

export const setCreateNewPermissionRole = (token) => async (dispatch) => {
  dispatch(setCreateNewPermissionRoleResult(false));
};

export const patchUserRolePermissions =
  (rolePermissions) => async (dispatch) => {
    try {
      const res = await axios.patch(
        API_HOST + `/users/api/v1/userrolepermission/${rolePermissions.id}/`,
        rolePermissions.payload,
        {
          headers: {
            Authorization: "token " + rolePermissions.token,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(patchRolePermissionResult(res));
    } catch (error) {
      console.log(error);
    }
  };

export const {
  login,
  logout,
  permssionList,
  roleAndPermissionsList,
  patchRolePermissionResult,
  createNewPermissionRoleResult,
  setCreateNewPermissionRoleResult,
  permissionsRole,
} = userSlice.actions;
export default userSlice.reducer;
