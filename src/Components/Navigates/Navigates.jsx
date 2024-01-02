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
import Mileage from "../../_components/screens/Mileage";
import Expenses from "../../_components/screens/Expenses";
import ReimbursmentRecord from "../../_components/screens/ReimbursmentRecord";
import TravelRequestPannel from "../../_components/panels/TravelRequestPannel";
import Travels from "../../_components/screens/Travels";
import VendorPannel from "../../_components/panels/VendorPannel";
import Vendors from "../../_components/screens/Vendors";
import ExpensePolicies from "../../_components/panels/ExpensePolicies";
import Loginpage from "../../initialpage/loginpage";
import ChangePassword from "../../MainPage/Administration/Settings/changepassword";
import RolePermisson from "../../MainPage/Administration/Settings/rolespermission";

const Navigates = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home/addexpense"></Navigate>}
        ></Route>

        <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
          <Route path="applyforcard" element={<Card></Card>}></Route>
          <Route path="addexpense" element={<Addexpense></Addexpense>}></Route>
          <Route
            path="expensepanel"
            element={<ExpensePanel></ExpensePanel>}
          ></Route>
          <Route
            path="expensecategorypanel"
            element={<CategoryTypePanel></CategoryTypePanel>}
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
            path="client-profile"
            element={<ClientProfile></ClientProfile>}
          ></Route>
          <Route
            path="employee-profile"
            element={<EmployeeProfile></EmployeeProfile>}
          ></Route>
          <Route
            path="Reports"
            element={<ExpenseReportPanel></ExpenseReportPanel>}
          ></Route>
          <Route
            path="cardapproval"
            element={<CardApproval></CardApproval>}
          ></Route>
          <Route
            path="ExpensePolicies"
            element={<ExpensePolicies></ExpensePolicies>}
          ></Route>
          <Route path="mileage" element={<Mileage></Mileage>}></Route>
          <Route path="expenses" element={<Expenses></Expenses>}></Route>
          <Route
            path="ReimbursmentRecord"
            element={<ReimbursmentRecord></ReimbursmentRecord>}
          ></Route>
          <Route
            path="TravelRequestPannel"
            element={<TravelRequestPannel></TravelRequestPannel>}
          ></Route>
          <Route path="Travels" element={<Travels></Travels>}></Route>
          <Route
            path="VendorPannel"
            element={<VendorPannel></VendorPannel>}
          ></Route>
          <Route path="Vendors" element={<Vendors></Vendors>}></Route>
          <Route
            path="changepassword"
            element={<ChangePassword></ChangePassword>}
          ></Route>
          <Route
            path="rolespermission"
            element={<RolePermisson></RolePermisson>}
          ></Route>
        </Route>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
