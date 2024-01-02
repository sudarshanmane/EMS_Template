import React from "react";
import { getUser } from "../../../utils/sessionStorage";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../../DefaultLayout";

const PrivateRoute = () => {
  const auth = getUser();
  return auth ? (
    <DefaultLayout></DefaultLayout>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
};

export default PrivateRoute;
