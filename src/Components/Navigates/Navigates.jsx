import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../Screens/Login/PrivateRoute";
import Roleadd from "../Screens/RoleAdd/Roleadd";
import Adduser from "../../_components/modelbox/Adduser";
// import Reports from "../../_components/screens/Reports";
import Card from "../../_components/screens/Card";
import Addexpense from "../../_components/screens/Addexpense";
import Expenseitemization from "../../_components/screens/ExpenseItemization";
import ExpenseItemSetup from "../../_components/screens/ExpenseItemSetup";
import AddExternalAccountCode from "../../_components/screens/AddExternalAccountCode";
import ProfileForm from "../../_components/screens/ProfileForm";
import ChangePasswordForm from "../../_components/screens/ChangePasswordForm";
import CodeAccountGroup from "../../_components/screens/CodeAccountGroup";
import CompanyPanel from "../../_components/panels/CompanyPanel";
import ExpensePanel from "../../_components/panels/ExpensePanel";
import CategoryTypePanel from "../../_components/panels/CategoryTypePanel";
import ExpenseTypePanel from "../../_components/panels/ExpenseTypePanel";
import Expenseapprovedpanel from "../../_components/panels/Expenseapprovedpanel";
import ExpenseApprovalManager from "../../_components/panels/ExpenseApprovalManager";
import ExpenseItemizationPanel from "../../_components/panels/ExpenseItemizationPanel";
import ExpenseItemSetupPanel from "../../_components/panels/ExpenseItemSetupPanel";
import ExternalAccountPanel from "../../_components/panels/ExternalAccountPanel";
import AccountCodePanel from "../../_components/panels/AccountCodePanel";
import CardApprovedlist from "../../_components/panels/CardApprovedlist";
import CardHoldList from "../../_components/panels/CardholdList";
import CardRejectList from "../../_components/panels/CardRejectList";
import AccountingCodeGroupPanel from "../../_components/panels/AccountingCodeGroupPanel";
import ClientProfile from "../../MainPage/Pages/Profile/clientprofile";
import EmployeeProfile from "../../MainPage/Pages/Profile/employeeprofile";
import ExpenseReportPanel from "../../_components/panels/ExpenseReportPanel";
import UserPanel from "../../_components/panels/UserPanel";
import Users from "../../_components/screens/Users"
import AddReport from "../../_components/screens/AddReport";
// import CompanyPolicies from "../../_components/screens/CompanyPolicies";
import CompanyPolicies from "../../_components/panels/CompanyPolicies";
import Mileage from "../../_components/screens/Mileage";
import Expenses from "../../_components/screens/Expenses";
import ReimbursmentRecord from "../../_components/screens/ReimbursmentRecord";
import TravelRequestPannel from "../../_components/panels/TravelRequestPannel";
import Travels from "../../_components/screens/Travels";
import VendorPannel from "../../_components/panels/VendorPannel";
import Vendors from "../../_components/screens/Vendors";


const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/role-add"></Navigate>}></Route>
        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="role-add" element={<Roleadd></Roleadd>}></Route>
          <Route path="add-user" element={<Adduser></Adduser>}></Route>
          {/* <Route path="reports" element={<Reports></Reports>}></Route> */}
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
          <Route path="Reports" element={<ExpenseReportPanel></ExpenseReportPanel>}></Route>
          <Route path="accountingcodepanel" element={<AccountCodePanel></AccountCodePanel>}></Route>
          <Route path="accountingcodegrouppanel" element={<AccountingCodeGroupPanel></AccountingCodeGroupPanel>}></Route>
          <Route path="codegroup" element={<CodeAccountGroup></CodeAccountGroup>}></Route>
          <Route path="cardapprovedlist" element={<CardApprovedlist></CardApprovedlist>}></Route>
          <Route path="cardholdlist" element={<CardHoldList></CardHoldList>}></Route>
          <Route path="cardrejectlist" element={<CardRejectList></CardRejectList>}></Route>
          <Route path="userpanel" element={<UserPanel></UserPanel>}></Route>
          <Route path="addusers" element={<Users></Users>}></Route>
          <Route path="addreport" element={<AddReport></AddReport>}></Route>
          <Route path="companyPolicies" element={<CompanyPolicies></CompanyPolicies>}></Route>
          <Route path="mileage" element={<Mileage></Mileage>}></Route>
          <Route path="expenses" element={<Expenses></Expenses>}></Route>
          <Route path="ReimbursmentRecord" element={<ReimbursmentRecord></ReimbursmentRecord>}></Route>
          <Route path="TravelRequestPannel" element={<TravelRequestPannel></TravelRequestPannel>}></Route>
          <Route path ="Travels" element={<Travels></Travels>}></Route>
          <Route path="VendorPannel" element={<VendorPannel></VendorPannel>}></Route>
          <Route path ="Vendors" element={<Vendors></Vendors>}></Route>


        </Route>

    
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
