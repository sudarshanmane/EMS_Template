import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../Screens/Login/PrivateRoute";
import Roleadd from "../Screens/RoleAdd/Roleadd";
import Adduser from "../../_components/modelbox/Adduser";
import Reports from "../../_components/screens/Reports";
import Card from "../../_components/screens/Card";
import Addexpense from "../../_components/screens/Addexpense";
import Expenseitemization from "../../_components/screens/ExpenseItemization";
import ExpenseItemSetup from "../../_components/screens/ExpenseItemSetup";
import AddExternalAccountCode from "../../_components/screens/AddExternalAccountCode";
import ProfileForm from "../../_components/screens/ProfileForm";
import ChangePasswordForm from "../../_components/screens/ChangePasswordForm";
import CompanyPanel from "../../_components/panels/CompanyPanel";
import ExpensePanel from "../../_components/panels/ExpensePanel";
import CategoryTypePanel from "../../_components/panels/CategoryTypePanel";
import ExpenseTypePanel from "../../_components/panels/ExpenseTypePanel";
import Expenseapprovedpanel from "../../_components/panels/Expenseapprovedpanel";
import ExpenseApprovalManager from "../../_components/panels/ExpenseApprovalManager";
import ExpenseItemizationPanel from "../../_components/panels/ExpenseItemizationPanel";
import ExpenseItemSetupPanel from "../../_components/panels/ExpenseItemSetupPanel";
import ExternalAccountPanel from "../../_components/panels/ExternalAccountPanel";
import ClientProfile from "../../MainPage/Pages/Profile/clientprofile";
import EmployeeProfile from "../../MainPage/Pages/Profile/employeeprofile";
import ExpenseReport from "../../MainPage/HR/Reports/expensereport";

const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/role-add"></Navigate>}></Route>
        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="role-add" element={<Roleadd></Roleadd>}></Route>
          <Route path="add-user" element={<Adduser></Adduser>}></Route>
          <Route path="reports" element={<Reports></Reports>}></Route>
          <Route path="companyPanel" element={<CompanyPanel></CompanyPanel>}></Route>
          <Route path="applyforcard" element={<Card></Card>}></Route>
          <Route path="addexpense" element={<Addexpense></Addexpense>}></Route>
          <Route path="expensepanel" element={<ExpensePanel></ExpensePanel>}></Route>
          <Route path="expensecategorypanel" element={<CategoryTypePanel></CategoryTypePanel>}></Route>
          <Route path="expensetypepanel" element={<ExpenseTypePanel></ExpenseTypePanel>} ></Route>
          <Route path="expenseapproval" element={<Expenseapprovedpanel></Expenseapprovedpanel>} ></Route>
          <Route path="expenseapprovalbyfinancemanager" element={<ExpenseApprovalManager></ExpenseApprovalManager>} ></Route>
          <Route path="expenseitemization" element={<Expenseitemization></Expenseitemization>} ></Route>
          <Route path="expenseitemizationpanel" element={<ExpenseItemizationPanel></ExpenseItemizationPanel>} ></Route>
          <Route path="expenseitemsetuppanel" element={<ExpenseItemSetupPanel></ExpenseItemSetupPanel>} ></Route>
          <Route path="expenseitemsetup" element={<ExpenseItemSetup></ExpenseItemSetup>} ></Route>
          <Route path="externalaccountcode" element={<AddExternalAccountCode></AddExternalAccountCode>} ></Route> 
          <Route path="externalaccountcodepanel" element={<ExternalAccountPanel></ExternalAccountPanel>} ></Route>
          <Route path="ProfileForm" element={<ProfileForm></ProfileForm>} ></Route>
          <Route path="ChangePasswordForm" element={<ChangePasswordForm></ChangePasswordForm>}></Route>
          <Route path="client-profile" element={<ClientProfile></ClientProfile>}></Route>
          <Route path="employee-profile" element={<EmployeeProfile></EmployeeProfile>}></Route>
          <Route path="expense-reports" element={<ExpenseReport></ExpenseReport>}></Route>
        </Route>

        {/* <Route path="addusers" element={<Users></Users>}></Route> 
         <Route path="company" element={<Company></Company>}></Route>
          <Route
            path="expenseitemization"
            element={<Expenseitemization></Expenseitemization>}
          ></Route>
          <Route path="userpanel" element={<UserPanel></UserPanel>}></Route>

          <Route path="applyforcard" element={<Card></Card>}></Route>
          <Route
            path="accountingcode"
            element={<AddAccountCode></AddAccountCode>}
          ></Route>
          <Route
            path="expensecategorypanel"
            element={<CategoryTypePanel></CategoryTypePanel>}
          ></Route>
          <Route
            path="expenseitemsetuppanel"
            element={<ExpenseItemSetupPanel></ExpenseItemSetupPanel>}
          ></Route>
          <Route
            path="externalaccountcode"
            element={<AddExternalAccountCode></AddExternalAccountCode>}
          ></Route>
          <Route
            path="codegroup"
            element={<CodeAccountGroup></CodeAccountGroup>}
          ></Route>

          <Route path="dashboard" element={<ExpenseReport />}></Route>
          <Route path="page" element={<Page></Page>} />
          <Route
            path="expensetypes"
            element={<Expensetypes></Expensetypes>}
          ></Route>

          <Route path="page" element={<Page></Page>} />

          <Route
            path="addcategory"
            element={<Addcategory></Addcategory>}
          ></Route>
          <Route path="userdashboard" element={<CardCount></CardCount>}></Route>
          <Route
            path="reportpanel"
            element={<ReportPanel></ReportPanel>}
          ></Route>
          <Route path="addexpense" element={<Addexpense></Addexpense>}></Route> 
          {/* <Route
            path="AccountPeriodAdd"
            element={<AccountPeriodAdd></AccountPeriodAdd>}
          ></Route>
          <Route path="table" element={<TableExpense></TableExpense>}></Route>
          <Route
            path="accountingcodepanel"
            element={<AccountCodePanel></AccountCodePanel>}
          ></Route>
          <Route
            path="accountingcodegrouppanel"
            element={<AccountingCodeGroupPanel></AccountingCodeGroupPanel>}
          ></Route>
          <Route
            path="externalaccountcodepanel"
            element={<ExternalAccountPanel></ExternalAccountPanel>}
          ></Route>
          <Route
            path="expenseitemizationpanel"
            element={<ExpenseItemizationPanel></ExpenseItemizationPanel>}
          ></Route>
          <Route
            path="expensepanel"
            element={<ExpensePanel></ExpensePanel>}
          ></Route>
          <Route
            path="expenseapproval"
            element={<Expenseapprovedpanel></Expenseapprovedpanel>}
          ></Route>
          <Route
            path="expenseapprovalbyfinancemanager"
            element={<ExpenseApprovalManager></ExpenseApprovalManager>}
          ></Route>
          <Route
            path="expensetypepanel"
            element={<ExpenseTypePanel></ExpenseTypePanel>}
          ></Route>
          <Route
            path="expenseitemsetup"
            element={<ExpenseItemSetup></ExpenseItemSetup>}
          ></Route>
          <Route
            path="ProfileForm"
            element={<ProfileForm></ProfileForm>}
          ></Route>
          <Route
            path="ChangePasswordForm"
            element={<ChangePasswordForm></ChangePasswordForm>}
          ></Route>
          <Route
            path="companypanel"
            element={<CompanyPanel></CompanyPanel>}
          ></Route>
          <Route
            path="ContactUsPage"
            element={<ContactUsPage></ContactUsPage>}
          ></Route>
          <Route
            path="AboutUsPage"
            element={<AboutUsPage></AboutUsPage>}
          ></Route>
          <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="Reports" element={<Reports></Reports>}></Route>

          <Route
            path="approved-cardlist"
            element={<CardApprovedlist></CardApprovedlist>}
          ></Route>
          <Route
            path="reject-cardlist"
            element={<CardRjectList></CardRjectList>}
          ></Route>
          <Route
            path="hold-cardlist"
            element={<CardHoldList></CardHoldList>}
          ></Route>

          <Route path="userdashboard" element={<CardCount></CardCount>}></Route>
          <Route
            path="ownexpenseapproved-cardlist"
            element={<OwnExpenseApprovedPanel></OwnExpenseApprovedPanel>}
          ></Route>
          <Route
            path="ownexpenserejected-cardlist"
            element={<OwnExpenseRejectedPanel></OwnExpenseRejectedPanel>}
          ></Route>
          <Route
            path="ownexpensehold-cardlist"
            element={<OwnExpenseHoldPanel></OwnExpenseHoldPanel>}
          ></Route>
          <Route
            path="ownexpensedrafted-cardlist"
            element={<OwnExpenseDraftPanel></OwnExpenseDraftPanel>}
          ></Route>
        </Route>

        <Route
          path="expenseitemization"
          element={<Expenseitemization></Expenseitemization>}
        ></Route>

        <Route path="addcategory" element={<Addcategory></Addcategory>}></Route>
        <Route path="addusers" element={<Users></Users>}></Route>
        <Route
          path="expenseitemsetup"
          element={<ExpenseItemSetup></ExpenseItemSetup>}
        ></Route>
        <Route
          path="expensecategorypanel"
          element={<CategoryTypePanel></CategoryTypePanel>}
        ></Route>

        <Route
          path="expenseitemsetuppanel"
          element={<ExpenseItemSetupPanel></ExpenseItemSetupPanel>}
        ></Route>

        <Route
          path="expensetypes"
          element={<Expensetypes></Expensetypes>}
        ></Route>

        <Route
          path="expenseitemization"
          element={<Expenseitemization></Expenseitemization>}
        ></Route>

        <Route
          path="addaccountcode"
          element={<AddAccountCode></AddAccountCode>}
        ></Route>
        <Route
          path="codegroup"
          element={<CodeAccountGroup></CodeAccountGroup>}
        ></Route>
        <Route path="addrole" element={<></>}></Route>
        <Route
          path="AccountPeriodAdd"
          element={<AccountPeriodAdd></AccountPeriodAdd>}
        ></Route>
        <Route path="table" element={<TableExpense></TableExpense>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/approved-cardlist"
          element={<CardApprovedlist></CardApprovedlist>}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
