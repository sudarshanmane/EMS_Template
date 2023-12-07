import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Modal,
  Pagination,
  Form,
  Row,
  Col,
  Select,
} from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteExpensepanelAction,
  expensetableTrueSubmit,
  exportExpenseListAction,
  getManagerListAction,
  getexpensePanelListAction,
  managercardRejectAction,
  managercardapprovelAction,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import Addexpense from "../../_components/screens/Addexpense";
import { SendOutlined } from "@ant-design/icons";

import { URLS } from "../../Globals/URLS";

import { Option } from "antd/es/mentions";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CardRejectList = () => {
  const [allExpense, setAllExpense] = useState([]);

  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [selectedManagerId, setSelectedManagerId] = useState(null);
  const [managerList, setManagerList] = useState([]);
  //  const [expensePanelUrl,setExpensePanelUrl  ] = useState(URLS.GET_EXPENSE_PANEL_URL)
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(URLS.MANAGER_CARD_REJECT_LIST_URL);
  const dispatch = useDispatch();
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const managerRejectSelector = useSelector(
    (state) => state.managerrejectResult
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
    dispatch(managercardRejectAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.MANAGER_CARD_REJECT_LIST_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchcardRejectpanel(url) {
    dispatch(managercardRejectAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.MANAGER_CARD_REJECT_LIST_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }

  useEffect(() => {
    fetchcardRejectpanel(url);
  }, []);

  useEffect(() => {
    if (managerRejectSelector) {
      const allExpense = managerRejectSelector.results.map(
        (element, index) => ({
          srno: index + 1,
          id: element.id,
          employee: element.employee?.username,
          // expense_name: element.expense_name.item_name,
          description: element.description,
          total_amt: element.total_amt,
          // paid_by:element.paid_by,
          expense_date: element.expense_date,
          // attachment:element.attachment,
          // approved_amt:element.approved_amt,
          status: element.status,

          // approved_by:element.approved_by
        })
      );

      setAllExpense(allExpense);
      let pageObj = { ...paginationCount };
      pageObj.count = managerRejectSelector.count;
      pageObj.page_size = managerRejectSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [managerRejectSelector]);

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  //hendling submitbutton in expense column functionality

  //FETCH MANAGER LIST ON MODELDROPDOWN

  // const managerListSelector = useSelector(
  //   (state) => state.getManagerListResult
  // );

  // useEffect(() => {
  //   dispatch(getManagerListAction({}));
  // }, []);

  // useEffect(() => {
  //   if (managerListSelector) {
  //     console.log(managerListSelector);
  //     const ManagerResult = managerListSelector.results.map((element) => {
  //       return { label: element.username, value: element.id };
  //     });
  //     setManagerList(ManagerResult);
  //   }
  // }, [managerListSelector]);

  // //update or edit functionality
  // const updateExpensepanelResultSelector = useSelector(
  //   (state) => state.updateexpenseResult
  // );
  // console.log(updateExpensepanelResultSelector);
  // useEffect(() => {
  //   if (updateExpensepanelResultSelector) {
  //     setIsAddFormVisible(false);
  //     getPageDetails(url);
  //   }
  // }, [updateExpensepanelResultSelector]);

  // const showApproveModal = (record) => {
  //   setSelectedRecord(record);
  //   setApproveModalVisible(true);
  // };

  //  //export button functionality
  // function downloadExlsFiles() {
  //   dispatch(
  //     exportExpenseListAction({
  //       URL: URLS.GET_EXPENSE_PANEL_URL + "?export=csv",
  //     })
  //   );
  // }

  // const csvUrlSelector = useSelector(
  //   (state) => state.exportexpenselistResult
  // );

  // useEffect(() => {
  //   if (csvUrlSelector) {
  //     let csvURL = URLS.BASE_URL_EXPORT + csvUrlSelector.csv_file_name;
  //     console.log("csvURLcsvURL", csvURL);

  //     let a = document.createElement("a");
  //     a.setAttribute("href", csvURL);
  //     a.setAttribute("download", "");
  //     a.textContent = "Download CSV File";

  //     document.body.appendChild(a);
  //     a.click();
  //   }
  // }, [csvUrlSelector]);

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
                  <li className="breadcrumb-item active">Rejected Cards</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Rejected Cards</h4>
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

                    {/* <Input
        placeholder="Search..."
        style={{ width: '100%' }}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        ref={inputSearchRef} 
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
      >
        Search
      </Button>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        // onClick={() => downloadExlsFiles()}
      >
        Export
      </Button> */}
                    <Table
                      dataSource={allExpense}
                      pagination={{
                        total: allExpense.length,
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
                          title: "Employee",
                          dataIndex: "employee",
                          key: "username",
                          sorter: (a, b) => a.name.length - b.name.length,
                        },
                        // {
                        //   title: "Expense Name",
                        //   dataIndex: "expense_name",
                        //   key: "item_name",
                        // },
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
                        // {
                        //   title: "Paid By",
                        //   dataIndex: "paid_by",
                        //   key: "paid_by",
                        // },
                        {
                          title: "Expense Date",
                          dataIndex: "expense_date",
                          key: "expense_date",
                          sorter: (a, b) => a.name.length - b.name.length,
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
                                  <i className="far fa-dot-circle text-purple" />{" "}
                                  New
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="far fa-dot-circle text-info" />{" "}
                                  Pending
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="far fa-dot-circle text-success" />{" "}
                                  Approved
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="far fa-dot-circle text-danger" />{" "}
                                  Declined
                                </Link>
                              </div>
                            </div>
                          ),
                        },
                        {
                          title: "Actions",
                          key: "actions",
                          render: (text, record) => (
                            <Space size="small">
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
                        viewCompanyData
                          ? "View Expense"
                          : "Update expense Details"
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
                          {/* <p>Expense Name: {viewCompanyData.expense_name}</p> */}
                          <p>Description : {viewCompanyData.description}</p>
                          <p>Total Amount : {viewCompanyData.total_amt}</p>

                          <p>Expense Date : {viewCompanyData.expense_date}</p>

                          <p>Status : {viewCompanyData.status}</p>
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

export default CardRejectList;
