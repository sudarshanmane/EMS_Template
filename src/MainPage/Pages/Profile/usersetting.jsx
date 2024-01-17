import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { Select } from "antd";
import {
  getAllDropdownAction,
  getCurrentRole,
  getShiftPolicyAction,
  getUserSettingAction,
  getWeekOffAction,
  updateUserSettingAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

const stepSchema = Yup.object().shape({});

export default function Usersetting({ userId }) {

  const shifturl = URLS.GET_SHIFT_POLICY_URL;
  const weekurl = URLS.GET_WEEK_OFF_URL;
  const dropdownurl = URLS.GET_ALL_DROPDOWN_URL;
  const settingurl = URLS.GET_USER_SETTING_URL;
  const roleurl = URLS.GET_CURRENT_ROLE_URL;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchema),
    // mode: "all",
  });

  const {
    register: pRegister,
    handleSubmit: phandleSubmit,
    control: pcontrol,
    formState: { E_errors },
    reset: pReset,
  } = useForm({});

  const dispatch = useDispatch();
  const ref = useRef();

  const shiftPolicy_dropdown = useSelector((state) => state.shiftpolicy);
  const weekoff_dropdown = useSelector((state) => state.weekoff);
  const userlist_drop = useSelector((state) => state.getalldropdown);
  const usr_setting = useSelector((state) => state.getusersetting);
  const update_setting_id = useSelector((state) => state.getusersetting);
  const userRoles = useSelector((state) => state.getcurrentrole);

  const userOptions =
    userlist_drop?.data?.map((user) => ({
      value: user.id,
      label: user.full_name,
    })) || [];

  // Edit Department
  const handleEdit = (record) => {
    dispatch(getUserSettingAction(userId));
    setValue("attendance", record.attendance);
    setValue("app_access", record.app_access);
    setValue("active", record.active);
    setValue("biometric_access", record.biometric_access);
    setValue("hr_rejection", record.hr_rejection);
    setValue("face_detection", record.face_detection);
    setValue("emp_id_verify", record.emp_id_verify);
    setValue("is_hr_verify", record.is_hr_verify);
    setValue("website_access", record.website_access);
    setValue("outstation", record.outstation);
    setValue("location_restriction", record.location_restriction);
    setValue("location", record.location);
    setValue("chatting", record.chatting);
    setValue("shift_policy", record.shift_policy?.id || "");
    setValue("weekly_off", record.weekly_off?.id || "");
    setValue(
      "leave_accept_access",
      record.leave_accept_access?.map((item) => item.id)
    );
    setValue(
      "comp_off_access",
      record.comp_off_access?.map((item) => item.id)
    );
    setValue(
      "attendance_reconciliation_accept_access",
      record.attendance_reconciliation_accept_access?.map((item) => item.id)
    );
    setValue(
      "outstation_accept_access",
      record.outstation_accept_access?.map((item) => item.id)
    );

    setValue("id", record.id);
  };

  const onSubmit = (data) => {
    dispatch(updateUserSettingAction(data.id, data));
  };

  useEffect(() => {
    if (userId) {
      dispatch(getShiftPolicyAction({ payload: {}, URL: shifturl }));
      dispatch(getWeekOffAction({ payload: {}, URL: weekurl }));
      dispatch(getAllDropdownAction({ payload: {}, URL: dropdownurl }));
      dispatch(getUserSettingAction({ payload: {}, URL: settingurl }));
      dispatch(getCurrentRole({ payload: {}, URL: roleurl }));
    }
  }, []);

  useEffect(() => {
    if (update_setting_id) {
      dispatch(getUserSettingAction({ payload: {}, URL: settingurl }));
    }
  }, [update_setting_id]);

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">
                Settings{" "}
                {usr_setting?.id ? (
                  userRoles?.data?.users?.user_settings?.includes("Edit") ? (
                    <a
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#user_setting_modal"
                      onClick={() => handleEdit(usr_setting)}
                    >
                      <i className="fa fa-pencil" />
                    </a>
                  ) : null
                ) : userRoles?.data?.users?.user_settings?.includes(
                    "Create"
                  ) ? (
                  <Link
                    to={`/home/usersetting/${userId}`}
                    className="edit-icon"
                  >
                    <i className="fa fa-plus" />
                  </Link>
                ) : null}
              </h4>
            </div>
            {userRoles?.data?.users?.user_settings?.includes("View") ? (
              <div className="card-body access">
                {" "}
                <form action="#">
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Shift Policy</div>
                              <div className="text">
                                {usr_setting?.shift_policy?.shift_code}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Weekly Off</div>
                              <div className="text">
                                {usr_setting?.weekly_off?.weekly_off_code}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Leave Accept Access</div>
                              <div className="text">
                                {usr_setting?.leave_accept_access?.map(
                                  (data) => {
                                    return (
                                      data?.first_name +
                                      " " +
                                      data?.last_name +
                                      ", "
                                    );
                                  }
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Comp Off Access</div>
                              <div className="text">
                                {usr_setting?.comp_off_access?.map((data) => {
                                  return (
                                    data?.first_name +
                                    " " +
                                    data?.last_name +
                                    ", "
                                  );
                                })}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">
                                Attendance Reconciliation Accept Access
                              </div>
                              <div className="text">
                                {usr_setting?.attendance_reconciliation_accept_access?.map(
                                  (data) => {
                                    return (
                                      data?.first_name +
                                      " " +
                                      data?.last_name +
                                      ", "
                                    );
                                  }
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <ul className="personal-info">
                            <li>
                              <div className="title">
                                Outstation Accept Access
                              </div>
                              <div className="text">
                                {usr_setting?.outstation_accept_access?.map(
                                  (data) => {
                                    return (
                                      data?.first_name +
                                      " " +
                                      data?.last_name +
                                      ", "
                                    );
                                  }
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="switch_sick"
                              // defaultChecked
                              checked={usr_setting?.location_restriction}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="switch_sick"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Location Restriction</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Location"
                              // defaultChecked
                              checked={usr_setting?.location}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Location"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Location</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Face_detection"
                              // defaultChecked
                              checked={usr_setting?.face_detection}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Face_detection"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Face Detection</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="App_access"
                              // defaultChecked
                              checked={usr_setting?.app_access}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="App_access"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>App Access</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Website_access"
                              // defaultChecked
                              checked={usr_setting?.website_access}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Website_access"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Website Access</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Outstation"
                              checked={usr_setting?.outstation}
                              // defaultChecked
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Outstation"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Outstation</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Active"
                              // defaultChecked
                              checked={usr_setting?.active}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Active"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Active</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row mb-15">
                        <div className="col-sm-3">
                          <div className="onoffswitch">
                            <input
                              type="checkbox"
                              // name="onoffswitch"
                              className="onoffswitch-checkbox"
                              id="Attendance"
                              // defaultChecked
                              checked={usr_setting?.attendance}
                            />
                            <label
                              className="onoffswitch-label"
                              htmlFor="Attendance"
                            >
                              <span className="onoffswitch-inner" />
                              <span className="onoffswitch-switch" />
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <h4>Attendance</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Edit data */}

      <div
        id="user_setting_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update setting</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body access">
              <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
                <div className="row ">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">Shift Policy</label>
                      <div className="">
                        <Select
                          className="form-control"
                          {...register("shift_policy")}
                        >
                          <option value=""> Select Shift Policy </option>
                          {shiftPolicy_dropdown?.map((data) => {
                            return (
                              <option value={data.id}>{data.shift_code}</option>
                            );
                          })}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">Weekly Off</label>
                      <div className="">
                        <select
                          className="form-control"
                          {...register("weekly_off")}
                        >
                          <option value=""> Select Weekly Off </option>
                          {weekoff_dropdown?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.weekly_off_code}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Leave Accept Access
                      </label>
                      <div className="">
                        <Controller
                          name="leave_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              options={userOptions}
                              isMulti
                              isSearchable={true}
                              placeholder="Search options..."
                              value={userOptions.filter(
                                (option) =>
                                  field.value &&
                                  field.value.includes(option.value)
                              )}
                              onChange={(selectedOptions) => {
                                const selectedValues = selectedOptions?.map(
                                  (option) => option.value
                                );
                                field.onChange(selectedValues);
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">Comp Off Access</label>
                      <div className="">
                        <Controller
                          name="comp_off_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              options={userOptions}
                              isMulti
                              isSearchable={true}
                              placeholder="Search options..."
                              // onChange={handleBranchChange}
                              value={userOptions.filter(
                                (option) =>
                                  field.value &&
                                  field.value.includes(option.value)
                              )}
                              onChange={(selectedOptions) => {
                                const selectedValues = selectedOptions?.map(
                                  (option) => option.value
                                );
                                field.onChange(selectedValues);
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Attendance Reconciliation Accept Access
                      </label>
                      <div className="">
                        <Controller
                          name="attendance_reconciliation_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              options={userOptions}
                              isMulti
                              isSearchable={true}
                              placeholder="Search options..."
                              // onChange={handleBranchChange}
                              value={userOptions.filter(
                                (option) =>
                                  field.value &&
                                  field.value.includes(option.value)
                              )}
                              onChange={(selectedOptions) => {
                                const selectedValues = selectedOptions?.map(
                                  (option) => option.value
                                );
                                field.onChange(selectedValues);
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Outstation Accept Access
                      </label>
                      <div className="">
                        <Controller
                          name="outstation_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              options={userOptions}
                              isMulti
                              isSearchable={true}
                              placeholder="Search options..."
                              // onChange={handleBranchChange}
                              value={userOptions.filter(
                                (option) =>
                                  field.value &&
                                  field.value.includes(option.value)
                              )}
                              onChange={(selectedOptions) => {
                                const selectedValues = selectedOptions?.map(
                                  (option) => option.value
                                );
                                field.onChange(selectedValues);
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="row mb-15">
                      <div className="col-sm-3">
                        <Controller
                          name="location_restriction" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="location_restriction"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="location_restriction"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Location Restriction</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row mb-15">
                      <div className="col-sm-3">
                        <Controller
                          name="active" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="active"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="active"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Active</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row mb-15">
                      <div className="col-sm-3">
                        <Controller
                          name="face_detection" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="face_detection"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="face_detection"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Face Detection</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row mb-4">
                      <div className="col-sm-3">
                        <Controller
                          name="app_access" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="app_access"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="app_access"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>App Access</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-3">
                        <Controller
                          name="website_access" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="website_access"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="website_access"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Website Access</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row mb-4">
                      <div className="col-sm-3">
                        <Controller
                          name="attendance" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="attendance"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="attendance"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Attendance</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row mb-4">
                      <div className="col-sm-3">
                        <Controller
                          name="location" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="location"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="location"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Location</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row mb-4">
                      <div className="col-sm-3">
                        <Controller
                          name="outstation" // Provide a unique name for the field
                          control={control}
                          render={({ field }) => (
                            <div className="onoffswitch">
                              <input
                                type="checkbox"
                                className="onoffswitch-checkbox"
                                {...field}
                                id="outstation"
                                checked={field.value}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                              />
                              <label
                                className="onoffswitch-label"
                                htmlFor="outstation"
                              >
                                <span className="onoffswitch-inner" />
                                <span className="onoffswitch-switch" />
                              </label>
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-sm-9">
                        <h4>Outstation</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  variant="primary"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
