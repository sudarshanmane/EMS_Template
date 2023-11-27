import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Screens/Login/Login";
import PrivateRoute from "../Screens/Login/PrivateRoute";
import Page from "../Screens/Page";
import Expenseitemization from "../Screens/Dashboard/SubMenu/Expenseitemization";
import ExpenseItemSetup from "../Screens/Dashboard/SubMenu/ExpenseItemSetup";
import Register from "../Screens/Login/Register";
import Addcategory from "../Screens/Dashboard/SubMenu/Addcategory";
import AddAccountCode from "../Screens/Dashboard/SubMenu/AddAccountCode";
import CodeAccountGroup from "../Screens/Dashboard/SubMenu/CodeAccountGroup";
import Roleadd from "../Screens/Dashboard/SubMenu/Roleadd";
import AccountPeriodAdd from "../Screens/Dashboard/SubMenu/AccountPriodAdd";
import Expensetypes from "../Screens/Dashboard/SubMenu/Expensetypes";
import Users from "../Screens/Dashboard/SubMenu/Users";
import ExpenseItemSetupPanel from "../Panels/ExpenseItemSetupPanel";
import CategoryTypePanel from "../Panels/CategoryTypePanel";
import ExternalAccountPanel from "../Panels/ExternalAccountPanel";
import AddExternalAccountCode from "../Screens/Dashboard/SubMenu/AddExternalAccountCode";
import ExpenseReport from "../Screens/Dashboard/SubMenu/ExpenseReport";
import AccountCodePanel from "../Panels/AccountCodePanel";
import AccountingCodeGroupPanel from "../Panels/AccountingCodeGroupPanel";
import ExpenseItemizationPanel from "../Panels/ExpenseItemizationPanel";
import ExpensePanel from "../Panels/ExpensePanel";
import ExpenseTypePanel from "../Panels/ExpenseTypePanel";
import UserPanel from "../Panels/UserPanel";
import Addexpense from "../Screens/Dashboard/SubMenu/Addexpense";
import ProfileForm from "../Screens/Dashboard/SubMenu/ProfileForm";
import ChangePasswordForm from "../Screens/Dashboard/SubMenu/ChangePasswordForm";
import Card from "../Screens/Dashboard/SubMenu/Card";
import AboutUs from "../Screens/Dashboard/SubMenu/AboutUs";
import ContactUs from "../Screens/Dashboard/SubMenu/ContactUs";
import Reports from "../Screens/Dashboard/SubMenu/Reports";
import CompanyPanel from "../Panels/CompanyPanel";
import Expenseapprovedpanel from "../Panels/Expenseapprovedpanel";
import ExpenseApprovalManager from "../Panels/ExpenseApprovalManager";
import TableExpense from "../Screens/Dashboard/SubMenu/Table/TableExpense";
import ReportPanel from "../Panels/ReportPanel";
import Company from "../Screens/Dashboard/SubMenu/Company";
import CardApprovedlist from "../Panels/CardApprovedlist";
import CardRjectList from "../Panels/CardRjectList";
import CardHoldList from "../Panels/CardholdList";
import CardCount from "../Screens/Dashboard/SubMenu/CardCount";
import OwnExpenseApprovedPanel from "../Panels/OwnExpenseApprovedPanel";
import OwnExpenseRejectedPanel from "../Panels/OwnExpenseRejectedPanel";
import OwnExpenseHoldPanel from "../Panels/OwnExpenseHoldPanel";
import OwnExpenseDraftPanel from "../Panels/OwnExpenseDraftPanel";
import AboutUsPage from "../Screens/Dashboard/SubMenu/AboutUsPage";
import ContactUsPage from "../Screens/Dashboard/SubMenu/ContactUsPage";

const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home/dashboard"></Navigate>}
        ></Route>

        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="addusers" element={<Users></Users>}></Route>
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
          <Route path="addrole" element={<Roleadd></Roleadd>}></Route>
          <Route
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
        <Route path="addrole" element={<Roleadd></Roleadd>}></Route>
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
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
