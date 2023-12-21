import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../Screens/Login/PrivateRoute";
import Card from "../../_components/screens/Card";
import Addexpense from "../../_components/screens/Addexpense";
import ExpensePanel from "../../_components/panels/ExpensePanel";
import CategoryTypePanel from "../../_components/panels/CategoryTypePanel";
import Expenseapprovedpanel from "../../_components/panels/Expenseapprovedpanel";
import ExpenseApprovalManager from "../../_components/panels/ExpenseApprovalManager";
import CardApproval from "../../_components/panels/CardApproval";
import ClientProfile from "../../MainPage/Pages/Profile/clientprofile";
import EmployeeProfile from "../../MainPage/Pages/Profile/employeeprofile";
import ExpenseReportPanel from "../../_components/panels/ExpenseReportPanel";
import AddReport from "../../_components/screens/AddReport";
import CompanyPolicies from "../../_components/panels/CompanyPolicies";
import Mileage from "../../_components/screens/Mileage";
import Expenses from "../../_components/screens/Expenses";
const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/role-add"></Navigate>}></Route>
        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="applyforcard" element={<Card></Card>}></Route>
          <Route path="addexpense" element={<Addexpense></Addexpense>}></Route>
          <Route path="expensepanel" element={<ExpensePanel></ExpensePanel>}></Route>
          <Route path="expensecategorypanel" element={<CategoryTypePanel></CategoryTypePanel>}></Route>
          <Route path="expenseapproval" element={<Expenseapprovedpanel></Expenseapprovedpanel>} ></Route>
          <Route path="expenseapprovalbyfinancemanager" element={<ExpenseApprovalManager></ExpenseApprovalManager>} ></Route>
          <Route path="client-profile" element={<ClientProfile></ClientProfile>}></Route>
          <Route path="employee-profile" element={<EmployeeProfile></EmployeeProfile>}></Route>
          <Route path="Reports" element={<ExpenseReportPanel></ExpenseReportPanel>}></Route>
          <Route path="cardapproval" element={<CardApproval></CardApproval>}></Route>
          <Route path="addreport" element={<AddReport></AddReport>}></Route>
          <Route path="companyPolicies" element={<CompanyPolicies></CompanyPolicies>}></Route>
          <Route path="mileage" element={<Mileage></Mileage>}></Route>
          <Route path="expenses" element={<Expenses></Expenses>}></Route>
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;