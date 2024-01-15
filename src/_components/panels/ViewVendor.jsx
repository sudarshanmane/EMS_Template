import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal, Space, Table } from "antd";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { URLS } from "../../Globals/URLS";
import { getVendorData } from "../../store/Action/Actions";

import {
  itemRender,
} from "../../MainPage/paginationfunction";
import { formatDate } from "@fullcalendar/core";


const ViewVendor = () => {
  const [allExpenses, setAllExpenses] = useState([]);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [editTravelData, setEditTravelData] = useState(null);
  const [allVendor, setAllVendor] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);


  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
    control,
    formState: { errors },
  } = useForm({});

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditTravelData(record);
    setValue("date", record?.date);
    setValue("paid_amount", record?.paid_amount);
    setValue("due_amount", record?.due_amount);
    setValue("vendor_bill", record?.vendor_bill);
    setValue("amount", record?.amount);
  };
  const onUpdate = (values) => {
    dispatch(updateTravel({ id: editTravelData.id, payload: values }));
    setIsEditFormVisible(false);
  };

  const updatetravelSelector = useSelector((state) => state.updateVendorResult);
  useEffect(() => {
    if (updatetravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatetravelSelector]);

  
  const getVendorSelector = useSelector((state) => state.vendorDetails);
  useEffect(() => {
    if (getVendorSelector) {
      // console.log("getVendorSelectorgetVendorSelector",getVendorSelector);
      //  getVendorSelector?.vendorpayment = getVendorSelector?.vendorpayment
      // ?.map((element) => ({
      //   id: element.id,
      //   company_name: element.company_name,
      //   telephone: element.telephone,
      //   mail_id: element.mail_id,
      //   website: element.website,
      //   fax: element.fax,
      //   vendorpayment: element.vendorpayment,
      // }));
      setAllVendor(getVendorSelector?.vendorpayment);
    }
  }, [getVendorSelector]);

  useEffect(() => {
    dispatch(getVendorData({ id }));
  }, []);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "vendorpayment",
    },
    {
      title: "Paid Ammount",
      dataIndex: "paid_amount",
    },
    {
      title: "Due Ammount",
      dataIndex: "due_amount",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Bill",
      dataIndex: "vendor_bill",
      render: (record) =>  {
        return record ? <a href={URLS.BASE_URL_EXPORT + record} target="_blank"><img style={{width:"30px"}} src={URLS.BASE_URL_EXPORT + record} alt="" /></a> : ""
      },
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
              data-bs-target="#edit_vendor" //***************************************** */
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div>
            <Link className="btn add-btn" to="/home/VendorPannel">
              <i className="fa fa-right" /> Back
            </Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Vendor Details</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          {getVendorSelector && (
                            <>
                              <p>
                                Company Name :- &nbsp;
                                {getVendorSelector.company_name}
                              </p>
                              <p>
                                Telephone :- &nbsp;
                                {getVendorSelector.telephone}
                              </p>
                              <p>
                                Mail ID :- &nbsp;
                                {getVendorSelector.mail_id}
                              </p>
                              <p>
                                Website :- &nbsp;
                                {getVendorSelector.website}
                              </p>
                              <p>
                                FAX :- &nbsp;
                                {getVendorSelector.fax}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* {/ view Receipt Modal /}  */}
          <Modal
            title="Receipt"
            open={modalVisible}
            onCancel={() => {
              setModalVisible(false);
              setSelectedReceiptUrl("");
            }}
          >
            {selectedReceiptUrl && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={"http://192.168.1.219:8001" + selectedReceiptUrl}
                  alt="Receipt"
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                  onError={() => console.error("Error loading image")}
                />
              </div>
            )}
          </Modal>

          {/* Edit Vendor Payment Modal */}
          <div id="edit_vendor" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Travel Request</h5>
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
                        <label>Title</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("title")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Travel Purposes</label>
                        <input
                          className="form-control"
                          type="text"
                          {...updateregister("travel_purpose")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="start_date">
                      From Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="from_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("from_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.from_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <label className="col-form-label" id="to_date">
                      To Date <span className="text-danger">*</span>
                    </label>
                    <div className="">
                      <Controller
                        control={control}
                        name="to_date"
                        render={({ field }) => (
                          <DatePicker
                            selected={
                              field.value ? new Date(field.value) : null
                            }
                            onChange={(date) => {
                              const formattedDate = formatDate(date);
                              field.onChange(formattedDate);
                              setValue("to_date", formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className="form-control"
                          />
                        )}
                      />
                      <div className="text-danger">
                        {errors.to_date?.message}
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Estimated Budget</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("estimated_budget")}
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
          {/* /Edit Vendor Payment Modal End */}

          {/* Payment Details  */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <lable className="card-title mb-0">Vendor</lable>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      dataSource={allVendor}
                      pagination={{
                        total: allExpenses.length,
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
                          setTablePagination({ ...tablePagination, current });
                        },
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      bordered
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Detials End */}
        </div>
      </div>
  );
};

export default ViewVendor;
