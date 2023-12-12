import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal, Pagination } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenseitemizationAction,
  exportItemizationListAction,
  getPanelItemization,
} from "../../store/Action/Actions";
import ExpenseItemizationField from "../screens/ExpenseItemization";

import { URLS } from "../../Globals/URLS";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseItemizationPanel = () => {
  const [allExpenseItemization, setAllExpenseItemization] = useState([]);
  const [setNameFilter] = useState("");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(URLS.GET_ITEMIZATION_PANEL_URL);

  const dispatch = useDispatch();

  const getitemeselector = useSelector((state) => state.panelitemizationResult);

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
    dispatch(getPanelItemization({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    const urlNew = URLS.GET_ITEMIZATION_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchItemaizationdata(url) {
    dispatch(getPanelItemization({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTearm = inputSearchRef.current.input.value;
    setSearchTerm(searchTearm);
    let urlForSearch = URLS.GET_ITEMIZATION_PANEL_URL;
    const updatedUrl = searchTearm
      ? `${urlForSearch}?search=${searchTearm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchItemaizationdata(url);
  }, []);

  useEffect(() => {
    if (getitemeselector) {
      const allExpenseItemization = getitemeselector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            expense_item: element.expense_item.item_name,
            max_reimbursable_amount: element.max_reimbursable_amount,
            reimbursable: element.reimbursable,
            id: element.id,
          };
        }
      );
      setAllExpenseItemization(allExpenseItemization);
      let pageObj = { ...paginationCount };
      pageObj.count = getitemeselector.count;
      pageObj.page_size = getitemeselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [getitemeselector]);

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
    dispatch(deleteExpenseitemizationAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpenseItemization((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  const updateExpenseItemizationSelector = useSelector(
    (state) => state.updateitemizationResult
  );
  useEffect(() => {
    if (updateExpenseItemizationSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpenseItemizationSelector]);

  useEffect(() => {
    if (isAddFormVisible) {
    }
  }, [isAddFormVisible]);

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (selectedKeys) => {
  //     setSelectedRowKeys(selectedKeys);
  //   },
  //   checkStrictly: true,
  // };
  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.GET_ITEMIZATION_PANEL_URL + "?export=csv";
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    // Dispatch the export action
    dispatch(exportItemizationListAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportitemizationResult);

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
                  <li className="breadcrumb-item active">
                    Expense Itemization
                  </li>
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
                  <i className="fa fa-plus" /> Add Itemization
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense Itemization</h4>
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
                      dataSource={allExpenseItemization}
                      pagination={{
                        // total: allExpense.length,
                        total: allExpenseItemization.length,
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
                          title: "Item Name",
                          dataIndex: "expense_item",
                          key: "item_name",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Max Reimbursable Amount",
                          dataIndex: "max_reimbursable_amount",
                          key: "max_reimbursable_amount",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Reimbursable ",
                          dataIndex: "reimbursable",
                          key: "reimbursable",
                          sorter: (a, b) => a.name.length - b.name.length,
                          render: (text, record) => (
                            <Switch checked={record.reimbursable} />
                          ),
                        },
                        {
                          title: "Actions",
                          key: "actions",
                          render: (text, record) => (
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
                          ? "Edit Expense Itemization"
                          : "Add Expense Itemization"
                      }
                      open={isAddFormVisible}
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      footer={null}
                      width={600}
                    >
                      <ExpenseItemizationField
                        initialData={editItemData || null}
                        url={url}
                        setIsAddFormVisible={setIsAddFormVisible}
                        isAddForm={editItemData}
                      />
                    </Modal>

                    <Modal
                      title="Confirm Delete"
                      visible={isDeleteConfirmationVisible}
                      onOk={handleDeleteConfirmation}
                      onCancel={() => setIsDeleteConfirmationVisible(false)}
                    >
                      Are you sure you want to delete this item?
                    </Modal>
                    <Modal
                      title={
                        viewCompanyData
                          ? "View ExpenseItemizationField"
                          : "Update ExpenseItemizationField Details"
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
                          <p>Item Name: {viewCompanyData.expense_item}</p>
                          <p>
                            Max Reimbursable Amount:{" "}
                            {viewCompanyData.max_reimbursable_amount}
                          </p>
                          {/* <p>Reimbursable : {viewCompanyData.reimbursable}</p> */}
                        </div>
                      ) : (
                        <ExpenseItemizationField
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

export default ExpenseItemizationPanel;
