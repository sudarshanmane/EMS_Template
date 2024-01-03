// import React from "react";
// import { Helmet } from "react-helmet";
// import Offcanvas from "../../../Entryfile/offcanvance";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

// const RolePermisson = () => {
//   return (
//     <>
//       <div className="page-wrapper">
//         <Helmet>
//           <title>Roles & Permissions - HRMS Admin Template</title>
//           <meta name="description" content="Login page" />
//         </Helmet>
//         {/* Page Content */}
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <h3 className="page-title">Roles &amp; Permissions</h3>
//               </div>
//             </div>
//           </div>
//           {/* /Page Header */}
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
//               <Link
//                 to="#"
//                 className="btn btn-primary btn-block w-100"
//                 data-bs-toggle="modal"
//                 data-bs-target="#add_role"
//               >
//                 <i className="fa fa-plus" /> Add Roles
//               </Link>
//               <div className="roles-menu">
//                 <ul>
//                   <li className="active">
//                     <Link to="">
//                       Administrator
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       CEO
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       Manager
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       Team Leader
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       Accountant
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       Web Developer
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       Web Designer
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       HR
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       UI/UX Developer
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="">
//                       SEO Analyst
//                       <span className="role-action">
//                         <span
//                           className="action-circle large"
//                           data-bs-toggle="modal"
//                           data-bs-target="#edit_role"
//                         >
//                           <i className="material-icons">edit</i>
//                         </span>
//                         <span
//                           className="action-circle large delete-btn"
//                           data-bs-toggle="modal"
//                           data-bs-target="#delete_role"
//                         >
//                           <i className="material-icons">delete</i>
//                         </span>
//                       </span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
//               <h6 className="card-title m-b-20">Module Access</h6>
//               <div className="m-b-30">
//                 <ul className="list-group notification-list">
//                   <li className="list-group-item">
//                     Employee
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="staff_module"
//                         className="check"
//                       />
//                       <label htmlFor="staff_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                   <li className="list-group-item">
//                     Holidays
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="holidays_module"
//                         className="check"
//                         defaultChecked
//                       />
//                       <label htmlFor="holidays_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                   <li className="list-group-item">
//                     Leaves
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="leave_module"
//                         className="check"
//                         defaultChecked
//                       />
//                       <label htmlFor="leave_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                   <li className="list-group-item">
//                     Events
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="events_module"
//                         className="check"
//                         defaultChecked
//                       />
//                       <label htmlFor="events_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                   <li className="list-group-item">
//                     Chat
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="chat_module"
//                         className="check"
//                         defaultChecked
//                       />
//                       <label htmlFor="chat_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                   <li className="list-group-item">
//                     Jobs
//                     <div className="status-toggle">
//                       <input
//                         type="checkbox"
//                         id="job_module"
//                         className="check"
//                       />
//                       <label htmlFor="job_module" className="checktoggle">
//                         checkbox
//                       </label>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//               <div className="table-responsive">
//                 <table className="table table-striped custom-table">
//                   <thead>
//                     <tr>
//                       <th>Module Permission</th>
//                       <th className="text-center">Read</th>
//                       <th className="text-center">Write</th>
//                       <th className="text-center">Create</th>
//                       <th className="text-center">Delete</th>
//                       <th className="text-center">Import</th>
//                       <th className="text-center">Export</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Employee</td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Holidays</td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Leaves</td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>Events</td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                       <td className="text-center">
//                         <input type="checkbox" defaultChecked />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Page Content */}
//         {/* Add Role Modal */}
//         <div id="add_role" className="modal custom-modal fade" role="dialog">
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Add Role</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="input-block">
//                     <label>
//                       Role Name <span className="text-danger">*</span>
//                     </label>
//                     <input className="form-control" type="text" />
//                   </div>
//                   <div className="submit-section">
//                     <button className="btn btn-primary submit-btn">
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Add Role Modal */}
//         {/* Edit Role Modal */}
//         <div id="edit_role" className="modal custom-modal fade" role="dialog">
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content modal-md">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Role</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="input-block">
//                     <label>
//                       Role Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       className="form-control"
//                       defaultValue="Team Leader"
//                       type="text"
//                     />
//                   </div>
//                   <div className="submit-section">
//                     <button className="btn btn-primary submit-btn">Save</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Edit Role Modal */}
//         {/* Delete Role Modal */}
//         <div className="modal custom-modal fade" id="delete_role" role="dialog">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-body">
//                 <div className="form-header">
//                   <h3>Delete Role</h3>
//                   <p>Are you sure want to delete?</p>
//                 </div>
//                 <div className="modal-btn delete-action">
//                   <div className="row">
//                     <div className="col-6">
//                       <Link to="" className="btn btn-primary continue-btn">
//                         Delete
//                       </Link>
//                     </div>
//                     <div className="col-6">
//                       <Link
//                         to=""
//                         data-bs-dismiss="modal"
//                         className="btn btn-primary cancel-btn"
//                       >
//                         Cancel
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Delete Role Modal */}
//       </div>
//       <Offcanvas />
//     </>
//   );
// };

// export default RolePermisson;

// Sudarshan
import { Input, Form, Button, Checkbox, message } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
// import {
//   createNewPermissionRole,
//   // getUserRoleAndPermissions,
//   getUserRolePermissions,
//   getUserRolesAndTheirPermissions,
//   login,
//   patchUserRolePermissions,
//   setCreateNewPermissionRole,
//   setCreateNewPermissionRoleResult,
// } from "../../../store/users";
// import "./rolepermission.css";

const RoleManupulation = ({
  selectedRolesPermissions,
  isAddForm,
  setIsAddForm,
  roleInfo,
}) => {
  const [response, setResponse] = useState();
  const [form] = Form.useForm();
  const [formValues, setformValues] = useState({});
  const [canPostFormVals, setCanPostFormVals] = useState(false);
  const [resettedFormSections, setresettedFormSections] = useState({});

  const token = useSelector((state) => state.userSlice.token);

  message.config({
    top: 60,
    duration: 5,
  });

  const patchRolePermissionResultSelector = useSelector(
    (state) => state.userSlice.patchRolePermissionResult
  );

  useEffect(() => {
    if (
      patchRolePermissionResultSelector &&
      patchRolePermissionResultSelector.data
    ) {
      message.success("Role Permissions Updated Successfully!!");
      dispatch(getUserRolesAndTheirPermissions(token));
      document.querySelector(".close").click();
    }
  }, [patchRolePermissionResultSelector]);

  const createNewPermissionRoleResult = useSelector(
    (state) => state.userSlice.createNewPermissionRoleResult
  );

  useEffect(() => {
    if (createNewPermissionRoleResult?.data) {
      message.success("Role Created Successfully!!");
      dispatch(setCreateNewPermissionRole(token));
      dispatch(getUserRolesAndTheirPermissions(token));

      document.querySelector(".close").click();
    }
  }, [createNewPermissionRoleResult]);

  useEffect(() => {
    if (canPostFormVals) {
      let keys = Object.keys(formValues);
      let vals = Object.values(formValues);

      const finalFromFeildsTrue = [];

      vals.forEach((element, index) => {
        if (Number(keys[index])) {
          if (element === true) {
            finalFromFeildsTrue.push(parseInt(keys[index]));
          }
        }
      });

      if (isAddForm) {
        let roleName = form.getFieldValue("new_role_name");

        dispatch(
          createNewPermissionRole(
            {
              payload: {
                user_role: roleName,
                CustomPermission: finalFromFeildsTrue,
              },
            },
            token
          )
        );
      } else {
        let newSelectedRolesPermissions = selectedRolesPermissions.slice();

        vals.forEach((element, index) => {
          if (Number(keys[index])) {
            if (element === false) {
              let check = newSelectedRolesPermissions.includes(
                parseInt(keys[index])
              );

              if (check) {
                let selectedRoleKeyIndex = newSelectedRolesPermissions.indexOf(
                  parseInt(keys[index])
                );

                newSelectedRolesPermissions.splice(selectedRoleKeyIndex, 1);
              }
            }
          }
        });

        newSelectedRolesPermissions.forEach((element) => {
          if (!finalFromFeildsTrue.includes(element)) {
            finalFromFeildsTrue.push(element);
          }
        });

        dispatch(
          patchUserRolePermissions({
            id: roleInfo.id,
            payload: { CustomPermission: finalFromFeildsTrue },
            token,
          })
        );
      }

      setCanPostFormVals(false);
    }
  }, [formValues]);

  function handleButton(id) {
    setformValues((formValues) => {
      return { ...formValues, ...form.getFieldsValue() };
    });
    form.getFieldsValue();
    setActiveButton(id);
  }

  const [sectionArrays, setSectionArrays] = useState([]);
  const [activeButton, setActiveButton] = useState();
  const [tableKeys, settableKeys] = useState([]);

  useEffect(() => {
    if (sectionArrays && sectionArrays.length > 0) {
      setActiveButton(sectionArrays[0]);
      let tableKeys = {};

      for (let index = 0; index < sectionArrays.length; index++) {
        tableKeys[sectionArrays[index]] = `${sectionArrays[index]}-${index}`;
      }

      settableKeys(tableKeys);
    }
  }, [sectionArrays]);

  useEffect(() => {
    if (sectionArrays?.length > 0 && isAddForm) {
      let resettedFormSections = {};
      sectionArrays.forEach((element) => {
        resettedFormSections[element] = true;
      });

      setresettedFormSections(resettedFormSections);
    }
  }, [isAddForm, sectionArrays]);

  const permissionListSelector = useSelector((state) => state.userSlice);
  useEffect(() => {
    if (
      permissionListSelector &&
      permissionListSelector?.permissionList?.data?.data
    ) {
      setSectionArrays(
        Object.keys(permissionListSelector.permissionList.data.data)
      );
      setResponse(permissionListSelector.permissionList.data);
    }
  }, [permissionListSelector]);

  const getButtons = (sectionArrays) =>
    sectionArrays.map((element, index) => {
      return (
        <button
          key={element}
          onClick={() => handleButton(element)}
          type="button"
          className="close m-1 btn"
          style={
            element == activeButton
              ? { backgroundColor: "orange", color: "white" }
              : {}
          }
        >
          {element}
        </button>
      );
    });

  const [tbodyElement, settbodyElement] = useState([]);
  const [allCheckboxValues, setAllCheckboxValues] = useState([]);
  const [addRoleModalIsOpen, setAddRoleModalIsOpen] = useState(false);
  const [allRowHeaders, setallRowHeaders] = useState([]);

  function handleParentCheckbox(allRowNameList) {
    let vals = allRowNameList.map((element) => form.getFieldValue(element));
    if (
      vals.includes(false) ||
      vals.includes(undefined) ||
      allRowNameList.length === 0
    ) {
      form.setFieldsValue({ [activeButton]: false });
    } else {
      form.setFieldsValue({ [activeButton]: true });
    }
  }

  function handleChange(val, rowIds, rowCheckboxName, allRowHeaders) {
    if (!rowCheckboxName) {
      let formValues = {};
      rowIds.forEach((element) => {
        formValues[element.toString()] = val;
      });
      form.setFieldsValue(formValues);
    } else if (rowCheckboxName) {
      let hasFVale = false;
      let vals = [];
      for (let index = 0; index < rowIds.length; index++) {
        if (index !== 0) {
          vals.push(form.getFieldValue(rowIds[index].toString()));
        }
      }

      if (vals.includes(false) || vals.includes(undefined)) {
        form.setFieldsValue({ [rowIds[0]]: false });
      } else {
        form.setFieldsValue({ [rowIds[0]]: true });
      }
    }

    handleParentCheckbox(allRowHeaders);
  }

  useEffect(() => {
    const modal = document.getElementById("add_role");

    const handleModalShow = () => {
      setAddRoleModalIsOpen(true);
    };

    const handleModalHide = () => {
      setAddRoleModalIsOpen(false);
      form.resetFields();
    };

    modal.addEventListener("show.bs.modal", handleModalShow);
    modal.addEventListener("hide.bs.modal", handleModalHide);

    return () => {
      modal.removeEventListener("show.bs.modal", handleModalShow);
      modal.removeEventListener("hide.bs.modal", handleModalHide);
    };
  }, []);

  useEffect(() => {
    if (selectedRolesPermissions && addRoleModalIsOpen) {
      handleChange(true, selectedRolesPermissions, null, []);
    } else {
      form.resetFields();
      setformValues({});
    }
  }, [addRoleModalIsOpen, selectedRolesPermissions]);

  function setTableElement(params) {
    let allRowName = [];
    let allTableCheckboxIds = [];
    let allTableBody = [];
    let details = response?.data[`${params}`];

    let tbody = Object.keys(details).map((element, index) => {
      let currentRowKeys = [element];
      allRowName.push(element);

      let currentRowEelements = [
        <>
          <td key={element}>
            <Form.Item name={`${element}`} valuePropName="checked" noStyle>
              <Checkbox
                onChange={(e) =>
                  handleChange(
                    e.target.checked,
                    currentRowKeys,
                    null,
                    allRowName
                  )
                }
              ></Checkbox>
            </Form.Item>
          </td>
          <td>
            <span className="ischeck staff_checkall" data-id="user">
              {element}
            </span>
          </td>
        </>,
      ];

      let lastRow = [];

      let checkParentRow = [];

      let inputCheckBoxe = details[element];
      inputCheckBoxe.forEach((element) => {
        let keys = Object.keys(element);
        let values = Object.values(element);
        currentRowKeys = [...currentRowKeys, ...keys];
        checkParentRow.push(values[0]);

        lastRow.push(
          <span key={keys[0]}>
            <Form.Item
              name={`${keys[0]}`}
              label={values[0]}
              valuePropName="checked"
              noStyle
            >
              <Checkbox
                onChange={(e) =>
                  handleChange(
                    e.target.checked,
                    currentRowKeys,
                    element,
                    allRowName
                  )
                }
              >
                {values[0]}
              </Checkbox>
            </Form.Item>
          </span>
        );
      });
      currentRowEelements = [
        ...currentRowEelements,
        <td className="tableRow">{lastRow}</td>,
      ];

      allTableCheckboxIds = [...allTableCheckboxIds, ...currentRowKeys];
      return currentRowEelements;
    });

    setallRowHeaders(allRowName);
    let data = tbody.map((element, index) => {
      return <tr key={index}>{element}</tr>;
    });

    let table = (
      <table
        className="table table-striped"
        in="dataTable-1"
        key={tableKeys[params]}
      >
        <thead key={params + "_tableHead"}>
          <tr key={`${tableKeys[params]}_1`}>
            <th>
              <Form.Item name={activeButton} noStyle valuePropName="checked">
                <Checkbox
                  onChange={(e) =>
                    handleChange(
                      e.target.checked,
                      allTableCheckboxIds,
                      null,
                      allRowName
                    )
                  }
                ></Checkbox>
              </Form.Item>
            </th>
            <th>Module </th>
            <th>Permissions </th>
          </tr>
        </thead>
        <tbody key={params + "_tableHead"}>{data}</tbody>
      </table>
    );

    settbodyElement(table);
  }

  useEffect(() => {
    if (activeButton && response) {
      setTableElement(activeButton);
    }
  }, [activeButton]);

  useEffect(() => {
    if (isAddForm && resettedFormSections[activeButton]) {
      form.resetFields();
      setresettedFormSections((state) => {
        return { ...state, [activeButton]: false };
      });
    }
  }, [activeButton, resettedFormSections]);

  function onSubmit(values) {
    setformValues((vals) => {
      return {
        ...vals,
        ...values,
      };
    });

    setCanPostFormVals(true);
  }

  const dispatch = useDispatch();
  function handleGetPermissions() {
    setIsAddForm(true);
    dispatch(getUserRolePermissions(token));
  }

  return (
    <div className="role-manipulate">
      <button
        onClick={handleGetPermissions}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#add_role"
        role="dialog"
      >
        <i className="fa fa-plus"></i>
      </button>
      <div
        id="add_role"
        className="modal custom-modal fade"
        role="dialog"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-tpo modal-xl" role="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Role Permissions</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Form form={form} onFinish={onSubmit}>
                {!isAddForm ? (
                  <h3>{roleInfo.role}</h3>
                ) : (
                  <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="new_role_name">Role Name:</label>
                    <Form.Item
                      key={"new_role_name"}
                      name="new_role_name"
                      rules={[
                        {
                          required: true,
                          message: "Role Name Is Required!",
                        },
                      ]}
                    >
                      <Input></Input>
                    </Form.Item>
                  </div>
                )}

                <div>{activeButton && getButtons(sectionArrays)}</div>
                <h5>Assign General Permission to Roles</h5>
                <div>
                  {tbodyElement}
                  <Form.Item
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      type="primary"
                      className="role_permission_popup_cancel_btn "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="role_permission_popup_submit_button"
                    >
                      {isAddForm ? "Create" : "Update"}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RolePermisson = () => {
  const token = useSelector((state) => state.userSlice.token);
  const [rolePermissions, setRolePermissions] = useState([]);
  const dispatch = useDispatch();
  const [selectedRolesPermissions, setSelectedRolesPermissions] = useState([]);
  const [roleName, setroleName] = useState("");
  const [isAddForm, setIsAddForm] = useState(true);
  const [roleInfo, setRoleInfo] = useState({ id: "", role: "" });

  useEffect(() => {
    dispatch(getUserRolesAndTheirPermissions(token));
  }, []);

  const rolePermissionsListSelector = useSelector(
    (state) => state.userSlice.rolesWithPermissions
  );

  useEffect(() => {
    if (rolePermissionsListSelector?.data?.data) {
      let details = rolePermissionsListSelector.data.data;
      let roles = Object.keys(rolePermissionsListSelector.data.data);
      let tableData = roles.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element}</td>
            <td className="role_permission_datCell">
              {details[element]["user_permission_name"].map((element) => {
                return <span className="badge ">{element}</span>;
              })}
            </td>
            <td>
              <button
                className="btn btn-secondary me-1 "
                data-bs-toggle="modal"
                data-bs-target="#add_role"
                role="dialog"
                onClick={() => {
                  setSelectedRolesPermissions(
                    details[element]["user_permission_id"]
                  );
                  setIsAddForm(false);
                  setRoleInfo({ id: details[element][element], role: element });
                }}
              >
                <i className="fa fa-pencil"></i>
              </button>
              <button type="button" className="btn btn-danger me-1">
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        );
      });
      setRolePermissions(tableData);
    }
  }, [rolePermissionsListSelector]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Roles & Permissions - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Roles &amp; Permissions</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-sm-8 col-md-8 col-lg-12 col-xl-12 p-1"
        style={{ width: "98%", margin: "auto" }}
      >
        <div
          className="d-flex justify-content-end"
          style={{ marginBottom: "10px" }}
        >
          <RoleManupulation
            selectedRolesPermissions={selectedRolesPermissions}
            setRolePermissions={setRolePermissions}
            isAddForm={isAddForm}
            setIsAddForm={setIsAddForm}
            roleInfo={roleInfo}
          ></RoleManupulation>
        </div>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Permissions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{rolePermissions}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolePermisson;
