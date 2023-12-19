import { API_CONSTANTS } from "../../Globals/APIConstants";
import { contentType } from "../../Globals/ContentType";
import { URLS } from "../../Globals/URLS";

function addReport(payload) {
  return {
    type: API_CONSTANTS.ADD_REPORT,
    payload,
    URL: URLS.ADD_REPORT_URL,
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

function deleteCategorypanelAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_CATEGORY_PANEL,
    URL: URLS.DELETE_CATEGORY_PANEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addCompanyPolicy(payload) {
  return {
    type: API_CONSTANTS.ADD_COMPANY_POLICY,
    payload,
    URL: URLS.ADD_COMPANY_POLICY_URL,
    contentType: contentType.json,
  };
}
function getCompanyPolicy(payload) {
  return {
    type: API_CONSTANTS.GET_COMPANY_POLICY,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateCompanyPolicy(payload) {
  return {
    type: API_CONSTANTS.UPDATE_COMPANY_POLICY,
    payload: payload.payload,
    URL: URLS.UPDATE_COMPANY_POLICY_URL+ payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteCompanyPolicy(payload) {
  return {
    type: API_CONSTANTS.DELETE_COMPANY_POLICY,
    URL: URLS.DELETE_COMPANY_POLICY_URL + payload.id + "/",
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

function updateMileage(payload) {
  return {
    type: API_CONSTANTS.UPDATE_MILEAGE,
    payload: payload.payload,
    URL: URLS.UPDATE_MILEAGE_URL+ payload.id + "/",
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
    contentType: contentType.json,
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

function updateCard(payload) {
  return {
    type: API_CONSTANTS.UPDATE_CARD,
    payload: payload.payload,
    URL: URLS.UPDATE_CARD_URL+ payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteCard(payload) {
  return {
    type: API_CONSTANTS.DELETE_CARD,
    URL: URLS.DELETE_CARD_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
// ================================================================================

function userLogin(payload) {
  return {
    type: API_CONSTANTS.USER_LOGIN,
    payload,
    URL: URLS.USER_LOGIN_URL,
    contentType: contentType.json,
  };
}
function userRegister(payload) {
  return {
    type: API_CONSTANTS.USER_REGISTER,
    payload,
    URL: URLS.USER_REGISTER_URL,
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
function updateExpenseItemSetup(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSE_ITEM_SETUP,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function addExpenseTypeSetup(payload) {
  return {
    type: API_CONSTANTS.ADD_EXPENSE_TYPE_SETUP,
    payload,
    URL: URLS.EXPENSE_TYPE_URL,
    contentType: contentType.json,
  };
}

function getAccountingCodeAction(payload) {
  return {
    type: API_CONSTANTS.GET_ACCOUNTING_CODE,
    payload,
    URL: URLS.GET_ACCOUNTING_CODE_URL,
    contentType: contentType.json,
  };
}
function addExternalAccountCodeAction(payload) {
  return {
    type: API_CONSTANTS.ADD_EXTERNAL_ACCOUNT_CODE,
    payload,
    URL: URLS.EXTERNAL_ACCOUNT_CODE_URL,
    contentType: contentType.json,
  };
}

function updateProfileuser(payload) {
  return {
    type: API_CONSTANTS.UPDATE_USER_PROFILE,
    payload,
    URL: URLS.UPDATE_USER_PROFILE_URL,
    contentType: contentType.json,
  };
}

function addUserAction(payload) {
  return {
    type: API_CONSTANTS.ADD_USER,
    payload,
    URL: URLS.ADD_USER_URL,
    contentType: contentType.json,
  };
}

function getRoleAction(payload) {
  return {
    type: API_CONSTANTS.GET_ROLE,
    payload,
    URL: URLS.GET_ROLE_URL,
    contentType: contentType.json,
  };
}

function getManagerListAction(payload) {
  return {
    type: API_CONSTANTS.GET_MANAGER_LIST,
    payload,
    URL: URLS.GET_MANAGER_LIST_URL,
    contentType: contentType.json,
  };
}

function addRoleAction(payload) {
  return {
    type: API_CONSTANTS.ADD_ROLE,
    payload,
    URL: URLS.GET_ROLE_URL,
    contentType: contentType.json,
  };
}

function Accountingcodesubmit(payload) {
  return {
    type: API_CONSTANTS.ACCOUNTING_CODE_SUBMIT,
    payload,
    URL: URLS.GET_ACCOUNTING_CODE_URL,
    contentType: contentType.json,
  };
}
function Getexpensetypelist(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSE_TYPE_LIST,
    payload,
    URL: URLS.EXPENSE_TYPE_URL,
    contentType: contentType.json,
  };
}
function getItemListonItemization(payload) {
  return {
    type: API_CONSTANTS.GET_ITEMNAME_LIST,
    payload,
    URL: URLS.EXPENSE_ITEM_SETUP_URL,
  };
}

function EXpenseItemizationsubmit(payload) {
  return {
    type: API_CONSTANTS.EXPENSE_ITEMIZATION,
    payload,
    URL: URLS.ITEMIZATION_SUBMIT_URL,
    contentType: contentType.json,
  };
}
function addExpense(payload) {
  return {
    type: API_CONSTANTS.ADD_EXPENSE,
    payload,
    URL: URLS.ADD_EXPENSE_URL,
    contentType: contentType.form,
  };
}



function getExpenseTypePanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSE_TYPE_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getExternalAccountCodePanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_EXTERNAL_ACCOUNT_CODE_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function aboutUs(payload) {
  return {
    type: API_CONSTANTS.UPDATE_ABOUTUS,
    payload,
    URL: URLS.UPDATE_ABOUTUS_URL,
    contentType: contentType.json,
  };
}
function contactUs(payload) {
  return {
    type: API_CONSTANTS.UPDATE_CONTACTUS,
    payload,
    URL: URLS.UPDATE_CONTACTUS_URL,
    contentType: contentType.json,
  };
}

function aboutUsPage(payload) {
  return {
    type: API_CONSTANTS.GET_ABOUTUS,
    payload,
    URL: URLS.UPDATE_ABOUTUS_URL,
    contentType: contentType.json,
  };
}
function contactUsPage(payload) {
  return {
    type: API_CONSTANTS.GET_CONTACTUS,
    payload,
    URL: URLS.GET_CONTACTUS_URL,
    contentType: contentType.json,
  };
}

function changePassword(payload) {
  return {
    type: API_CONSTANTS.UPDATE_PASSWORD,
    payload,
    URL: URLS.UPDATE_PASSWORD_URL,
    contentType: contentType.json,
  };
}
function getCompanyList(payload) {
  return {
    type: API_CONSTANTS.GET_COMPANY_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function updateCompanyList(payload) {
  return {
    type: API_CONSTANTS.UPDATE_COMPANY_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

// function getaccountingcodePanelAction(payload) {
//   return {
//     type: API_CONSTANTS.GET_ACCOUNTINGCODE_PANEL,
//     payload: payload.payload,
//     URL: payload.URL,
//     contentType: contentType.json,
//   };
// }

function addUserPanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_USER_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getExpenseItemSetupPanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSE_ITEM_SETUP_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getPanelItemization(payload) {
  return {
    type: API_CONSTANTS.GET_ITEMIZATION_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function getaccountingcodePanelAction(payload) {
  return {
    type: API_CONSTANTS.GET_ACCOUNTINGCODE_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}



function getexpensePanelListAction(payload) {
  return {
    type: API_CONSTANTS.GET_EXPENSELIST_PANEL,
    payload,
    URL: payload.URL,
    contentType: contentType.form,
  };
}

function applyCardAction(payload) {
  return {
    type: API_CONSTANTS.APPLY_CARD,
    payload,
    URL: URLS.APPLY_CARD_URL,
    contentType: contentType.json,
  };
}

function searchExpenseTypeAction(payload) {
  return {
    type: API_CONSTANTS.SEARCH_EXPENSE_TYPE,
    payload,
    URL: URLS.SEARCH_EXPENSE_TYPE_URL,
    contentType: contentType.json,
  };
}

function searchExternalAccountCodeAction(payload) {
  return {
    type: API_CONSTANTS.SEARCH_EXTERNAL_ACCOUNT_CODE,
    payload,
    URL: URLS.SEARCH_EXTERNAL_ACCOUNT_CODE_URL,
    contentType: contentType.json,
  };
}

function updateExpenseTypeAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSE_TYPE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function updateAccountingcodepanelAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_ACCOUNTINGCODE_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function updateUserAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_USER,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateExternalAccountCodeAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXTERNAL_ACCOUNT_CODE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function updateexpenseitemizationpanel(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSEITEMIZATION_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function updateexpensepanel(payload) {
  return {
    type: API_CONSTANTS.UPDATE_EXPENSE_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.form,
  };
}
function expensetableTrueSubmit(payload) {
  return {
    type: API_CONSTANTS.EXPENSETABLE_SUBMIT_API,
    payload: payload.payload,
    URL: URLS.EXPENSETABLE_SUBMIT_TRUE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function expenseApprovedmanager(payload) {
  return {
    type: API_CONSTANTS.EXPENSE_APROVED_MANAGER,
    payload,
    URL: URLS.EXPENSE_APPROVED_MANEGER_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function expenseRejectmanager(payload) {
  return {
    type: API_CONSTANTS.EXPENSE_REJECT_MANGER,
    payload,
    URL: URLS.EXPENSE_REJECT_MANAGER_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function expenseHoldmanager(payload) {
  return {
    type: API_CONSTANTS.EXPENSE_HOLD_MANAGER,
    payload,
    URL: URLS.EXPENSE_HOLD_MANGER_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function getapprovedExpensepanelAction(payload) {
  return {
    type: API_CONSTANTS.EXPENSE_APPROVED_PPANEL_MANGER,
    payload,
    URL: URLS.GET_MANEGERAPPROVED_LIST_URL,
    contentType: contentType.json,
  };
}

function exportaccountingcode(payload) {
  console.log("EXPORT_BUTTON_ACCOUNTINGCODE", payload);
  return {
    type: API_CONSTANTS.EXPORT_BUTTON_ACCOUNTINGCODE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function getFinanceManagerExpenseListAction(payload) {
  return {
    type: API_CONSTANTS.FINANCE_MANAGER_EXPENSE_LIST,
    payload,
    URL: payload.URL,
    contentType: contentType.form,
  };
}
function financeManagerRejectAction(payload) {
  return {
    type: API_CONSTANTS.FINANCE_MANAGER_EXPENSE_REJECT,
    payload: payload.payload,
    URL: URLS.FINANCE_MANAGER_EXPENSE_REJECT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function financeManagerHoldAction(payload) {
  return {
    type: API_CONSTANTS.FINANCE_MANAGER_EXPENSE_HOLD,
    payload: payload.payload,
    URL: URLS.FINANCE_MANAGER_EXPENSE_HOLD_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function financeManagerApproveAction(payload) {
  return {
    type: API_CONSTANTS.FINANCE_MANAGER_EXPENSE_APPROVE,
    payload: payload.payload,
    URL: URLS.FINANCE_MANAGER_EXPENSE_APPROVE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function addAccountByFinanceManagerAction(payload) {
  return {
    type: API_CONSTANTS.ACCOUNT_ADD_BY_FINANCE_MANAGER,
    payload,
    URL: URLS.ADD_ACCOUNT_BY_FINANCE_MANAGER_URL,
    contentType: contentType.json,
  };
}

function CreateRoleAction(payload) {
  return {
    type: API_CONSTANTS.CREATE_ROLE,
    URL: URLS.ROLE_COMMON_URL,
    payload,
    contentType: contentType.json,
  };
}

function updateRoleAction(payload) {
  return {
    type: API_CONSTANTS.UPDATE_ROLE,
    URL: URLS.ROLE_COMMON_URL + payload.role_id + "/",
    payload: payload.payload,
    contentType: contentType.json,
  };
}

function getRoleListAction() {
  return {
    type: API_CONSTANTS.GET_ROLE_LIST_ACTION,
    URL: URLS.ROLE_COMMON_URL,
    contentType: contentType.json,
  };
}

function setStoreFeildFalse() {
  return {
    type: API_CONSTANTS.SET_STORE_VALUE_FALSE,
  };
}

function deleteRoleAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_ROLE,
    URL: URLS.ROLE_COMMON_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function setDeleteRoleSuccessFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_ROLE_SUCCESS_FALSE,
  };
}
function setUpdateRoleSuccessFalse(payload) {
  return {
    type: API_CONSTANTS.SET_UPDATE_ROLE_FALSE,
  };
}

function getUserRolePermissions(payload) {
  return {
    type: API_CONSTANTS.GET_USER_PERMISSIONS_HEADERS_AND_LIST,
    URLS: {
      headersURL: payload.headersURL,
      permissionsURL: payload.permissionsURL,
    },
    contentType: contentType.json,
  };
}

function addEmployeeAccountNoAction(payload) {
  return {
    type: API_CONSTANTS.GET_EMPLOYEE_ACCOUNT_NO,
    URL: URLS.GET_EMPLOYEE_ACCOUNTNO_URL + payload.employee_id + "/",
    payload: payload.payload,
    contentType: contentType.json,
  };
}
function deleteExpenseItemSetupAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE_ITEM_SETUP,
    URL: URLS.EXPENSE_ITEM_SETUP_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function setDeleteExpenseItemSetupFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_EXPENSE_ITEM_SETUP_SUCCESS_FALSE,
  };
}

function deleteExpenseTypeAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE_TYPE,
    URL: URLS.EXPENSE_TYPE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function deleteCompanyListAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE_TYPE,
    URL: URLS.DELETE_COMPANY_LIST_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function getDropdownFinanceManager(payload) {
  return {
    type: API_CONSTANTS.GET_FINANCE_MANAGER_LIST,
    payload,
    URL: URLS.GET_FINANCE_MANAGER_LIST_URL,
    contentType: contentType.json,
  };
}

function setDeleteExpenseTypeFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_EXPENSE_TYPE_SUCCESS_FALSE,
  };
}

function deleteUserAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_USER,
    URL: URLS.DELETE_USER_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function setDeleteUserFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_USER_SUCCESS_FALSE,
  };
}
function deleteExternalAccountCodeAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_USER,
    URL: URLS.EXTERNAL_ACCOUNT_CODE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}

function setDeleteExternalAccountCodeFalse(payload) {
  return {
    type: API_CONSTANTS.SET_DELETE_USER_SUCCESS_FALSE,
  };
}

function exportExpenseTypeAction(payload) {
  console.log("EXPORT_BUTTON", payload);
  return {
    type: API_CONSTANTS.EXPORT_EXPENSE_TYPE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function exportExpenseItemSetupAction(payload) {
  console.log("EXPORT_BUTTON", payload);
  return {
    type: API_CONSTANTS.EXPORT_EXPENSE_ITEM_SETUP,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function exportExternalAccountCodeAction(payload) {
  console.log("EXPORT_BUTTON", payload);
  return {
    type: API_CONSTANTS.EXPORT_EXTERNAL_ACCOUNT_CODE,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function exportUserAction(payload) {
  console.log("EXPORT_BUTTON", payload);
  return {
    type: API_CONSTANTS.EXPORT_USER,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function exportFinanceMangerListAction(payload) {
  console.log("EXPORT_BUTTON", payload);
  return {
    type: API_CONSTANTS.EXPORT_FINANCE_MANAGER_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function exportCategorylistAction(payload) {
  return {
    type: API_CONSTANTS.EXPORT_CATEGORY_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function exportItemizationListAction(payload) {
  return {
    type: API_CONSTANTS.EXPORT_EXPENSE_ITEMIZATION_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function exportExpenseListAction(payload) {
  return {
    type: API_CONSTANTS.EXPORT_EXPENSE_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}
function exportExpenseApprovedAction(payload) {
  return {
    type: API_CONSTANTS.EXPORT_EXPENSEAPPROVED_LIST,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

function ownExpenseDraftAction(payload) {
  return {
    type: API_CONSTANTS.OWN_EXPENSE_DRAFT_LIST,
    payload,
    URL: URLS.OWN_EXPENSE_DRAFT_URL,
    contentType: contentType.json,
  };
}

function ownExpenseRejectAction(payload) {
  return {
    type: API_CONSTANTS.OWN_EXPENSE_REJECT_LIST,
    payload,
    URL: URLS.OWN_EXPENSE_REJECT_URL,
    contentType: contentType.json,
  };
}
function ownExpenseHoldAction(data) {
  return {
    type: API_CONSTANTS.OWN_EXPENSE_HOLD_LIST,
    payload: data,
    URL: URLS.OWN_EXPENSE_HOLD_URL,
    contentType: contentType.json,
  };
}

function deleteExpenseitemizationAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSEITEMIZAION_PANEL,
    URL: URLS.ITEMIZATION_SUBMIT_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function deleteAccountingcodeAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_ACCOUNTINGCODE_PANEL,
    URL: URLS.GET_ACCOUNTING_CODE_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function deleteExpensepanelAction(payload) {
  return {
    type: API_CONSTANTS.DELETE_EXPENSE_PANEL,
    URL: URLS.UPDATE_EXPENSE_PANEL_URL + payload.id + "/",
    contentType: contentType.json,
  };
}
function managercardapprovelAction(payload) {
  return {
    type: API_CONSTANTS.MANAGER_CARD_APPROVED_LIST,
    payload,
    URL: URLS.MANAGER_CARD_APPROVED_LIST_URL,
    contentType: contentType.json,
  };
}
function managercardRejectAction(payload) {
  return {
    type: API_CONSTANTS.MANAGER_CARD_REJECT_LIST,
    payload,
    URL: URLS.MANAGER_CARD_REJECT_LIST_URL,
    contentType: contentType.json,
  };
}
function managercardHoldAction(payload) {
  return {
    type: API_CONSTANTS.MANAGER_CARD_HOLD_LIST,
    payload,
    URL: URLS.MANAGER_CARD_HOLD_LIST_URL,
    contentType: contentType.json,
  };
}
function ownExpenseApproveAction(payload) {
  return {
    type: API_CONSTANTS.OWN_EXPENSE_APPROVE_LIST,
    payload,
    URL: URLS.OWN_EXPENSE_APPROVE_URL,
    contentType: contentType.json,
  };
}

function exportCompanyPanelAction(payload) {
  return {
    type: API_CONSTANTS.EXPORT_COMPANY_PANEL,
    payload: payload.payload,
    URL: payload.URL,
    contentType: contentType.json,
  };
}

export {
  addReport,
  updateReportAction,
  deleteReportAction,
  setDeleteReportFalse,

  addCategoryAction,
  getCategoryPanelAction,
  updateCategorypanle,
  deleteCategorypanelAction,


  addCompanyPolicy,
  getCompanyPolicy,
  updateCompanyPolicy,
  deleteCompanyPolicy,

  addMileage,
  getMileage,
  updateMileage,
  deleteMileage,

  applyCard,
  getCard,
  updateCard,
  deleteCard,
// ===========================================================
  userLogin,
  userRegister,
  addExpenseItemSetup,
  getAccountingCodeAction,
  addExpenseTypeSetup,
 
  addExternalAccountCodeAction,
  addUserAction,
  getRoleAction,
  getManagerListAction,
  addRoleAction,
  Accountingcodesubmit,
  Getexpensetypelist,
  getItemListonItemization,
  EXpenseItemizationsubmit,
  addExpense,
 
  updateProfileuser,
  getExpenseTypePanelAction,
  getExternalAccountCodePanelAction,
  aboutUs,
  aboutUsPage,
  contactUsPage,
  contactUs,
  changePassword,
  getCompanyList,
  updateCompanyList,
  getExpenseItemSetupPanelAction,
  addUserPanelAction,
  getPanelItemization,
  getaccountingcodePanelAction,

  getexpensePanelListAction,
  applyCardAction,
  searchExpenseTypeAction,
  searchExternalAccountCodeAction,
  updateExpenseItemSetup,
  updateExpenseTypeAction,
  updateUserAction,
  updateExternalAccountCodeAction,
  updateAccountingcodepanelAction,
 
  updateexpenseitemizationpanel,
  updateexpensepanel,
  expensetableTrueSubmit,
  expenseApprovedmanager,
  expenseRejectmanager,
  expenseHoldmanager,
  getapprovedExpensepanelAction,
  exportaccountingcode,
  getFinanceManagerExpenseListAction,
  financeManagerRejectAction,
  financeManagerHoldAction,
  financeManagerApproveAction,
  addAccountByFinanceManagerAction,
  getRoleListAction,
  setStoreFeildFalse,
  deleteRoleAction,
  setDeleteRoleSuccessFalse,
  setUpdateRoleSuccessFalse,
  CreateRoleAction,
  updateRoleAction,
  getUserRolePermissions,
  addEmployeeAccountNoAction,
  deleteExpenseItemSetupAction,
  setDeleteExpenseItemSetupFalse,
  deleteExpenseTypeAction,
  setDeleteExpenseTypeFalse,
  deleteUserAction,
  setDeleteUserFalse,
  deleteExternalAccountCodeAction,
  getReportList,
  setDeleteExternalAccountCodeFalse,
  exportExpenseTypeAction,
  exportExpenseItemSetupAction,
  exportExternalAccountCodeAction,
  exportUserAction,
  exportFinanceMangerListAction,
  getDropdownFinanceManager,
  exportCategorylistAction,
  exportItemizationListAction,
  exportExpenseListAction,
  exportExpenseApprovedAction,
  ownExpenseDraftAction,
  ownExpenseRejectAction,
  ownExpenseHoldAction,
 
  deleteExpenseitemizationAction,
  deleteAccountingcodeAction,
  deleteExpensepanelAction,
  managercardapprovelAction,
  managercardRejectAction,
  managercardHoldAction,
  deleteCompanyListAction,
  ownExpenseApproveAction,
  exportCompanyPanelAction,
};
