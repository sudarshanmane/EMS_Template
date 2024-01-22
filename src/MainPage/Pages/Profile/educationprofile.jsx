import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEducationAction,
  getEducationList,
  updateEducationAction,
} from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const validationSchema = Yup.object().shape({
  education_type: Yup.string().required("Education type is required"),
  university: Yup.string().required("University is required"),
  education_name: Yup.string().required("Degree name is required"),
  specialization: Yup.string().required("Specialization is required"),
  percentage: Yup.number().required("Percentage is required"),
  college_name: Yup.string().required("College name is required"),
  marksheet: Yup.mixed().required("Marksheet is required"),
  in_year: Yup.string()
    .transform((originalValue, originalObject) => {
      return originalValue || "";
    })
    .required("Start date is required"),
  passout_year: Yup.string()
    .transform((originalValue, originalObject) => {
      return originalValue || "";
    })
    .required("End date is required"),
});

export default function EducationProfile({ userId }) {
  const dispatch = useDispatch();
  const typeurl = URLS.GET_EDUCATION_LIST_URL;
  const url = URLS.GET_EDUCATION_URL;
  const baseurl = URLS.BASE_URL_EXPORT;
  const {
    register: editEducationRegister,
    handleSubmit: handleEditEducationData,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [file, setFile] = useState();
  const [initialDocument, setInitialDocument] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const edu_type = useSelector((state) => state.geteducationlist);
  const edu_Data = useSelector((state) => state.geteducation?.data);
  const updateeduSelector = useSelector((state) => state.updateeducation);

  const userRoles = useSelector((state) => state.getcurrentrole);
  const formatDate = (date) => {
    return date ? format(date, "yyyy-MM-dd") : null;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleEditEducation = (record) => {
    setValue("id", record.id);
    setValue("education_type", record.education_type?.id);
    setValue("university", record.university);
    setValue("education_name", record.education_name);
    setValue("specialization", record.specialization);
    setValue("percentage", record.percentage);
    setValue("marksheet", record.marksheet);
    setValue("college_name", record.college_name);
    setValue("in_year", record.in_year);
    setValue("passout_year", record.passout_year);
    // const documenturl = `${baseurl}${record.marksheet}`;
    setInitialDocument(documenturl);
  };

  const onUpdateEducation = (data) => {
    const formData = new FormData();
    formData.append("education_type", parseInt(data.education_type, 10));
    formData.append("university", data.university);
    file && formData.append("marksheet", file);
    formData.append("education_name", data.education_name);
    formData.append("college_name", data.college_name);
    formData.append("specialization", data.specialization);
    formData.append("percentage", data.percentage);
    formData.append("in_year", data.in_year);
    formData.append("passout_year", data.passout_year);
    dispatch(updateEducationAction({ id: data.id, payload: data }));
  };

  function getPageDetails(typeurl) {
   
    dispatch(getEducationList({ payload: { userId }, URL: typeurl }));
   
  }

  useEffect(() => {
    getPageDetails(typeurl);
  }, []);


  function fetchReportData(url) {
    dispatch(getEducationAction({ payload: {userId}, URL: url }));
  }

  useEffect(() => {
    fetchReportData(url);
  }, []);


  useEffect(() => {
    if (updateeduSelector) {
      dispatch(getEducationAction({ payload: { userId }, URL: url }));
    }
  }, [updateeduSelector]);

  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Education Information{" "}
              {userRoles?.data?.users?.education?.includes("Create") ? (
                <Link
                  to={`/app/education/${userId}`}
                  className="edit-icon"
                  data-bs-target="#educations_info"
                >
                  <i className="fa fa-plus" />
                </Link>
              ) : null}
            </h3>
            <div className="experience-box">
              <ul className="experience-list">
                {edu_Data?.map((e) => {
                  return (
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="/" className="name">
                            {e?.university}
                            {userRoles?.data?.users?.education?.includes(
                              "Edit"
                            ) ? (
                              <a
                                to="#"
                                className="edit-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#education_info"
                                onClick={() => handleEditEducation(e)}
                              >
                                <i className="fa fa-pencil" />
                              </a>
                            ) : null}
                          </Link>
                          <div>
                            {e?.education_name} ({" "}
                            {e?.education_type?.education_type})
                          </div>
                          <div>{e?.specialization}</div>
                          <span className="time">
                            {e?.in_year} - {e?.passout_year}
                          </span>
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
        id="education_info"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Update Education Information</h5>
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
              <form onSubmit={handleEditEducationData(onUpdateEducation)}>
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Information{" "}
                        {/* <Link to="#" className="delete-icon">
                          <i className="fa fa-trash" />
                        </Link> */}
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Select Education{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              {...editEducationRegister(`education_type`)}
                            >
                              {Array.isArray(edu_type) &&
                                edu_type.map((data) => {
                                  return (
                                    <option key={data?.id} value={data?.id}>
                                      {data?.education_type}
                                    </option>
                                  );
                                })}
                            </select>
                            <div className="text-danger">
                              {errors.education_type?.message}
                            </div>
                          </div>
                          <div className="input-block">
                            <label>
                              University Name{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...editEducationRegister("university")}
                            />
                            <div className="text-danger">
                              {errors.university?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block row">
                            <label>
                              Degree Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...editEducationRegister(`education_name`)}
                            />
                            <div className="text-danger">
                              {errors.education_name?.message}
                            </div>
                          </div>
                          <div className="input-block row">
                            <label>
                              Specialization{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...editEducationRegister(`specialization`)}
                            />
                            <div className="text-danger">
                              {errors.specialization?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block row">
                            <label>
                              Percentage <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="Number"
                              {...editEducationRegister(`percentage`)}
                            />
                            <div className="text-danger">
                              {errors.percentage?.message}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              College Name{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...editEducationRegister("college_name")}
                            />
                            <div className="text-danger">
                              {errors.college_name?.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Joining Date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="in_year"
                              render={({ field }) => (
                                <>
                                  <DatePicker
                                    className="form-control floating"
                                    selected={
                                      field.value ? new Date(field.value) : null
                                    }
                                    onChange={(date) => {
                                      setStartDate(date);
                                      const formattedDate = formatDate(date);
                                      field.onChange(formattedDate);
                                      setValue("in_year", formattedDate); // Set the value for form submission
                                      setValue("passout_year", null);
                                    }}
                                  />
                                  <div className="text-danger">
                                    {errors.in_year?.message}
                                  </div>
                                </>
                              )}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label>
                              Passout Date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="passout_year"
                              render={({ field }) => (
                                <>
                                  {" "}
                                  <DatePicker
                                    className="form-control floating"
                                    selected={
                                      field.value ? new Date(field.value) : null
                                    }
                                    onChange={(date) => {
                                      const formattedDate = formatDate(date);
                                      field.onChange(formattedDate);
                                      setValue("passout_year", formattedDate); // Set the value for form submission
                                    }}
                                    minDate={new Date(startDate)}
                                  />
                                  <div className="text-danger">
                                    {errors.passout_year?.message}
                                  </div>
                                </>
                              )}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className=" col-form-label">
                              Upload Marksheet
                            </label>
                            <div className="">
                              <input
                                type="file"
                                {...editEducationRegister("marksheet", {})}
                                onChange={(e) => {
                                  handleFileChange(e);
                                }}
                              />
                              <div className="text-danger">
                                {errors.marksheet?.message}
                              </div>
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
