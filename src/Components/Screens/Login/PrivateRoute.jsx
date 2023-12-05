import React from "react";
import { getUser } from "../../../utils/sessionStorage";
import { Navigate } from "react-router-dom";
import AppLayout from "../../AppLayout/AppLayout";
import DefaultLayout from "../../DefaultLayout";

const PrivateRoute = () => {
  const auth = getUser();
  return auth ? (
    <DefaultLayout></DefaultLayout>
  ) : (
    <Navigate to={"/app/login"}></Navigate>
  );
};

export default PrivateRoute;
