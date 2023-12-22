import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { deleteVendor, getVendor, updateVendor } from "../../store/Action/Actions";
import "react-datepicker/dist/react-datepicker.css";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { useForm } from "react-hook-form";

const VendorPannel = () => {
  const [url, setUrl] = useState(URLS.GET_VENDOR_URL);
  const dispatch = useDispatch();
  const [allVendor, setAllVendor] = useState([]);
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [deleteVendorData, setDeleteVendorData] = useState(null);
  const [editVendorData, setEditVendorData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);



  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
  } = useForm({});

  const { handleSubmit: handleDelete } = useForm({});

  const handleEdit = (record) => {
    console.log("Edit clicked for record:", record);
  };

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditVendorData(record);
    setValue("company_name", record.company_name);
    setValue("telephone", record.telephone);
    setValue("mail_id", record.mail_id);
    setValue("website", record.website);
    setValue("fax", record.fax);
    // setValue("vendor_bill", record.vendor_bill);
    // setValue("amount", record.amount);
    // setValue("paid_amount", record.paid_amount);
    // setValue("due_amount", record.due_amount);
    // setValue("paid", record.paid);
  };

  const onUpdate = (values) => {
    dispatch(updateVendor({ id: editVendorData.id, payload: values }));
    setIsEditFormVisible(false);
    alert ("Updated successfully")
  };

  function getPageDetails(url) {
    dispatch(getVendor({ payload: {}, URL: url }));
  }

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchPageDetials(url) {
    dispatch(getVendor({ payload: {}, URL: url }));
  }

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
        };
      });
      setAllVendor(allVendor);
    }
  }, [getVendorSelector]);

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

  const DeleteVendor = (record) => {
    setDeleteVendorData(record);
  };

  const onDelete = () => {
    const deletedVendorId = deleteVendorData.id;
    dispatch(deleteVendor({ id: deletedVendorId }));
    setIsDeleteConfirmationVisible(false);
    alert ("deleted successfully")
    setAllVendor((prevItems) =>
      prevItems.filter((item) => item.id !== deletedVendorId)
    );
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "",
    },

    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "",
    },

    {
      title: "Mail Id",
      dataIndex: "mail_id",
      key: "",
    },

    {
      title: "FAX",
      dataIndex: "website",
      key: "",
    },

    {
      title: "Due Amount",
      dataIndex: "",
      key: "",
    },

    {
      title: "Paid Amount",
      dataIndex: "",
      key: "",
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
                <h3 className="page-title">Vendors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Vendor </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link to="/home/Vendors" className="btn add-btn">
                  <i className="fa fa-plus" /> Add Vendor
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <div className="row">
            <div className="col-lg-12">
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

        {/* Edit Expense Modal */}

        <div id="edit_vendor" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Vendor</h5>
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
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4> Company Name</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister("company_name")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Telephone</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="tel"
                        className="form-control"
                        {...updateregister("telephone")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Email Address</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="email"
                        className="form-control"
                        {...updateregister("mail_id")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Website</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister("website")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>FAX</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister("fax")}
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                     Update
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
      </div>
    </>
  );
};

export default VendorPannel;
