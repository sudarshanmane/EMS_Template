import { API_CONSTANTS } from "../../Globals/APIConstants";

const initialState = {
  loding: false,
  username: "",
  profile_picture: null,
  firstname: "",
  email: "",
  mobile: "",
  changePasswordError: null,
};

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CONSTANTS.USER_LOGIN:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loding: false,
        loginDetails: action.result,
      };

    case API_CONSTANTS.USER_REGISTER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loding: false,
        registerDetails: action.result,
      };

    case API_CONSTANTS.ADD_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        addreportresult: action.result,
      };

    case API_CONSTANTS.GET_REPORT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_REPORT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getreportlist: action.result,
      };
      
      case API_CONSTANTS.GET_APPROVED_REPORT_LIST:
        return {
          ...state,
          loding: true,
        };
  
      case API_CONSTANTS.GET_APPROVED_REPORT_LIST_SUCCESS:
        return {
          ...state,
          loding: false,
          getapprovedreportlist: action.result,
        };

    case API_CONSTANTS.UPDATE_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        updateReportResult: action.result,
      };

    case API_CONSTANTS.DELETE_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteReportSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_REPORT_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteReportSuccess: false,
      };

      case API_CONSTANTS.VIEW_REPORT:
        return {
          ...state,
          loding: true,
        };
  
      case API_CONSTANTS.VIEW_REPORT_SUCCESS:
        return {
          ...state,
          loding: false,
          reportDetails: action.result,
        };

        case API_CONSTANTS.GET_REIMBURSMENT_RECORD:
          return {
            ...state,
            loding: true,
          };
    
        case API_CONSTANTS.GET_REIMBURSMENT_RECORD_SUCCESS:
          return {
            ...state,
            loding: false,
            reimbursementRecordSuccess: action.result,
          };

        
      case API_CONSTANTS.APPROVE_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.APPROVE_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        approveReportSuccess: action.result,
      };

    case API_CONSTANTS.REJECT_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.REJECT_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        rejectReportSuccess: action.result,
      };

      case API_CONSTANTS.APPROVE_EXPENSE:
        return {
          ...state,
          loding: true,
        };
  
      case API_CONSTANTS.APPROVE_EXPENSE_SUCCESS:
        return {
          ...state,
          loding: false,
          approveExpenseSuccess: action.result,
        };
  
      case API_CONSTANTS.REJECT_EXPENSE:
        return {
          ...state,
          loding: true,
        };
  
      case API_CONSTANTS.REJECT_EXPENSE_SUCCESS:
        return {
          ...state,
          loding: false,
          rejectExpenseSuccess: action.result,
        };


    case API_CONSTANTS.ADD_CATEGORY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        categoryresult: action.result,
      };

    case API_CONSTANTS.GET_CATEGORYLIST_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_CATEGORYLIST_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        panelCategoryResult: action.result,
      };

    case API_CONSTANTS.UPDATE_CATEGORY_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_CATEGORY_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        updatecategortyResult: action.result,
      };

    case API_CONSTANTS.DELETE_CATEGORY_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_CATEGORY_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        deletecategoryResult: action.result,
      };

    case API_CONSTANTS.CREATE_CATEGORY_ITEM:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.CREATE_CATEGORY_ITEM_SUCCESS:
      return {
        ...state,
        loding: false,
        createCategoryItemSuccess: action.result,
      };

    case API_CONSTANTS.ADD_EXPENSE_POLICY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXPENSE_POLICY_SUCCESS:
      return {
        ...state,
        loding: false,
        addexpenseresult: action.result,
      };

    case API_CONSTANTS.GET_EXPENSE_POLICY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSE_POLICY_SUCCESS:
      return {
        ...state,
        loding: false,
        getexpensepolicy: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_POLICY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_POLICY_SUCCESS:
      return {
        ...state,
        loding: false,
        updateExpensepolicyResult: action.result,
      };

    case API_CONSTANTS.DELETE_EXPENSE_POLICY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXPENSE_POLICY_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteExpensepolicySuccess: action.result,
      };

    case API_CONSTANTS.ADD_MILEAGE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_MILEAGE_SUCCESS:
      return {
        ...state,
        loding: false,
        addMileageresult: action.result,
      };

    case API_CONSTANTS.GET_MILEAGE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_MILEAGE_SUCCESS:
      return {
        ...state,
        loding: false,
        getMileageSuccess: action.result,
      };

    case API_CONSTANTS.FETCH_CATEGORY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        fetchCategorySuccess: action.result,
      };

    case API_CONSTANTS.UPDATE_MILEAGE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_MILEAGE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateMileageResult: action.result,
      };

    case API_CONSTANTS.DELETE_MILEAGE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_MILEAGE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteMileageSuccess: action.result,
      };

    case API_CONSTANTS.APPLY_CARD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.APPLY_CARD_SUCCESS:
      return {
        ...state,
        loding: false,
        applyCardresult: action.result,
      };

    case API_CONSTANTS.GET_CARD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_CARD_SUCCESS:
      return {
        ...state,
        loding: false,
        getCardSuccess: action.result,
      };

    case API_CONSTANTS.APPROVE_CARD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.APPROVE_CARD_SUCCESS:
      return {
        ...state,
        loding: false,
        approveCardSuccess: action.result,
      };

    case API_CONSTANTS.REJECT_CARD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.REJECT_CARD_SUCCESS:
      return {
        ...state,
        loding: false,
        rejectCardSuccess: action.result,
      };

    case API_CONSTANTS.CREATE_VENDOR:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.CREATE_VENDOR_SUCCESS:
      return {
        ...state,
        loding: false,
        createVendorSuccess: action.result,
      };

    case API_CONSTANTS.GET_VENDOR:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_VENDOR_SUCCESS:
      return {
        ...state,
        loding: false,
        getVendorSuccess: action.result,
      };

    case API_CONSTANTS.DELETE_VENDOR:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_VENDOR_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteVendorSuccess: action.result,
      };

    case API_CONSTANTS.UPDATE_VENDOR:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_VENDOR_SUCCESS:
      return {
        ...state,
        loding: false,
        updateVendorResult: action.result,
      };

    case API_CONSTANTS.CREATE_TRAVEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.CREATE_TRAVEL_SUCCESS:
      return {
        ...state,
        loding: false,
        createTravelSuccess: action.result,
      };

    case API_CONSTANTS.GATE_TRAVEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GATE_TRAVEL_SUCCESS:
      return {
        ...state,
        loding: false,
        getTravelSuccess: action.result,
      };

    case API_CONSTANTS.DELETE_TRAVEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_TRAVEL_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteTravelSuccess: action.result,
      };

    case API_CONSTANTS.UPDATE_TRAVEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_TRAVEL_SUCCESS:
      return {
        ...state,
        loding: false,
        updateTravelResult: action.result,
      };
    case API_CONSTANTS.ADD_ALL_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_ALL_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        addAllUserresult: action.result,
      };

    case API_CONSTANTS.GET_ALL_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        getAllUserSuccess: action.result,
      };

    // ====================================================================

    case API_CONSTANTS.ADD_EXPENSE_ITEM_SETUP:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXPENSE_ITEM_SETUP_SUCCESS:
      return {
        ...state,
        loding: false,
        expenseItemsetupResult: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_ITEM_SETUP:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_ITEM_SETUP_SUCCESS:
      return {
        ...state,
        loding: false,
        updateExpenseItemSetupResult: action.result,
      };

    case API_CONSTANTS.GET_ACCOUNTING_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ACCOUNTING_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        accountingCodeResult: action.result,
      };

    case API_CONSTANTS.ADD_EXPENSE_TYPE_SETUP:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXPENSE_TYPE_SETUP_SUCCESS:
      return {
        ...state,
        loding: false,
        expenseTypeSetupResult: action.result,
      };
    case API_CONSTANTS.UPDATE_USER_PROFILE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateprofileresult: action.result,
      };

    case API_CONSTANTS.ADD_EXTERNAL_ACCOUNT_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXTERNAL_ACCOUNT_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        externalAccountCodeResult: action.result,
      };

    case API_CONSTANTS.ADD_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        addUserResult: action.result,
      };

    case API_CONSTANTS.ACCOUNTING_CODE_SUBMIT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ACCOUNTING_CODE_SUBMIT_SUCCESS:
      return {
        ...state,
        loding: false,
        accountiongcodesubmitresult: action.result,
      };
    case API_CONSTANTS.GET_EXPENSE_TYPE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSE_TYPE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getexpenselistresult: action.result,
      };
    case API_CONSTANTS.GET_ITEMNAME_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ITEMNAME_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getitemlistresult: action.result,
      };
    case API_CONSTANTS.EXPENSE_ITEMIZATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_ITEMIZATION_SUCCESS:
      return {
        ...state,
        loding: false,
        itemizationresult: action.result,
      };
    case API_CONSTANTS.ADD_EXPENSE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        loding: false,
        addexpenseresult: action.result,
      };

    case API_CONSTANTS.GET_ROLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        getRoleResult: action.result,
      };

    case API_CONSTANTS.GET_MANAGER_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_MANAGER_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getManagerListResult: action.result,
      };
    case API_CONSTANTS.ADD_ROLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        addRoleResult: action.result,
      };

    case API_CONSTANTS.GET_EXPENSE_TYPE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSE_TYPE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        getExpenseTypePanelResult: action.result,
      };

    case API_CONSTANTS.UPDATE_ABOUTUS:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.UPDATE_ABOUTUS_SUCCESS:
      return {
        ...state,
        loding: false,
        aboutus: action.result,
      };

    case API_CONSTANTS.GET_ABOUTUS:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.GET_ABOUTUS_SUCCESS:
      return {
        ...state,
        loding: false,
        aboutUsPage: action.result,
      };

    case API_CONSTANTS.GET_EXTERNAL_ACCOUNT_CODE_PANEL:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.GET_EXTERNAL_ACCOUNT_CODE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        getExternalAccountCodeResult: action.result,
      };

    case API_CONSTANTS.UPDATE_CONTACTUS:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.UPDATE_CONTACTUS_SUCCESS:
      return {
        ...state,
        loding: false,
        contactus: action.result,
      };

    case API_CONSTANTS.GET_CONTACTUS:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.GET_CONTACTUS_SUCCESS:
      return {
        ...state,
        loding: false,
        contactUsPage: action.result,
      };

    case API_CONSTANTS.UPDATE_PASSWORD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loding: false,
        changepassword: action.result,
      };

    case API_CONSTANTS.GET_COMPANY_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_COMPANY_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getcompanylist: action.result,
      };
    case API_CONSTANTS.UPDATE_COMPANY_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_COMPANY_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        updatecompanylist: action.result,
      };

    case API_CONSTANTS.GET_USER_PANEL:
      return {
        ...state,
        loding: true,
      };
    case API_CONSTANTS.GET_USER_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        addUserPanelResult: action.result,
      };

    case API_CONSTANTS.GET_EXPENSE_ITEM_SETUP_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSE_ITEM_SETUP_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        getExpenseItemPanelResult: action.result,
      };

    case API_CONSTANTS.GET_ITEMIZATION_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ITEMIZATION_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        panelitemizationResult: action.result,
      };
    case API_CONSTANTS.GET_ACCOUNTINGCODE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ACCOUNTINGCODE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        panelaccountingcodeResult: action.result,
      };

    case API_CONSTANTS.GET_EXPENSELIST_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSELIST_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        panelExpenseResult: action.result,
      };

    case API_CONSTANTS.APPLY_CARD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.APPLY_CARD_SUCCESS:
      return {
        ...state,
        loding: false,
        applyCardResult: action.result,
      };

    case API_CONSTANTS.SEARCH_EXPENSE_TYPE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.SEARCH_EXPENSE_TYPE_SUCCESS:
      return {
        ...state,
        loding: false,
        searchExpenseTypeResult: action.result,
      };
    case API_CONSTANTS.SEARCH_EXTERNAL_ACCOUNT_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.SEARCH_EXTERNAL_ACCOUNT_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        searchExternalAccountCodeResult: action.result,
      };
    case API_CONSTANTS.UPDATE_ACCOUNTINGCODE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_ACCOUNTINGCODE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        updateAccountingResult: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSEITEMIZATION_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_APROVED_MANAGER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_APROVED_MANAGER_SUCCESS:
      return {
        ...state,
        loding: false,
        approvedexpensemanagerResult: action.result,
      };

    case API_CONSTANTS.EXPENSE_HOLD_MANAGER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_HOLD_SUCCESS:
      return {
        ...state,
        loding: false,
        holdexpensemanagerResult: action.result,
      };
    case API_CONSTANTS.EXPENSE_APPROVED_PPANEL_MANGER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_APPROVED_PPANEL_MANGER_SUCCESS:
      return {
        ...state,
        loading: false,
        expenseapprovedpanelResult: action.result, // Update with fetched data
      };

    case API_CONSTANTS.EXPORT_BUTTON_ACCOUNTINGCODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_BUTTON_ACCOUNTINGCODE_SUCCESS:
      return {
        ...state,
        loding: false,
        exportaccountingcodeResult: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSEITEMIZATION_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        updateitemizationResult: action.result,
      };
    case API_CONSTANTS.UPDATE_EXTERNAL_ACCOUNT_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXTERNAL_ACCOUNT_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateExternalAccountCodeResult: action.result,
      };

    case API_CONSTANTS.EXPENSE_REJECT_MANGER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSE_REJECT_MANGER_SUCCESS:
      return {
        ...state,
        loding: false,
        rejectexpensemanagerResult: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        updateexpenseResult: action.result,
      };
    case API_CONSTANTS.EXPENSETABLE_SUBMIT_API:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPENSETABLE_SUBMIT_API_SUCCESS:
      return {
        ...state,
        loding: false,
        submittrueexpenseResult: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_TYPE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXPENSE_TYPE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateExpenseTypeResult: action.result,
      };
    case API_CONSTANTS.UPDATE_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        updateUserResult: action.result,
      };

    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        financemanagerexpenselistResult: action.result,
      };
    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_REJECT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_REJECT_SUCCESS:
      return {
        ...state,
        loding: false,
        financemanagerrejectResult: action.result,
      };
    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_HOLD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_HOLD_SUCCESS:
      return {
        ...state,
        loding: false,
        financemanagerholdResult: action.result,
      };
    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_APPROVE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FINANCE_MANAGER_EXPENSE_APPROVE_SUCCESS:
      return {
        ...state,
        loding: false,
        financemanagerapproveResult: action.result,
      };

    case API_CONSTANTS.ACCOUNT_ADD_BY_FINANCE_MANAGER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ACCOUNT_ADD_BY_FINANCE_MANAGER_SUCCESS:
      return {
        ...state,
        loding: false,
        accountAddByFinanceManagerResult: action.result,
      };

    case API_CONSTANTS.GET_USER_PERMISSIONS_HEADERS_AND_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_USER_PERMISSIONS_HEADERS_AND_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        addRolePermissionHeadersAndList: action.result,
      };

    case API_CONSTANTS.CREATE_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        createRoleResponse: action.result,
      };

    case API_CONSTANTS.SET_STORE_VALUE_FALSE:
      return {
        ...state,
        createRoleResponse: false,
      };

    case API_CONSTANTS.GET_ROLE_LIST_ACTION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ROLE_LIST_ACTION_SUCCESS:
      return {
        ...state,
        loding: false,
        roleListResponse: action.result,
      };

    case API_CONSTANTS.UPDATE_ROLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateRoleSuccess: action.result,
      };

    case API_CONSTANTS.SET_UPDATE_ROLE_FALSE:
      return {
        ...state,
        loding: false,
        updateRoleSuccess: false,
      };

    case API_CONSTANTS.DELETE_ROLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteRoleSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_ROLE_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteRoleSuccess: false,
      };
    case API_CONSTANTS.GET_EMPLOYEE_ACCOUNT_NO:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EMPLOYEE_ACCOUNT_NO_SUCCESS:
      return {
        ...state,
        loding: false,
        addEmployeeAccountNumberResult: false,
      };

    case API_CONSTANTS.DELETE_EXPENSE_ITEM_SETUP:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXPENSE_ITEM_SETUP_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteExpenseItemSetupSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_EXPENSE_ITEM_SETUP_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteExpenseItemSetupSuccess: false,
      };

    case API_CONSTANTS.DELETE_EXPENSE_TYPE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXPENSE_TYPE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteExpenseTypeSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_EXPENSE_TYPE_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteExpenseTypeSuccess: false,
      };

    case API_CONSTANTS.DELETE_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteUserSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_USER_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteUserSuccess: false,
      };

    case API_CONSTANTS.DELETE_EXTERNAL_ACCOUNT_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXTERNAL_ACCOUNT_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteExternalAccountCodeSuccess: action.result,
      };

    case API_CONSTANTS.SET_DELETE_EXTERNAL_ACCOUNT_CODE_SUCCESS_FALSE:
      return {
        ...state,
        loding: false,
        deleteExternalAccountCodeSuccess: false,
      };
    case API_CONSTANTS.EXPORT_EXPENSE_TYPE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXPENSE_TYPE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportExpenseTypeResult: action.result,
      };
    case API_CONSTANTS.EXPORT_EXPENSE_ITEM_SETUP:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXPENSE_ITEM_SETUP_SUCCESS:
      return {
        ...state,
        loding: false,
        exportExpenseItemSetupResult: action.result,
      };
    case API_CONSTANTS.EXPORT_EXTERNAL_ACCOUNT_CODE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXTERNAL_ACCOUNT_CODE_SUCCESS:
      return {
        ...state,
        loding: false,
        exportExternalAccountResult: action.result,
      };

    case API_CONSTANTS.EXPORT_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        exportUserResult: action.result,
      };

    case API_CONSTANTS.EXPORT_FINANCE_MANAGER_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_FINANCE_MANAGER_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportFinanceManagerResult: action.result,
      };

    case API_CONSTANTS.GET_FINANCE_MANAGER_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_FINANCE_MANAGER_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        financemdropdownResult: action.result,
      };
    case API_CONSTANTS.EXPORT_CATEGORY_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportcategoryResult: action.result,
      };
    case API_CONSTANTS.EXPORT_EXPENSE_ITEMIZATION_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXPENSE_ITEMIZATION_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportitemizationResult: action.result,
      };
    case API_CONSTANTS.EXPORT_EXPENSE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXPENSE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportexpenselistResult: action.result,
      };
    case API_CONSTANTS.EXPORT_EXPENSEAPPROVED_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_EXPENSEAPPROVED_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        exportexpenseapprovedlistResult: action.result,
      };

    case API_CONSTANTS.OWN_EXPENSE_DRAFT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.OWN_EXPENSE_DRAFT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        ownExpenseDraftListResult: action.result,
      };

    case API_CONSTANTS.OWN_EXPENSE_REJECT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.OWN_EXPENSE_REJECT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        ownExpenseRejectListResult: action.result,
      };

    case API_CONSTANTS.OWN_EXPENSE_HOLD_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.OWN_EXPENSE_HOLD_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        ownExpenseHoldListResult: action.result,
      };

    case API_CONSTANTS.DELETE_EXPENSEITEMIZAION_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXPENSEITEMIZAION_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteexpenseitemizationResult: action.result,
      };
    case API_CONSTANTS.DELETE_ACCOUNTINGCODE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_ACCOUNTINGCODE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteaccountingcodeResult: action.result,
      };
    case API_CONSTANTS.DELETE_EXPENSE_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_EXPENSE_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteexpensepanelResult: action.result,
      };
    case API_CONSTANTS.MANAGER_CARD_APPROVED_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.MANAGER_CARD_APPROVED_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        managerapprovelResult: action.result,
      };
    case API_CONSTANTS.MANAGER_CARD_REJECT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.MANAGER_CARD_REJECT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        managerrejectResult: action.result,
      };
    case API_CONSTANTS.MANAGER_CARD_HOLD_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.MANAGER_CARD_HOLD_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        managerholdResult: action.result,
      };

    case API_CONSTANTS.OWN_EXPENSE_APPROVE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.OWN_EXPENSE_APPROVE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        ownExpenseApproveResult: action.result,
      };
    case API_CONSTANTS.EXPORT_COMPANY_PANEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.EXPORT_COMPANY_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        exportcompanyResult: action.result,
      };

    default:
      return state;
  }
};
