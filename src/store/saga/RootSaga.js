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
  getBranch,
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
  deleteVendor,
  updateVendor,
  createTravel,
  getTravel,
  deleteTravel,
  addreimbursementRecord,
  rejectReportByAccount,

  // =======================================
  Updateuserprofile,
  addExpenseItem,
  addExpenseType,
  addExternalcodeType,
  addUser,
  accountingCodeSubmit,
  getParentTypelist,
  getItemNameList,
  itemizationsubmit,
  AddExpesnesubmit,
  getManagerList,
  addRole,
  getAccountingCodeList,
  getExpenseTypePanel,
  getExternalAccountPanel,
  AboutUs,
  ContactUs,
  AboutUsPage,
  ContactUsPage,
  GetCompanyList,
  UpdateCompanyList,
  getAddUserPanel,
  getExpenseItemSetupPanel,
  itemizationPanel,
  accountingCodePanel,
  expensePanelList,
  searchExpenseType,
  searchExternalAccountCode,
  UpdateExpenseItemSetup,
  updateExpenseType,
  updateUser,
  // updateExternalAccountCode,
  UpdateAccountcodePanel,

  // UpdateExpenseIemaiztaion,
  UpdateExpenseItemization,
  UpdateExpenseList,
  TableExpenseSubmitTrue,
  rejectExpensemanager,
  holdExpensemanager,
  approvedbuttonExpensemanager,
  Expenseapprovedpanel,
  exportbuttonAccountingCode,
  financemanagerexpenselist,
  financemanagerreject,
  financemanagerhold,
  financemanagerapprove,
  accountAddByFinanceManager,
  getUserRolePermissions,
  postCommonGenerator,
  getCommonGenerator,
  putCommonGenerator,
  commonDeleteRole,
  addEmployeeAccountNumber,
  updateExternalAccountCode,
  exportExpenseType,
  exportExpenseItemSetup,
  exportExternalAccountCode,
  exportUser,
  exportFinanceManagerList,
  getfinancemanagerdropdown,
  exportCategoryList,
  exportItemizationList,
  exportexpenseList,
  exportexpenseapprovedList,
  ownExpenseDraftList,
  ownExpenseHoldList,
  ownExpenseRejectList,
  commanmanagercardlidtfunction,
  ownExpenseApproveList,
  exportCompanypanel,
  createCategoryItem,
  updateTravel,
  rejectExpense,
  approveExpense,
  getAllUser,
  addAllUser,
  addSelectedReport,
} from "./CommonSagas";

export function* RootSaga() {
  yield takeEvery(API_CONSTANTS.USER_LOGIN, UserLoginGenerator);
  yield takeEvery(API_CONSTANTS.CHANGE_PASSWORD, ChangePassword);
  yield takeEvery(API_CONSTANTS.USER_REGISTER, UserRegisterGenerator);
  yield takeEvery(API_CONSTANTS.GET_CURRENT_ROLE, getCurrentRole);
  yield takeEvery(API_CONSTANTS.GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(API_CONSTANTS.GET_STAFF_LIST, getStaff);
  yield takeEvery(API_CONSTANTS.GET_EMPLOYMENT_TYPE_LIST, getEmploymentType);
  yield takeEvery(API_CONSTANTS.GET_DEPARTMENT_LIST, getDepartment);
  yield takeEvery(API_CONSTANTS.GET_DESIGNATION_LIST, getDesignation);
  yield takeEvery(API_CONSTANTS.GET_BRANCH_LIST, getCommonGenerator);
  yield takeEvery(API_CONSTANTS.GET_USERROLE_PERMISSION, getUserRolePermission);
  yield takeEvery(API_CONSTANTS.ADD_SALARY, addSalaryRevision);
  yield takeEvery(API_CONSTANTS.ADD_CERTIFICATION, addCertification);
  yield takeEvery(API_CONSTANTS.ADD_USER_SETTING, addUserSetting);
  yield takeEvery(
    API_CONSTANTS.ADD_PERSONAL_INFORMATION,
    addPersonalInformation
  );
  yield takeEvery(API_CONSTANTS.ADD_EDUCATION, addEducation);
  yield takeEvery(API_CONSTANTS.ADD_EXPERIENCE, addExperience);

  yield takeEvery(API_CONSTANTS.ADD_REPORT, addReportsubmit);
  yield takeEvery(API_CONSTANTS.ADD_SELECTED_REPORT, addSelectedReport);
  yield takeEvery(API_CONSTANTS.GET_REPORT_LIST, getReportList);
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

  yield takeEvery(API_CONSTANTS.CREATE_VENDOR, createVendor);
  yield takeEvery(API_CONSTANTS.GET_VENDOR, getVendor);
  yield takeEvery(API_CONSTANTS.DELETE_VENDOR, deleteVendor);
  yield takeEvery(API_CONSTANTS.UPDATE_VENDOR, updateVendor);

  yield takeEvery(API_CONSTANTS.CREATE_TRAVEL, createTravel);
  yield takeEvery(API_CONSTANTS.GATE_TRAVEL, getTravel);
  yield takeEvery(API_CONSTANTS.DELETE_TRAVEL, deleteTravel);
  yield takeEvery(API_CONSTANTS.UPDATE_TRAVEL, updateTravel);

  yield takeEvery(API_CONSTANTS.GET_ALL_USER, getAllUser);
  yield takeEvery(API_CONSTANTS.ADD_ALL_USER, addAllUser);

  // ============================================================

  yield takeEvery(API_CONSTANTS.EXPORT_COMPANY_PANEL, exportCompanypanel);

  // -------------------- SUDARSHAN ------------------

  yield takeEvery(API_CONSTANTS.ADD_BULK_EXPENSE_REPORT, postCommonGenerator);
  yield takeEvery(
    API_CONSTANTS.GET_CATEGORY_LIST_BULK_EXPENSE,
    getCommonGenerator
  );
  yield takeEvery(API_CONSTANTS.GET_DISTANCE_FOR_TOTAL, postCommonGenerator);
  yield takeEvery(API_CONSTANTS.POST_MILEAGE_DETAILS, postCommonGenerator);
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE, commonDeleteRole);
}
