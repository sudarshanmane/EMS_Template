import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";
// import { API_HOST } from "../../../config/https";
// import {
//   addUserPersonaldocuments,
//   getuserPersonaldocument,
//   removeUserPersonalDocuments,
//   updateUserPerdocuments,
// } from "../../../store/userdocuments";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../paginationfunction";

const validationSchema = Yup.object().shape({
  document_name: Yup.string().required("document name is not Empty"),
  // document: Yup.string().required("document is required"),
});

export default function DocumentProfile({ userId }) {
  const dispatch = useDispatch();

  const {
    register: addRegister,
    handleSubmit: handleAddSubmit,
    reset: resetAdd,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const {
    register: editRegister,
    handleSubmit: handleDataEdit,
    setValue,
    control: editControl,
  } = useForm({});

  const {
    register: deleteRegister,
    handleSubmit: handleDataDelete,
    setValue: setdeleteValue,
  } = useForm({});

  const [imageFile, setImageFile] = useState("");
  const [file, setFile] = useState();
  const [initialImage, setInitialImage] = useState();
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });

  const token = useSelector((state) => state.userSlice.token);
  const userRoles = useSelector((state) => state.userrole.userRole);
  const per_documents = useSelector(
    (state) => state.userdocuments.personal_docs?.data
  );
  const per_add_documents = useSelector(
    (state) => state.userdocuments.newData?.id
  );
  const per_update_docs = useSelector(
    (state) => state.userdocuments.updateText?.id
  );
  const per_delete_docs = useSelector(
    (state) => state.userdocuments.delit_data
  );

  const imageFormDataConverter = (e) => {
    setImageFile(e.target.files[0]);
  };

  const FormDataConverter = (e) => {
    setFile(e.target.files[0]);
  };

  // Add function
  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("document", imageFile);
    formData.append("user_id", userId);
    formData.append("document_name", data.document_name);
    dispatch(addUserPersonaldocuments(token, formData, userId));
    resetAdd();
    setImageFile("");
  };

  // handle edit
  const handleEdit = (record) => {
    setValue("id", record.id);
    setValue("document", record.document);
    setValue("document_name", record.document_name);
    const documenturl = `${API_HOST}${record.document}`;
    setInitialImage(documenturl);
  };

  //update
  const onUpdate = (data) => {
    const formData = new FormData();
    file && file ? formData.append("document", file) : null;
    formData.append("user_id", userId);
    formData.append("document_name", data.document_name);
    dispatch(updateUserPerdocuments(token, data.id, formData));
    setFile();
  };

  // handle delete
  const handleDelete = (record) => {
    setdeleteValue("id", record.id);
  };

  // Delete API
  const onDelete = async (data) => {
    dispatch(removeUserPersonalDocuments(token, data.id));
  };

  // file download
  const handleFileDownload = (item) => {
    if (item) {
      fetch(API_HOST + item, { method: "GET" })
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = item || "downloaded_file";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        })
        .catch((error) => {
          console.error("Error occurred during file download:", error);
        });
    }
  };

  useEffect(() => {
    if (userId) {
      dispatch(getuserPersonaldocument(token, userId));
    }
  }, []);

  useEffect(() => {
    if (userRoles || per_add_documents || per_update_docs || per_delete_docs) {
      dispatch(getuserPersonaldocument(token, userId));
    }
  }, [userRoles, per_add_documents, per_update_docs, per_delete_docs]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      render: (text, record, index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },
      width: "10%",
    },
    {
      title: "Document name",
      dataIndex: "document_name",
      sorter: (a, b) => a.document_name.length - b.document_name.length,
      width: "70%",
    },
    {
      title: "Document",
      dataIndex: "document",
      render: (text, record) => (
        <div>
          {record.document ? (
            <button
              onClick={() => handleFileDownload(text)}
              className="btn btn-outline-primary"
              style={{ width: "40px" }}
            >
              <i className="fa fa-download m-r-5" />
            </button>
          ) : null}
        </div>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <>
          {userRoles?.data?.users?.user_personal_document?.includes("Edit") ? (
            <Link
              className="btn btn-success text-white"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#update_per_docs"
              onClick={() => handleEdit(record)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>
          ) : null}
          {userRoles?.data?.users?.user_personal_document?.includes(
            "Delete"
          ) ? (
            <Link
              className="btn btn-danger text-white ml-3"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_per_docs"
              onClick={() => handleDelete(record)}
            >
              <i className="fa-regular fa-trash-can " />
            </Link>
          ) : null}
        </>
      ),
      width: "10%",
    },
  ];

  return (
    <>
      {" "}
      {/* <div className="col-md-6 d-flex"> */}
      <div>
        <div className="card profile-box flex-fill">
          <div className="card-body">
            <h3 className="card-title">
              User Documents{" "}
              {userRoles?.data?.users?.user_personal_document?.includes(
                "Create"
              ) ? (
                <Link
                  href="#"
                  className="edit-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#add_per_docs"
                  onClick={() => {
                    resetAdd();
                    setImageFile("");
                  }}
                >
                  <i className="fa fa-plus" />
                </Link>
              ) : null}
            </h3>
            {userRoles?.data?.users?.user_personal_document?.includes(
              "View"
            ) ? (
              <div className="experience-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <Table
                        className="table-striped"
                        pagination={{
                          total: per_documents?.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: (current, pageSize) => {
                            setTablePagination({
                              ...tablePagination,
                              pageSize,
                              current,
                            });
                          },
                          onChange: (current) => {
                            setTablePagination({
                              ...tablePagination,
                              current,
                            });
                          },
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={per_documents && per_documents}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* add data */}
      <div id="add_per_docs" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Personal Documents</h5>
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
                onSubmit={handleAddSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Document name <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        {...addRegister("document_name")}
                      />
                      <div className="text-danger">
                        {errors.document_name?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Document <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <Controller
                        name="document"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) => {
                              imageFormDataConverter(e);
                              field.onChange(e); // Update the form state
                            }}
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.document?.message}
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
      {/* add data */}
      {/* update data */}
      <div
        id="update_per_docs"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Update Personal Documents</h5>
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
                onSubmit={handleDataEdit(onUpdate)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Document name <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        {...editRegister("document_name")}
                      />
                      <div className="text-danger">
                        {errors.document_name?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block row">
                    <label className="col-form-label col-md-3">
                      Document <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-9">
                      <Controller
                        name="document"
                        control={editControl}
                        render={({ field }) => (
                          <>
                            <input
                              type="file"
                              className="form-control"
                              onChange={(e) => {
                                FormDataConverter(e);
                                field.onChange(e); // Update the form state
                              }}
                            />{" "}
                          </>
                        )}
                      />
                      {initialImage && (
                        <div>
                          <p>Initial Document:</p>
                          <a
                            href={initialImage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Document
                          </a>
                        </div>
                      )}
                      <div className="text-danger">
                        {errors.document?.message}
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
      </div>{" "}
      {/* update data */}
      {/* Delete Department Modal */}
      <div
        id="delete_per_docs"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <h5 className="modal-title">Delete Personal Documents</h5>

                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <form onSubmit={handleDataDelete(onDelete)}>
                <div className="submit-section">
                  <p>Are you sure want to delete?</p>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-primary submit-btn"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-primary submit-btn"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default form submission behavior
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Delete Department Modal */}
    </>
  );
}
