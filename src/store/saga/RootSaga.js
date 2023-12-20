import { takeEvery } from "redux-saga/effects";
import { API_CONSTANTS } from "../../Globals/APIConstants";

import {
  addReportsubmit,
  getReportList,
  updateReport,
  deleteReport,
  getAddCategoryList,
  categoryPanelList,
  updateCategoryPanel,
  deleteCategory,
  updateCompanyPolicy,
  deleteCompanyPolicy,
  getCompanyPolicy,
  addCompanyPolicy,
  getMileage,
  fetchCategory,
  addMileage,
  updateMileage,
  deleteMileage,
  applyCard,
  getCard,
  updateCard,
  rejectCard,
  // =======================================
  UserLoginGenerator,
  UserRegisterGenerator,
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
  getRole,
  getManagerList,
  addRole,
  getAccountingCodeList,
  getExpenseTypePanel,
  getExternalAccountPanel,
  AboutUs,
  ContactUs,
  AboutUsPage,
  ContactUsPage,
  ChangePassword,
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
} from "./CommonSagas";

export function* RootSaga() {
  yield takeEvery(API_CONSTANTS.ADD_REPORT, addReportsubmit);
  yield takeEvery(API_CONSTANTS.GET_REPORT_LIST, getReportList);
  yield takeEvery(API_CONSTANTS.UPDATE_REPORT, updateReport);
  yield takeEvery(API_CONSTANTS.DELETE_REPORT, deleteReport);

  yield takeEvery(API_CONSTANTS.ADD_CATEGORY, getAddCategoryList);
  yield takeEvery(API_CONSTANTS.GET_CATEGORYLIST_PANEL, categoryPanelList);
  yield takeEvery(API_CONSTANTS.UPDATE_CATEGORY_PANEL, updateCategoryPanel);
  yield takeEvery(API_CONSTANTS.DELETE_CATEGORY_PANEL, deleteCategory);

  yield takeEvery(API_CONSTANTS.ADD_COMPANY_POLICY, addCompanyPolicy);
  yield takeEvery(API_CONSTANTS.GET_COMPANY_POLICY, getCompanyPolicy);
  yield takeEvery(API_CONSTANTS.UPDATE_COMPANY_POLICY, updateCompanyPolicy);
  yield takeEvery(API_CONSTANTS.DELETE_COMPANY_POLICY, deleteCompanyPolicy);

  yield takeEvery(API_CONSTANTS.ADD_MILEAGE, addMileage);
  yield takeEvery(API_CONSTANTS.GET_MILEAGE, getMileage);
  yield takeEvery(API_CONSTANTS.FETCH_CATEGORY, fetchCategory);
  yield takeEvery(API_CONSTANTS.UPDATE_MILEAGE, updateMileage);
  yield takeEvery(API_CONSTANTS.DELETE_MILEAGE, deleteMileage);

  yield takeEvery(API_CONSTANTS.APPLY_CARD, applyCard);
  yield takeEvery(API_CONSTANTS.GET_CARD, getCard);
  yield takeEvery(API_CONSTANTS.UPDATE_CARD, updateCard);
  yield takeEvery(API_CONSTANTS.REJECT_CARD, rejectCard);

  // ============================================================
  yield takeEvery(API_CONSTANTS.USER_LOGIN, UserLoginGenerator);
  yield takeEvery(API_CONSTANTS.USER_REGISTER, UserRegisterGenerator);
  yield takeEvery(API_CONSTANTS.ADD_EXPENSE_TYPE_SETUP, addExpenseType);
  yield takeEvery(API_CONSTANTS.UPDATE_USER_PROFILE, Updateuserprofile);
  yield takeEvery(API_CONSTANTS.ADD_EXPENSE_ITEM_SETUP, addExpenseItem);
  yield takeEvery(
    API_CONSTANTS.UPDATE_EXPENSE_ITEM_SETUP,
    UpdateExpenseItemSetup
  );
  yield takeEvery(API_CONSTANTS.GET_ACCOUNTING_CODE, getAccountingCodeList);
  yield takeEvery(API_CONSTANTS.ADD_EXTERNAL_ACCOUNT_CODE, addExternalcodeType);
  yield takeEvery(API_CONSTANTS.ADD_USER, addUser);
  yield takeEvery(API_CONSTANTS.GET_ROLE, getRole);
  yield takeEvery(API_CONSTANTS.ADD_ROLE, addRole);

  yield takeEvery(API_CONSTANTS.ACCOUNTING_CODE_SUBMIT, accountingCodeSubmit);
  yield takeEvery(API_CONSTANTS.GET_EXPENSE_TYPE_LIST, getParentTypelist);
  yield takeEvery(API_CONSTANTS.GET_ITEMNAME_LIST, getItemNameList);
  yield takeEvery(API_CONSTANTS.EXPENSE_ITEMIZATION, itemizationsubmit);
  yield takeEvery(API_CONSTANTS.ADD_EXPENSE, AddExpesnesubmit);

  yield takeEvery(API_CONSTANTS.GET_MANAGER_LIST, getManagerList);
  yield takeEvery(API_CONSTANTS.GET_EXPENSE_TYPE_PANEL, getExpenseTypePanel);
  yield takeEvery(
    API_CONSTANTS.GET_EXTERNAL_ACCOUNT_CODE_PANEL,
    getExternalAccountPanel
  );
  yield takeEvery(API_CONSTANTS.UPDATE_ABOUTUS, AboutUs);
  yield takeEvery(API_CONSTANTS.UPDATE_CONTACTUS, ContactUs);
  yield takeEvery(API_CONSTANTS.GET_ABOUTUS, AboutUsPage);
  yield takeEvery(API_CONSTANTS.GET_CONTACTUS, ContactUsPage);
  yield takeEvery(API_CONSTANTS.UPDATE_PASSWORD, ChangePassword);
  yield takeEvery(API_CONSTANTS.GET_COMPANY_LIST, GetCompanyList);
  yield takeEvery(API_CONSTANTS.UPDATE_COMPANY_LIST, UpdateCompanyList);
  yield takeEvery(API_CONSTANTS.GET_USER_PANEL, getAddUserPanel);
  yield takeEvery(
    API_CONSTANTS.GET_EXPENSE_ITEM_SETUP_PANEL,
    getExpenseItemSetupPanel
  );
  yield takeEvery(API_CONSTANTS.GET_ITEMIZATION_PANEL, itemizationPanel);
  yield takeEvery(API_CONSTANTS.GET_ACCOUNTINGCODE_PANEL, accountingCodePanel);

  yield takeEvery(API_CONSTANTS.GET_EXPENSELIST_PANEL, expensePanelList);
  yield takeEvery(API_CONSTANTS.SEARCH_EXPENSE_TYPE, searchExpenseType);
  yield takeEvery(
    API_CONSTANTS.SEARCH_EXTERNAL_ACCOUNT_CODE,
    searchExternalAccountCode
  );
  yield takeEvery(API_CONSTANTS.UPDATE_EXPENSE_TYPE, updateExpenseType);
  yield takeEvery(API_CONSTANTS.UPDATE_USER, updateUser);
  yield takeEvery(
    API_CONSTANTS.UPDATE_EXTERNAL_ACCOUNT_CODE,
    updateExternalAccountCode
  );
  yield takeEvery(
    API_CONSTANTS.UPDATE_ACCOUNTINGCODE_PANEL,
    UpdateAccountcodePanel
  );

  yield takeEvery(
    API_CONSTANTS.UPDATE_EXPENSEITEMIZATION_PANEL,
    UpdateExpenseItemization
  );
  yield takeEvery(API_CONSTANTS.UPDATE_EXPENSE_PANEL, UpdateExpenseList);
  yield takeEvery(
    API_CONSTANTS.EXPENSE_APROVED_MANAGER,
    approvedbuttonExpensemanager
  );
  yield takeEvery(
    API_CONSTANTS.EXPENSE_APROVED_MANAGER,
    approvedbuttonExpensemanager
  );
  yield takeEvery(API_CONSTANTS.EXPENSE_REJECT_MANGER, rejectExpensemanager);
  yield takeEvery(API_CONSTANTS.EXPENSE_HOLD_MANAGER, holdExpensemanager);
  yield takeEvery(
    API_CONSTANTS.EXPENSE_APPROVED_PPANEL_MANGER,
    Expenseapprovedpanel
  );
  yield takeEvery(
    API_CONSTANTS.EXPORT_BUTTON_ACCOUNTINGCODE,
    exportbuttonAccountingCode
  );
  yield takeEvery(
    API_CONSTANTS.EXPORT_BUTTON_ACCOUNTINGCODE,
    exportbuttonAccountingCode
  );
  yield takeEvery(
    API_CONSTANTS.EXPENSETABLE_SUBMIT_API,
    TableExpenseSubmitTrue
  );
  yield takeEvery(API_CONSTANTS.EXPENSE_REJECT_MANGER, rejectExpensemanager);
  yield takeEvery(API_CONSTANTS.EXPENSE_HOLD_MANAGER, holdExpensemanager);
  yield takeEvery(
    API_CONSTANTS.FINANCE_MANAGER_EXPENSE_LIST,
    financemanagerexpenselist
  );
  yield takeEvery(
    API_CONSTANTS.FINANCE_MANAGER_EXPENSE_REJECT,
    financemanagerreject
  );
  yield takeEvery(
    API_CONSTANTS.FINANCE_MANAGER_EXPENSE_HOLD,
    financemanagerhold
  );
  yield takeEvery(
    API_CONSTANTS.FINANCE_MANAGER_EXPENSE_APPROVE,
    financemanagerapprove
  );
  yield takeEvery(
    API_CONSTANTS.ACCOUNT_ADD_BY_FINANCE_MANAGER,
    accountAddByFinanceManager
  );
  yield takeEvery(
    API_CONSTANTS.GET_USER_PERMISSIONS_HEADERS_AND_LIST,
    getUserRolePermissions
  );
  yield takeEvery(API_CONSTANTS.CREATE_ROLE, postCommonGenerator);
  yield takeEvery(API_CONSTANTS.GET_ROLE_LIST_ACTION, getCommonGenerator);
  yield takeEvery(API_CONSTANTS.UPDATE_ROLE, putCommonGenerator);
  yield takeEvery(API_CONSTANTS.DELETE_ROLE, commonDeleteRole);
  yield takeEvery(
    API_CONSTANTS.GET_EMPLOYEE_ACCOUNT_NO,
    addEmployeeAccountNumber
  );
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE_ITEM_SETUP, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE_TYPE, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.DELETE_USER, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.DELETE_EXTERNAL_ACCOUNT_CODE, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.EXPORT_EXPENSE_TYPE_LIST, exportExpenseType);
  yield takeEvery(
    API_CONSTANTS.EXPORT_EXPENSE_ITEM_SETUP,
    exportExpenseItemSetup
  );
  yield takeEvery(
    API_CONSTANTS.EXPORT_EXTERNAL_ACCOUNT_CODE,
    exportExternalAccountCode
  );
  yield takeEvery(API_CONSTANTS.EXPORT_USER, exportUser);
  yield takeEvery(
    API_CONSTANTS.EXPORT_FINANCE_MANAGER_LIST,
    exportFinanceManagerList
  );
  yield takeEvery(
    API_CONSTANTS.GET_FINANCE_MANAGER_LIST,
    getfinancemanagerdropdown
  );
  yield takeEvery(API_CONSTANTS.EXPORT_CATEGORY_LIST, exportCategoryList);
  yield takeEvery(
    API_CONSTANTS.EXPORT_EXPENSE_ITEMIZATION_LIST,
    exportItemizationList
  );
  yield takeEvery(API_CONSTANTS.EXPORT_EXPENSE_LIST, exportexpenseList);
  yield takeEvery(
    API_CONSTANTS.EXPORT_EXPENSEAPPROVED_LIST,
    exportexpenseapprovedList
  );
  yield takeEvery(API_CONSTANTS.OWN_EXPENSE_DRAFT_LIST, ownExpenseDraftList);
  yield takeEvery(API_CONSTANTS.OWN_EXPENSE_HOLD_LIST, ownExpenseHoldList);
  yield takeEvery(API_CONSTANTS.OWN_EXPENSE_REJECT_LIST, ownExpenseRejectList);
  yield takeEvery(
    API_CONSTANTS.DELETE_EXPENSEITEMIZAION_PANEL,
    commonDeleteRole
  );
  yield takeEvery(API_CONSTANTS.DELETE_ACCOUNTINGCODE_PANEL, commonDeleteRole);
  yield takeEvery(API_CONSTANTS.DELETE_EXPENSE_PANEL, commonDeleteRole);
  yield takeEvery(
    API_CONSTANTS.MANAGER_CARD_APPROVED_LIST,
    commanmanagercardlidtfunction
  );
  yield takeEvery(
    API_CONSTANTS.MANAGER_CARD_REJECT_LIST,
    commanmanagercardlidtfunction
  );
  yield takeEvery(
    API_CONSTANTS.MANAGER_CARD_HOLD_LIST,
    commanmanagercardlidtfunction
  );
  yield takeEvery(
    API_CONSTANTS.OWN_EXPENSE_APPROVE_LIST,
    ownExpenseApproveList
  );
  yield takeEvery(API_CONSTANTS.EXPORT_COMPANY_PANEL, exportCompanypanel);
}
