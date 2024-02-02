export const URLS = {
  BASE_URL_EXPORT: "http://192.168.1.219:8001/",

  USER_LOGIN_URL: "/users/api/v2/login_web/",
  USER_REGISTER_URL: "/users/api/v2/userregister/",
  GET_DEPARTMENT_LIST_URL: "/users/api/v2/departmentlist/",
  GET_DESIGNATION_LIST_URL: "/users/api/v2/designationlist/",
  GET_EMPLOYMENT_TYPE_LIST_URL: "/users/api/v2/employementtypelist/",
  GET_BRANCH_LIST_URL: "/company/api/v2/branch/",
  GET_EDUCATION_LIST_URL: "/userhrms/api/v2/educationtypelist/",
  GET_SHIFT_POLICY_URL: "/company/api/v2/shiftPolicy/",
  GET_WEEK_OFF_URL: "/company/api/v2/weekoff/",
  GET_ALL_DROPDOWN_URL: "/users/api/v2/getalluserlist/",
  GET_USERROLE_PERMISSION_URL: "/users/api/v2/userrolepermissionlist",
  GET_USER_ATTENDANCE_URL: "/attendance/api/v2/attendanceFilter/",
  GET_USER_ATTENDANCE_DYNAMIC_URL:
    "/attendance/api/v2/attendanceFilterForAllData/",
  GET_CURRENT_ROLE_URL: "/users/api/v2/getcurrentuserrole/",
  GET_CURRENT_USER_URL: "/users/api/v2/getcurrentuser/",
  GET_USER_SETTING_URL: "/usersettings/api/v2/getusersettingsbyid/",

  GET_LEAVES_LIST_URL: "/leave/api/v2/LeavesViewSelfData/",
  GET_SELF_LEAVES_LIST_URL: "/leaves/api/v2/leaveassignSelf/",
  GET_DYNAMIC_LEAVES_LIST_URL: "/leave/api/v2/LeavesViewAllData/",
  GET_DYNAMIC_SELF_LEAVES_LIST_URL: "/leave/api/v2/leaveassignalldata/",
  UPDATE_SELF_LEAVE_URL: "/leave/api/v2/LeavesViewSelfData/",

  UPDATE_USER_SETTING_URL: "/usersettings/api/v2/usersettings/",
  GET_STAFF_LIST_URL: "/users/api/v2/getallstaff/",
  ADD_SALARY_URL: "/userhrms/api/v2/salaryrevision/",
  ADD_CERTIFICATION_URL: "/userhrms/api/v2/certificate/",
  ADD_USER_SETTING_URL: "/usersettings/api/v2/usersettings/",
  ADD_PERSONAL_INFORMATION_URL: "/userhrms/api/v2/UserPersonalInformationpost/",
  ADD_EDUCATION_URL: "/userhrms/api/v2/educationpost/",
  ADD_EXPERIENCE_URL: "/userhrms/api/v2/userexperience/",
  GET_PERSONAL_INFORMATION_URL: "/userhrms/api/v2/UserPersonalInformation/?id=",
  UPDATE_PERSONAL_INFORMATION_URL:
    "/userhrms/api/v2/UserPersonalInformationpost/",
  GET_CERTIFICATE_URL: "/userhrms/api/v2/certificate/?id",
  UPDATE_CERTIFICATE_URL: "/userhrms/api/v2/certificate/?id",
  GET_EDUCATION_URL: "/userhrms/api/v2/education/?user_id=",
  UPDATE_EDUCATION_URL: "/userhrms/api/v2/educationpost/",
  GET_EXPERIENCE_URL: "/userhrms/api/v2/userexperience/?user_id=",
  UPDATE_EXPERIENCE_URL: "/userhrms/api/v2/userexperience/?id",
  ADD_DOCUMENT_URL: "/userhrms/api/v2/UserPersonalDocument/?user_id=",
  GET_DOCUMENT_URL: "/userhrms/api/v2/UserPersonalDocument/?user_id=",
  UPDATE_DOCUMENT_URL: "/userhrms/api/v2/UserPersonalDocument/?id=",
  REMOVE_DOCUMENT_URL: "/userhrms/api/v2/UserPersonalDocument/?id",
  CHANGE_PASSWORD_URL: "/users/api/v2/changepassword/",

  APPROVE_EXPENSE_URL: "/api/version_0/expense/approve-expense/",
  REJECT_EXPENSE_URL: "/api/version_0/expense/reject-expense/",
  APPROVE_REPORT_URL: "/api/version_0/expense/approve-report/",
  REJECT_REPORT_URL: "/api/version_0/expense/reject-report/",
  ADD_REPORT_URL: "/api/version_0/expense/expensereport/",
  ADD_SELECTED_REPORT_URL: "/api/version_0/expense/modify_expense/",
  GET_REPORT_LIST_URL: "/api/version_0/expense/expensereport/",
  GET_SUBMITTED_REPORT_LIST_URL:
    "/api/version_0/expense/get_submitted_reports/",
  GET_APPROVED_REPORT_URL: "/api/version_0/expense/get_approved_reports/",
  GET_REJECTED_REPORT_URL: "/api/version_0/expense/get_rejected_reports_user/",
  GET_REIMBURSE_REPORT_URL:
    "/api/version_0/expense/get_reimbursed_reports_user/",
  GET_APPROVED_REPORT_LIST_URL: "/api/version_0/expense/getreportsforapproval/",
  UPDATE_REPORT: "/api/version_0/expense/expensereport/",
  GET_EXPENSE_LIST_URL: "/api/version_0/expense/create_expense/",
  GET_REJECTED_EXPENSE_URL: "/api/version_0/expense/get-rejected-expense/",
  UPDATE_REPORT: "/api/version_0/expense/update_expensereport/",
  DELETE_REPORT: "/api/version_0/expense/update_expensereport/",
  SUBMIT_REPORT_URL: "/api/version_0/expense/submit-reports/",

  VIEW_REPORT_URL: "/api/version_0/expense/expensereport/",
  VIEW_REPORT_BY_ID_URL: "/api/version_0/expense/expensereport/",

  VIEW_VENDOR_URL: "/api/version_0/expense/register_vendor/",
  VIEW_VENDOR_BY_ID_URL: "/api/version_0/expense/register_vendor/",
  GET_VENDOR_PAYMENT_URL: "/api/version_0/expense/vendor_payment/",
  CREATE_VENDOR_PAYMENT_URL: "/api/version_0/expense/vendor_payment/",
  UPDATE_VENDOR_PAYMENT_URL: "/api/version_0/expense/vendor_payment/",

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

  DELETE_VENDOR_TABLE_URL: "/api/version_0/expense/register_vendor/",
  UPDATE_VENDOR_TABLE_URL: "/api/version_0/expense/register_vendor/",

  CREATE_TRAVEL_URL: "/api/version_0/expense/request_travel/",
  GET_TRAVEL_URL: "/api/version_0/expense/request_travel/",
  DELETE_TRAVEL_URL: "/api/version_0/expense/request_travel_details/",
  UPDATE_TRAVEL_URL: "/api/version_0/expense/request_travel_details/",
  SUBMIT_TRAVEL_REQUEST_URL: "/api/version_0/expense/submit_travel/",

  GET_TRAVEL_REQUEST_APPROVALS_URL:
    "/api/version_0/expense/request_for_approval/",
  REJECT_TRAVEL_REQUEST_APPROVALS_URL:
    "/api/version_0/expense/reject_travel_request/",
  APPROVE_TRAVEL_REQUEST_APPROVALS_URL:
    "/api/version_0/expense/approve_travel_request/",
  GET_APPROVE_TRAVEL_REQUEST_APPROVALS_URL:
    "/api/version_0/expense/approved_request/",
  GET_REJECT_TRAVEL_REQUEST_APPROVALS_URL:
    "/api/version_0/expense/rejected_request/",

  GET_ALL_USER_URL: "/api/v2/getalluser/",
  ADD_ALL_USER_URL: "/api/v2/userrole/",

  ADD_BULK_EXPENSE_REPORT_URL: "/api/version_0/expense/create-bulk-expenses/",
  CREATE_EXPENSE_COMMON_URL: "/api/version_0/expense/create_expense/",
  GET_AMOUNT_FROM_DISTANCE_TRAVELED:
    "/api/version_0/expense/calculate_mileage_amount/",
  DELETE_EXPENSE_URL: "/api/version_0/expense/modify_expense/",
  UPDATE_EXPENSE: "/api/version_0/expense/modify_expense/",
};
