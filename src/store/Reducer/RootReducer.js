import { API_CONSTANTS } from "../../Globals/APIConstants";

const initialState = {
  loding: false,
  username: "",
  profile_picture: null,
  firstname: "",
  email: "",
  mobile: "",
  changePasswordError: null,
  expenseDeletedResult: null,
  deletecategoryResult: null,
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

    case API_CONSTANTS.CHANGE_PASSWORD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loding: false,
        changepassword: action.result,
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

    case API_CONSTANTS.UPDATE_SELF_LEAVE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_SELF_LEAVE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateselfleave: action.result,
      };

    case API_CONSTANTS.GET_CURRENT_ROLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_CURRENT_ROLE_SUCCESS:
      return {
        ...state,
        loding: false,
        getcurrentrole: action.result,
      };

    case API_CONSTANTS.GET_CURRENT_USER:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        getcurrentuser: action.result,
      };

    case API_CONSTANTS.GET_USER_SETTING:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_USER_SETTING_SUCCESS:
      return {
        ...state,
        loding: false,
        getusersetting: action.result,
      };

    case API_CONSTANTS.GET_CERTIFICATE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_CERTIFICATE_SUCCESS:
      return {
        ...state,
        loding: false,
        getcertificate: action.result,
      };

    case API_CONSTANTS.UPDATE_CERTIFICATE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_CERTIFICATE_SUCCESS:
      return {
        ...state,
        loding: false,
        updatecertificate: action.result,
      };

    case API_CONSTANTS.GET_EDUCATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EDUCATION_SUCCESS:
      return {
        ...state,
        loding: false,
        geteducation: action.result,
      };

    case API_CONSTANTS.UPDATE_EDUCATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EDUCATION_SUCCESS:
      return {
        ...state,
        loding: false,
        updateeducation: action.result,
      };

    case API_CONSTANTS.GET_EXPERIENCE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loding: false,
        getexperience: action.result,
      };

    case API_CONSTANTS.UPDATE_EXPERIENCE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateexperience: action.result,
      };

    case API_CONSTANTS.GET_DOCUMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        getdocument: action.result,
      };

    case API_CONSTANTS.UPDATE_DOCUMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        updatedocument: action.result,
      };

    case API_CONSTANTS.ADD_DOCUMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_DOCUMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        adddocument: action.result,
      };

    case API_CONSTANTS.REMOVE_DOCUMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.REMOVE_DOCUMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        removedocument: action.result,
      };

    case API_CONSTANTS.GET_PERSONAL_INFORMATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_PERSONAL_INFORMATION_SUCCESS:
      return {
        ...state,
        loding: false,
        getpersonalinfo: action.result,
      };

    case API_CONSTANTS.UPDATE_PERSONAL_INFORMATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_PERSONAL_INFORMATION_SUCCESS:
      return {
        ...state,
        loding: false,
        updatepersonalinfo: action.result,
      };

    case API_CONSTANTS.UPDATE_USER_SETTING:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_USER_SETTING_SUCCESS:
      return {
        ...state,
        loding: false,
        updateusersetting: action.result,
      };

    case API_CONSTANTS.GET_USER_ATTENDANCE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_USER_ATTENDANCE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getuserattendance: action.result,
      };

    case API_CONSTANTS.GET_USER_ATTENDANCE_DYNAMIC_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_USER_ATTENDANCE_DYNAMIC_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getuserattendancedynamic: action.result,
      };

    case API_CONSTANTS.GET_LEAVES_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_LEAVES_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getleavelist: action.result,
      };

    case API_CONSTANTS.GET_SELF_LEAVES_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_SELF_LEAVES_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getSelfleavelist: action.result,
      };

    case API_CONSTANTS.GET_DYNAMIC_LEAVES_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_DYNAMIC_LEAVES_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getDynamicleavelist: action.result,
      };

    case API_CONSTANTS.GET_DYNAMIC_SELF_LEAVES_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_DYNAMIC_SELF_LEAVES_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getDynamicSelfleavelist: action.result,
      };

    case API_CONSTANTS.GET_STAFF_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_STAFF_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getstafflist: action.result,
      };

    case API_CONSTANTS.GET_DEPARTMENT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_DEPARTMENT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getdepartment: action.result,
      };

    case API_CONSTANTS.GET_DESIGNATION_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_DESIGNATION_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getdesignation: action.result,
      };

    case API_CONSTANTS.GET_SHIFT_POLICY_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_SHIFT_POLICY_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        shiftpolicy: action.result,
      };

    case API_CONSTANTS.GET_WEEK_OFF_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_WEEK_OFF_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        weekoff: action.result,
      };

    case API_CONSTANTS.GET_ALL_DROPDOWN_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_ALL_DROPDOWN_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getalldropdown: action.result,
      };

    case API_CONSTANTS.GET_BRANCH_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_BRANCH_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getbranchlist: action.result,
      };

    case API_CONSTANTS.GET_EMPLOYMENT_TYPE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EMPLOYMENT_TYPE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getemploymenttype: action.result,
      };

    case API_CONSTANTS.GET_USERROLE_PERMISSION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_USERROLE_PERMISSION_SUCCESS:
      return {
        ...state,
        loding: false,
        getuserrolepermission: action.result,
      };

    case API_CONSTANTS.GET_EDUCATION_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EDUCATION_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        geteducationlist: action.result,
      };

    case API_CONSTANTS.ADD_SALARY:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_SALARY_SUCCESS:
      return {
        ...state,
        loding: false,
        addsalary: action.result,
      };

    case API_CONSTANTS.ADD_CERTIFICATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_CERTIFICATION_SUCCESS:
      return {
        ...state,
        loding: false,
        addcertification: action.result,
      };

    case API_CONSTANTS.ADD_PERSONAL_INFORMATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_PERSONAL_INFORMATION_SUCCESS:
      return {
        ...state,
        loding: false,
        addpersonalinformation: action.result,
      };

    case API_CONSTANTS.ADD_USER_SETTING:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_USER_SETTING_SUCCESS:
      return {
        ...state,
        loding: false,
        addusersetting: action.result,
      };

    case API_CONSTANTS.ADD_EDUCATION:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EDUCATION_SUCCESS:
      return {
        ...state,
        loding: false,
        addeducation: action.result,
      };

    case API_CONSTANTS.ADD_EXPERIENCE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loding: false,
        addexperience: action.result,
      };

    case API_CONSTANTS.SUBMIT_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.SUBMIT_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        submitreport: action.result,
      };

    case API_CONSTANTS.SUBMIT_REPORT_SUCCESS_FALSE: {
      return {
        ...state,
        loding: false,
        submitreport: false,
      };
    }

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

    case API_CONSTANTS.GET_SUBMITTED_REPORT_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_SUBMITTED_REPORT_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getsubmittedreportlist: action.result,
      };

    case API_CONSTANTS.GET_EXPENSE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_EXPENSE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getexpenselist: action.result,
      };

    case API_CONSTANTS.GET_REJECTED_EXPENSE_LIST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_REJECTED_EXPENSE_LIST_SUCCESS:
      return {
        ...state,
        loding: false,
        getrejectedexpenselist: action.result,
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

    case API_CONSTANTS.GET_APPROVED_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_APPROVED_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        getapproved: action.result,
      };

    case API_CONSTANTS.GET_REJECTED_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_REJECTED_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        getrejected: action.result,
      };

    case API_CONSTANTS.GET_REIMBURSED_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_REIMBURSED_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        getreimbursed: action.result,
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

    case API_CONSTANTS.ADD_REIMBURSMENT_RECORD:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_REIMBURSMENT_RECORD_SUCCESS:
      return {
        ...state,
        loding: false,
        addreimbursmentresult: action.result,
      };

    case API_CONSTANTS.ADD_SELECTED_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.ADD_SELECTED_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        addSelectedReportSuccess: action.result,
      };

    case API_CONSTANTS.REJECT_REPORT_BY_ACCOUNT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.REJECT_REPORT_BY_ACCOUNT_SUCCESS:
      return {
        ...state,
        loding: false,
        rejectReportAccountSuccess: action.result,
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

    case "RESET_DELETED_RESULT_SELECTOR":
      return {
        ...state,
        deletecategoryResult: null,
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

    case API_CONSTANTS.FETCH_REPORT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.FETCH_REPORT_SUCCESS:
      return {
        ...state,
        loding: false,
        fetchReportSuccess: action.result,
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

    case API_CONSTANTS.VIEW_VENDOR:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.VIEW_VENDOR_SUCCESS:
      return {
        ...state,
        loding: false,
        vendorDetails: action.result,
      };

    case API_CONSTANTS.GET_VENDOR_PAYMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_VENDOR_PAYMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        getVendorPaymentResult: action.result,
      };

    case API_CONSTANTS.CREATE_VENDOR_PAYMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.CREATE_VENDOR_PAYMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        createVendorPayment: action.result,
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

    case API_CONSTANTS.DELETE_VENDOR_TABLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.DELETE_VENDOR_TABLE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteVendorTableSuccess: action.result,
      };

    case API_CONSTANTS.UPDATE_VENDOR_TABLE:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_VENDOR_TABLE_SUCCESS:
      return {
        ...state,
        loding: false,
        updateVendorTableResult: action.result,
      };
    case API_CONSTANTS.UPDATE_VENDOR_PAYMENT:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.UPDATE_VENDOR_PAYMENT_SUCCESS:
      return {
        ...state,
        loding: false,
        updateVendorPaymentResult: action.result,
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

    case API_CONSTANTS.GET_TRAVEL:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_TRAVEL_SUCCESS:
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

    case API_CONSTANTS.SUBMIT_TRAVEL_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.SUBMIT_TRAVEL_REQUEST_SUCCESS:
      return {
        ...state,
        loding: false,
        submitTravelRequestResult: action.result,
      };

    case API_CONSTANTS.GET_TRAVEL_REQUEST_APPROVALS:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_TRAVEL_REQUEST_APPROVALS_SUCCESS:
      return {
        ...state,
        loding: false,
        getTravelApprovalSuccess: action.result,
      };

    case API_CONSTANTS.ADD_ALL_USER_SUCCESS:
      return {
        ...state,
        loding: false,
        addAllUserresult: action.result,
      };

    case API_CONSTANTS.REJECT_TRAVEL_REQUEST_APPROVALS:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.REJECT_TRAVEL_REQUEST_APPROVALS_SUCCESS:
      return {
        ...state,
        loding: false,
        rejectTravelApprovalsSuccess: action.result,
      };

    case API_CONSTANTS.APPROVE_TRAVEL_REQUEST_APPROVALS:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.APPROVE_TRAVEL_REQUEST_APPROVALS_SUCCESS:
      return {
        ...state,
        loding: false,
        approveTravelApprovalsSuccess: action.result,
      };

    case API_CONSTANTS.GET_APPROVE_TRAVEL_REQUEST_APPROVALS:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_APPROVE_TRAVEL_REQUEST_APPROVALS_SUCCESS:
      return {
        ...state,
        loding: false,
        getApproveSuccess: action.result,
      };

    case API_CONSTANTS.GET_REJECT_TRAVEL_REQUEST_APPROVALS:
      return {
        ...state,
        loding: true,
      };

    case API_CONSTANTS.GET_REJECT_TRAVEL_REQUEST_APPROVALS_SUCCESS:
      return {
        ...state,
        loding: false,
        getRejectSuccess: action.result,
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

    case API_CONSTANTS.EXPORT_COMPANY_PANEL_SUCCESS:
      return {
        ...state,
        loding: false,
        exportcompanyResult: action.result,
      };

    case API_CONSTANTS.ADD_BULK_EXPENSE_REPORT: {
      return {
        ...state,
        loding: true,
      };
    }

    case API_CONSTANTS.ADD_BULK_EXPENSE_REPORT_SUCCESS: {
      return {
        ...state,
        loding: false,
        addExpenseReportResult: action.result,
      };
    }

    case API_CONSTANTS.SET_ADD_BULK_EXPENSE_FALSE: {
      return {
        ...state,
        addExpenseReportResult: false,
      };
    }

    case API_CONSTANTS.GET_DISTANCE_FOR_TOTAL: {
      return {
        ...state,
      };
    }

    case API_CONSTANTS.GET_DISTANCE_FOR_TOTAL_SUCCESS: {
      return {
        ...state,
        mileageDistanceTraveled: action.result,
      };
    }

    case API_CONSTANTS.GET_CATEGORY_LIST_BULK_EXPENSE: {
      return {
        ...state,
        loding: true,
      };
    }

    case API_CONSTANTS.GET_CATEGORY_LIST_BULK_EXPENSE_SUCCESS: {
      return {
        ...state,
        loding: false,
        addBulkExpenseCategoryList: action.result,
      };
    }

    case API_CONSTANTS.POST_MILEAGE_DETAILS: {
      return {
        ...state,
        loding: true,
      };
    }

    case API_CONSTANTS.POST_MILEAGE_DETAILS_SUCCESS: {
      return {
        ...state,
        loding: false,
        postMileageResult: action.result,
      };
    }

    case API_CONSTANTS.POST_MILEAGE_DETAILS_RESULT_FALSE: {
      return {
        ...state,
        loding: false,
        postMileageResult: false,
      };
    }

    case API_CONSTANTS.DELETE_EXPENSE: {
      return {
        ...state,
        loding: true,
      };
    }

    case API_CONSTANTS.DELETE_EXPENSE_SUCCESS: {
      return {
        ...state,
        loding: false,
        expenseDeletedResult: action.result,
      };
    }

    case "RESET_DELETED_RESULT_SELECTOR":
      return {
        ...state,
        expenseDeletedResult: null,
      };

    case API_CONSTANTS.UPDATE_EXPENSE: {
      return {
        ...state,
        loding: true,
      };
    }

    case API_CONSTANTS.UPDATE_EXPENSE_SUCCESS: {
      return {
        ...state,
        loding: false,
        expenseUpdatingResult: action.result,
      };
    }

    case API_CONSTANTS.SET_EXPENSE_UPDATE_RESULT_FALSE: {
      return {
        ...state,
        expenseUpdatingResult: false,
      };
    }

    default:
      return state;
  }
};
