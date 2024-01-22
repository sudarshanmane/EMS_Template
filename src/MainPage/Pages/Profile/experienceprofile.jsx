import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { getExperienceAction, updateExperienceAction } from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";

export default function ExperienceProfile({ userId }) {
  const url = URLS.GET_EXPERIENCE_URL;
  const baseurl = URLS.BASE_URL_EXPORT;
  const {
    register: editExperienceRegister,
    handleSubmit: handleEditExperienceData,
    setValue,
    control,
  } = useForm({});

  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [initialDocument, setInitialDocument] = useState(null);
  const [file1, setFile1] = useState();
  const [slrySlip, setSalarySlip] = useState(null);
  // const [updateExpe, setUpdateExpe] = useState();
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

 
  const exp_Data = useSelector(
    (state) => state.getexperience?.data
  );
  const updateExperienceSelector = useSelector(
    (state) => state.updateexperience
  );
 
  const userRoles = useSelector((state) => state.getcurrentrole);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileChange1 = (e) => {
    const selectedFile = e.target.files[0];
    setFile1(selectedFile);
  };

  const handleEditExperience = (record) => {
    setSelectedRow(record);
    setValue("company", record.company);
    setValue("company_name", record.company_name);
    setValue("designation", record.designation);
    setValue("relieving_letter", record.relieving_letter);
    setValue("salary_slip", record.salary_slip);
    setValue("comments", record.comments);
    setValue("year_of_experience", record.year_of_experience);

    const absoluteImageUrl = `${baseurl}${record.relieving_letter}`;
    // const documenturl = `${API_HOST}${record.document}`;
    setInitialDocument(absoluteImageUrl);
    // setInitialDocument(documenturl);
    const absoluteImageUrls = `${baseurl}${record.salary_slip}`;
    setSalarySlip(absoluteImageUrls);
  };

  const onUpdate = (data) => {
   
    const formData = new FormData();
    file && formData.append("relieving_letter", file);
    file1 && formData.append("salary_slip", file1);
    formData.append("company_name", data.company_name);
    formData.append("designation", data.designation);
    formData.append("comments", data.comments);
    formData.append("year_of_experience", data.year_of_experience);

    dispatch(updateExperienceAction({ id: data.id, payload: data }));
  };

  function getPageDetails(url) {
    dispatch(getExperienceAction({ payload: { userId }, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);


  function fetchReportData(url) {
    dispatch(getExperienceAction({ payload: {userId}, URL: url }));
  }

  useEffect(() => {
    fetchReportData(url);
  }, []);


  useEffect(() => {
    if (updateExperienceSelector) {
      dispatch(getExperienceAction({ payload: { userId }, URL: url }));
    }
  }, [updateExperienceSelector]);

 
  return (
    <>
      {" "}
      <div className="col-md-6 d-flex">
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              Experience
              {userRoles?.data?.users?.user_experience?.includes("Create") ? (
                <Link
                  to={`/app/experience/${userId}`}
                  className="edit-icon"
                  data-bs-target="#experience_info"
                >
                  <i className="fa fa-plus" />
                </Link>
              ) : null}
            </h3>
            <div className="experience-box">
              <ul className="experience-list">
                {exp_Data?.map((exp) => {
                  return (
                    <li>
                      <div className="experience-user">
                        <div className="before-circle" />
                      </div>
                      <div className="experience-content">
                        <div className="timeline-content">
                          <Link to="/" className="name">
                            {exp?.company} ({exp?.company_name})
                            {userRoles?.data?.users?.user_experience?.includes(
                              "Edit"
                            ) ? (
                              <a
                                to="#"
                                className="edit-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#experience_info"
                                onClick={() => handleEditExperience(exp)}
                              >
                                <i className="fa fa-pencil" />
                              </a>
                            ) : null}
                          </Link>
                          <div>{exp?.designation}</div>
                          <span className="time">
                            {exp?.year_of_experience} Years
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
        id="experience_info"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Experience Information</h5>
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
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Company Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          {...editExperienceRegister(`company_name`)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Designation <span className="text-danger">*</span>
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          {...editExperienceRegister(`designation`)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className=" col-form-label">
                          Relieving Letter
                        </label>
                        <div className="">
                          <input
                            type="file"
                            {...editExperienceRegister("relieving_letter", {})}
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className=" col-form-label">Salary Slip</label>
                        <div className="">
                          <input
                            type="file"
                            {...editExperienceRegister("salary_slip", {})}
                            onChange={(e) => {
                              handleFileChange1(e);
                            }}
                          />

                          {slrySlip && (
                            <div>
                              <a
                                href={slrySlip}
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Comments <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          // defaultValue={data?.comments}
                          type="text"
                          {...editExperienceRegister("comments")}
                        />
                      </div>
                    </div>{" "}
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>
                          Years of Experience{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          // defaultValue={data?.year_of_experience}
                          type="text"
                          {...editExperienceRegister("year_of_experience")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  {/* <button className="btn btn-primary submit-btn">Submit</button> */}
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
