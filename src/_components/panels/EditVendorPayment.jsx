import React from "react";

const EditVendorPayment = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const {
    register: updateregister,
    handleSubmit: handleUpdate,
    setValue,
    control,
    formState: { errors },
  } = useForm({});

  const EditVendorPayment = (record) => {
    setViewVendorData(record);
    setIsAddFormVisible(false);
    navigate("/home/ViewVendor", { state: record });
  };

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
      dataIndex: "fax",
      key: "",
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },

    {
      title: "Web Site",
      dataIndex: "website",
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
            to={`/home/viewVendor/${record.id}`}
            className="btn btn-primary btn-sm m-r-5"
            onClick={() => viewVendor(record)}
          >
            <i className="fa fa-eye m-r-5" />
          </Link>
          <Link
            className="btn btn-success btn-sm m-r-5"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit_vendor"
            onClick={() => onEdit(record)}
          >
            <i className="fa fa-pencil m-r-5" />
          </Link>

          <Link
            className="btn btn-danger btn-sm"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_vendor"
            onClick={() => {
              DeleteVendor(record);
            }}
          >
            <i className="fa fa-trash m-r-5" />
          </Link>
        </div>
      ),
    },
  ];
  ;

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Edit Vendor Payment Modal */}
        <div
          id="edit_payment"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Payment Details</h5>
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
                        <label>Date</label>
                        <input
                          className="form-control"
                          type="date"
                          {...updateregister("date")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Paid Ammount</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("paid_ammount")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Due Ammount</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("due_ammount")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Ammount</label>
                        <input
                          className="form-control"
                          type="number"
                          {...updateregister("ammount")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-block">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Bill</label>
                        <input
                          className="form-control"
                          type="file"
                          {...updateregister("vendor_bill")}
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

export default EditVendorPayment;
