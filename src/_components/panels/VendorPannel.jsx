import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  deleteVendor,
  getVendor,
  updateVendor,
  createVendor,
} from "../../store/Action/Actions";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { icon } from "@fortawesome/fontawesome-svg-core";

const VendorPannel = () => {
  const [url, setUrl] = useState(URLS.GET_VENDOR_URL);
  const dispatch = useDispatch();
  const [allVendor, setAllVendor] = useState([]);
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [deleteVendorData, setDeleteVendorData] = useState(null);
  const [editVendorData, setEditVendorData] = useState(null);
  const [editRecordPaymentData, setRecordPaymentData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  const {
    register: recordpayment,
    handleSubmit: handleSubmitRecord,
    setValue: setValueRecord,
  } = useForm({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const DeleteVendor = (record) => {
    setDeleteVendorData(record);
  };
  const { handleSubmit: handleDelete } = useForm({});

  const onRecord = (record) => {
    console.log("aaaaaaaaaaaa",record);
    if (record && record.company_name && record.telephone) {
      setRecordPaymentData(record);
      setValueRecord("company_name", record.company_name); 
      setValueRecord("telephone", record.telephone);
    } else {
      console.error("Invalid record or missing required fields");
      // Handle this situation accordingly
    }
  };
  
  

  const onSubmit = async (values) => {
    await dispatch(createVendor(values));
    dispatch(getVendor({ payload: {}, URL: url }));
    setIsAddFormVisible(false);
  };

  const onEdit = (record) => {
    console.log("bbbbbbbbbbb",record);
    setIsEditFormVisible(true);
    setEditVendorData(record);
    setValue("company_name", record.company_name);
    setValue("telephone", record.telephone);
    setValue("mail_id", record.mail_id);
    setValue("website", record.website);
    setValue("fax", record.fax);
  };

  const onUpdate = (values) => {
    dispatch(updateVendor({ id: editVendorData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  const onSubmitRecord = (values) => {
    // dispatch(recordpayment({ id: editRecordPaymentData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  const onDelete = () => {
    const deletedVendorId = deleteVendorData.id;
    dispatch(deleteVendor({ id: deletedVendorId }));
    setIsDeleteConfirmationVisible(false);
    setAllVendor((prevItems) =>
      prevItems.filter((item) => item.id !== deletedVendorId)
    );
  };

  function getPageDetails(url) {
    dispatch(getVendor({ payload: {}, URL: url }));
  }
  function fetchPageDetials(url) {
    dispatch(getVendor({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  useEffect(() => {
    fetchPageDetials(url);
  }, []);

  const getVendorSelector = useSelector((state) => state.getVendorSuccess);
  useEffect(() => {
    if (getVendorSelector) {
      const allVendor = getVendorSelector.map((element) => {
        return {
          id: element.id,
          company_name: element.company_name,
          telephone: element.telephone,
          mail_id: element.mail_id,
          website: element.website,
          fax: element.fax,
          due_amount: element.due_amount,
          paid_amount: element.paid_amount,
          amount: element.amount,
        };
      });
      setAllVendor(allVendor);
    }
  }, [getVendorSelector]);

  const createVendorSelector = useSelector(
    (state) => state.createVendorSuccess
  );

  useEffect(() => {
    if (createVendorSelector && submittedValues) {
      dispatch(createVendor(submittedValues));
      reset();
      setSubmittedValues(null);
      setIsAddFormVisible(false);
    }
  }, [createVendorSelector, submittedValues]);

  const updatevendorSelector = useSelector((state) => state.updateVendorResult);
  useEffect(() => {
    if (updatevendorSelector) {
      dispatch(getVendor({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatevendorSelector]);

  const deleteVendorSelector = useSelector(
    (state) => state.deleteVendorSuccess
  );
  useEffect(() => {
    if (deleteVendorSelector) {
      dispatch(getVendor({ payload: {}, URL: url }));
    }
  }, [deleteVendorSelector]);

  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Mail Id",
      dataIndex: "mail_id",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "FAX",
      dataIndex: "website",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Due Amount",
      dataIndex: "due_amount",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Paid Amount",
      dataIndex: "paid_amount",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Record Payment",
      // dataIndex: "payment",
      render: (record) => (
        <Link
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#make_payment"
          onClick={() => onRecord(record)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-wallet"
            viewBox="0 0 16 16"
          >
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
          </svg>
        </Link>
      ),
    },
    {
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_vendor"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>

            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_vendor"
              onClick={() => {
                DeleteVendor(record);
              }}
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Vendor </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_vendor"
                >
                  <i className="fa fa-plus" /> Add Vendor
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div
                className={
                  focused
                    ? "input-block form-focus focused"
                    : "input-block form-focus"
                }
              >
                <input
                  type="text"
                  className="form-control floating"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <label className="focus-label">Search</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <lable className="card-title mb-0">Vendor</lable>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allVendor.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allVendor}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add vendor  */}
        <div id="add_vendor" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Vendors</h5>
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
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("company_name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Telephone</label>
                        <input
                          className="form-control"
                          type="tel"
                          {...register("telephone")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Email Address</label>
                        <input
                          className="form-control"
                          type="email"
                          {...register("mail_id")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Website</label>
                        <input
                          className="form-control"
                          type="text"
                          {...register("website")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>FAX</label>
                        <input
                          className="form-control"
                          type="number"
                          {...register("fax")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* /Add vendor Ends */}

        {/* Edit Expense Modal */}

        <div id="edit_vendor" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Vendors</h5>
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
                <form onSubmit={handleUpdate(onUpdate)}>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("company_name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Telephone</label>
                        <input
                          className="form-control"
                          type="tel"
                          {...updateregister("telephone")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Email Address</label>
                        <input
                          className="form-control"
                          type="email"
                          {...updateregister("mail_id")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Website</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("website")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>FAX</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("fax")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* /Edit Expense Modal */}

        {/* Delete Category Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_vendor"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Vendor</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to=""
                        className="btn btn-primary continue-btn"
                        onClick={handleDelete(onDelete)}
                        data-bs-dismiss="modal"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to=""
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Record Payment Modal  */}

        <div
          id="make_payment"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Make Payment for Vendor</h5>
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
                <form onSubmit={handleSubmitRecord(onSubmitRecord)}>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          {...recordpayment("company_name")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Telephone</label>
                        <input
                          className="form-control"
                          type="tel"
                          {...recordpayment("telephone")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Vendor Bill</label>
                        <input
                          className="form-control"
                          type="file"
                          {...recordpayment("vendor_bill ")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Amount</label>
                        <input
                          className="form-control"
                          type="tel"
                          {...recordpayment("amount")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorPannel;
