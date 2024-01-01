import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  getTravel,
  deleteTravel,
  updateTravel,
} from "../../store/Action/Actions";

import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";

const TravelRequestPannel = () => {
  const [url, setUrl] = useState(URLS.GET_TRAVEL_URL);
  const dispatch = useDispatch();
  const [allTravel, setAllTravel] = useState([]);
  const [deleteTravelData, setDeleteTravelData] = useState(null);
  const [editTravelData, setEditTravelData] = useState(null);
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

  const onEdit = (record) => {
    setIsEditFormVisible(true);
    setEditTravelData(record);
    setValue("title", record.title);
    setValue("travel_purpose", record.travel_purpose);
    setValue("from_date", record.from_date);
    setValue("to_date", record.to_date);
    setValue("estimated_budget", record.estimated_budget);
  };

  const onUpdate = (values) => {
    dispatch(updateTravel({ id: editTravelData.id, payload: values }));
    setIsEditFormVisible(false);
   
  };
  function getPageDetails(url) {
    dispatch(getTravel({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchPageDetials(url) {
    dispatch(getTravel({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchPageDetials(url);
  }, []);

  const getTravelSelector = useSelector((state) => state.getTravelSuccess);
  useEffect(() => {
    if (getTravelSelector) {
      const allTravel = getTravelSelector.map((element) => {
        return {
          id: element.id,
          title: element.title,
          travel_purpose: element.travel_purpose,
          from_date: element.from_date,
          to_date: element.to_date,
          estimated_budget: element.estimated_budget,
        };
      });
      setAllTravel(allTravel);
    }
  }, [getTravelSelector]);

  const deleteTravelSelector = useSelector(
    (state) => state.deleteTravelSuccess
  );
  useEffect(() => {
    if (deleteTravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    } setIsAddFormVisible(false);
  }, [deleteTravelSelector]);

  const DeleteTravel = (record) => {
    setDeleteTravelData(record);
  };

  const onDelete = () => {
    const deletedTravelId = deleteTravelData.id;
    dispatch(deleteTravel({ id: deletedTravelId }));
    setIsDeleteConfirmationVisible(false);
    alert("deleted successfully");
    setAllTravel((prevItems) =>
      prevItems.filter((item) => item.id !== deletedTravelId)
    );
  };

  const updatetravelSelector = useSelector((state) => state.updateTravelResult);
  useEffect(() => {
    if (updatetravelSelector) {
      dispatch(getTravel({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [updatetravelSelector]);

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "",
      key: "",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "",
    },
    {
      title: "Travel Purpose",
      dataIndex: "travel_purpose",
      key: "",
    },
    {
      title: "From_Date",
      dataIndex: "from_date",
      key: "",
    },
    {
      title: "To_Date",
      dataIndex: "to_date",
      key: "",
    },
    {
      title: "Estimated_Budget",
      dataIndex: "estimated_budget",
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
              data-bs-target="#edit_travel"
              onClick={() => onEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>

            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_travel"
              onClick={() => {
                DeleteTravel(record);
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
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Travel Request</li>
                </ul>
                <div className="col-auto float-end ms-auto">
                  <Link to="/home/Travels">
                    <button type="button" className="btn add-btn">
                      <i className="fa fa-plus" />
                      Add Travels
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Travel Request</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    {/* Search Filter */}

                    <div className="row filter-row">
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="input-block form-focus select-focus">
                          <div className="cal-icon">
                            <label className="focus-label">From</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="input-block form-focus select-focus">
                          <div className="cal-icon">
                            <label className="focus-label">To</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <Link
                          to="#"
                          className="btn btn-success btn-block w-100"
                        >
                          {" "}
                          Search{" "}
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <Link
                          to="#"
                          onClick={() => downloadExlsFiles()}
                          className="btn btn-warning btn-block w-100"
                        >
                          {" "}
                          Export{" "}
                        </Link>
                      </div>
                    </div>

                    <Table
                      className="table-striped"
                      pagination={{
                        total: allTravel.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allTravel}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Expense Modal */}

        <div id="edit_travel" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Travel</h5>
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
                      <h4> Employee Name</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister(" ")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Title</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister("title")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Travel Purpose</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        {...updateregister("travel_purpose")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>From Date</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        className="form-control"
                        {...updateregister("from_date")}
                      />
                    </div>
                  </div>
                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>To Date</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        className="form-control"
                        {...updateregister("to_date")}
                      />
                    </div>
                  </div>

                  <div className="input-block row">
                    <label className="col-lg-3 col-form-label">
                      <h4>Estimated Budget</h4>
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        {...updateregister("estimated_budget")}
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

        {/* Delete Category Modal */}

        <div
          className="modal custom-modal fade"
          id="delete_travel"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Travel</h3>
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

export default TravelRequestPannel;
