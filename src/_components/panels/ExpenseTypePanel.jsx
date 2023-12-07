import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenseTypeAction,
  exportExpenseTypeAction,
  getExpenseTypePanelAction,
} from "../../store/Action/Actions";
import Expensetypes from "../../_components/screens/Expensetypes";
import { URLS } from "../../Globals/URLS";
import { Link } from "react-router-dom";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseTypePanel = () => {
  const dispatch = useDispatch();
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [allExpenseType, setAllExpenseType] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [url, setUrl] = useState(URLS.EXPENSE_TYPE_PANEL_URL + "?page=1");
  const expensePanelSelector = useSelector(
    (state) => state.getExpenseTypePanelResult
  );

  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function getPageDetails(url) {
    dispatch(getExpenseTypePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.EXPENSE_TYPE_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExpenseTypeData(url) {
    dispatch(getExpenseTypePanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.EXPENSE_TYPE_PANEL_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchExpenseTypeData(url);
  }, []);

  useEffect(() => {
    if (expensePanelSelector) {
      console.log(expensePanelSelector);
      const expenseTypeList = expensePanelSelector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            id: element.id,
            expense_type_name: element.expense_type_name,
            accounting_coding_type:
              element.accounting_coding_type?.accounting_code,
            quantity_label: element.quantity_label,
            amount_label: element.amount_label,
            cost_formula: element.cost_formula,
            quantity_formula: element.quantity_formula,
          };
        }
      );
      setAllExpenseType(expenseTypeList);
      let pageObj = { ...paginationCount };
      pageObj.count = expensePanelSelector.count;
      pageObj.page_size = expensePanelSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expensePanelSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const updateExpenseTypeResultSelector = useSelector(
    (state) => state.updateExpenseTypeResult
  );

  useEffect(() => {
    if (updateExpenseTypeResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpenseTypeResultSelector]);

  useEffect(() => {
    if (isAddFormVisible) {
    }
  }, [isAddFormVisible]);

  // Delete functionality
  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteExpenseTypeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpenseType((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //export button functionality

  function downloadExlsFiles() {
    let exportUrl = URLS.EXPENSE_TYPE_PANEL_URL + "?export=csv";

    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportExpenseTypeAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportExpenseTypeResult);

  useEffect(() => {
    if (csvUrlSelector) {
      let csvURL = URLS.BASE_URL_EXPORT + csvUrlSelector.csv_file_name;
      console.log("csvURLcsvURL", csvURL);

      let a = document.createElement("a");
      a.setAttribute("href", csvURL);
      a.setAttribute("download", "");
      a.textContent = "Download CSV File";

      document.body.appendChild(a);
      a.click();
    }
  }, [csvUrlSelector]);

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  return (
    <>
      <Offcanvas />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Type</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn"
                  // data-bs-toggle="modal"
                  // data-bs-target="#add_leave"
                  onClick={() => {
                    setEditItemData(null);
                    setIsAddFormVisible(true);
                  }}
                >
                  <i className="fa fa-plus" /> Add Type
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense Type</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
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
                        <div className="input-block form-focus select-focus">
                          <div className="cal-icon">
                            <DatePicker
                              selected={selectedDate1}
                              onChange={handleDateChange1}
                              className="form-control floating"
                              type="date"
                              placeholderText="2023-07-14"
                            />
                            <label className="focus-label">From</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="input-block form-focus select-focus">
                          <div className="cal-icon">
                            <DatePicker
                              selected={selectedDate2}
                              onChange={handleDateChange2}
                              className="form-control floating"
                              type="date"
                              placeholderText="2023-07-14"
                            />
                            <label className="focus-label">To</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <Link
                          to="#"
                          className="btn btn-success btn-block w-100"
                          // value={searchTerm}
                          // onChange={(e) => handleSearch(e.target.value)}
                          // ref={inputSearchRef}
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
                    {/* Search Filter */}
                    {/* <Input
                        placeholder="Search..."
                        style={{ width: "100%", height: "100%" }}
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        ref={inputSearchRef}
                      />

                      <button
                        type="button"
                        className="btn btn-secondary me-1"
                        icon={<SearchOutlined />}
                        onClick={handleSearch}
                      >
                        Search
                      </button>
                      <button
                        type="button"
                        className="btn btn-success me-1"
                        icon={<DownloadOutlined />}
                        onClick={() => downloadExlsFiles()}
                      >
                        Export
                      </button> */}

                    <Table
                      dataSource={allExpenseType}
                      pagination={{
                        total: allExpenseType.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      // columns={columns}
                      bordered
                      rowKey={(record) => record.id}
                      columns={[
                        {
                          title: "Sr No",
                          dataIndex: "srno",
                          key: "srno",
                        },
                        {
                          title: "Name",
                          dataIndex: "expense_type_name",
                          key: "expense_type_name",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Account Code",
                          dataIndex: "accounting_coding_type",
                          key: "accounting_Code",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Quantity",
                          dataIndex: "quantity_label",
                          key: "quantity_label",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Amount",
                          dataIndex: "amount_label",
                          key: "amount_label",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Cost Formula",
                          dataIndex: "cost_formula",
                          key: "cost_formula",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Actions",
                          key: "actions",
                          render: (record) => (
                            <Space size="small">
                              <Button
                                type="primary"
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
                      ]}
                    />

                    <Modal
                      title={
                        editItemData
                          ? "Update Expense Type"
                          : "Add Expense Type"
                      }
                      open={isAddFormVisible}
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      width={600}
                      footer={null}
                    >
                      <Expensetypes
                        initialData={editItemData || null}
                        url={url}
                        setIsAddFormVisible={setIsAddFormVisible}
                        isAddForm={editItemData}
                      />
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
                      title={
                        viewCompanyData
                          ? "View Expense Type"
                          : "Update Expense Type"
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
                          <p>Name: {viewCompanyData.expense_type_name}</p>
                          <p>
                            Account Code:{" "}
                            {viewCompanyData.accounting_coding_type}
                          </p>
                          <p>Quantity: {viewCompanyData.quantity_label}</p>
                          <p>Amount: {viewCompanyData.amount_label}</p>
                          <p>Cost Formula: {viewCompanyData.cost_formula}</p>
                        </div>
                      ) : (
                        <Expensetypes
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

export default ExpenseTypePanel;
