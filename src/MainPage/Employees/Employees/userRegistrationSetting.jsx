import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";
import { Select } from "antd";
import { Controller, useForm } from "react-hook-form";
import { URLS } from "../../../Globals/URLS";
import {
  addUserSettingAction,
  getAllDropdownAction,
  getShiftPolicyAction,
  getWeekOffAction,
} from "../../../store/Action/Actions";

const stepSchema = Yup.object().shape({
  // shift_policy: Yup.string().required("Shift policy is Required"),
  // weekly_off: Yup.string().required(" Weekly off is Required"),
});

export default function UserRegistrationSetting({ nextcall, userId }) {
  const id = userId;
  const getShiftPolicyurl = URLS.GET_SHIFT_POLICY_URL;
  const getWeekOffurl = URLS.GET_WEEK_OFF_URL;
  const getAllDropdownurl = URLS.GET_ALL_DROPDOWN_URL;

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

  const dispatch = useDispatch();

  const shiftPolicySelector = useSelector((state) => state.shiftpolicy);
  console.log("shiftPolicySelector",shiftPolicySelector)
  function fetchPageDetails(getShiftPolicyurl) {
    dispatch(getShiftPolicyAction({ payload: {}, URL: getShiftPolicyurl }));
  }

  useEffect(() => {
    fetchPageDetails(getShiftPolicyurl);
  }, []);

  function fetchShiftPolicyData(getShiftPolicyurl) {
    dispatch(getShiftPolicyAction({ payload: {}, URL: getShiftPolicyurl }));
  }

  useEffect(() => {
    fetchShiftPolicyData(getShiftPolicyurl);
  }, []);

  const weekOffSelector = useSelector((state) => state.weekoff);
  console.log("weekOffSelector",weekOffSelector)

  function fetchPageDetails(getWeekOffurl) {
    dispatch(getWeekOffAction({ payload: {}, URL: getWeekOffurl }));
  }

  useEffect(() => {
    fetchPageDetails(getWeekOffurl);
  }, []);

  function fetchWeekOffData(getWeekOffurl) {
    dispatch(getWeekOffAction({ payload: {}, URL: getWeekOffurl }));
  }

  useEffect(() => {
    fetchWeekOffData(getWeekOffurl);
  }, []);

  const allDropdownSelector = useSelector((state) => state.getalldropdown);
  function fetchPageDetails(getAllDropdownurl) {
    dispatch(getAllDropdownAction({ payload: {}, URL: getAllDropdownurl }));
  }

  useEffect(() => {
    fetchPageDetails(getAllDropdownurl);
  }, []);

  function fetchAllDropdownData(getAllDropdownurl) {
    dispatch(getAllDropdownAction({ payload: {}, URL: getAllDropdownurl }));
  }

  useEffect(() => {
    fetchAllDropdownData(getAllDropdownurl);
  }, []);

  const addSettingSelector = useSelector((state) => state.addusersetting);

  const onSubmit = (data) => {
    console.log("submit data", data);

    const leaveAcceptAccessValues = data?.leave_accept_access?.map(
      (option) => option
    );
    const compOffAccessValues = data?.comp_off_access?.map((option) => option);
    const attendanceReconciliationValues =
      data?.attendance_reconciliation_accept_access?.map((option) => option);
    const outstationAcceptAccessValues = data?.outstation_accept_access?.map(
      (option) => option
    );

    setValue("leave_accept_access", leaveAcceptAccessValues);
    setValue("comp_off_access", compOffAccessValues);
    setValue(
      "attendance_reconciliation_accept_access",
      attendanceReconciliationValues
    );
    setValue("outstation_accept_access", outstationAcceptAccessValues);
    setValue("user_id", userId);

    dispatch(addUserSettingAction(data));
  };

  const userOptions =
    allDropdownSelector?.data?.map((user) => ({
      value: user.id,
      label: user.full_name,
    })) || [];

  const setting_info = useSelector((state) => state.settinginfo?.newData?.id);

  useEffect(() => {
    if (setting_info) {
      nextcall();
    }
  }, [setting_info]);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Settings</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row my-4">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Shift Policy{" "}
                         <span className="text-danger">*</span>
                      </label>

                      <div className="col-md-9">
                        <select
                          className="form-control"
                          {...register("shift_policy")}
                        >
                          <option value="">Select Shift Policy</option>
                          {shiftPolicySelector?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.shift_policy}
                              </option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.shiftPolicy?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Week Off <span className="text-danger">*</span>
                      </label>

                      <div className="col-md-9">
                        <select
                          className="form-control"
                          {...register("weekly_off")}
                        >
                          <option value="">Select Week Off</option>
                          {weekOffSelector?.map((data) => {
                            return (
                              <option value={data.id}>{data.weekly_off}</option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.weeklyOff?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Leave Accept Access
                      </label>
                      <div className="col-md-9">
                        <Controller
                          name="leave_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              className="d-block h-42"
                              options={userOptions}
                              mode="multiple"
                              isSearchable={true}
                              placeholder="Search options..."
                              value={field.value}
                              onChange={(value) => {
                                console.log("Leave value", value);
                                field.onChange(value);
                              }}
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.leave_accept_access?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Comp Off Access
                      </label>
                      <div className="col-md-9">
                        <Controller
                          name="comp_off_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              className="d-block h-42"
                              options={userOptions}
                              mode="multiple"
                              isSearchable={true}
                              placeholder="Search options..."
                              value={field.value}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.comp_off_access?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Attendance Reconciliation Accept Access
                      </label>
                      <div className="col-md-9">
                        <Controller
                          name="attendance_reconciliation_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              className="d-block h-42"
                              options={userOptions}
                              mode="multiple"
                              isSearchable={true}
                              placeholder="Search options..."
                              value={field.value}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          )}
                        />
                        <div className="text-danger">
                          {
                            errors.attendance_reconciliation_accept_access
                              ?.message
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        outstation_accept_access
                      </label>
                      <div className="col-md-9">
                        <Controller
                          name="outstation_accept_access"
                          control={control}
                          render={({ field }) => (
                            <Select
                              id="dropdown"
                              className="d-block h-42"
                              options={userOptions}
                              mode="multiple"
                              isSearchable={true}
                              placeholder="Search options..."
                              value={field.value}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.outstation_accept_access?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Controller
                      name="location_restriction" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="location_restriction"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Location Restriction</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="active" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="active"
                            defaultChecked
                            {...field}
                          />
                          <label className="onoffswitch-label" htmlFor="active">
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Active</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="face_detection" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="face_detection"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Face Detection</h4>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Controller
                      name="app_access" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="app_access"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>App Access</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="emp_id_verify" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="emp_id_verify"
                            defaultChecked
                            {...field}
                          />
                          <label
                            className="onoffswitch-label"
                            htmlFor="emp_id_verify"
                          >
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Emp Id Verify</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="chatting" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="chatting"
                            defaultChecked
                            {...field}
                          />
                          <label
                            className="onoffswitch-label"
                            htmlFor="chatting"
                          >
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Chatting</h4>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Controller
                      name="website_access" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="website_access"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Website Access</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="attendance" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="attendance"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Attendance</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="biometric_access" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="biometric_access"
                            defaultChecked
                            {...field}
                          />
                          <label
                            className="onoffswitch-label"
                            htmlFor="biometric_access"
                          >
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Biometric Access</h4>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Controller
                      name="location" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="location"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Location</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="is_hr_verify" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="is_hr_verify"
                            defaultChecked
                            {...field}
                          />
                          <label
                            className="onoffswitch-label"
                            htmlFor="is_hr_verify"
                          >
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Is Hr Verify</h4>
                  </div>

                  <div className="col-sm-2">
                    <Controller
                      name="hr_rejection" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="hr_rejection"
                            defaultChecked
                            {...field}
                          />
                          <label
                            className="onoffswitch-label"
                            htmlFor="hr_rejection"
                          >
                            <span className="onoffswitch-inner" />
                            <span className="onoffswitch-switch" />
                          </label>
                        </div>
                      )}
                    />
                  </div>
                  <div className="col-sm-2">
                    <h4>Hr Rejection</h4>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-sm-2">
                    <Controller
                      name="outstation" // Provide a unique name for the field
                      control={control}
                      defaultValue={true} // Set the default value
                      render={({ field }) => (
                        <div className="onoffswitch">
                          <input
                            type="checkbox"
                            className="onoffswitch-checkbox"
                            id="outstation"
                            defaultChecked
                            {...field}
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
                  <div className="col-sm-2">
                    <h4>Outstation</h4>
                  </div>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
