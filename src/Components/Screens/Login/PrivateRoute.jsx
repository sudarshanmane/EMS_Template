import React from "react";
import { getUser } from "../../../utils/sessionStorage";
import { Navigate } from "react-router-dom";
import AppLayout from "../../AppLayout/AppLayout";
import DefaultLayout from "../../DefaultLayout";

const PrivateRoute = () => {
  const auth = getUser();
  return <DefaultLayout></DefaultLayout>;
  //  auth ? (

  // ) : (
  //   <Navigate to={"/"}></Navigate>
  // );
};

export default PrivateRoute;
