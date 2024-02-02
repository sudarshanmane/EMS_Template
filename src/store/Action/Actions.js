import { API_CONSTANTS } from "../../Globals/APIConstants";
import { contentType } from "../../Globals/ContentType";
import { URLS } from "../../Globals/URLS";

function userLogin(payload) {
  return {
    type: API_CONSTANTS.USER_LOGIN,
    payload,
    URL: URLS.USER_LOGIN_URL,
    contentType: contentType.json,
  };
}

function changePassword(payload) {
  return {
    type: API_CONSTANTS.CHANGE_PASSWORD,
    payload,
    URL: URLS.CHANGE_PASSWORD_URL,
    contentType: contentType.json,
  };
}

function userRegister(payload) {
  return {
    type: API_CONSTANTS.USER_REGISTER,
    payload,
    URL: URLS.USER_REGISTER_URL,
    contentType: contentType.form,
  };
}

function getCurrentRole(payload) {
  return {
    type: API_CONSTANTS.GET_CURRENT_ROLE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getCurrentUser(payload) {
  return {
    type: API_CONSTANTS.GET_CURRENT_USER,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getUserSettingAction(payload) {
  return {
    type: API_CONSTANTS.GET_USER_SETTING,
    payload: payload.payload,
    URL: URLS.GET_USER_SETTING_URL + payload.payload.id + "/",
    contentType: contentType.json,
  };
}

function updateUserSettingAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_USER_SETTING,
    payload: payload,
    URL: URLS.UPDATE_USER_SETTING_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getUserAttendanceAction(payload) {
  return {
    type: API_CONSTANTS.GET_USER_ATTENDANCE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getUserAttendanceDynamicAction(payload) {
  return {
    type: API_CONSTANTS.GET_USER_ATTENDANCE_DYNAMIC_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getLeaveListAction(payload) {
  return {
    type: API_CONSTANTS.GET_LEAVES_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getSelfLeaveAction(payload) {
  return {
    type: API_CONSTANTS.GET_SELF_LEAVES_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getDynamicLeaveListAction(payload) {
  return {
    type: API_CONSTANTS.GET_DYNAMIC_SELF_LEAVES_LIST,
    payload: payload.payload,
    URL: URLS.GET_DYNAMIC_LEAVES_LIST_URL + payload.payload.id + "/",
    contentType: contentType.json,
  };
}

function getDynamicSelfLeaveAction(payload) {
  return {
    type: API_CONSTANTS.GET_DYNAMIC_SELF_LEAVES_LIST,
    payload: payload.payload,
    URL: URLS.GET_DYNAMIC_SELF_LEAVES_LIST_URL + payload.payload.id + "/",
    contentType: contentType.json,
  };
}

function getAllStaff(payload) {
  return {
    type: API_CONSTANTS.GET_STAFF_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getRejectedExpenseAction(payload) {
  return {
    type: API_CONSTANTS.GET_REJECTED_EXPENSE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getDepartmentAction(payload) {
  return {
    type: API_CONSTANTS.GET_DEPARTMENT_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function getDesignationAction(payload) {
  return {
    type: API_CONSTANTS.GET_DESIGNATION_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function getBranchAction(payload) {
  return {
    type: API_CONSTANTS.GET_BRANCH_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function getEmploymentTypeAction(payload) {
  return {
    type: API_CONSTANTS.GET_EMPLOYMENT_TYPE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function getUserRolePermissionAction(payload) {
  return {
    type: API_CONSTANTS.GET_USERROLE_PERMISSION,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getShiftPolicyAction(payload) {
  return {
    type: API_CONSTANTS.GET_SHIFT_POLICY_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getWeekOffAction(payload) {
  return {
    type: API_CONSTANTS.GET_WEEK_OFF_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getAllDropdownAction(payload) {
  return {
    type: API_CONSTANTS.GET_ALL_DROPDOWN_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function addSalary(payload) {
  return {
    type: API_CONSTANTS.ADD_SALARY,
    payload,
    URL: URLS.ADD_SALARY_URL,
    contentType: contentType.form,
  };
}

function addCertificationAction(payload) {
  return {
    type: API_CONSTANTS.ADD_CERTIFICATION,
    payload,
    URL: URLS.ADD_CERTIFICATION_URL,
    contentType: contentType.form,
  };
}

function addUserSettingAction(payload) {
  return {
    type: API_CONSTANTS.ADD_USER_SETTING,
    payload,
    URL: URLS.ADD_USER_SETTING_URL,
    contentType: contentType.json,
  };
}

function addPersonalInformationAction(payload) {
  return {
    type: API_CONSTANTS.ADD_PERSONAL_INFORMATION,
    payload: payload,
    URL: URLS.ADD_PERSONAL_INFORMATION_URL,
    contentType: contentType.json,
  };
}

function addEducationAction(payload) {
  return {
    type: API_CONSTANTS.ADD_EDUCATION,
    payload,
    URL: URLS.ADD_EDUCATION_URL,
    contentType: contentType.form,
  };
}

function addExperienceAction(payload) {
  return {
    type: API_CONSTANTS.ADD_EXPERIENCE,
    payload,
    URL: URLS.ADD_EXPERIENCE_URL,
    contentType: contentType.form,
  };
}

function addReport(payload) {
  return {
    type: API_CONSTANTS.ADD_REPORT,
    payload,
    URL: URLS.ADD_REPORT_URL,
    contentType: contentType.json,
  };
}

function submitReportAction(payload) {
  return {
    type: API_CONSTANTS.SUBMIT_REPORT,
    payload: payload.payload,
    URL: URLS.SUBMIT_REPORT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function setsubmitReportAction() {
  return {
    type: API_CONSTANTS.SUBMIT_REPORT_SUCCESS_FALSE,
  };
}

function addSelectedReport(payload) {
  return {
    type: API_CONSTANTS.ADD_SELECTED_REPORT,
    payload: payload,
    URL: URLS.ADD_SELECTED_REPORT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getReportList(payload) {
  return {
    type: API_CONSTANTS.GET_REPORT_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getSubmittedReportList(payload) {
  return {
    type: API_CONSTANTS.GET_SUBMITTED_REPORT_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getEducationList(payload) {
  return {
    type: API_CONSTANTS.GET_EDUCATION_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getApprovedReportList(payload) {
  return {
    type: API_CONSTANTS.GET_APPROVED_REPORT_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getApprovedAction(payload) {
  return {
    type: API_CONSTANTS.GET_APPROVED_REPORT,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getRejectedAction(payload) {
  return {
    type: API_CONSTANTS.GET_REJECTED_REPORT,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getReimbursedAction(payload) {
  return {
    type: API_CONSTANTS.GET_REIMBURSED_REPORT,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getExpenseList(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getPersonalInfoAction(payload) {
  return {
    type: API_CONSTANTS.GET_PERSONAL_INFORMATION,
    payload: payload.payload,
    URL: URLS.GET_PERSONAL_INFORMATION_URL + payload.payload.userId + "/",
    contentType: contentType.json,
  };
}

function updatePersonalInfoAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_PERSONAL_INFORMATION,
    payload: payload,
    URL: URLS.UPDATE_PERSONAL_INFORMATION_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getCertificateAction(payload) {
  return {
    type: API_CONSTANTS.GET_CERTIFICATE,
    payload: payload.payload,
    URL: URLS.GET_CERTIFICATE_URL + payload.payload.userId + "/",
    contentType: contentType.json,
  };
}

function updateCertificateAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_CERTIFICATE,
    payload: payload,
    URL: URLS.UPDATE_CERTIFICATE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getEducationAction(payload) {
  return {
    type: API_CONSTANTS.GET_EDUCATION,
    payload: payload.payload,
    URL: URLS.GET_EDUCATION_URL + payload.payload.userId,
    contentType: contentType.json,
  };
}

function updateEducationAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EDUCATION,
    payload: payload,
    URL: URLS.UPDATE_EDUCATION_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getExperienceAction(payload) {
  return {
    type: API_CONSTANTS.GET_EXPERIENCE,
    payload: payload.payload,
    URL: URLS.GET_EDUCATION_URL + payload.payload.userId,
    contentType: contentType.json,
  };
}

function updateExperienceAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPERIENCE,
    payload: payload,
    URL: URLS.UPDATE_EDUCATION_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addDocumentAction(payload) {
  return {
    type: API_CONSTANTS.ADD_DOCUMENT,
    payload,
    URL: URLS.ADD_DOCUMENT_URL,
    contentType: contentType.json,
  };
}

function getDocumentAction(payload) {
  return {
    type: API_CONSTANTS.GET_DOCUMENT,
    payload: payload.payload,
    URL: URLS.GET_DOCUMENT_URL + payload.payload.userId,
    contentType: contentType.json,
  };
}

function updateDocumentAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_DOCUMENT,
    payload: payload,
    URL: URLS.UPDATE_DOCUMENT_URL + payload,
    contentType: contentType.json,
  };
}

function removeDocumentAction(payload) {
  return {
    type: API_CONSTANTS.REMOVE_DOCUMENT,
    payload: payload,
    URL: URLS.REMOVE_DOCUMENT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function updateReportAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_REPORT,
    payload: payload.payload,
    URL: URLS.UPDATE_REPORT + payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteReportAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_REPORT,
    URL: URLS.UPDATE_REPORT + payload.id + "/",
    contentType: contentType.json,
  };
}

function setDeleteReportFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_REPORT_SUCCESS_FALSE,
  };
}

function getReportDetails(payload) {
  return {
    type: API_CONSTANTS.VIEW_REPORT,
    payload: payload.payload,
    URL: URLS.VIEW_REPORT_BY_ID_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getVendorData(payload) {
  return {
    type: API_CONSTANTS.VIEW_VENDOR,
    payload: payload.payload,
    URL: URLS.VIEW_VENDOR_BY_ID_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getVendorPayment(payload) {
  return {
    type: API_CONSTANTS.GET_VENDOR_PAYMENT,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function createVendorPaymentAction(payload) {
  return {
    type: API_CONSTANTS.CREATE_VENDOR_PAYMENT,
    payload,
    URL: URLS.CREATE_VENDOR_PAYMENT_URL,
    contentType: contentType.form,
  };
}

function approveReport(payload) {
  return {
    type: API_CONSTANTS.APPROVE_REPORT,
    payload: payload.payload,
    URL: URLS.APPROVE_REPORT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function rejectReport(payload) {
  return {
    type: API_CONSTANTS.REJECT_REPORT,
    payload: payload.payload,
    URL: URLS.REJECT_REPORT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addreimbursementRecord(payload) {
  return {
    type: API_CONSTANTS.ADD_REIMBURSMENT_RECORD,
    payload,
    URL: URLS.ADD_REIMBURSMENT_RECORD_URL,
    contentType: contentType.json,
  };
}

function rejectReportByAccount(payload) {
  return {
    type: API_CONSTANTS.REJECT_REPORT_BY_ACCOUNT,
    payload: payload.payload,
    URL: URLS.REJECT_REPORT_BY_ACCOUNT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function approveExpense(payload) {
  return {
    type: API_CONSTANTS.APPROVE_EXPENSE,
    payload: payload.payload,
    URL: URLS.APPROVE_EXPENSE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function rejectExpense(payload) {
  return {
    type: API_CONSTANTS.REJECT_EXPENSE,
    payload: payload.payload,
    URL: URLS.REJECT_EXPENSE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addCategoryAction(payload) {
  return {
    type: API_CONSTANTS.ADD_CATEGORY,
    payload,
    URL: URLS.ADD_CATEGORY_URL,
    contentType: contentType.json,
  };
}

function getCategoryPanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_CATEGORYLIST_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateCategorypanle(payload) {
  return {
    type: API_CONSTANTS.UPDATE_CATEGORY_PANEL,
    payload: payload.payload,
    URL: URLS.UPDATE_CATEGORY_PANEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function updateSelfLeaveAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_SELF_LEAVE,
    payload: payload.payload,
    URL: URLS.UPDATE_SELF_LEAVE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteCategorypanelAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_CATEGORY_PANEL,
    URL: URLS.DELETE_CATEGORY_PANEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function createCategoryItem(payload) {
  return {
    type: API_CONSTANTS.CREATE_CATEGORY_ITEM,
    payload,
    URL: URLS.CREATE_CATEGORY_ITEM_URL,
    contentType: contentType.json,
  };
}

function addExpensePolicy(payload) {
  return {
    type: API_CONSTANTS.ADD_EXPENSE_POLICY,
    payload,
    URL: URLS.ADD_EXPENSE_POLICY_URL,
    contentType: contentType.json,
  };
}

function getExpensePolicy(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSE_POLICY,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateExpensePolicy(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSE_POLICY,
    payload: payload.payload,
    URL: URLS.UPDATE_EXPENSE_POLICY_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteExpensePolicy(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE_POLICY,
    URL: URLS.DELETE_EXPENSE_POLICY_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addMileage(payload) {
  return {
    type: API_CONSTANTS.ADD_MILEAGE,
    payload,
    URL: URLS.ADD_MILEAGE_URL,
    contentType: contentType.json,
  };
}

function getMileage(payload) {
  return {
    type: API_CONSTANTS.GET_MILEAGE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function fetchCategory(payload) {
  return {
    type: API_CONSTANTS.FETCH_CATEGORY,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function fetchReport(payload) {
  return {
    type: API_CONSTANTS.FETCH_REPORT,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateMileage(payload) {
  return {
    type: API_CONSTANTS.UPDATE_MILEAGE,
    payload: payload.payload,
    URL: URLS.UPDATE_MILEAGE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteMileage(payload) {
  return {
    type: API_CONSTANTS.DELETE_MILEAGE,
    URL: URLS.DELETE_MILEAGE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function applyCard(payload) {
  return {
    type: API_CONSTANTS.APPLY_CARD,
    payload,
    URL: URLS.APPLY_CARD_URL,
    contentType: contentType.form,
  };
}
function getCard(payload) {
  return {
    type: API_CONSTANTS.GET_CARD,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function approveCard(payload) {
  return {
    type: API_CONSTANTS.APPROVE_CARD,
    payload: payload.payload,
    URL: URLS.APPROVE_CARD_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function rejectCard(payload) {
  return {
    type: API_CONSTANTS.REJECT_CARD,
    payload: payload.payload,
    URL: URLS.REJECT_CARD_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function createVendor(payload) {
  return {
    type: API_CONSTANTS.CREATE_VENDOR,
    payload,
    URL: URLS.CREATE_VENDOR_URL,
    contentType: contentType.json,
  };
}

function getVendor(payload) {
  return {
    type: API_CONSTANTS.GET_VENDOR,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function deleteVendorTable(payload) {
  return {
    type: API_CONSTANTS.DELETE_VENDOR_TABLE,
    URL: URLS.DELETE_VENDOR_TABLE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function updateVendorTable(payload) {
  return {
    type: API_CONSTANTS.UPDATE_VENDOR_TABLE,
    payload: payload.payload,
    URL: URLS.UPDATE_VENDOR_TABLE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function updateVendorPayment(payload) {
  return {
    type: API_CONSTANTS.UPDATE_VENDOR_PAYMENT,
    payload: payload.payload,
    URL: URLS.UPDATE_VENDOR_PAYMENT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function createTravel(payload) {
  return {
    type: API_CONSTANTS.CREATE_TRAVEL,
    payload,
    URL: URLS.CREATE_TRAVEL_URL,
    contentType: contentType.json,
  };
}

function getTravel(payload) {
  return {
    type: API_CONSTANTS.GET_TRAVEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function deleteTravel(payload) {
  return {
    type: API_CONSTANTS.DELETE_TRAVEL,
    URL: URLS.DELETE_TRAVEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function updateTravel(payload) {
  return {
    type: API_CONSTANTS.UPDATE_TRAVEL,
    payload: payload.payload,
    URL: URLS.UPDATE_TRAVEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function submitTravelRequest(payload) {
  return {
    type: API_CONSTANTS.SUBMIT_TRAVEL_REQUEST,
    payload: payload.payload,
    URL: URLS.SUBMIT_TRAVEL_REQUEST_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getTravelApproval(payload) {
  return {
    type: API_CONSTANTS.GET_TRAVEL_REQUEST_APPROVALS,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function rejectTravelApprovals(payload) {
  return {
    type: API_CONSTANTS.REJECT_TRAVEL_REQUEST_APPROVALS,
    payload: payload.payload,
    URL: URLS.REJECT_TRAVEL_REQUEST_APPROVALS_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function approveTravelApprovals(payload) {
  return {
    type: API_CONSTANTS.APPROVE_TRAVEL_REQUEST_APPROVALS,
    payload: payload.payload,
    URL: URLS.APPROVE_TRAVEL_REQUEST_APPROVALS_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getApprove(payload) {
  return {
    type: API_CONSTANTS.GET_APPROVE_TRAVEL_REQUEST_APPROVALS,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getReject(payload) {
  return {
    type: API_CONSTANTS.GET_REJECT_TRAVEL_REQUEST_APPROVALS,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function addExpenseItemSetup(payload) {
  return {
    type: API_CONSTANTS.ADD_EXPENSE_ITEM_SETUP,
    payload,
    URL: URLS.EXPENSE_ITEM_SETUP_URL,
    contentType: contentType.json,
  };
}

function addBulkExpenseReport(payload) {
  return {
    type: API_CONSTANTS.ADD_BULK_EXPENSE_REPORT,
    payload,
    URL: URLS.ADD_BULK_EXPENSE_REPORT_URL,
    contentType: contentType.form,
  };
}

function setAddBulkExpenseReport() {
  return {
    type: API_CONSTANTS.SET_ADD_BULK_EXPENSE_FALSE,
  };
}

function getCategoryListBulkExpense() {
  return {
    type: API_CONSTANTS.GET_CATEGORY_LIST_BULK_EXPENSE,
    URL: URLS.GET_CATEGORY_PANEL_URL,
    contentType: contentType.form,
  };
}

function getTotalForDistance(payload) {
  return {
    type: API_CONSTANTS.GET_DISTANCE_FOR_TOTAL,
    payload,
    URL: URLS.GET_AMOUNT_FROM_DISTANCE_TRAVELED,
    contentType: contentType.json,
  };
}

function postMileage(payload) {
  return {
    type: API_CONSTANTS.POST_MILEAGE_DETAILS,
    payload,
    URL: URLS.CREATE_EXPENSE_COMMON_URL,
    contentType: contentType.form,
  };
}

function setPostMileage() {
  return {
    type: API_CONSTANTS.POST_MILEAGE_DETAILS_RESULT_FALSE,
  };
}

function setExpenseUpdationResFalse() {
  return {
    type: API_CONSTANTS.SET_EXPENSE_UPDATE_RESULT_FALSE,
  };
}

function updateExpense(payload, id) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSE,
    payload,
    URL: URLS.UPDATE_EXPENSE + id + "/",
    contentType: contentType.form,
  };
}

function deleteExpenseAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE,
    payload,
    URL: URLS.DELETE_EXPENSE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

export {
  updateExpense,
  setPostMileage,
  setExpenseUpdationResFalse,
  deleteExpenseAction,
  postMileage,
  getTotalForDistance,
  getCategoryListBulkExpense,
  setAddBulkExpenseReport,
  addBulkExpenseReport,
  userLogin,
  changePassword,
  userRegister,
  getCurrentRole,
  getCurrentUser,
  getAllStaff,
  getUserSettingAction,
  getDepartmentAction,
  getDesignationAction,
  getBranchAction,
  getEmploymentTypeAction,
  getUserRolePermissionAction,
  getShiftPolicyAction,
  getWeekOffAction,
  getAllDropdownAction,
  addSalary,
  addCertificationAction,
  addUserSettingAction,
  addPersonalInformationAction,
  addEducationAction,
  getEducationList,
  addExperienceAction,
  addReport,
  addSelectedReport,
  updateReportAction,
  deleteReportAction,
  setDeleteReportFalse,
  getReportDetails,
  getVendorData,
  getVendorPayment,
  createVendorPaymentAction,
  getExpenseList,
  approveReport,
  rejectReport,
  addreimbursementRecord,
  rejectReportByAccount,
  approveExpense,
  rejectExpense,
  addCategoryAction,
  getCategoryPanelAction,
  updateCategorypanle,
  deleteCategorypanelAction,
  createCategoryItem,
  addExpensePolicy,
  getExpensePolicy,
  updateExpensePolicy,
  deleteExpensePolicy,
  addMileage,
  getMileage,
  fetchCategory,
  fetchReport,
  updateMileage,
  deleteMileage,
  applyCard,
  getCard,
  approveCard,
  rejectCard,
  createVendor,
  getVendor,
  deleteVendorTable,
  updateVendorTable,
  updateVendorPayment,
  createTravel,
  getTravel,
  deleteTravel,
  updateTravel,
  submitTravelRequest,
  getTravelApproval,
  rejectTravelApprovals,
  approveTravelApprovals,
  getApprove,
  getReject,
  updateUserSettingAction,
  getUserAttendanceAction,
  getUserAttendanceDynamicAction,
  getSelfLeaveAction,
  getLeaveListAction,
  getDynamicLeaveListAction,
  getDynamicSelfLeaveAction,
  updateSelfLeaveAction,
  getPersonalInfoAction,
  updatePersonalInfoAction,
  getCertificateAction,
  updateCertificateAction,
  getEducationAction,
  updateEducationAction,
  getExperienceAction,
  updateExperienceAction,
  addDocumentAction,
  getDocumentAction,
  updateDocumentAction,
  removeDocumentAction,
  submitReportAction,
  getSubmittedReportList,
  getApprovedAction,
  getRejectedAction,
  getReimbursedAction,
  getReportList,
  getApprovedReportList,
  addExpenseItemSetup,
  setsubmitReportAction,
  getRejectedExpenseAction,
};
