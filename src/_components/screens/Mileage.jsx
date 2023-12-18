import { Button, Modal, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { onShowSizeChange, itemRender} from "../../MainPage/paginationfunction";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Globals/URLS";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Mileage = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);
  const [allReportList, setAllReportList] = useState([]);
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [viewReportData, setViewReportData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editReportData, setEditReportData] = useState(null);
  const [deleteReportData, setDeleteReportData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  const url = URLS.GET_REPORT_LIST_URL;


  // const handleDateChange1 = (date) => {
  //   setSelectedDate1(date);
  // };
  // const handleDateChange2 = (date) => {
  //   setSelectedDate2(date);
  // };
  // const handleView = (record) => {
  //   setViewReportData(record);
  //   setIsAddFormVisible(false);
  // };

  // const handleEdit = (record) => {
  //   setEditReportData(record);
  //   setIsAddFormVisible(true);
  // };
  // const handleDelete = (record) => {
  //   setDeleteReportData(record);
  //   setIsDeleteConfirmationVisible(true);
  // };

  // const handleDeleteConfirmation = () => {
  //   const deletedReportId = deleteReportData.id;
  //   dispatch(deleteReportAction({ id: deletedReportId }));
  //   setIsDeleteConfirmationVisible(false);
  //   setAllReportList((prevItems) =>
  //     prevItems.filter((item) => item.id !== deletedReportId)
  //   );
  // };

  // function getPageDetails(url) {
  //   dispatch(getReportList({ payload: {}, URL: url }));
  // }

  // useEffect(() => {
  //   getPageDetails(url);
  // }, []);

  // function fetchReportData(url) {
  //   dispatch(getReportList({ payload: {}, URL: url }));
  // }

  // useEffect(() => {
  //   fetchReportData(url);
  // }, []);

  // const reportPanelSelector = useSelector((state) => state.getreportlist);

  // useEffect(() => {
  //   if (reportPanelSelector) {
  //     const allReportList = reportPanelSelector.map((element) => {
  //       return {
  //         id: element.id,
  //         report_number: element.report_number,
  //         description: element.description,
  //         start_date: element.start_date,
  //         end_date: element.end_date,
  //       };
  //     });
  //     setAllReportList(allReportList);
  //   }
  // }, [reportPanelSelector]);

  const addreportPanelSelector = useSelector(
    (state) => state.addreportresult
  );

  useEffect(() => {
    if (addreportPanelSelector) {
      dispatch(getReportList({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [addreportPanelSelector]);

  // const updatereportPanelSelector = useSelector(
  //   (state) => state.updateReportResult
  // );

  // useEffect(() => {
  //   if (updatereportPanelSelector) {
  //     dispatch(getReportList({ payload: {}, URL: url }));
  //   }
  //   setIsAddFormVisible(false);
  // }, [updatereportPanelSelector]);

  const data = [
    {
      
      start_date: "Tiger Nixon",
      mileage_rate: "61",
    },
  ];
  const columns = [
    // {
    //   title: "Sr No",
    //   dataIndex: "id",
    //   key: "id",
    // },

    {
      title: "Start Date",
      dataIndex: "start_date",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.start_date.length - b.start_date.length,
    },
    {
      title: "Mileage Rate",
      dataIndex: "end_date",
      render: (text) => (
        <span>{text ? new Date(text).toLocaleDateString() : ""}</span>
      ),
      sorter: (a, b) => a.end_date.length - b.end_date.length,
    },

    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Space size="small">
          <Button
            type="success"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
     <div className="page-wrapper">
     <div className="content container-fluid">
      <div className="input-block row">
         {/* Page Header */}
         <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Mileage</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Mileage Report</li>
                </ul>
              </div>
              
            </div>
          </div>
          {/* /Page Header */}
        <label className="col-lg-3 col-form-label">Default Unit</label>
        <div className="col-lg-9">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender_male"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="gender_male">
              Km
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender_female"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="gender_female">
              Mile
            </label>
          </div>
        </div>
      </div>

      <div className="input-block row">
        <label className="col-lg-3 col-form-label">Default Category</label>
        <div className="col-lg-9">
          <select className="select">
            <option>Travel reimbursment</option>
            <option value={1}>A+</option>
            <option value={2}>O+</option>
            <option value={3}>B+</option>
            <option value={4}>AB+</option>
          </select>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h2>Mileage rates</h2>
            <p>
             Any mileage expense recorded on or after the start date will have the corresponding mileage rate. You can create a default rate (created without specifying a data), which will be applocable for mileage expenses recorded before the initial start date.
            </p>
            <div className="table-responsive">
            <div className="col-auto float-end ms-auto">
                 <Link
                  to="#"
                  className="btn add-btn"
                  onClick={() => {
                    setEditReportData(null);
                    setIsAddFormVisible(true);
                  }}
                >
                  <i className="fa fa-plus" /> Add Report
                </Link>
              </div>
              <Table
                className="table-striped"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
              />

              
              {/* <Modal
                title="Confirm Delete"
                open={isDeleteConfirmationVisible}
                onOk={handleDeleteConfirmation}
                onCancel={() => setIsDeleteConfirmationVisible(false)}
              >
                Are you sure you want to delete this item?
              </Modal> */}
              {/* <Modal
                title={viewReportData ? "View Report" : "Update Report Details"}
                open={viewReportData}
                onCancel={() => {
                  setIsAddFormVisible(false);
                  setViewReportData(null);
                }}
                footer={null}
              >
                {viewReportData (
                  <div>
                    <p>Start Date: {viewReportData.start_date}</p>
                    <p>Mileage rate : {viewReportData.end_date}</p>
                  </div>
                ) 
                }
              </Modal> */}
            </div>
          </div>
        </div>
      </div>

      <div className="input-block row">

        <div className="col-lg-1">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="eg:03.31.2015"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            
          </div>
          <div className="form-group">
               
                  <input
                    type="number"
                    className="form-control"
                    placeholder="USD"
                    // value={usdAmount}
                    // onChange={(e) => setUsdAmount(e.target.value)}
                  />
                </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Mileage;
