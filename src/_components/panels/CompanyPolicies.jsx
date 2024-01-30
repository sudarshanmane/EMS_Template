// import { Table } from "antd";
// import React, { useEffect, useState } from "react";
// import {
//   onShowSizeChange,
//   itemRender,
// } from "../../MainPage/paginationfunction";
// import { useDispatch, useSelector } from "react-redux";
// import { URLS } from "../../Globals/URLS";
// import { Link } from "react-router-dom";
// import {
//   addCompanyPolicy,
//   deleteCompanyPolicy,
//   getCompanyPolicy,
//   updateCompanyPolicy,
// } from "../../store/Action/Actions";
// import { useForm } from "react-hook-form";
// import "react-datepicker/dist/react-datepicker.css";

// const CompanyPolicies = () => {
//   // const [url, setUrl] = useState(URLS.GET_COMPANY_POLICY_URL);
//   const url = URLS.GET_COMPANY_POLICY_URL;
//   const dispatch = useDispatch();
//   const [allCompanyPolicies, setAllCompanyPolicies] = useState([]);
//   const [focused, setFocused] = useState(false);
//   const [isAddFormVisible, setIsAddFormVisible] = useState(false);
//   const [isEditFormVisible, setIsEditFormVisible] = useState(false);
//   const [editCompanyData, setEditCompanyData] = useState(null);
//   const [deleteCompanyData, setDeleteCompanyData] = useState(null);
//   const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
//     useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({});

//   const {
//     register: updateregister,
//     handleSubmit: handleUpdate,
//     setValue,
//   } = useForm({});

//   const { handleSubmit: handleDelete } = useForm({});

//   const onSubmit = (values) => {
//     dispatch(addCompanyPolicy(values));
//   };

//   const onEdit = (record) => {
//     setIsEditFormVisible(true);
//     setEditCompanyData(record);
//     setValue("expense_amt_limit", record.expense_amt_limit);
//     setValue("receipt_require_lmt", record.receipt_require_lmt);
//   };

//   const onUpdate = (values) => {
//     dispatch(updateCompanyPolicy({ id: editCompanyData.id, payload: values }));
//     setIsEditFormVisible(false);
//   };

//   function getPageDetails(url) {
//     dispatch(getCompanyPolicy({ payload: {}, URL: url }));
//   }

//   useEffect(() => {
//     getPageDetails(url);
//   }, []);

//   function fetchCompanyData(url) {
//     dispatch(getCompanyPolicy({ payload: {}, URL: url }));
//   }

//   useEffect(() => {
//     fetchCompanyData(url);
//   }, []);

//   const companyselector = useSelector((state) => state.getcompanypolicy);

//   useEffect(() => {
//     if (companyselector) {
//       const allCompanyPolicies = companyselector.map((element) => {
//         return {
//           id: element.id,
//           expense_amt_limit: element.expense_amt_limit,
//           receipt_require_lmt: element.receipt_require_lmt,
//         };
//       });
//       setAllCompanyPolicies(allCompanyPolicies);
//     }
//   }, [companyselector]);

//   const addCompanySelector = useSelector(
//     (state) => state.addCompanyPolicyresult
//   );

//   useEffect(() => {
//     if (addCompanySelector) {
//       dispatch(getCompanyPolicy({ payload: {}, URL: url }));
//     }
//     setIsAddFormVisible(false);
//   }, [addCompanySelector]);

//   const updatecompanySelector = useSelector(
//     (state) => state.updateCompanyPolicyResult
//   );

//   useEffect(() => {
//     if (updatecompanySelector) {
//       dispatch(getCompanyPolicy({ payload: {}, URL: url }));
//     }
//     setIsAddFormVisible(false);
//   }, [updatecompanySelector]);

//   const deleteCompanySelector = useSelector(
//     (state) => state.deleteCompanyPolicySuccess
//   );

//   useEffect(() => {
//     if (deleteCompanySelector) {
//       dispatch(getCompanyPolicy({ payload: {}, URL: url }));
//     }
//   }, [deleteCompanySelector]);

//   const DeleteCompany = (record) => {
//     setDeleteCompanyData(record);
//   };

//   const onDelete = () => {
//     const deletedCompanyId = deleteCompanyData.id;
//     dispatch(deleteCompanyPolicy({ id: deletedCompanyId }));
//     setIsDeleteConfirmationVisible(false);
//     setAllCompanyPolicies((prevItems) =>
//       prevItems.filter((item) => item.id !== deletedCompanyId)
//     );
//   };
//   const columns = [
//     {
//       title: "Sr No",
//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "Expense Amount Limit ",
//       dataIndex: "expense_amt_limit",
//       sorter: (a, b) => a.start_date.length - b.start_date.length,
//     },
//     {
//       title: "Require limit",
//       dataIndex: "receipt_require_lmt",
//       sorter: (a, b) => a.end_date.length - b.end_date.length,
//     },
//     {
//       title: "Action",
//       render: (record) => (
//         <div className="dropdown dropdown-action text-end">
//           <Link
//             to="#"
//             className="action-icon dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <i className="material-icons">more_vert</i>
//           </Link>
//           <div className="dropdown-menu dropdown-menu-right">
//             <Link
//               className="dropdown-item"
//               to="#"
//               data-bs-toggle="modal"
//               data-bs-target="#edit_company"
//               onClick={() => onEdit(record)}
//             >
//               <i className="fa fa-pencil m-r-5" /> Edit
//             </Link>
//             <Link
//               className="dropdown-item"
//               to="#"
//               data-bs-toggle="modal"
//               data-bs-target="#delete_company"
//               onClick={() => {
//                 DeleteCompany(record);
//               }}
//             >
//               <i className="fa fa-trash m-r-5" /> Delete
//             </Link>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col">
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/app/main/dashboard">Dashboard</Link>
//                   </li>
//                   <li className="breadcrumb-item active">General Policies </li>
//                 </ul>
//               </div>
//               <div className="col-auto float-end ms-auto">
//                 <Link
//                   to="#"
//                   className="btn add-btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#add_company"
//                 >
//                   <i className="fa fa-plus" /> Add Policy
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* /Page Header */}
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="card mb-0">
//                 <div className="card-header">
//                   <h4 className="card-title mb-0">Company Policies</h4>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <Table
//                       className="table-striped"
//                       pagination={{
//                         total: allCompanyPolicies.length,
//                         showTotal: (total, range) =>
//                           `Showing ${range[0]} to ${range[1]} of ${total} entries`,
//                         showSizeChanger: true,
//                         onShowSizeChange: onShowSizeChange,
//                         itemRender: itemRender,
//                       }}
//                       style={{ overflowX: "auto" }}
//                       columns={columns}
//                       dataSource={allCompanyPolicies}
//                       rowKey={(record) => record.id}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add Expense Modal */}
//         <div id="add_company" className="modal custom-modal fade" role="dialog">
//           <div
//             className="modal-dialog modal-dialog-centered modal-md"
//             role="document"
//           >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Add Policy</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="input-block">
//                     <label>
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value="True"
//                         // {...register("override_general_policy")}
//                       />{" "}
//                       Expense Amount Limit
//                     </label>

//                     <div className="col-md-12">
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text">$USD</span>
//                         </div>
//                         <input
//                           className="form-control"
//                           type="number"
//                           {...register("expense_amt_limit")}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>

//                   <div className="input-block">
//                     <label>
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value="True"
//                         // {...register("override_general_policy")}
//                       />{" "}
//                       Receipt Required limit
//                     </label>

//                     <div className="col-md-12">
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text">$USD</span>
//                         </div>
//                         <input
//                           className="form-control"
//                           type="number"
//                           {...register("receipt_require_lmt")}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>

//                   <div className="col-lg-10">
//                     <div className="checkbox">
//                       <label>
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           value="True"
//                           {...register("make_description_mandotary")}
//                         />{" "}
//                         Make Description Mandatory
//                       </label>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>
//                   <div className="col-md-10">
//                     <div className="checkbox">
//                       <label>
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           value="True"
//                           {...register(
//                             "allow_uncategorized_expe_to_be_part_of_expense_report"
//                           )}
//                         />{" "}
//                         Allow Uncategorized Expenses To Be The Part Of Expense
//                         Report
//                       </label>
//                     </div>
//                   </div>

//                   <div className="submit-section">
//                     <button
//                       className="btn btn-primary submit-btn"
//                       data-bs-dismiss="modal"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Add Expense Modal */}
//         {/* Edit Expense Modal */}
//         <div
//           id="edit_company"
//           className="modal custom-modal fade"
//           role="dialog"
//         >
//           <div
//             className="modal-dialog modal-dialog-centered modal-md"
//             role="document"
//           >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Update Policy</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">×</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleUpdate(onUpdate)}>
//                   <div className="input-block">
//                     <label>
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value="True"
//                         // {...updateregister("override_general_policy")}
//                       />{" "}
//                       Expense Amount Limit Receipt Required limit
//                     </label>
//                     <div className="col-md-12">
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text">$USD</span>
//                         </div>
//                         <input
//                           className="form-control"
//                           type="number"
//                           {...updateregister("expense_amt_limit")}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>

//                   <div className="input-block">
//                     <label>
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value="True"
//                         // {...updateregister("override_general_policy")}
//                       />{" "}
//                       Receipt Required limit
//                     </label>
//                     <div className="col-md-12">
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text">$USD</span>
//                         </div>
//                         <input
//                           className="form-control"
//                           type="number"
//                           {...updateregister("receipt_require_lmt")}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <br></br>
//                   <div className="col-md-10">
//                     <div className="checkbox">
//                       <label>
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           value="True"
//                           {...updateregister("make_description_mandotary")}
//                         />{" "}
//                         Make Description Mandatory
//                       </label>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>
//                   <div className="col-md-10">
//                     <div className="checkbox">
//                       <label>
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           value="True"
//                           {...updateregister(
//                             "allow_uncategorized_expe_to_be_part_of_expense_report"
//                           )}
//                         />{" "}
//                         Allow Uncategorized Expenses To Be The Part Of Expense
//                         Report
//                       </label>
//                     </div>
//                   </div>

//                   <div className="submit-section">
//                     <button
//                       className="btn btn-primary submit-btn"
//                       data-bs-dismiss="modal"
//                     >
//                       Update
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /Edit Expense Modal */}
//         {/* Delete Category Modal */}
//         <div
//           className="modal custom-modal fade"
//           id="delete_company"
//           role="dialog"
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-body">
//                 <div className="form-header">
//                   <h3>Delete Policy</h3>
//                   <p>Are you sure want to delete?</p>
//                 </div>
//                 <div className="modal-btn delete-action">
//                   <div className="row">
//                     <div className="col-6">
//                       <Link
//                         to=""
//                         className="btn btn-primary continue-btn"
//                         onClick={handleDelete(onDelete)}
//                         data-bs-dismiss="modal"
//                       >
//                         Delete
//                       </Link>
//                     </div>
//                     <div className="col-6">
//                       <Link
//                         to=""
//                         data-bs-dismiss="modal"
//                         className="btn btn-primary cancel-btn"
//                       >
//                         Cancel
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CompanyPolicies;
