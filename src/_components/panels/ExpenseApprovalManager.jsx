// import {
//   CheckCircleOutlined,
//   CloseCircleOutlined,
//   DownloadOutlined,
//   PauseCircleOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import { Button, Form, Input, Modal, Pagination, Space, Table } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   exportFinanceMangerListAction,
//   financeManagerApproveAction,
//   financeManagerHoldAction,
//   financeManagerRejectAction,
//   getFinanceManagerExpenseListAction,
//   getManagerListAction,
// } from "../../store/Action/Actions";
// import { URLS } from "../../Globals/URLS";
// import {
//   onShowSizeChange,
//   itemRender,
// } from "../../MainPage/paginationfunction";
// import Offcanvas from "../../Entryfile/offcanvance";
// import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function ExpenseApprovalManager() {
//   const [allExpense, setAllExpense] = useState([]);
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [paginationCount, setPaginationCount] = useState({
//     count: 0,
//     page_size: 0,
//   });
//   const [searchTerm, setSearchTerm] = useState("");

//   const [rejectModalVisible, setRejectModalVisible] = useState(false);
//   const [holdModalVisible, setHoldModalVisible] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(false);

//   const [rejectRemark, setRejectRemark] = useState("");
//   const [holdRemark, setHoldRemark] = useState("");

//   const [managerList, setManagerList] = useState([]);
//   const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [editItemData, setEditItemData] = useState(null);
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false);



//   const [focused, setFocused] = useState(false);
//   const [selectedDate1, setSelectedDate1] = useState(null);
//   const [selectedDate2, setSelectedDate2] = useState(null);

//   const handleDateChange1 = (date) => {
//     setSelectedDate1(date);
//   };
//   const handleDateChange2 = (date) => {
//     setSelectedDate2(date);
//   };

//   const showRejectModal = (record) => {
//     setSelectedRecord(record);
//     setRejectModalVisible(true);
//   };

//   const showHoldModal = (record) => {
//     setSelectedRecord(record);
//     setHoldModalVisible(true);
//   };

//   const handleApproveClick = () => {
//     if (selectedRecord && selectedRecord.id) {
//       dispatch(
//         financeManagerApproveAction({ payload: {}, id: selectedRecord.id })
//       );
//     } else {
//       console.error("Selected record or record ID is undefined.");
//     }
//   };

//   const handleRejectClick = () => {
//     setRejectModalVisible(false);

//     if (selectedRecord && selectedRecord.id) {
//       dispatch(
//         financeManagerRejectAction({ payload: {}, id: selectedRecord.id })
//       );
//     } else {
//       console.error("Selected record or record ID is undefined.");
//     }
//   };

//   const handleHoldClick = () => {
//     dispatch(
//       financeManagerHoldAction({
//         payload: { remark: holdRemark },
//         id: selectedRecord.id,
//       })
//     );
//     setHoldModalVisible(false);
//   };

//   const dispatch = useDispatch();

//   const [url, setUrl] = useState(URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL);

//   const expenseselector = useSelector(
//     (state) => state.financemanagerexpenselistResult
//   );

//   function getPageDetails(url) {
//     dispatch(getFinanceManagerExpenseListAction({ payload: {}, URL: url }));
//   }

//   function changePage(page, pageSize) {
//     let urlNew = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL + "?page=" + page;
//     setUrl(urlNew);
//     getPageDetails(urlNew);
//   }

//   useEffect(() => {
//     getPageDetails(url);
//   }, []);

//   function fetchexpensepanel(url) {
//     dispatch(getFinanceManagerExpenseListAction({ payload: {}, URL: url }));
//   }
//   const inputSearchRef = useRef();

//   function handleSearch() {
//     let searchTerm = inputSearchRef.current.input.value;
//     setSearchTerm(searchTerm);
//     let urlForSearch = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL;
//     const updatedUrl = searchTerm
//       ? `${urlForSearch}?search=${searchTerm}`
//       : url;
//     getPageDetails(updatedUrl);
//   }
//   useEffect(() => {
//     fetchexpensepanel(url);
//   }, []);

//   useEffect(() => {
//     if (expenseselector) {
//       const allExpense = expenseselector.results.map((element, index) => {
//         return {
//           srno: index + 1,
//           employee: element.employee.username,
//           expense_name: element.expense_name.item_name,
//           description: element.description,
//           paid_by: element.paid_by,
//           expense_date: element.expense_date,
//           attachment: element.attachment,
//           approved_amt: element.approved_amt,
//           status: element.status,
//           submit: element.submit,
//           approved_by: element.approved_by,
//         };
//       });
//       setAllExpense(allExpense);
//       let pageObj = { ...paginationCount };
//       pageObj.count = expenseselector.count;
//       pageObj.page_size = expenseselector.page_size;
//       setPaginationCount(pageObj);
//     }
//   }, [expenseselector]);

//   const managerListSelector = useSelector(
//     (state) => state.getManagerListResult
//   );

//   useEffect(() => {
//     dispatch(getManagerListAction({}));
//   }, []);

//   useEffect(() => {
//     if (managerListSelector && managerListSelector.results) {
//       const managerResult = managerListSelector.results.map((element) => {
//         return { value: element.id, label: element.username };
//       });
//       setManagerList(managerResult);
//     }
//   }, [managerListSelector]);

//   const handleViewInvoice = (attachment) => {
//     setSelectedInvoice(attachment);
//     setInvoiceModalVisible(true);
//   };
//   const closeInvoiceModal = () => {
//     setInvoiceModalVisible(false);
//     setSelectedInvoice(null);
//   };

//   function downloadExlsFiles() {
//     let exportUrl = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL + "?export=csv";

//     if (searchTerm) {
//       exportUrl += `&search=${searchTerm}`;
//     }

//     dispatch(exportFinanceMangerListAction({ URL: exportUrl }));
//   }

//   const csvUrlSelector = useSelector(
//     (state) => state.exportFinanceManagerResult
//   );

//   useEffect(() => {
//     if (csvUrlSelector) {
//       let csvURL = URLS.BASE_URL_EXPORT + csvUrlSelector.csv_file_name;

//       let a = document.createElement("a");
//       a.setAttribute("href", csvURL);
//       a.setAttribute("download", "");
//       a.textContent = "Download CSV File";

//       document.body.appendChild(a);
//       a.click();
//     }
//   }, [csvUrlSelector]);

//   return (
//     <>
//       <Offcanvas />
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row">
//               <div className="col">
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/app/main/dashboard">Dashboard</Link>
//                   </li>
//                   <li className="breadcrumb-item active">
//                     Expense Approve Manager
//                   </li>
//                 </ul>
//               </div>

//               {/* ******************* Reimbursment Record Form********************** */}

//               {/* <div className="col-auto float-end ms-auto">
//                     <Link
//                       to="/home/ReimbursmentRecord"
//                       className="btn add-btn"
//                       // data-bs-toggle="modal"
//                       // data-bs-target="#add_leave"
//                       onClick={() => {
//                         setEditItemData(null);
//                         setIsAddFormVisible(true);
//                       }}
//                     >
//                       <i className="fa fa-plus" /> Add Expense Approvel
//                     </Link>
//                   </div>   */}

//                    {/* ******************* Reimbursment Record Form********************** */}


//             </div>
//           </div>

          

//           <div className="row">
//             <div className="col-sm-12">
//               <div className="card mb-0">
//                 <div className="card-header">
//                   <h4 className="card-title mb-0">Expense Approve Manager</h4>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                    {/* Search Filter */}
//                    <div className="row filter-row">
//                       <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
//                         <div
//                           className={
//                             focused
//                               ? "input-block form-focus focused"
//                               : "input-block form-focus"
//                           }
//                         >
//                           <input
//                             type="text"
//                             className="form-control floating"
//                             onFocus={() => setFocused(true)}
//                             onBlur={() => setFocused(false)}
//                           />
//                           <label className="focus-label">Search</label>
//                         </div>
//                       </div>
//                       <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
//                         <div className="input-block form-focus select-focus">
//                           <div className="cal-icon">
//                             <DatePicker
//                               selected={selectedDate1}
//                               onChange={handleDateChange1}
//                               className="form-control floating"
//                               type="date"
//                               placeholderText="2023-07-14"
//                             />
//                             <label className="focus-label">From</label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
//                         <div className="input-block form-focus select-focus">
//                           <div className="cal-icon">
//                             <DatePicker
//                               selected={selectedDate2}
//                               onChange={handleDateChange2}
//                               className="form-control floating"
//                               type="date"
//                               placeholderText="2023-07-14"
//                             />
//                             <label className="focus-label">To</label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
//                         <Link
//                           to="#"
//                           className="btn btn-success btn-block w-100"
//                           // value={searchTerm}
//                           // onChange={(e) => handleSearch(e.target.value)}
//                           // ref={inputSearchRef}
//                         >
//                           {" "}
//                           Search{" "}
//                         </Link>
//                       </div>
//                       <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
//                         <Link
//                           to="#"
//                           onClick={() => downloadExlsFiles()}
//                           className="btn btn-warning btn-block w-100"
//                         >
//                           {" "}
//                           Export{" "}
//                         </Link>
//                       </div>

               

//                     </div>
//                     {/* Search Filter */}
//                       {/* <Input
//                         placeholder="Search..."
//                         style={{ width: "100%" }}
//                         value={searchTerm}
//                         onChange={(e) => handleSearch(e.target.value)}
//                         ref={inputSearchRef}
//                       />

//                       <button
//                         type="button"
//                         className="btn btn-secondary me-1"
//                         icon={<SearchOutlined />}
//                         onClick={handleSearch}
//                       >
//                         Search
//                       </button>

//                       <button
//                         type="button"
//                         className="btn btn-success me-1"
//                         icon={<DownloadOutlined />}
//                         onClick={() => downloadExlsFiles()}
//                       >
//                         Export
//                       </button>
                   
//                    */}

//                     <Table
//                       dataSource={allExpense}
//                       pagination={{
//                         total: allExpense.length,
//                         showTotal: (total, range) =>
//                           `Showing ${range[0]} to ${range[1]} of ${total} entries`,
//                         showSizeChanger: true,
//                         onShowSizeChange: onShowSizeChange,
//                         itemRender: itemRender,
//                       }}
//                       style={{ overflowX: "auto" }}
//                       // columns={columns}
//                       bordered
//                       rowKey={(record) => record.id}
//                       columns={[
//                         {
//                           title: "Sr No",
//                           dataIndex: "srno",
//                           key: "srno",
//                         },
//                         {
//                           title: "Employee",
//                           dataIndex: "employee",
//                           key: "username",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },
//                         {
//                           title: "Expense Category",
//                           dataIndex: "expense_name",
//                           key: "item_name",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },
//                         {
//                           title: "Description",
//                           dataIndex: "description",
//                           key: "description",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },

//                         {
//                           title: "Paid By",
//                           dataIndex: "paid_by",
//                           key: "paid_by",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },
//                         {
//                           title: "Expense Date",
//                           dataIndex: "expense_date",
//                           key: "expense_date",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },
//                         {
//                           title: "Expense Bill",
//                           dataIndex: "attachment",
//                           key: "attachment",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                           render: (attachment) => (
//                             <div>
//                               {/* <span>{attachment}</span> */}
//                               <br></br>
//                               <Button
//                                 type="primary"
//                                 onClick={() => handleViewInvoice(attachment)}
//                               >
//                                 view invoice
//                               </Button>
//                             </div>
//                           ),
//                         },
//                         {
//                           title: "Approved Amount",
//                           dataIndex: "approved_amt",
//                           key: "approved_amt",
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },
//                         {
//                           title: "Approved By",
//                           dataIndex: "name",
//                           render: (text, record) => (
//                             <h2 className="table-avatar">
//                               <Link
//                                 to="/app/profile/employee-profile"
//                                 className="avatar"
//                               >
//                                 <img alt="" src={record.image} />
//                               </Link>
//                               <Link to="/app/profile/employee-profile">
//                                 {text}{" "}
//                               </Link>
//                             </h2>
//                           ),
//                           sorter: (a, b) => a.name.length - b.name.length,
//                         },

//                         {
//                           title: "Actions",
//                           key: "actions",
//                           render: (text, record) => (
//                             <Space size="small">
//                               <Button
//                                 type="primary"
//                                 icon={<CheckCircleOutlined />}
//                                 // onClick={() => showApproveModal(record)}
//                                 onClick={() => handleApproveClick(record)}
//                               >
//                                 Approve
//                               </Button>
//                               <Button
//                                 type="danger"
//                                 icon={<CloseCircleOutlined />}
//                                 onClick={() => showRejectModal(record)}
//                               >
//                                 Reject
//                               </Button>
//                               <Button
//                                 type="primary"
//                                 icon={<PauseCircleOutlined />}
//                                 onClick={() => showHoldModal(record.id)}
//                               >
//                                 Hold
//                               </Button>
//                             </Space>
//                           ),
//                         },
//                       ]}
//                     />

//                     <Modal
//                       title="Reject Item"
//                       visible={rejectModalVisible}
//                       onOk={handleRejectClick}
//                       onCancel={() => setRejectModalVisible(false)}
//                     >
//                       <label>Remark:</label>
//                       <TextArea
//                         value={rejectRemark}
//                         onChange={(e) => setRejectRemark(e.target.value)}
//                       />
//                     </Modal>

//                     <Modal
//                       title="Hold Item"
//                       open={holdModalVisible}
//                       onOk={handleHoldClick}
//                       onCancel={() => setHoldModalVisible(false)}
//                     >
//                       <label>Remark:</label>
//                       <TextArea
//                         value={holdRemark}
//                         onChange={(e) => setHoldRemark(e.target.value)}
//                       />
//                     </Modal>

//                     <Modal
//                       title="View Invoice"
//                       visible={invoiceModalVisible}
//                       onCancel={closeInvoiceModal}
//                       footer={null}
//                     >
//                       {selectedInvoice && (
//                         <img
//                           src={selectedInvoice}
//                           alt="Invoice"
//                           style={{ maxWidth: "100%" }}
//                         />
//                       )}
//                     </Modal>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ExpenseApprovalManager;
