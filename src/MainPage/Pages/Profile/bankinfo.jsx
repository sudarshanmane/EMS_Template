import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";
import {
  addPersonalInformationAction,
  getPersonalInfoAction,
  updatePersonalInfoAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

const stepSchema = Yup.object().shape({});

export default function BankInfo({ userId }) {
  const { register, handleSubmit, setValue } = useForm();

  const {
    register: pRegister,
    handleSubmit: phandleSubmit,
    control: pcontrol,
    formState: { errors },
    reset: pReset,
  } = useForm({
    resolver: yupResolver(stepSchema),
    // mode: "all",
  });

  const dispatch = useDispatch();

  const url = URLS.GET_PERSONAL_INFORMATION_URL;
  const personal_info = useSelector(
    (state) => state.getpersonalinfo?.data?.[0]
  );
  const update_personal_info = useSelector((state) => state.updatepersonalinfo);
  const add_personal_info = useSelector(
    (state) => state.addpersonalinformation
  );
  const userRoles = useSelector((state) => state.getcurrentrole);

  // Edit Bank Info
  const handleEdit = (record) => {
    setValue("id", record.id);
    setValue("bank_name", record.bank_name);
    setValue("bank_branch_name", record.bank_branch_name);
    setValue("bank_account_no", record.bank_account_no);
    setValue("ifsc_code", record.ifsc_code);
    setValue("pan_card", record.pan_card);
    setValue("aadhar_card", record.aadhar_card);
  };

  // Handle add Bank Info
  const handleAdd = () => {
    pReset();
  };

  //submit the data
  const onSubmit = (data) => {
    dispatch(updatePersonalInfoAction({ id: data.id, payload: data }));
  };

  const bankInfoSubmit = (data) => {
    const formDataWithUserId = {
      ...data,
      user_id: userId,
    };
    dispatch(addPersonalInformationAction(formDataWithUserId));
  };

  function getPageDetails(url) {
    dispatch(getPersonalInfoAction({ payload: { userId }, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  useEffect(() => {
    if (update_personal_info) {
      dispatch(getPersonalInfoAction({ payload: { userId }, URL: url }));
    }
  }, [update_personal_info]);

  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Bank information{" "}
              <Link
                className="edit-icon"
                data-bs-target={
                  personal_info?.id ? "#bank_info_modal" : "#add_bank_modal"
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
                <div className="title">Bank name</div>
                <div className="text">{personal_info?.bank_name}</div>
              </li>
              <li>
                <div className="title">Bank Branch name</div>
                <div className="text">{personal_info?.bank_branch_name}</div>
              </li>
              <li>
                <div className="title">Bank account No.</div>
                <div className="text">{personal_info?.bank_account_no}</div>
              </li>
              <li>
                <div className="title">IFSC Code</div>
                <div className="text">{personal_info?.ifsc_code}</div>
              </li>
              <li>
                <div className="title">PAN No</div>
                <div className="text">{personal_info?.pan_card}</div>
              </li>
              <li>
                <div className="title">Aadhar Card No</div>
                <div className="text">{personal_info?.aadhar_card}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="bank_info_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Bank Information</h5>
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
                      <label>Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("bank_name")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Bank Branch Name</label>
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          {...register("bank_branch_name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Bank Account No.</label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("bank_account_no")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>IFSC Code</label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("ifsc_code")}
                        maxLength={11}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>PAN No</label>
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          {...register("pan_card")}
                          maxLength={10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block">
                      <label>Aadhar Card No</label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("aadhar_card")}
                      />
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
        id="add_bank_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Bank Information</h5>
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
                onSubmit={phandleSubmit(bankInfoSubmit)}
                encType="multipart/form-data"
              >
                <div className="card-header">
                  <h4 className="card-title mb-0">Bank Information</h4>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Bank Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("bank_name")}
                        />
                        <div className="text-danger">
                          {errors.bank_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Account No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...pRegister("bank_account_no")}
                        />
                        <div className="text-danger">
                          {errors.bank_account_no?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Bank Branch Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("bank_branch_name")}
                        />
                        <div className="text-danger">
                          {errors.bank_branch_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        IFSC Code <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("ifsc_code")}
                          maxLength={11}
                        />
                        <div className="text-danger">
                          {errors.ifsc_code?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Salary <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...pRegister("salary")}
                        />
                        <div className="text-danger">
                          {errors.salary?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-header">
                  <h4 className="card-title mb-0">Identity Information</h4>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Aadhar Card No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          className="form-control"
                          {...pRegister("aadhar_card")}
                        />
                        <div className="text-danger">
                          {errors.aadhar_card?.message}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-sm-9">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Pan Card No <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...pRegister("pan_card")}
                          maxLength={10}
                        />
                        <div className="text-danger">
                          {errors.pan_card?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    // data-bs-dismiss={closemodel ? "modal" : null}
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
