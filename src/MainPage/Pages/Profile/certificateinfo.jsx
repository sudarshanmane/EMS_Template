import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
// import { API_HOST } from "../../../config/https";
// import {
//   getcertificateData,
//   updatecertificateData,
// } from "../../../store/certificate";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function certificateinfo({ userId }) {
  // const { userId } = this.props;
  const {
    register: editExperienceRegister,
    handleSubmit: handleEditExperienceData,
    setValue,
    control,
  } = useForm({});

  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState();
  const [initialDocument, setInitialDocument] = useState(null);

  const token = useSelector((state) => state.userSlice.token);
  const certificate_Data = useSelector(
    (state) => state.certificate.certificateData?.data
  );
  const updateCertificateSelector = useSelector(
    (state) => state.certificate.updateText
  );
  const userRoles = useSelector((state) => state.userrole.userRole);
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleEditExperience = (record) => {
    // console.log("record", record);
    setSelectedRow(record);
    setValue("course_name", record.course_name);
    setValue("certification_date", record.certification_date);
    setValue("certification", record.certification);
    const documenturl = `${API_HOST}${record.certification}`;
    setInitialDocument(documenturl);
  };

  const onUpdate = (data) => {
    // console.log("Received values of form:", data);

    const formData = new FormData();
    formData.append("course_name", data.course_name);
    formData.append("certification_date", data.certification_date);
    file && formData.append("certification", file);

    dispatch(updatecertificateData(token, selectedRow.id, formData));
  };

  useEffect(() => {
    if (userId) {
      dispatch(getcertificateData(token, userId));
    }
  }, []);

  useEffect(() => {
    if (updateCertificateSelector) {
      dispatch(getcertificateData(token, userId));
    }
  }, [updateCertificateSelector]);

  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Certificate information
              {userRoles?.data?.users?.certificate?.includes("Create") ? (
                <Link
                  to={`/app/certificate/${userId}`}
                  className="edit-icon"
                  data-bs-target="#certificates_info"
                >
                  <i className="fa fa-plus" />
                </Link>
              ) : null}
            </h3>
            <div className="experience-box">
              <ul className="experience-list">
                {certificate_Data?.map((e) => {
                  return (
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="/" className="name">
                            {e?.course_name}
                            {userRoles?.data?.users?.certificate?.includes(
                              "Edit"
                            ) ? (
                              <a
                                to="#"
                                className="edit-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#certificate_info"
                                onClick={() => handleEditExperience(e)}
                              >
                                <i className="fa fa-pencil" />
                              </a>
                            ) : null}
                          </Link>
                          <span className="time">{e?.certification_date}</span>
                          <div>{e?.certification}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="certificate_info"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Certificate Information</h5>
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
              <form onSubmit={handleEditExperienceData(onUpdate)}>
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Certificate Informations{" "}
                        {/* <Link to="#" className="delete-icon">
                          <i className="fa fa-trash" />
                        </Link> */}
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Course Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...editExperienceRegister(`course_name`)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Certification Date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="certification_date"
                              render={({ field }) => (
                                <DatePicker
                                  className="form-control floating"
                                  selected={
                                    field.value ? new Date(field.value) : null
                                  }
                                  onChange={(date) => {
                                    const formattedDate = formatDate(date);
                                    field.onChange(formattedDate);
                                    setValue(
                                      "certification_date",
                                      formattedDate
                                    ); // Set the value for form submission
                                  }}
                                />
                              )}
                            />
                          </div>
                        </div>{" "}
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="col-form-label">
                              Certification Documents
                            </label>
                            <div className="">
                              <input
                                type="file"
                                {...editExperienceRegister("certification", {})}
                                onChange={(e) => {
                                  handleFileChange(e);
                                }}
                              />

                              {initialDocument && (
                                <div>
                                  <a
                                    href={initialDocument}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View Document
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
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
                    Update
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
