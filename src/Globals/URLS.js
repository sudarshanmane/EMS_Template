export const URLS = {
  BASE_URL_EXPORT: "http://192.168.1.219:8001/",
  
  USER_LOGIN_URL: "/users/api/v2/login_web/",
  USER_REGISTER_URL: "/users/api/v2/userregister/",
  GET_DEPARTMENT_LIST_URL: "/users/api/v2/departmentlist/",
  GET_DESIGNATION_LIST_URL: "/users/api/v2/designationlist/",
  GET_EMPLOYMENT_TYPE_LIST_URL: "/users/api/v2/employementtypelist/",
  GET_BRANCH_LIST_URL: "/company/api/v2/branch/",
  GET_USERROLE_PERMISSION_URL: "/users/api/v2/userrolepermissionlist",

  GET_CURRENT_ROLE_URL: "/users/api/v2/getcurrentuserrole/",
  GET_CURRENT_USER_URL: "/users/api/v2/getalluser/",
  GET_STAFF_LIST_URL: "/users/api/v2/getallstaff/",
  ADD_SALARY_URL: "/userhrms/api/v2/salaryrevision/",
  ADD_CERTIFICATION_URL: "/userhrms/api/v2/certificate/",
  ADD_USER_SETTING_URL: "/userhrms/api/v2/usersettings/",
  ADD_PERSONAL_INFORMATION_URL: "/userhrms/api/v2/UserPersonalInformationpost/",
  ADD_EDUCATION_URL: "/userhrms/api/v2/usersettings/",
  ADD_EXPERIENCE_URL: "/userhrms/api/v2/usersettings/",
  CHANGE_PASSWORD_URL: "/users/api/v2/changepassword/",


  APPROVE_EXPENSE_URL: "/api/version_0/expense/approve-expense/",
  REJECT_EXPENSE_URL: "/api/version_0/expense/reject-expense/",
  APPROVE_REPORT_URL: "/api/version_0/expense/approve-report/",
  REJECT_REPORT_URL: "/api/version_0/expense/reject-report/",
  ADD_REPORT_URL: "/api/version_0/expense/expensereport/",
  ADD_SELECTED_REPORT_URL: "/api/version_0/expense/modify_expense/",
  GET_REPORT_LIST_URL: "/api/version_0/expense/expensereport/",
  GET_APPROVED_REPORT_LIST_URL: "/api/version_0/expense/getreportsforapproval/",
  UPDATE_REPORT: "/api/version_0/expense/expensereport/",
  GET_EXPENSE_LIST_URL: "/api/version_0/expense/create_expense/",
  UPDATE_REPORT: "/api/version_0/expense/update_expensereport/",
  DELETE_REPORT: "/api/version_0/expense/update_expensereport/",

  VIEW_REPORT_URL: "/api/version_0/expense/expensereport/",
  VIEW_REPORT_BY_ID_URL: "/api/version_0/expense/expensereport/",

  VIEW_VENDOR_URL: "/api/version_0/expense/register_vendor/",
  VIEW_VENDOR_BY_ID_URL: "/api/version_0/expense/register_vendor/",
  GET_VENDOR_PAYMENT_URL: "/api/version_0/expense/vendor_payment/",
  CREATE_VENDOR_PAYMENT_URL: "/api/version_0/expense/vendor_payment/",

  FETCH_REPORT_URL: "/api/version_0/expense/fetch_report/",
  ADD_REIMBURSMENT_RECORD_URL: "/api/version_0/expense/reimbursement/",
  REJECT_REPORT_BY_ACCOUNT_URL: "/api/version_0/expense/reject_exp_by_account/",


  ADD_CATEGORY_URL: "/api/version_0/expense/expensecategory/",
  GET_CATEGORY_PANEL_URL: "/api/version_0/expense/expensecategory/",
  UPDATE_CATEGORY_PANEL_URL: "/api/version_0/expense/expensecategory/",
  DELETE_CATEGORY_PANEL_URL: "/api/version_0/expense/expensecategory/",
  CREATE_CATEGORY_ITEM_URL: "/api/version_0/expense/expensecategoryitem/",

  ADD_EXPENSE_POLICY_URL: "/api/version_0/expense/expensepolicy/",
  GET_EXPENSE_POLICY_URL: "/api/version_0/expense/expensepolicy/",
  UPDATE_EXPENSE_POLICY_URL: "/api/version_0/expense/expensepolicy/",
  DELETE_EXPENSE_POLICY_URL: "/api/version_0/expense/expensepolicy/",

  ADD_MILEAGE_URL: "/api/version_0/expense/expensemileage/",
  GET_MILEAGE_URL: "/api/version_0/expense/expensemileage/",
  FETCH_CATEGORY_URL: "/api/version_0/expense/get_categories/",
  UPDATE_MILEAGE_URL: "/api/version_0/expense/expensemileage/",
  DELETE_MILEAGE_URL: "/api/version_0/expense/expensemileage/",

  APPLY_CARD_URL: "/api/version_0/card/card/",
  GET_CARD_URL: "/api/version_0/card/get_cards/",
  REJECT_CARD_URL: "/api/version_0/card/reject_card/",
  APPROVE_CARD_URL: "/api/version_0/card/reject_card/",

  CREATE_VENDOR_URL: "/api/version_0/expense/register_vendor/",
  GET_VENDOR_URL: "/api/version_0/expense/register_vendor/",

  DELETE_VENDOR_TABLE_URL: "",
  UPDATE_VENDOR_TABLE_URL: "",  

  UPDATE_VENDOR_URL: "/api/version_0/expense/vendor_payment/",


  CREATE_TRAVEL_URL: "/api/version_0/expense/request_travel/",
  GET_TRAVEL_URL: "/api/version_0/expense/request_travel/",
  DELETE_TRAVEL_URL: "/api/version_0/expense/request_travel_details/",
  UPDATE_TRAVEL_URL: "/api/version_0/expense/request_travel_details/",

  GET_ALL_USER_URL:  "/api/v2/getalluser/",
  ADD_ALL_USER_URL: "/api/v2/userrole/",


  

  // ========================================================================================

  GET_AGENCY_LIST_URL: "/document/agency-list/",
  EXPENSE_ITEM_SETUP_URL: "/expense/expenseitemsetup/",
  UPDATE_EXPENSE_ITEM_SETUP_URL: "/expense/expenseitemsetup/",
  GET_ACCOUNTING_CODE_URL: "/expense/accountingcode/",
  EXPENSE_TYPE_URL: "/expense/expensetype/",
  UPDATE_USER_PROFILE_URL: "/users/profile-update/",
  EXTERNAL_ACCOUNT_CODE_URL: "/expense/externalaccountcode/",
  ADD_USER_URL: "/users/create_user/",
  ITEMIZATION_SUBMIT_URL: "/expense/expenseitemization/",
  GET_EXPENSE_PANEL_URL: "/expense/expense-list/",
  ADD_EXPENSE_URL: "/expense/add_expense/",

  GET_ROLE_URL: "/roles/role/",
  GET_MANAGER_LIST_URL: "/users/get_users/",
  EXPENSE_TYPE_PANEL_URL: "/expense/expensetypelist/",
  EXTERNAL_ACCOUNT_CODE_PANEL_URL: "/expense/externalaccount-code-list/",
  UPDATE_ABOUTUS_URL: "/users/about_us/",
  UPDATE_CONTACTUS_URL: "/users/contact_us/",
  GET_COMPANY_LIST_URL: "/users/company-list/",
  DELETE_COMPANY_LIST_URL: "/authentication/delete_company/",
  UPDATE_COMPANY_LIST_URL: "/authentication/update_company/",
  GET_EXPENSE_ITEM_SETUP_PANEL_URL: "/expense/expense-item-setup-list/",
  GET_ITEMIZATION_PANEL_URL: "/expense/expense-itemization-list/",
  GET_ACCOUNTINGCODE_PANEL_URL: "/expense/accounting-code-list/",

  UPDATE_ACCOUNTING_CODE_URL: "/expense/accountingcode/",
  UPDATE_EXPENSEITEMIZATION_PANEL_URL: "/expense/expenseitemization/",
  UPDATE_EXPENSE_PANEL_URL: "/expense/edit_expense/",
  EXPENSETABLE_SUBMIT_TRUE_URL: "/expense/submit_expense/",
  UPDATE_EXPENSE_TYPE: "/expense/expensetype/",
  UPDATE_USER: "/users/edit_user/",
  EXPENSE_APPROVED_MANEGER_URL: "/expense/expense-approve/",
  EXPENSE_REJECT_MANAGER_URL: "/expense/expense-reject/",
  EXPENSE_HOLD_MANGER_URL: "/expense/expense-hold/",
  EXPORTBUTTON_ACCOUNTING_CODE_URL: "/expense/accounting-code-list/",
  FINANCE_MANAGER_EXPENSE_REJECT_URL: "/expense/rejected_by_fm/",
  FINANCE_MANAGER_EXPENSE_HOLD_URL: "/expense/hold_by_fm/",
  FINANCE_MANAGER_EXPENSE_APPROVE_URL: "/expense/approved_by_fm/",
  ADD_ACCOUNT_BY_FINANCE_MANAGER_URL: "/card/add_account/",
  GET_USER_PERMISSIONS_ADD_ROLE_URL: "/users/permissions_get/",
  GET_USER_PERMISSIONS_LIST_ADD_ROLE: "/users/permissions_list/",
  ROLE_COMMON_URL: "/roles/role/",
  GET_EMPLOYEE_ACCOUNTNO_URL: "/card/get_user_account/",
  GET_EXPENSE_LIST_FINANCE_MANAGER_URL:
    "/expense/expense-list-finance-manager/",
  GET_FINANCE_MANAGER_LIST_URL: "/users/get-account-managers/",
  GET_MANEGERAPPROVED_LIST_URL: "expense/expense-list-manager/",
  OWN_EXPENSE_DRAFT_URL: "/expense/drafted_expense/",
  OWN_EXPENSE_REJECT_URL: "/expense/rejected_expense/",
  OWN_EXPENSE_HOLD_URL: "/expense/hold_expense/",
  DELETE_USER_URL: "/users/delete-user/",
  MANAGER_CARD_APPROVED_LIST_URL: "/expense/approval_expense-list-manager/",
  MANAGER_CARD_REJECT_LIST_URL: "/expense/rejected_expense-list-manager/",
  MANAGER_CARD_HOLD_LIST_URL: "/expense/hold_expense-list-manager/",
  OWN_EXPENSE_APPROVE_URL: "/expense/approval_expense/",
};
