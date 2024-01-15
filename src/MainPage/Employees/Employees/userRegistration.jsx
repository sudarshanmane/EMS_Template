import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";

import { Select, message } from "antd";
import { URLS } from "../../../Globals/URLS";
import {
  getBranchAction,
  getDepartmentAction,
  getDesignationAction,
  getEmploymentTypeAction,
  getUserRolePermissionAction,
  userRegister,
} from "../../../store/Action/Actions";
import { setUserRegistrationId } from "../../../utils/sessionStorage";

const stepSchema = Yup.object().shape({
  first_name: Yup.string().required(" First Name is Required"),
  middle_name: Yup.string().required(" Middle Name is Required"),
  last_name: Yup.string().required(" Last Name is Required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  correspondance_address: Yup.string().required("Address is required"),
  permanent_address: Yup.string().required("Permanent Address is required"),
  mobile_no: Yup.string().required(" Mobile Number is Required"),
  alt_mobile: Yup.string().required(" Alternate Number is required"),
  date_of_birth: Yup.string().required("Birthdate is required"),
  emp_id: Yup.string().required("Employee Id is required"),
  department: Yup.string().required("Select Department"),
  designation: Yup.string().required("Select Designation"),
  employment_type: Yup.string().required("Select Employment Type"),
  user_role_permissions: Yup.array()
    .of(Yup.string())
    .required("Select User Role"),
  branch: Yup.string().required("Select Branch"),
  password: Yup.string().required("Password is required"),
  conf_pass: Yup.string().required("Confirm the Password"),
  profile_image: Yup.mixed()
    .test("fileSize", "Profile Image size is too large", (value) => {
      if (!value) return true; // No file selected, let it pass
      return value.size <= 1024 * 1024 * 2; // 2 MB limit, adjust as needed
    })
    .required("Choose Profile Image"),
  face_match_image1: Yup.mixed()
    .test("fileSize", "Face Match Image size is too large", (value) => {
      if (!value) return true; // No file selected, let it pass
      return value.size <= 1024 * 1024 * 2; // 2 MB limit, adjust as needed
    })
    .required("Choose Face Match Image"),
});

export default function UserRegistration({ nextcall, setUserId }) {
  const getDepartmenturl = URLS.GET_DEPARTMENT_LIST_URL;
  const getDesignationurl = URLS.GET_DESIGNATION_LIST_URL;
  const getBranchurl = URLS.GET_BRANCH_LIST_URL;
  const getEmploymentTypeurl = URLS.GET_EMPLOYMENT_TYPE_LIST_URL;
  const getUserRolePermissionurl = URLS.GET_USERROLE_PERMISSION_URL;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchema),
  });

  const dispatch = useDispatch();
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();
  const added_data = useSelector((state) => state.registerDetails?.newData?.id);

  message.config({
    top: 70,
  });
  
  useEffect(() => {
    fetchPageDetails(getDepartmenturl);
    fetchDepartmentData(getDepartmenturl);

    fetchPageDetails(getDesignationurl);
    fetchDesignationData(getDesignationurl);

    fetchPageDetails(getBranchurl);
    fetchBranchData(getBranchurl);

    fetchPageDetails(getEmploymentTypeurl);
    fetchEmploymentTypeData(getEmploymentTypeurl);

    fetchPageDetails(getUserRolePermissionurl);
    fetchUserRolePermissionData(getUserRolePermissionurl);
  }, []);

  const departmentSelector = useSelector((state) => state.getdepartment);

  function fetchPageDetails(getDepartmenturl) {
    dispatch(getDepartmentAction({ payload: {}, URL: getDepartmenturl }));
  }

  function fetchDepartmentData(getDepartmenturl) {
    dispatch(getDepartmentAction({ payload: {}, URL: getDepartmenturl }));
  }

  const designationSelector = useSelector((state) => state.getdesignation);

  function fetchPageDetails(getDesignationurl) {
    dispatch(getDesignationAction({ payload: {}, URL: getDesignationurl }));
  }

  function fetchDesignationData(getDesignationurl) {
    dispatch(getDesignationAction({ payload: {}, URL: getDesignationurl }));
  }

  const branchSelector = useSelector((state) => state.getbranchlist);
  function fetchPageDetails(getBranchurl) {
    dispatch(getBranchAction({ payload: {}, URL: getBranchurl }));
  }

  function fetchBranchData(getBranchurl) {
    dispatch(getBranchAction({ payload: {}, URL: getBranchurl }));
  }

  const EmploymentTypeSelector = useSelector(
    (state) => state.getemploymenttype
  );

  function fetchPageDetails(getEmploymentTypeurl) {
    dispatch(
      getEmploymentTypeAction({ payload: {}, URL: getEmploymentTypeurl })
    );
  }

  function fetchEmploymentTypeData(getEmploymentTypeurl) {
    dispatch(
      getEmploymentTypeAction({ payload: {}, URL: getEmploymentTypeurl })
    );
  }

  const UserRolePermissionSelector = useSelector(
    (state) => state.getuserrolepermission
  );

  function fetchPageDetails(getUserRolePermissionurl) {
    dispatch(
      getUserRolePermissionAction({
        payload: {},
        URL: getUserRolePermissionurl,
      })
    );
  }

  function fetchUserRolePermissionData(getUserRolePermissionurl) {
    dispatch(
      getUserRolePermissionAction({
        payload: {},
        URL: getUserRolePermissionurl,
      })
    );
  }

  const userOptions =
    UserRolePermissionSelector?.map((user) => ({
      value: user.id,
      label: user.user_role,
    })) || [];

  const countryCodes = [
    { label: "+91 (India)", value: "+91" },
    { label: "+1 (United States)", value: "+1" },
    { label: "+1 264 (Anguilla)", value: "+1264" },
    { label: "+1 268 (Antigua and Barbuda)", value: "+1268" },
    { label: "+1 242 (Bahamas)", value: "+1242" },
    { label: "+1 246 (Barbados)", value: "+1246" },
    { label: "+1 264 (Bermuda)", value: "+1441" },
    { label: "+1 284 (British Virgin Islands)", value: "+1284" },
    { label: "+1 345 (Cayman Islands)", value: "+1345" },
    { label: "+1 767 (Dominica)", value: "+1767" },
    { label: "+1 809 (Dominican Republic)", value: "+1809" },
    { label: "+1 829 (Dominican Republic)", value: "+1829" },
    { label: "+1 849 (Dominican Republic)", value: "+1849" },
    { label: "+1 473 (Grenada)", value: "+1473" },
    { label: "+1 876 (Jamaica)", value: "+1876" },
    { label: "+1 664 (Montserrat)", value: "+1664" },
    { label: "+1 869 (Saint Kitts and Nevis)", value: "+1869" },
    { label: "+1 758 (Saint Lucia)", value: "+1758" },
    { label: "+1 784 (Saint Vincent and the Grenadines)", value: "+1784" },
    { label: "+1 869 (Saint Martin)", value: "+590" },
    { label: "+1 721 (Sint Maarten)", value: "+599" },
    { label: "+1 868 (Trinidad and Tobago)", value: "+1868" },
    { label: "+1 649 (Turks and Caicos Islands)", value: "+1649" },
    { label: "+1 340 (U.S. Virgin Islands)", value: "+1340" },
    { label: "+7 (Russia)", value: "+7" },
    { label: "+20 (Egypt)", value: "+20" },
    { label: "+27 (South Africa)", value: "+27" },
    { label: "+30 (Greece)", value: "+30" },
    { label: "+31 (Netherlands)", value: "+31" },
    { label: "+32 (Belgium)", value: "+32" },
    { label: "+33 (France)", value: "+33" },
    { label: "+34 (Spain)", value: "+34" },
    { label: "+36 (Hungary)", value: "+36" },
    { label: "+39 (Italy)", value: "+39" },
    { label: "+40 (Romania)", value: "+40" },
    { label: "+41 (Switzerland)", value: "+41" },
    { label: "+43 (Austria)", value: "+43" },
    { label: "+44 (United Kingdom)", value: "+44" },
    { label: "+45 (Denmark)", value: "+45" },
    { label: "+46 (Sweden)", value: "+46" },
    { label: "+47 (Norway)", value: "+47" },
    { label: "+48 (Poland)", value: "+48" },
    { label: "+49 (Germany)", value: "+49" },
    { label: "+51 (Peru)", value: "+51" },
    { label: "+52 (Mexico)", value: "+52" },
    { label: "+53 (Cuba)", value: "+53" },
    { label: "+54 (Argentina)", value: "+54" },
    { label: "+55 (Brazil)", value: "+55" },
    { label: "+56 (Chile)", value: "+56" },
    { label: "+57 (Colombia)", value: "+57" },
    { label: "+58 (Venezuela)", value: "+58" },
    { label: "+60 (Malaysia)", value: "+60" },
    { label: "+61 (Australia)", value: "+61" },
    { label: "+62 (Indonesia)", value: "+62" },
    { label: "+63 (Philippines)", value: "+63" },
    { label: "+64 (New Zealand)", value: "+64" },
    { label: "+65 (Singapore)", value: "+65" },
    { label: "+66 (Thailand)", value: "+66" },
    { label: "+81 (Japan)", value: "+81" },
    { label: "+82 (South Korea)", value: "+82" },
    { label: "+84 (Vietnam)", value: "+84" },
    { label: "+86 (China)", value: "+86" },
    { label: "+90 (Turkey)", value: "+90" },
    { label: "+92 (Pakistan)", value: "+92" },
    { label: "+93 (Afghanistan)", value: "+93" },
    { label: "+94 (Sri Lanka)", value: "+94" },
    { label: "+95 (Myanmar)", value: "+95" },
    { label: "+98 (Iran)", value: "+98" },
    { label: "+212 (Morocco)", value: "+212" },
    { label: "+213 (Algeria)", value: "+213" },
    { label: "+216 (Tunisia)", value: "+216" },
    { label: "+218 (Libya)", value: "+218" },
    { label: "+220 (Gambia)", value: "+220" },
    { label: "+221 (Senegal)", value: "+221" },
    { label: "+222 (Mauritania)", value: "+222" },
    { label: "+223 (Mali)", value: "+223" },
    { label: "+224 (Guinea)", value: "+224" },
    { label: "+225 (Ivory Coast)", value: "+225" },
    { label: "+226 (Burkina Faso)", value: "+226" },
    { label: "+227 (Niger)", value: "+227" },
    { label: "+228 (Togo)", value: "+228" },
    { label: "+229 (Benin)", value: "+229" },
    { label: "+230 (Mauritius)", value: "+230" },
    { label: "+231 (Liberia)", value: "+231" },
    { label: "+232 (Sierra Leone)", value: "+232" },
    { label: "+233 (Ghana)", value: "+233" },
    { label: "+234 (Nigeria)", value: "+234" },
    { label: "+235 (Chad)", value: "+235" },
  ];

  const userRegisterSelector = useSelector((state) => state.registerDetails);

  useEffect(() => {
    if (userRegisterSelector) {
      setUserRegistrationId({
        id: userRegisterSelector.id,
        email: userRegisterSelector.email,
      });
    }
  }, [userRegisterSelector]);

  const onSubmit = (data) => {
    const formattedDate = format(new Date(data?.date_of_birth), "yyyy-MM-dd");
    let formData = new FormData();
    if (data?.user_role_permissions?.length > 1) {
      data?.user_role_permissions.forEach((element) => {
        formData.append("user_role_permissions", element);
      });
    } else {
      formData.append("user_role_permissions", data.user_role_permissions);
    }
    formData.append("first_name", data.first_name);
    formData.append("middle_name", data.middle_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("correspondance_address", data.correspondance_address);
    formData.append("permanent_address", data.permanent_address);
    formData.append("country_code", data.country_code);
    formData.append("mobile_no", data.mobile_no);
    formData.append("alt_countryCode", data.alt_countryCode);
    formData.append("alt_mobile", data.alt_mobile);
    formData.append("date_of_birth", formattedDate);
    formData.append("emp_id", data.emp_id);
    formData.append("department", data.department);
    formData.append("designation", data.designation);
    formData.append("employment_type", data.employment_type);
    formData.append("branch", data.branch);
    formData.append("password", data.password);
    formData.append("conf_pass", data.conf_pass);
    formData.append("profile_image", file);
    formData.append("face_match_image1", file2);
    dispatch(userRegister(formData));
    setRegistrationSuccessful(true);
  };

  const imageFormDataConverter = (e) => {
    setFile(e.target.files[0]);
  };
  const imageFormDataConverter2 = (e) => {
    setFile2(e.target.files[0]);
  };

  useEffect(() => {
    if (added_data) {
      setUserId(added_data);
      nextcall();
    }
  }, [added_data]);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">User Registration</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="first_name">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("first_name")}
                        />
                        <div className="text-danger">
                          {errors.first_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="middle_name">
                        Middle Name <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("middle_name")}
                        />
                        <div className="text-danger">
                          {errors.middle_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="last_name">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("last_name")}
                        />
                        <div className="text-danger">
                          {errors.last_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="email">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("email")}
                        />
                        <div className="text-danger">
                          {errors.email?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block ">
                      <label
                        className="col-form-label "
                        id="correspondance_address"
                      >
                        Address <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("correspondance_address")}
                        />
                        <div className="text-danger">
                          {errors.correspondance_address?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block row">
                      <label className="col-form-label " id="permanent_address">
                        Permanent Address <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("permanent_address")}
                        />
                        <div className="text-danger">
                          {errors.permanent_address?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label " id="mobile_no">
                        Mobile No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-3">
                        <select
                          className="form-control"
                          {...register("country_code")}
                        >
                          {countryCodes?.map((dep) => {
                            return (
                              <option value={dep.value}>{dep.label}</option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("mobile_no")}
                        />
                        <div className="text-danger">
                          {errors.mobile_no?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label " id="alt_mobile">
                        Alternative Mobile No
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-3">
                        <select
                          className="form-control"
                          {...register("alt_countryCode")}
                        >
                          {countryCodes?.map((dep) => {
                            return (
                              <option value={dep.value}>{dep.label}</option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("alt_mobile")}
                        />
                        <div className="text-danger">
                          {errors.alt_mobile?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="date_of_birth">
                        Birthdate <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          control={control}
                          name="date_of_birth"
                          render={({ field }) => (
                            <div className="date-picker-container">
                              <span
                                className="calendar-icon"
                                onClick={() =>
                                  console.log("Calendar icon clicked")
                                }
                              >
                                <i className="fa-regular fa-calendar"></i>
                              </span>
                              <DatePicker
                                selected={
                                  field.value ? new Date(field.value) : null
                                }
                                onChange={(date) => field.onChange(date)}
                                className="form-control datetimepicker"
                                dateFormat="dd-MM-yyyy"
                                placeholderText="dd-mm-yyyy"
                              />
                            </div>
                          )}
                        />

                        <div className="text-danger">
                          {errors.date_of_birth?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="emp_id">
                        Employee Id <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="text"
                          className="form-control"
                          {...register("emp_id")}
                        />
                        <div className="text-danger">
                          {errors.emp_id?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="department">
                        Department <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <select
                          className="form-control"
                          {...register("department")}
                        >
                          <option value="">Select Department</option>
                          {departmentSelector?.map((data) => {
                            return (
                              <option value={data.id}>{data.department}</option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.department?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="designation">
                        Desingation <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <select
                          className="form-control"
                          {...register("designation")}
                        >
                          <option value="">Select Desingation</option>
                          {designationSelector?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.designation}
                              </option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.designation?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label" id="employment_type">
                        Employment Type <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <select
                          className="form-control"
                          {...register("employment_type")}
                        >
                          <option value="">Select Employment Type</option>
                          {EmploymentTypeSelector?.map((data) => {
                            return (
                              <option value={data.id}>
                                {data.employment_type}
                              </option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.employment_type?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label
                        className="col-form-label"
                        id="user_role_permissions"
                      >
                        User Role Permission{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <Controller
                          name="user_role_permissions"
                          control={control}
                          render={({ field }) => (
                            <>
                              <Select
                                id="dropdown"
                                className="d-block h-42"
                                options={userOptions}
                                mode="multiple"
                                placeholder="Search options..."
                                {...field}
                              />
                              <div className="text-danger">
                                {errors.user_role_permissions?.message}
                              </div>
                            </>
                          )}
                        />

                        <div className="text-danger">
                          {errors.user_role_permissions?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="branch">
                        Branch <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <select
                          className="form-control"
                          {...register("branch")}
                        >
                          <option value="">Select Branch</option>
                          {branchSelector &&
                            branchSelector.map((data) => {
                              return (
                                <option value={data.id}>
                                  {data.branch_name}
                                </option>
                              );
                            })}
                        </select>
                        <div className="text-danger">
                          {errors.branch?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label" id="password">
                        Password <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="password"
                          className="form-control"
                          {...register("password")}
                        />{" "}
                        <div className="text-danger">
                          {errors.password?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="conf_pass">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <div className="">
                        <input
                          type="password"
                          className="form-control"
                          {...register("conf_pass")}
                        />
                        <div className="text-danger">
                          {errors.conf_pass?.message}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="profile_image">
                        Profile Image <span className="text-danger">*</span>
                      </label>

                      <div className="">
                        <Controller
                          name="profile_image"
                          control={control}
                          rules={{
                            validate: (value) =>
                              Yup.mixed()
                                .test(
                                  "fileSize",
                                  "Profile Image size is too large",
                                  (v) => v?.size <= 1024 * 1024 * 2
                                )
                                .required("Choose Profile Image")
                                .isValidSync(value),
                          }}
                          render={({ field }) => (
                            <>
                              <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                  field.onChange(e.target.files[0]);
                                  imageFormDataConverter(e);
                                }}
                              />
                              <div className="text-danger">
                                {errors.profile_image?.message}
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block ">
                      <label className="col-form-label " id="face_match_image1">
                        Face Match Image <span className="text-danger">*</span>
                      </label>

                      <div className="">
                        <Controller
                          name="face_match_image1"
                          control={control}
                          rules={{
                            validate: (value) =>
                              Yup.mixed()
                                .test(
                                  "fileSize",
                                  "Face Match Image size is too large",
                                  (v) => v?.size <= 1024 * 1024 * 2
                                )
                                .required("Choose Face Match Image")
                                .isValidSync(value),
                          }}
                          render={({ field }) => (
                            <>
                              <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                  field.onChange(e.target.files[0]);
                                  imageFormDataConverter2(e);
                                }}
                              />
                              <div className="text-danger">
                                {errors.face_match_image1?.message}
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <Button
                  style={{ float: "right" }}
                  variant="primary"
                  type="submit"
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
