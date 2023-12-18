import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal, Pagination } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExternalAccountCodeAction,
  exportExternalAccountCodeAction,
  getExternalAccountCodePanelAction,
} from "../../store/Action/Actions";
import AddExternalAccountCode from "../../_components/screens/AddExternalAccountCode";
import { URLS } from "../../Globals/URLS";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ExternalAccountPanel() {
  const dispatch = useDispatch();

  const [allItems, setAllItems] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [url, setUrl] = useState(
    URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?page=1"
  );

  const externalAccountCodeSelector = useSelector(
    (state) => state.getExternalAccountCodeResult
  );
  console.log(externalAccountCodeSelector);

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
    dispatch(getExternalAccountCodePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExternalCodeAccountData(url) {
    dispatch(getExternalAccountCodePanelAction({ payload: {}, URL: url }));
  }
  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchExternalCodeAccountData(url);
  }, []);

  useEffect(() => {
    if (externalAccountCodeSelector) {
      const externalAccountCodeList = externalAccountCodeSelector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            id: element.id,
            accounting_code: element.table.accounting_code,
            account_code: element.account_code,
            account_type: element.table.account_type,
            enabled: element.enabled,
          };
        }
      );
      setAllItems(externalAccountCodeList);
      let pageObj = { ...paginationCount };
      pageObj.count = externalAccountCodeSelector.count;
      pageObj.page_size = externalAccountCodeSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [externalAccountCodeSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  // const handleDeleteConfirmation = () => {
  //   const deletedItemId = deleteItemData.id;
  //   setAllItems((prevItems) =>
  //     prevItems.filter((item) => item.id !== deletedItemId)
  //   );
  //   setIsDeleteConfirmationVisible(false);
  // };

  const updateExternalAccountSelector = useSelector(
    (state) => state.updateExternalAccountCodeResult
  );

  useEffect(() => {
    if (updateExternalAccountSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExternalAccountSelector]);

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
    dispatch(deleteExternalAccountCodeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllItems((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?export=csv";

    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportExternalAccountCodeAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector(
    (state) => state.exportExternalAccountResult
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
                  <li className="breadcrumb-item active">External Account</li>
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
                  <i className="fa fa-plus" /> Add External Code
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">External Account</h4>
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

        <button type="button"  className="btn btn-secondary me-1"
        icon={<SearchOutlined />} onClick={handleSearch}>
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
                      dataSource={allItems}
                      pagination={{
                        total: allItems.length,
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
                          dataIndex: "account_code",
                          key: "account_type",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Enabled",
                          dataIndex: "enabled",
                          key: "enabled",
                          sorter: (a, b) => a.name.length - b.name.length,
                          render: (text, record) => (
                            <Switch checked={record.enabled} />
                          ),
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
                          ? "Update External Account Code"
                          : "Add External Account Code"
                      }
                      open={isAddFormVisible}
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      width={600}
                      footer={null}
                    >
                      <AddExternalAccountCode
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
                          ? "View External Account Code"
                          : "Update External Account Code"
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
                          <p>Account Type: {viewCompanyData.account_code}</p>
                        </div>
                      ) : (
                        <AddExternalAccountCode
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
}

export default ExternalAccountPanel;
