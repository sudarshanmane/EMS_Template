import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAccountingcodeAction,
  exportaccountingcode,
  getaccountingcodePanelAction,
} from "../../store/Action/Actions";
import AddAccountCode from "../../_components/screens/AddAccountCode";
import { URLS } from "../../Globals/URLS";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AccountCodePanel = () => {
  const [allAccountCode, setAllAccountCode] = useState([]);
  const [setNameFilter] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });

  const [url, setNewUrl] = useState(URLS.GET_ACCOUNTINGCODE_PANEL_URL);

  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const dispatch = useDispatch();
  // const url = URLS.GET_ACCOUNTINGCODE_PANEL_URL;

  const accountingcodeselector = useSelector(
    (state) => state.panelaccountingcodeResult
  );

  function getPageDetails(url) {
    dispatch(getaccountingcodePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_ACCOUNTINGCODE_PANEL_URL + "?page=" + page;
    setNewUrl(urlNew);
    getPageDetails(urlNew);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchAccountingcodedata(url) {
    dispatch(getaccountingcodePanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTearm = inputSearchRef.current.input.value;
    setSearchTerm(searchTearm);
    let urlForSearch = URLS.GET_ACCOUNTINGCODE_PANEL_URL;
    const updatedUrl = searchTearm
      ? `${urlForSearch}?search=${searchTearm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchAccountingcodedata(url);
  }, []);

  useEffect(() => {
    if (accountingcodeselector) {
      const allAccountCode = accountingcodeselector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            accounting_code: element.accounting_code,
            account_type: element.account_type,
            reference_id: element.reference_id,
            enabled: element.enabled,
            description: element.description,
            id: element.id,
          };
        }
      );
      setAllAccountCode(allAccountCode);
      let pageObj = { ...paginationCount };
      pageObj.count = accountingcodeselector.count;
      pageObj.page_size = accountingcodeselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [accountingcodeselector]);

  const handleEdit = (record) => {
    console.log("Edit clicked for record:", record);
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteAccountingcodeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllAccountCode((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };
  const updateaccountingcodeselector = useSelector(
    (state) => state.updateAccountingResult
  );

  useEffect(() => {
    if (updateaccountingcodeselector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateaccountingcodeselector]);

  useEffect(() => {
    if (isAddFormVisible) {
    }
  }, [isAddFormVisible]);

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.GET_ACCOUNTINGCODE_PANEL_URL + "?export=csv";
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    // Dispatch the export action
    dispatch(exportaccountingcode({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector(
    (state) => state.exportaccountingcodeResult
  );

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
                  <li className="breadcrumb-item active">Accounting Code</li>
                </ul>
                <div className="col-auto float-end ms-auto">
                  <button
                    type="button"
                    className="btn add-btn"
                    onClick={() => {
                      setEditItemData(null);
                      setIsAddFormVisible(true);
                    }}
                  >
                    {" "}
                    <i className="fa fa-plus" />
                    Add Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0"> Accounting Code</h4>
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
                      dataSource={allAccountCode}
                      pagination={{
                        // total: allExpense.length,
                        total: allAccountCode.length,
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
                          title: "Accounting Code",
                          dataIndex: "accounting_code",
                          key: "accounting_code",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Account Type",
                          dataIndex: "account_type",
                          key: "account_type",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Refrence Id",
                          dataIndex: "reference_id",
                          key: "reference_id",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Enabled",
                          dataIndex: "enabled",
                          key: "enabled",
                          render: (text, record) => (
                            <Switch checked={record.enabled} />
                          ),
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
                                value={searchTerm}
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
                          ? "Edit Accounting Code"
                          : "Add Accounting Code"
                      }
                      visible={isAddFormVisible} // Use "visible" instead of "open"
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      footer={null}
                      width={600}
                    >
                      <AddAccountCode
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
                          ? "View accountcode"
                          : "Update accounting Details"
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
                          <p>
                            Accounting Code: {viewCompanyData.accounting_code}
                          </p>
                          <p>Account Type: {viewCompanyData.account_type}</p>
                          <p>Reference Id: {viewCompanyData.reference_id}</p>
                        </div>
                      ) : (
                        <AddAccountCode
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

export default AccountCodePanel;
