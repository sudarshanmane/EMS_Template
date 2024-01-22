import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addPersonalInformationAction,
  getPersonalInfoAction,
  updatePersonalInfoAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

export default function EmergencyContact({ userId }) {
  const { register, handleSubmit, setValue } = useForm();

  const {
    register: pRegister,
    handleSubmit: phandleSubmit,
    control: pcontrol,
    formState: { errors },
    reset: pReset,
  } = useForm({});

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

  const handleEdit = (record) => {
    setValue("id", record.id);
    setValue("emergency_contact_relation", record.emergency_contact_relation);
    setValue("emergency_person_number", record.emergency_person_number);
  };

  const handleAdd = () => {
    pReset();
  };

  const onSubmit = (data) => {
    dispatch(updatePersonalInfoAction({ id: data.id, payload: data }));
  };

  const ponSubmit = (data) => {
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

  // useEffect(() => {
  //   if (update_personal_info) {
  //     dispatch(getPersonalInfoAction({ payload: { userId }, URL: url }));
  //   }
  // }, [update_personal_info]);

  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Emergency Contact{" "}
              <Link
                className="edit-icon"
                data-bs-target={
                  personal_info?.id
                    ? "#emergency_contact_modal"
                    : "#add_emergency_contact_modal"
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
            {/* <h5 className="section-title">Primary</h5> */}
            <ul className="personal-info">
              <li>
                <div className="title">Relation Name</div>
                <div className="text">
                  {personal_info?.emergency_contact_relation}
                </div>
              </li>

              <li>
                <div className="title">Phone </div>
                <div className="text">
                  {personal_info?.emergency_person_number}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Edit data */}
      <div
        id="emergency_contact_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Emergency Contact</h5>
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
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label>Relation Name</label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("emergency_contact_relation")}
                      />
                    </div>
                    <div className="input-block">
                      <label>Phone</label>
                      <div>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          {...register("emergency_person_number")}
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="submit-section">
                  <button
                    className="close btn btn-primary submit-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
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
        id="add_emergency_contact_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Emergency Contact</h5>
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
              <form onSubmit={phandleSubmit(ponSubmit)}>
                <div className="row">
                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Emergency Contact Relation{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        {...pRegister("emergency_contact_relation")}
                      />
                      <div className="text-danger">
                        {errors.emergency_contact_relation?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Emergency Person Contact{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        type="Number"
                        className="form-control"
                        {...pRegister("emergency_person_number")}
                      />
                      <div className="text-danger">
                        {errors.emergency_person_number?.message}
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
