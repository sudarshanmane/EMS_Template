import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getReportDetails, getReportList, submitReport, submitReportAction } from "../../store/Action/Actions";
import { Modal, Space, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import { URLS } from "../../Globals/URLS";

const ViewReportPage = () => {
  const navigate = useNavigate();
  const [allExpenses, setAllExpenses] = useState([]);
  const [selectedReceiptUrl, setSelectedReceiptUrl] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const url = URLS.VIEW_REPORT_URL;
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10,
    current: 1,
  });

  const onSubmitReport = () => {
    dispatch(submitReportAction({ id: id }));
  };

  const SubmitReportSelector = useSelector((state) => state.submitreport);

  useEffect(() => {
    if (SubmitReportSelector) {
       dispatch(getReportList({ payload: {}, URL: url }));
        alert(SubmitReportSelector?.Status);
        navigate("/home/AllReports");
      }
  }, [SubmitReportSelector]);

  const reportDetailsSelector = useSelector((state) => state.reportDetails);
  useEffect(() => {
    if (reportDetailsSelector) {
      const allExpenses = reportDetailsSelector?.expenses?.map((element) => ({
        id: element.id,
        expense_date: element.expense_date,
        expense_bill: element.expense_bill,
        category: element.category,
        amount: element.amount,
      }));

      setAllExpenses(allExpenses);
    }
  }, [reportDetailsSelector]);

  useEffect(() => {
    dispatch(getReportDetails({ id }));
  }, []);

  const handleViewReceipt = (record) => {
    setSelectedReceiptUrl(record || "");
    setModalVisible(true);
  };

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      render: (text, record, index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },
    },
    {
      title: "Date",
      dataIndex: "expense_date",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Receipt",
      dataIndex: "expense_bill",
      render: (text, record) => (
        <Space>
          <EyeOutlined
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleViewReceipt(record.expense_bill)}
          />
        </Space>
      ),
    },
    {
      title: "Category ",
      dataIndex: "category",
      sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div>
            <Link className="btn add-btn" to="/home/AllReports">
              <i className="fa fa-right" /> Back
            </Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Report</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          {reportDetailsSelector && (
                            <>
                              <p>
                                Report No:
                                {reportDetailsSelector.report_number}
                              </p>
                              <p>
                                Description:
                                {reportDetailsSelector.description}
                              </p>
                              <p>
                                Start Date:
                                {reportDetailsSelector.start_date}
                              </p>
                              <p>
                                End Date:
                                {reportDetailsSelector.end_date}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-auto float-end ms-auto">
                      <Link
                        to="#"
                        className="btn add-btn"
                        onClick={() => onSubmitReport()}
                      >
                        <i className="fa fa-right" /> Submit
                      </Link>
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

          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">All Expenses</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      dataSource={allExpenses}
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
        </div>
      </div>
    </>
  );
};

export default ViewReportPage;
