// import React from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import PrivateRoute from "../Screens/Login/PrivateRoute";
// import Card from "../../_components/screens/Card";
// import Addexpense from "../../_components/screens/Addexpense";
// import ExpensePanel from "../../_components/panels/ExpensePanel";
// import ExpenseApprovals from "../../_components/panels/ExpenseApprovals";
// // import ReimbursmentRecord from "../../_components/panels/ReimbursmentRecord";
// import CategoryTypePanel from "../../_components/panels/CategoryTypePanel";
// import Expenseapprovedpanel from "../../_components/panels/Expenseapprovedpanel";
// import ExpenseApprovalManager from "../../_components/panels/ExpenseApprovalManager";
// import CardApproval from "../../_components/panels/CardApproval";
// import ClientProfile from "../../MainPage/Pages/Profile/clientprofile";
// import EmployeeProfile from "../../MainPage/Pages/Profile/employeeprofile";
// import ExpenseReportPanel from "../../_components/panels/ExpenseReportPanel";
// import AllUserPanel from "../../_components/panels/AllUserPanel";
// import Mileage from "../../_components/screens/Mileage";
// import Expenses from "../../_components/screens/Expenses";
// import TravelRequestPannel from "../../_components/panels/TravelRequestPannel";
// import VendorPannel from "../../_components/panels/VendorPannel";
// import ExpensePolicies from "../../_components/panels/ExpensePolicies";
// import Loginpage from "../../initialpage/loginpage";
// import ChangePassword from "../../MainPage/Administration/Settings/changepassword";
// import RolePermisson from "../../MainPage/Administration/Settings/rolespermission";
// import Registrationpage from "../../initialpage/RegistrationPage";
// import ViewReport from "../../_components/panels/ViewReport";
// import ViewReportApproved from "../../_components/panels/ViewReportApproved";




// const Navigates = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<Navigate to="/home/addexpense"></Navigate>}
//         ></Route>

//         <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
//           <Route path="applyforcard" element={<Card></Card>}></Route>
//           <Route path="/home/viewReport/:id" element={<ViewReport />} />
//           <Route path="/home/viewReportApproved/:id" element={<ViewReportApproved/>}></Route>
//           {/* <Route path="/home/ReimbursmentRecord/" element={<ReimbursmentRecord/>}></Route> */}
         
//           <Route path="addexpense" element={<Addexpense></Addexpense>}></Route>
        
//           <Route
//             path="expensepanel"
//             element={<ExpensePanel></ExpensePanel>}
//           ></Route>
//           <Route
//             path="expensecategorypanel"
//             element={<CategoryTypePanel></CategoryTypePanel>}
//           ></Route>
//           <Route
//             path="expenseapproval"
//             element={<Expenseapprovedpanel></Expenseapprovedpanel>}
//           ></Route>
//           <Route
//             path="expenseapprovalbyfinancemanager"
//             element={<ExpenseApprovalManager></ExpenseApprovalManager>}
//           ></Route>
//           <Route
//             path="client-profile"
//             element={<ClientProfile></ClientProfile>}
//           ></Route>
//           <Route
//             path="employee-profile"
//             element={<EmployeeProfile></EmployeeProfile>}
//           ></Route>
//           <Route
//             path="Reports"
//             element={<ExpenseReportPanel></ExpenseReportPanel>}
//           ></Route>
//           <Route
//             path="ExpenseApprovals"
//             element={<ExpenseApprovals></ExpenseApprovals>}
//           ></Route>
//           {/* <Route
//             path="ReimbursmentRecord"
//             element={<ReimbursmentRecord></ReimbursmentRecord>}
//           ></Route> */}
//             <Route
//             path="alluser"
//             element={<AllUserPanel></AllUserPanel>}
//           ></Route>
//           <Route
//             path="cardapproval"
//             element={<CardApproval></CardApproval>}
//           ></Route>
//           <Route
//             path="ExpensePolicies"
//             element={<ExpensePolicies></ExpensePolicies>}
//           ></Route>
//           <Route path="mileage" element={<Mileage></Mileage>}></Route>
//           <Route path="expenses" element={<Expenses></Expenses>}></Route>
      
           
//           <Route
//             path="TravelRequestPannel"
//             element={<TravelRequestPannel></TravelRequestPannel>}
//           ></Route>
//           <Route
//             path="VendorPannel"
//             element={<VendorPannel></VendorPannel>}
//           ></Route>
//           <Route
//             path="changepassword"
//             element={<ChangePassword></ChangePassword>}
//           ></Route>
//           <Route
//             path="rolespermission"
//             element={<RolePermisson></RolePermisson>}
//           ></Route>
//         </Route>
//         <Route path="/login" element={<Loginpage></Loginpage>}></Route>
//         <Route
//           path="/register"
//           element={<Registrationpage></Registrationpage>}
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Navigates;
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
import TravelRequestPannel from "../../_components/panels/TravelRequestPannel";
import VendorPannel from "../../_components/panels/VendorPannel";
import ExpensePolicies from "../../_components/panels/ExpensePolicies";
import Loginpage from "../../initialpage/loginpage";
import ChangePassword from "../../MainPage/Administration/Settings/changepassword";
import RolePermisson from "../../MainPage/Administration/Settings/rolespermission";
import Registrationpage from "../../initialpage/RegistrationPage";
import ViewReport from "../../_components/panels/ViewReport";
import Employeeslist from "../../MainPage/Employees/Employees/employeeslist";
import Addemployees from "../../MainPage/Employees/Employees/addemployee"; 
import Certification from "../../MainPage/Employees/Employees/certification";
import Educationform from "../../MainPage/Employees/Employees/educationform";
import Experience from "../../MainPage/Employees/Employees/experience";
import Salary from "../../MainPage/Employees/Employees/salary";
import UserRegistrationSetting from "../../MainPage/Employees/Employees/userRegistrationSetting";
import UserRegistration from "../../MainPage/Employees/Employees/userRegistration";
import PersonalInformation from "../../MainPage/Employees/Employees/PersonalInformation";
import SelfProfile from "../../MainPage/Pages/Profile/selfprofile";
import SelfProfileHead from "../../MainPage/Pages/Profile/selfprofilehead";
import ExpenseApprovals from "../../_components/panels/ExpenseApprovals";
import ViewReportApproved from "../../_components/panels/ViewReportApproved";



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
          <Route path="/home/viewReport/:id" element={<ViewReport />} />
          <Route path="/home/viewReportApproved/:id" element={<ViewReportApproved/>}></Route>
          <Route path="addexpense" element={<Addexpense></Addexpense>}></Route>
          <Route path="addemployee" element={<Addemployees></Addemployees>}></Route>
          <Route path="certification" element={<Certification></Certification>}></Route>
          <Route path="educationform" element={<Educationform></Educationform>}></Route>
          <Route path="experience" element={<Experience></Experience>}></Route>
          <Route path="salary" element={<Salary></Salary>}></Route>
          <Route path="userRegistrationSetting" element={<UserRegistrationSetting></UserRegistrationSetting>}></Route>
          <Route path="userRegistration" element={<UserRegistration></UserRegistration>}></Route>
          <Route path="PersonalInformation" element={<PersonalInformation></PersonalInformation>}></Route>
          <Route path="selfProfile" element={<SelfProfile></SelfProfile>}></Route>
          <Route path="selfprofilehead" element={<SelfProfileHead></SelfProfileHead>}></Route>




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
            path="ExpenseApprovals"
            element={<ExpenseApprovals></ExpenseApprovals>}
          ></Route>
          

            <Route
            path="employeeslist"
            element={<Employeeslist></Employeeslist>}
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
          {/* <Route
            path="ReimbursmentRecord"
            element={<ReimbursmentRecord></ReimbursmentRecord>}
          ></Route> */}
          <Route
            path="TravelRequestPannel"
            element={<TravelRequestPannel></TravelRequestPannel>}
          ></Route>
          <Route
            path="VendorPannel"
            element={<VendorPannel></VendorPannel>}
          ></Route>
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
        <Route
          path="/register"
          element={<Registrationpage></Registrationpage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigates;
