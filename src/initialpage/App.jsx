import { Navigate, Route } from "react-router-dom";
import LoginPage from "./loginpage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotpassword";
import OTP from "./otp";
import LockScreen from "./lockscreen";

import DefaultLayout from "./Sidebar/DefaultLayout";
import Progressbar from "../_components/progressbar/progressbar";

const App = () => {
  return (
    <>
      <Progressbar></Progressbar>
    </>
  );
};

export default App;
