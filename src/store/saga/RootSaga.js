import { take, takeEvery } from "redux-saga/effects";
import { API_CONSTANTS } from "../../Globals/APIConstants";

import {
  UserLoginGenerator,
  ChangePassword,
  UserRegisterGenerator,
  getCurrentRole,
  getCurrentUser,
  getStaff,
  addExperience,
  getDepartment,
  getDesignation,
  getUserRolePermission,
  getEmploymentType,
  addEducation,
  addCertification,
  addUserSetting,
  addPersonalInformation,
  addReportsubmit,
  getReportList,
  getApprovedReportList,
  getExpenseList,
  updateReport,
  deleteReport,
  getReport,
  getVendorDetails,
  getVendorPayment,
  createVendorPayment,
  getAddCategoryList,
  categoryPanelList,
  updateCategoryPanel,
  deleteCategory,
  approveReport,
  rejectReport,
  addSalaryRevision,
  addExpensePolicy,
  updateExpensePolicy,
  deleteExpensePolicy,
  getExpensePolicy,
  getMileage,
  fetchCategory,
  fetchReport,
  addMileage,
  updateMileage,
  deleteMileage,
  applyCard,
  getCard,
  approveCard,
  rejectCard,
  createVendor,
  getVendor,
  updateVendor,
  createTravel,
  getTravel,
  deleteTravel,
  updateTravel,
  submitTravelRequest,
  addreimbursementRecord,
  rejectReportByAccount,
  getShiftPolicy,
  getWeekOff,
  getCommonGenerator,
  createCategoryItem,
  rejectExpense,
  approveExpense,
  getAllUser,
  addAllUser,
  addSelectedReport,
  getEducationList,
  getAllDropdown,
  getUserSetting,
  updateUserSetting,
  getUserAttendance,
  getUserAttendanceDynamic,
  deleteVendorTable,
  updateVendorTable,
  updateVendorPayment,
  getTravelApproval,
  rejectTravelApprovals,
  approveTravelApprovals,
  getLeaveList,
  getSelfLeave,
  getDynamicLeave,
  getDynamicSelfLeave,
  updateSelfLeave,
  getPersonalInfo,
  updatePersonalInfo,
  updateCertificate,
  getCertificate,
  getEducation,
  updateEducation,
  getExperience,
  updateExperience,
  addDocument,
  getDocument,
  updateDocument,
  removeDocument,
  submitReport,
  getSubmittedReportList,
  getApproved,
  getRejected,
  getReimbursed,
  postCommonGenerator,
  putCommonGenerator,
  commonDeleteRole,
  // exportCompanypanel,
  getApprove,
  getReject,
  getRejectedExpenseList,
  // =======================================
} from "./CommonSagas";

export function* RootSaga() {
  yield takeEvery(API_CONSTANTS.USER_LOGIN, UserLoginGenerator);
  yield takeEvery(API_CONSTANTS.CHANGE_PASSWORD, ChangePassword);
  yield takeEvery(API_CONSTANTS.USER_REGISTER, UserRegisterGenerator);
  yield takeEvery(API_CONSTANTS.GET_CURRENT_ROLE, getCurrentRole);
  yield takeEvery(API_CONSTANTS.GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(API_CONSTANTS.GET_USER_ATTENDANCE_LIST, getUserAttendance);
  yield takeEvery(
    API_CONSTANTS.GET_USER_ATTENDANCE_DYNAMIC_LIST,
    getUserAttendanceDynamic
  );
  yield takeEvery(API_CONSTANTS.GET_STAFF_LIST, getStaff);
  yield takeEvery(API_CONSTANTS.GET_EMPLOYMENT_TYPE_LIST, getEmploymentType);
  yield takeEvery(API_CONSTANTS.GET_DEPARTMENT_LIST, getDepartment);
  yield takeEvery(API_CONSTANTS.GET_DESIGNATION_LIST, getDesignation);
  yield takeEvery(API_CONSTANTS.GET_BRANCH_LIST, getCommonGenerator);
  yield takeEvery(API_CONSTANTS.GET_USERROLE_PERMISSION, getUserRolePermission);
  yield takeEvery(API_CONSTANTS.GET_SHIFT_POLICY_LIST, getShiftPolicy);
  yield takeEvery(API_CONSTANTS.GET_WEEK_OFF_LIST, getWeekOff);
  yield takeEvery(API_CONSTANTS.GET_ALL_DROPDOWN_LIST, getAllDropdown);
  yield takeEvery(API_CONSTANTS.ADD_SALARY, addSalaryRevision);
  yield takeEvery(API_CONSTANTS.ADD_CERTIFICATION, addCertification);
  yield takeEvery(API_CONSTANTS.ADD_USER_SETTING, addUserSetting);
  yield takeEvery(API_CONSTANTS.GET_USER_SETTING, getUserSetting);
  yield takeEvery(API_CONSTANTS.UPDATE_USER_SETTING, updateUserSetting);
  yield takeEvery(
    API_CONSTANTS.ADD_PERSONAL_INFORMATION,
    addPersonalInformation
  );
  yield takeEvery(API_CONSTANTS.ADD_DOCUMENT, addDocument);
  yield takeEvery(API_CONSTANTS.GET_DOCUMENT, getDocument);
  yield takeEvery(API_CONSTANTS.UPDATE_DOCUMENT, updateDocument);
  yield takeEvery(API_CONSTANTS.REMOVE_DOCUMENT, removeDocument);

  yield takeEvery(API_CONSTANTS.GET_EXPERIENCE, getExperience);
  yield takeEvery(API_CONSTANTS.UPDATE_EXPERIENCE, updateExperience);
  yield takeEvery(API_CONSTANTS.GET_EDUCATION, getEducation);
  yield takeEvery(API_CONSTANTS.UPDATE_EDUCATION, updateEducation);
  yield takeEvery(API_CONSTANTS.GET_CERTIFICATE, getCertificate);
  yield takeEvery(API_CONSTANTS.UPDATE_CERTIFICATE, updateCertificate);
  yield takeEvery(API_CONSTANTS.GET_PERSONAL_INFORMATION, getPersonalInfo);
  yield takeEvery(
    API_CONSTANTS.UPDATE_PERSONAL_INFORMATION,
    updatePersonalInfo
  );
  yield takeEvery(API_CONSTANTS.UPDATE_SELF_LEAVE, updateSelfLeave);
  yield takeEvery(API_CONSTANTS.GET_LEAVES_LIST, getLeaveList);
  yield takeEvery(API_CONSTANTS.GET_SELF_LEAVES_LIST, getSelfLeave);
  yield takeEvery(API_CONSTANTS.GET_DYNAMIC_LEAVES_LIST, getDynamicLeave);
  yield takeEvery(
    API_CONSTANTS.GET_DYNAMIC_SELF_LEAVES_LIST,
    getDynamicSelfLeave
  );
  yield takeEvery(API_CONSTANTS.GET_EDUCATION_LIST, getEducationList);
  yield takeEvery(API_CONSTANTS.ADD_EDUCATION, addEducation);
  yield takeEvery(API_CONSTANTS.ADD_EXPERIENCE, addExperience);
  yield takeEvery(API_CONSTANTS.ADD_REPORT, addReportsubmit);
  yield takeEvery(API_CONSTANTS.ADD_SELECTED_REPORT, addSelectedReport);
  yield takeEvery(API_CONSTANTS.GET_REPORT_LIST, getReportList);
  yield takeEvery(
    API_CONSTANTS.GET_SUBMITTED_REPORT_LIST,
    getSubmittedReportList
  );
  yield takeEvery(API_CONSTANTS.SUBMIT_REPORT, submitReport);
  yield takeEvery(API_CONSTANTS.GET_APPROVED_REPORT, getApproved);
  yield takeEvery(API_CONSTANTS.GET_REJECTED_REPORT, getRejected);
  yield takeEvery(API_CONSTANTS.GET_REIMBURSED_REPORT, getReimbursed);

  yield takeEvery(
    API_CONSTANTS.GET_APPROVED_REPORT_LIST,
    getApprovedReportList
  );
  yield takeEvery(API_CONSTANTS.GET_EXPENSE_LIST, getExpenseList);
  yield takeEvery(API_CONSTANTS.UPDATE_REPORT, updateReport);
  yield takeEvery(API_CONSTANTS.DELETE_REPORT, deleteReport);
  yield takeEvery(API_CONSTANTS.VIEW_REPORT, getReport);

  yield takeEvery(API_CONSTANTS.APPROVE_REPORT, approveReport);
  yield takeEvery(API_CONSTANTS.REJECT_REPORT, rejectReport);
  yield takeEvery(API_CONSTANTS.APPROVE_EXPENSE, approveExpense);
  yield takeEvery(API_CONSTANTS.REJECT_EXPENSE, rejectExpense);
  yield takeEvery(
    API_CONSTANTS.ADD_REIMBURSMENT_RECORD,
    addreimbursementRecord
  );
  yield takeEvery(
    API_CONSTANTS.REJECT_REPORT_BY_ACCOUNT,
    rejectReportByAccount
  );
  yield takeEvery(
    API_CONSTANTS.GET_REJECTED_EXPENSE_LIST,
    getRejectedExpenseList
  );
  yield takeEvery(API_CONSTANTS.ADD_CATEGORY, getAddCategoryList);
  yield takeEvery(API_CONSTANTS.GET_CATEGORYLIST_PANEL, categoryPanelList);
  yield takeEvery(API_CONSTANTS.UPDATE_CATEGORY_PANEL, updateCategoryPanel);
  yield takeEvery(API_CONSTANTS.DELETE_CATEGORY_PANEL, deleteCategory);
  yield takeEvery(API_CONSTANTS.CREATE_CATEGORY_ITEM, createCategoryItem);

  yield takeEvery(API_CONSTANTS.ADD_EXPENSE_POLICY, addExpensePolicy);
  yield takeEvery(API_CONSTANTS.GET_EXPENSE_POLICY, getExpensePolicy);
  yield takeEvery(API_CONSTANTS.UPDATE_EXPENSE_POLICY, updateExpensePolicy);
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE_POLICY, deleteExpensePolicy);

  yield takeEvery(API_CONSTANTS.ADD_MILEAGE, addMileage);
  yield takeEvery(API_CONSTANTS.GET_MILEAGE, getMileage);
  yield takeEvery(API_CONSTANTS.FETCH_CATEGORY, fetchCategory);
  yield takeEvery(API_CONSTANTS.FETCH_REPORT, fetchReport);
  yield takeEvery(API_CONSTANTS.UPDATE_MILEAGE, updateMileage);
  yield takeEvery(API_CONSTANTS.DELETE_MILEAGE, deleteMileage);

  yield takeEvery(API_CONSTANTS.APPLY_CARD, applyCard);
  yield takeEvery(API_CONSTANTS.GET_CARD, getCard);
  yield takeEvery(API_CONSTANTS.APPROVE_CARD, approveCard);
  yield takeEvery(API_CONSTANTS.REJECT_CARD, rejectCard);

  yield takeEvery(API_CONSTANTS.VIEW_VENDOR, getVendorDetails);
  yield takeEvery(API_CONSTANTS.GET_VENDOR_PAYMENT, getVendorPayment);
  yield takeEvery(API_CONSTANTS.CREATE_VENDOR_PAYMENT, createVendorPayment);
  yield takeEvery(API_CONSTANTS.UPDATE_VENDOR_PAYMENT, updateVendorPayment);

  yield takeEvery(API_CONSTANTS.CREATE_VENDOR, createVendor);
  yield takeEvery(API_CONSTANTS.GET_VENDOR, getVendor);

  yield takeEvery(API_CONSTANTS.DELETE_VENDOR_TABLE, deleteVendorTable);
  yield takeEvery(API_CONSTANTS.UPDATE_VENDOR_TABLE, updateVendorTable);

  yield takeEvery(API_CONSTANTS.CREATE_TRAVEL, createTravel);
  yield takeEvery(API_CONSTANTS.GET_TRAVEL, getTravel);
  yield takeEvery(API_CONSTANTS.DELETE_TRAVEL, deleteTravel);
  yield takeEvery(API_CONSTANTS.UPDATE_TRAVEL, updateTravel);
  yield takeEvery(API_CONSTANTS.SUBMIT_TRAVEL_REQUEST, submitTravelRequest);

  yield takeEvery(
    API_CONSTANTS.GET_TRAVEL_REQUEST_APPROVALS,
    getTravelApproval
  );
  yield takeEvery(
    API_CONSTANTS.REJECT_TRAVEL_REQUEST_APPROVALS,
    rejectTravelApprovals
  );
  yield takeEvery(
    API_CONSTANTS.APPROVE_TRAVEL_REQUEST_APPROVALS,
    approveTravelApprovals
  );
  yield takeEvery(
    API_CONSTANTS.GET_APPROVE_TRAVEL_REQUEST_APPROVALS,
    getApprove
  );
  yield takeEvery(API_CONSTANTS.GET_REJECT_TRAVEL_REQUEST_APPROVALS, getReject);

  yield takeEvery(API_CONSTANTS.GET_ALL_USER, getAllUser);
  yield takeEvery(API_CONSTANTS.ADD_ALL_USER, addAllUser);

  yield takeEvery(API_CONSTANTS.ADD_BULK_EXPENSE_REPORT, postCommonGenerator);
  yield takeEvery(
    API_CONSTANTS.GET_CATEGORY_LIST_BULK_EXPENSE,
    getCommonGenerator
  );
  yield takeEvery(API_CONSTANTS.GET_DISTANCE_FOR_TOTAL, postCommonGenerator);
  yield takeEvery(API_CONSTANTS.POST_MILEAGE_DETAILS, postCommonGenerator);
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.UPDATE_EXPENSE, putCommonGenerator);
}
