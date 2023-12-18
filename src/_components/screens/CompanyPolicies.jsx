import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

import "antd/dist/antd.min.css";

import "antd/dist/antd.min.css";
import Offcanvas from "../../Entryfile/offcanvance";
import { useForm } from "react-hook-form";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyPolicy, getCompanyPolicy, updateCompanyPolicy } from "../../store/Action/Actions";

const CompanyPolicies = () => {
  const [url, setUrl] = useState(URLS.GET_COMPANY_POLICY_URL);
  const dispatch = useDispatch();
  const [allCompanyPolicy, setAllCompanyPolicy] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [viewCompanyPolicyData, setViewCompanyPolicyData] = useState(null);
  const [deleteCategoryData, setDeleteCategoryData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
    const formRef = React.useRef(null);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({});
  
    // const { handleSubmit: handleDelete } = useForm({});
  
    // const {
    //   register: updateregister,
    //   handleSubmit: handleUpdate,
    //   setValue,
    // } = useForm({});
  
    const onSubmit = (values) => {
      dispatch(addCompanyPolicy(values));
      formRef.current.reset();
    };
  
    // const onEdit = (record) => {
    //   setIsEditFormVisible(true);
    //   setEditFormData(record);
    //   setValue("category_name", record.category_name);
    //   setValue("override_general_policy", record.override_general_policy);
    //   setValue("expense_amount_limit", record.expense_amount_limit);
    //   setValue("receipt_require_limit", record.receipt_require_limit);
    //   setValue("auto_approve_limit", record.auto_approve_limit);
    //   setValue("accounting_code", record.accounting_code);
    // };
  
    // const onUpdate = (values) => {
    //   console.log("values", values);
    //   dispatch(updateCompanyPolicy({ id: editFormData.id, payload: values }));
    //   setIsEditFormVisible(false);
    // };
  
    // function getPageDetails(url) {
    //   dispatch(getCompanyPolicy({ payload: {}, URL: url }));
    // }
  
    // useEffect(() => {
    //   getPageDetails(url);
    // }, []);
  
    // useEffect(() => {
    //   fetchcompanypolicydata(url);
    // }, []);
  
    // function fetchcompanypolicydata(url) {
    //   dispatch(getCompanyPolicy({ payload: {}, URL: url }));
    // }
  
    // const companypolicyselector = useSelector((state) => state.getcompanypolicy);
  
    // useEffect(() => {
    //   if (companypolicyselector) {
    //     const allCompanyPolicy = companypolicyselector.map((element) => {
    //       return {
    //         id: element.id,
    //         reimbursed_amount: element.reimbursed_amount,
    //         reimbursed_on: element.reimbursed_on,
    //         paid_through: element.paid_through,
    //         notes: element.notes,
           
    //       };
    //     });
    //     setAllCompanyPolicy(allCompanyPolicy);
    //   }
    // }, [companypolicyselector]);
  
    const addCompanyPolicySelector = useSelector((state) => state.addCompanyPolicyresult);
  
    useEffect(() => {
      if (addCompanyPolicySelector) {
        dispatch(getCompanyPolicy({ payload: {}, URL: url }));
      }
      setIsAddFormVisible(false);
    }, [addCompanyPolicySelector]);
  
    // const updateComapnyPloicySelector = useSelector(
    //   (state) => state. updateCompanyPolicyResult
    // );
  
    // useEffect(() => {
    //   if (updateComapnyPloicySelector) {
    //     dispatch(getCompanyPolicy({ payload: {}, URL: url }));
    //   }
    //   setIsAddFormVisible(false);
    // }, [updateComapnyPloicySelector]);
  
    // const deleteCompanyPolicySelector = useSelector(
    //   (state) => state.deleteCompanyPolicySuccess
    // );
  
    // useEffect(() => {
    //   if (deleteCompanyPolicySelector) {
    //     dispatch(getCompanyPolicy({ payload: {}, URL: url }));
    //   }
    // }, [deleteCompanyPolicySelector]);
  
    // const deleteCategory = (record) => {
    //   setDeleteCategoryData(record);
    // };
  
    // const onDelete = () => {
    //   const deletedCategoryId = deleteCategoryData.id;
    //   dispatch(deleteCategorypanelAction({ id: deletedCategoryId }));
    //   setIsDeleteConfirmationVisible(false);
    //   setAllCategoryList((prevItems) =>
    //     prevItems.filter((item) => item.id !== deletedCategoryId)
    //   );
    // };
  
  return (
    <>
      <Offcanvas />
      <div className="page-wrapper">
        <Helmet>
          <title>Form Basic Input - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Company Policies</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">General Policies </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Company Policies</h4>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          {...register("override_general_policy")}
                        />{" "}
                        Expense Amount Limit Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number" 
                           {...register("expense_amount_limit")}
                           />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="input-block mb-0 row">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="True"
                          {...register("override_general_policy")}
                        />{" "}
                        Receipt Required limit
                      </label>
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$USD</span>
                          </div>
                          <input className="form-control" type="number"
                           {...register("expense_amount_limit")}
                            />
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("override_general_policy")}
                          />{" "}
                          Make Description Mandatory
                        </label>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="True"
                            {...register("override_general_policy")}
                          />{" "}
                          Allow Uncategorized Expenses To Be The Part Of Expense
                          Report
                        </label>
                      </div>
                    </div>

                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPolicies;
