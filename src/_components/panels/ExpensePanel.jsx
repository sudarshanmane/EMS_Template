import React, { useEffect, useRef, useState } from "react";
import { Table, Button, Space, Modal, Form, Row, Col, Select } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteExpensepanelAction,
  getExpenseList,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import { URLS } from "../../Globals/URLS";
import Addexpense from "../../_components/screens/Addexpense";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpensePanel = () => {
  const [allExpenseList, setAllExpense] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [selectedManagerId, setSelectedManagerId] = useState(null);
  const url = URLS.GET_EXPENSE_LIST_URL;
  const dispatch = useDispatch();
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const handleViewInvoice = (attachment) => {
    setSelectedInvoice(attachment);
    setInvoiceModalVisible(true);
  };

  const closeInvoiceModal = () => {
    setInvoiceModalVisible(false);
    setSelectedInvoice(null);
  };
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  function getPageDetails(url) {
    dispatch(getExpenseList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchexpensepanel(url) {
    dispatch(getExpenseList({ payload: {}, URL: url }));
  }

  useEffect(() => {
    fetchexpensepanel(url);
  }, []);

  const expensePanelSelector = useSelector((state) => state.getexpenselist);
  useEffect(() => {
    if (expensePanelSelector) {
      const allExpenseList = expensePanelSelector.map((element) => {
        return {
          id: element.id,
          employee: element.employee?.username,
          expense_name: element.expense_name.item_name,
          description: element.description,
          total_amt: element.total_amt,
          paid_by: element.paid_by,
          expense_date: element.expense_date,
          attachment: element.attachment,
          approved_amt: element.approved_amt,
          status: element.status,
          submit: element.submit,
          approved_by: element.approved_by,
        };
      });
      setAllExpense(allExpenseList);
    }
  }, [expensePanelSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteExpensepanelAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpense((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  const updateExpensepanelResultSelector = useSelector(
    (state) => state.updateexpenseResult
  );
  console.log(updateExpensepanelResultSelector);
  useEffect(() => {
    if (updateExpensepanelResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpensepanelResultSelector]);

  const showApproveModal = (record) => {
    setSelectedRecord(record);
    setApproveModalVisible(true);
  };

  const columns = [
    {
      title: "Sr No",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Employee",
      dataIndex: "employee",
      key: "username",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Expense Name",
      dataIndex: "expense_name",
      key: "item_name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Total Amount",
      dataIndex: "total_amt",
      key: "total_amt",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Paid By",
      dataIndex: "paid_by",
      key: "paid_by",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Expense Date",
      dataIndex: "expense_date",
      key: "expense_date",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (attachment) => (
        <div>
          <button
            type="button"
            className="btn btn-info me-1"
            onClick={() => handleViewInvoice(attachment)}
          >
            view invoice
          </button>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "New"
                  ? "far fa-dot-circle text-purple"
                  : text === "Pending"
                  ? "far fa-dot-circle text-info"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-danger"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-purple" /> New
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Pending
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Declined
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Submit ",
      dataIndex: "submit",
      key: "submit",
      render: (text, record) => (
        <Space size="small">
          <Button
            type="success"
            icon={<SendOutlined />}
            onClick={() => showApproveModal(record)}
          ></Button>
        </Space>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
          <Button
            type="warning"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
          <Button
            type="success"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
        </Space>
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
                  <li className="breadcrumb-item active">Expense List</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link to="/home/addexpense" className="btn add-btn">
                  <i className="fa fa-plus" /> Add Expense
                </Link>
              </div>
            </div>
          </div>
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
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate1}
                    onChange={handleDateChange1}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">Date</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block form-focus select-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={selectedDate2}
                    onChange={handleDateChange2}
                    className="form-control floating datetimepicker"
                    type="date"
                  />
                </div>
                <label className="focus-label">Date</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <Link to="#" className="btn btn-success btn-block w-100">
                {" "}
                Search{" "}
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      pagination={{
                        total: allExpenseList ? allExpenseList.length : 0,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={allExpenseList}
                      rowKey={(record) => record.id}
                    />

                    <Modal
                      title={
                        editItemData
                          ? "Edit Expense Itemization"
                          : "Add Expense Itemization"
                      }
                      open={isAddFormVisible}
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      footer={null}
                      width={600}
                    >
                      <Addexpense initialData={editItemData} url={url} />
                    </Modal>
                    <Modal
                      title="Confirm Delete"
                      open={isDeleteConfirmationVisible}
                      onOk={handleDeleteConfirmation}
                      onCancel={() => setIsDeleteConfirmationVisible(false)}
                    >
                      Are you sure you want to delete this item?
                    </Modal>
                    <Modal
                      title="Approve Item"
                      visible={approveModalVisible}
                      onCancel={() => setApproveModalVisible(false)}
                      // onOk={ handelsubmittrue(selectedRecord, selectedManagerId)}
                      width={500}
                      footer={null}
                    >
                      <Form layout="vertical">
                        <Row gutter={20}>
                          <Col span={12}>
                            <Form.Item
                              label="Select Manager"
                              name="manager" // Correct the 'name' attribute
                            >
                              <Select
                                onChange={(value) =>
                                  setSelectedManagerId(value)
                                }
                                style={{ width: "100%" }}
                                // options={managerList}
                              ></Select>
                            </Form.Item>
                            <Button
                              type="primary"
                              onClick={() =>
                                handelsubmittrue(
                                  selectedRecord,
                                  selectedManagerId
                                )
                              }
                            >
                              OK
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Modal>
                    <Modal
                      title="View Invoice"
                      visible={invoiceModalVisible}
                      onCancel={closeInvoiceModal}
                      footer={null}
                    >
                      {selectedInvoice && (
                        <img
                          src={selectedInvoice}
                          alt="Invoice"
                          style={{ maxWidth: "100%" }}
                        />
                      )}
                    </Modal>
                    <Modal
                      title={
                        viewCompanyData
                          ? "View Expense"
                          : "Update Expense Details"
                      }
                      open={viewCompanyData}
                      onCancel={() => {
                        setIsAddFormVisible(false);
                        setViewCompanyData(null);
                      }}
                      width={600}
                      footer={null}
                    >
                      {viewCompanyData ? (
                        <div>
                          <p>Employee: {viewCompanyData.employee}</p>
                          <p>Expense Name: {viewCompanyData.expense_name}</p>
                          <p>Description : {viewCompanyData.description}</p>
                          <p>Total Amount : {viewCompanyData.total_amt}</p>
                          <p>Paid By : {viewCompanyData.paid_by}</p>
                          <p>Expense Date : {viewCompanyData.expense_date}</p>
                          <p>Attachment : {viewCompanyData.attachment}</p>
                          <p>Status : {viewCompanyData.status}</p>
                          <p>Submit : {viewCompanyData.submit}</p>
                        </div>
                      ) : (
                        <Addexpense
                          initialData={editItemData || null}
                          url={url}
                          setIsAddFormVisible={setIsAddFormVisible}
                          isAddForm={editItemData}
                        />
                      )}
                    </Modal>
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

export default ExpensePanel;
