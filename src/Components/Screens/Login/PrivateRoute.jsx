import React from "react";
import { getUser } from "../../../utils/sessionStorage";
import { Navigate } from "react-router-dom";
import AppLayout from "../../AppLayout";

const PrivateRoute = () => {
  const auth = getUser();
  return auth ? <AppLayout></AppLayout> : <Navigate to={"/sidebar"}></Navigate>;
};

export default PrivateRoute;
