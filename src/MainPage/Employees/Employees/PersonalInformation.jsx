import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";
import { addPersonalInformationAction } from "../../../store/Action/Actions";
import { getUserRegistrationId } from "../../../utils/sessionStorage";

const stepSchema = Yup.object().shape({
  gender: Yup.string().required("Gender is required"),
  marital_status: Yup.string().required("Marital Status is required"),
  father_name: Yup.string().required(" Father Name is Required"),
  mother_name: Yup.string().required(" Mother Name is Required"),
  spouse_name: Yup.string().required("Spouse Name is Required"),
  joining_date: Yup.string().required("Joining Date is Required"),
  emergency_contact_relation: Yup.string().required(
    "Emergency Contact Relation is required"
  ),
  emergency_person_number: Yup.string().required(
    "Emergency Person Number is required"
  ),
  blood_group: Yup.string().required("Select Blood Group"),
  identification_mark: Yup.string().required(
    " Identification Mark is required"
  ),
  aadhar_card: Yup.string().required("Aadhar Number is required"),
  pan_card: Yup.string().required("Pancard Number is required"),
  bank_name: Yup.string().required("Bank Name is required"),
  bank_account_no: Yup.string().required("Bank Account Number is required"),
  bank_branch_name: Yup.string().required("Bank Branch Name is required"),
  ifsc_code: Yup.string().required("Bank IFSC Code is required"),
  salary: Yup.string().required("Salary is required"),
});

export default function PersonalInformation({ nextcall, userId }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchema),
  });

  const dispatch = useDispatch();
  let newUserId = getUserRegistrationId().id;

  console.log("newUserIdnewUserIdnewUserId", newUserId);

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

  const addPersonalInformationSelector = useSelector(
    (state) => state.addpersonalinformation
  );
  const per_info = useSelector((state) => state.personalinfo?.newData?.id);
  const onSubmit = (data) => {
    const formDataWithUserId = {
      ...data,
      user_id: newUserId,
    };
    dispatch(addPersonalInformationAction(formDataWithUserId));
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (per_info) {
      nextcall();
    }
  }, [per_info]);

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Personal Information</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
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
                          {...register("gender")}
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
                          {...register("marital_status")}
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
                          {...register("father_name")}
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
                          {...register("mother_name")}
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
                          {...register("spouse_name")}
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
                          control={control}
                          name="joining_date"
                          render={({ field }) => (
                            <div className="date-picker-container">
                              <span
                                className="calendar-icon"
                                onClick={() =>
                                  console.log("Calendar icon clicked")
                                }
                              >
                                <i class="fa-regular fa-calendar"></i>
                              </span>
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
                            </div>
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
                        Emergency Contact Relation{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("emergency_contact_relation")}
                        />
                        <div className="text-danger">
                          {errors.emergency_contact_relation?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Emergency Person Contact{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("emergency_person_number")}
                        />
                        <div className="text-danger">
                          {errors.emergency_person_number?.message}
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
                          {...register("blood_group")}
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
                          {...register("identification_mark")}
                        />
                        <div className="text-danger">
                          {errors.identification_mark?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-header">
                  <h4 className="card-title mb-0">Identity Information</h4>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Aadhar Card No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...register("aadhar_card")}
                        />
                        <div className="text-danger">
                          {errors.aadhar_card?.message}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Pan Card No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("pan_card")}
                        />
                        <div className="text-danger">
                          {errors.pan_card?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-header">
                  <h4 className="card-title mb-0">Bank Information</h4>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Bank Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("bank_name")}
                        />
                        <div className="text-danger">
                          {errors.bank_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Account No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...register("bank_account_no")}
                        />
                        <div className="text-danger">
                          {errors.bank_account_no?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Bank Branch Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("bank_branch_name")}
                        />
                        <div className="text-danger">
                          {errors.bank_branch_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        IFSC Code <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("ifsc_code")}
                        />
                        <div className="text-danger">
                          {errors.ifsc_code?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Salary <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...register("salary")}
                        />
                        <div className="text-danger">
                          {errors.salary?.message}
                        </div>
                      </div>
                    </div>
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
