import React, { useEffect, useRef, useState } from "react";
import { Table, Button, Space, Modal, Pagination } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserPanelAction,
  deleteUserAction,
  exportUserAction,
} from "../../store/Action/Actions";
import Users from "../../_components/screens/Users";
import { URLS } from "../../Globals/URLS";
import Input from "rc-input";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function UserPanel() {
  const dispatch = useDispatch();
  const [allUsers, setAllUsers] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });

  const [url, setUrl] = useState(URLS.GET_MANAGER_LIST_URL + "?page=1");

  const userPanelSelector = useSelector((state) => state.addUserPanelResult);

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
    dispatch(addUserPanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_MANAGER_LIST_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchUserData(url) {
    dispatch(addUserPanelAction({ payload: {}, URL: url }));
  }
  // Search Functionality
  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.GET_MANAGER_LIST_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }

  useEffect(() => {
    fetchUserData(url);
  }, []);

  useEffect(() => {
    if (userPanelSelector) {
      console.log(userPanelSelector);

      const AllUserList = userPanelSelector.results.map((element, index) => {
        return {
          srno: index + 1,
          id: element.id,
          first_name: element.first_name,
          last_name: element.last_name,
          username: element.username,
          email: element.email,
          accounting_code: element.accounting_code,
          mobile_number: element.mobile_number,
          company_id: element.company_id,
          user_role: element.user_role,
        };
      });

      setAllUsers(AllUserList);
      let pageObj = { ...paginationCount };
      pageObj.count = userPanelSelector.count;
      pageObj.page_size = userPanelSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [userPanelSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const updateAddUserResultSelector = useSelector(
    (state) => state.updateUserResult
  );

  useEffect(() => {
    if (updateAddUserResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateAddUserResultSelector]);

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
    dispatch(deleteUserAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllUsers((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.GET_MANAGER_LIST_URL + "?export=csv";

    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportUserAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportUserResult);

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
                  <li className="breadcrumb-item active">User List</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link to="/home/addusers" className="btn add-btn">
                  <i className="fa fa-plus" /> Add User
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">User List</h4>
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

                    <Table
                      dataSource={allUsers}
                      pagination={{
                        // total: allExpense.length,
                        total: allUsers.length,
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
                          title: "First Name",
                          dataIndex: "first_name",
                          key: "first_name",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Last Name",
                          dataIndex: "last_name",
                          key: "last_name",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Username",
                          dataIndex: "username",
                          key: "username",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Email",
                          dataIndex: "email",
                          key: "email",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Accounting Code",
                          dataIndex: "accounting_code",
                          key: "accounting_code",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "Mobile Number",
                          dataIndex: "mobile_number",
                          key: "mobile_number",
                        },
                        {
                          title: "Company Id",
                          dataIndex: "company_id",
                          key: "company_id",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        {
                          title: "User Role",
                          dataIndex: "user_role",
                          key: "user_role",
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
                                type="default"
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
                      title={editItemData ? "Update User" : "Add User"}
                      open={isAddFormVisible}
                      onCancel={() => setIsAddFormVisible(false)}
                      onOk={() => setIsAddFormVisible(false)}
                      width={600}
                      footer={null}
                    >
                      <Users
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
                      title={viewCompanyData ? "View User" : "Update User"}
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
                          <p>First Name: {viewCompanyData.first_name}</p>
                          <p>Last Name: {viewCompanyData.last_name}</p>
                          <p>Username: {viewCompanyData.username}</p>
                          <p>Email: {viewCompanyData.email}</p>
                          <p>
                            Accounting Code: {viewCompanyData.accounting_code}
                          </p>
                          <p>Mobile Number: {viewCompanyData.mobile_number}</p>
                          <p>Company Id: {viewCompanyData.company_id}</p>
                          <p>User Role: {viewCompanyData.user_role}</p>
                        </div>
                      ) : (
                        <Users
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

export default UserPanel;
