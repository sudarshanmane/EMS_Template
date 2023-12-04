import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../initialpage/App";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/plugins/fontawesome/css/fontawesome.min.css";
import "../assets/plugins/fontawesome/css/all.min.css";
import "../assets/css/line-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/js/layout";
import "../assets/js/greedynav";
import "../assets/css/select2.min.css";
import "../assets/css/material.css";
import "../assets/js/app.js";
import "../assets/js/select2.min.js";
// import "../assets/js/bootstrap-datetimepicker.min.js";
import "../assets/js/multiselect.min.js";
import "../assets/js/bootstrap.bundle.min.js";
import "../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
// import "../assets/css/bootstrap-datetimepicker.min.css";
import "../assets/css/style.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/users";

import Navigates from "../Components/Navigates/Navigates.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const MainApp = () => {
  return (
    <Provider store={store}>
      <Navigates></Navigates>
    </Provider>
  );
};

export default MainApp;
