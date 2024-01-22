import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import {
  addPersonalInformationAction,
  getPersonalInfoAction,
  updatePersonalInfoAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

export default function PersonalInfo({ userId }) {
  const { register, handleSubmit, setValue, control, reset } = useForm();

  const {
    register: pRegister,
    handleSubmit: phandleSubmit,
    control: pcontrol,
    formState: { errors },
    reset: pReset,
  } = useForm({});

  const dispatch = useDispatch();
  const url = URLS.GET_PERSONAL_INFORMATION_URL;
  const personal_info = useSelector((state) => state.getpersonalinfo?.data?.[0]);
  const update_personal_info = useSelector((state) => state.updatepersonalinfo);
  const add_personal_info = useSelector(
    (state) => state.addpersonalinformation
  );
  const userRoles = useSelector((state) => state.getcurrentrole);

  //Array of BloodGroup
  const options = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  //Array of GenderList
  const GenderList = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  //Array of MaritalStatusList
  const MaritalStatusList = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
  ];

  // Edit Peesonal Info
  const handleEdit = (record) => {
    setValue("id", record.id);
    setValue("marital_status", record.marital_status);
    setValue("spouse_name", record.spouse_name);
    setValue("mother_name", record.mother_name);
    setValue("father_name", record.father_name);
    setValue("gender", record.gender);
    setValue("joining_date", record.joining_date);
    setValue("last_date", record.last_date);
    setValue("identification_mark", record.identification_mark);
    setValue("blood_group", record.blood_group);
  };

  // Handle add Peesonal Info
  const handleAdd = () => {
    pReset();
  };

  //submit the data
  const onSubmit = (data) => {
    dispatch(updatePersonalInfoAction({ id: data.id, payload: data }));
  };

  const perInfoSubmit = (data) => {
    const formDataWithUserId = {
      ...data,
      user_id: userId,
    };
    dispatch(addPersonalInformationAction(formDataWithUserId));
  };


  
  function getPageDetails(url) {
    dispatch(getPersonalInfoAction({ payload: {userId}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);


  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        {" "}
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Personal Information{" "}
              <Link
                className="edit-icon"
                data-bs-target={
                  personal_info?.id
                    ? "#personal_info_modal"
                    : "#personal_info_add_modal"
                }
                data-bs-toggle="modal"
                onClick={() =>
                  personal_info?.id ? handleEdit(personal_info) : handleAdd()
                }
              >
                {personal_info?.id ? (
                  userRoles?.data?.users?.user_personal_information?.includes(
                    "Edit"
                  ) ? (
                    <i className="fa fa-pencil" />
                  ) : null
                ) : userRoles?.data?.users?.user_personal_information?.includes(
                    "Create"
                  ) ? (
                  <i className="fa fa-plus" />
                ) : null}
              </Link>
            </h3>
            <ul className="personal-info">
              <li>
                <div className="title">Marital status</div>
                <div className="text">
                  {personal_info?.marital_status &&
                    (personal_info?.marital_status || "NA")}
                </div>
              </li>
              <li>
                <div className="title">Spouse Name</div>
                <div className="text">{personal_info?.spouse_name}</div>
              </li>
              <li>
                <div className="title">Mother Name</div>
                <div className="text">{personal_info?.mother_name}</div>
              </li>
              <li>
                <div className="title">Father Name</div>
                <div className="text">{personal_info?.father_name}</div>
              </li>
              <li>
                <div className="title">Gender</div>
                <div className="text">{personal_info?.gender}</div>
              </li>
              <li>
                <div className="title">Joining Date</div>
                <div className="text">
                  {personal_info?.joining_date
                    ? moment(personal_info?.joining_date).format("YYYY-MM-DD")
                    : null}
                </div>
              </li>
              <li>
                <div className="title">Last Date</div>
                {personal_info?.last_date
                  ? moment(personal_info?.last_date).format("YYYY-MM-DD")
                  : null}{" "}
              </li>
              <li>
                <div className="title">Identification Mark</div>
                <div className="text">{personal_info?.identification_mark}</div>
              </li>
              <li>
                <div className="title">Blood Group</div>
                <div className="text">{personal_info?.blood_group}</div>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <div
        id="personal_info_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Personal Information</h5>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Marital Status</label>

                      <select
                        className="form-control"
                        {...register("marital_status")}
                      >
                        <option value="">Select Marital Status </option>
                        {MaritalStatusList?.map((data) => {
                          return (
                            <option value={data.value}>{data.label}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Spouse Name</label>
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          {...register("spouse_name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Mother Name</label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("mother_name")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>
                        Father Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("father_name")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Gender</label>
                      <div>
                        <select
                          className="form-control"
                          {...register("gender")}
                        >
                          <option value={""}>Select Gender </option>
                          {GenderList?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Joining Date</label>

                      <Controller
                        control={control}
                        name="joining_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) =>
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              )
                            }
                            className="form-control datetimepicker"
                            dateFormat="yyyy-MM-dd"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Last Date</label>

                      <Controller
                        control={control}
                        name="last_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) =>
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : ""
                              )
                            }
                            className="form-control datetimepicker"
                            dateFormat="yyyy-MM-dd"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Identification Mark </label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("identification_mark")}
                      />{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Blood Group </label>
                      <select
                        className="form-control"
                        {...register("blood_group")}
                      >
                        <option value="">Select Blood Group </option>
                        {options?.map((data) => {
                          return (
                            <option value={data.value}>{data.label}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="close btn btn-primary submit-btn"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="personal_info_add_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
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
              <form
                onSubmit={phandleSubmit(perInfoSubmit)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          {...pRegister("gender")}
                        >
                          <option value={""}>Select Gender </option>
                          {GenderList?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.gender?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Marital Status <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          {...pRegister("marital_status")}
                        >
                          <option value={""}>Select Marital Status </option>
                          {MaritalStatusList?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.marital_status?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Father Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("father_name")}
                        />
                        <div className="text-danger">
                          {errors.father_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Mother Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("mother_name")}
                        />
                        <div className="text-danger">
                          {errors.mother_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Spouse Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("spouse_name")}
                        />
                        <div className="text-danger">
                          {errors.spouse_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Joining Date <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <Controller
                          control={pcontrol}
                          name="joining_date"
                          render={({ field }) => (
                            <DatePicker
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={(date) =>
                                field.onChange(
                                  date ? format(date, "yyyy-MM-dd") : ""
                                )
                              }
                              className="form-control datetimepicker"
                              dateFormat="yyyy-MM-dd"
                            />
                          )}
                        />
                        <div className="text-danger">
                          {errors.joining_date?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Blood Group <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          {...pRegister("blood_group")}
                        >
                          <option value={""}>Select Blood Group </option>
                          {options?.map((data) => {
                            return (
                              <option value={data.value}>{data.label}</option>
                            );
                          })}
                        </select>
                        <div className="text-danger">
                          {errors.blood_group?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Identification Mark{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("identification_mark")}
                        />
                        <div className="text-danger">
                          {errors.identification_mark?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="close btn btn-primary submit-btn"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
